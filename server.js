// Custom Express server for the VPS (replaces the Netlify Functions handler).
// Hosts the Remix SSR build and the platform-required health endpoints.
const path = require("path");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const { createRequestHandler } = require("@remix-run/express");

const BUILD_DIR = path.join(process.cwd(), "build");
const PORT = Number(process.env.PORT || 3000);
const MAX_INFLIGHT = Number(process.env.BAIYUE_MAX_INFLIGHT ?? 32);

// In-flight accounting drives the load-shed signal (platform ADR-0015).
// baiyue runs as a single Node process, so it MUST cap concurrency in-app.
let inflight = 0;

const app = express();
app.disable("x-powered-by");
// Behind the edge Caddy proxy.
app.set("trust proxy", true);
app.use(compression());

// Liveness + load-shed. Declared first so they are never shed and never
// counted toward the in-flight gauge. The edge wires health_uri=/healthz/shed.
app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/healthz/shed", (_req, res) => {
    const saturated = inflight >= MAX_INFLIGHT;
    res.status(saturated ? 503 : 200).json({
        status: saturated ? "shed" : "ok",
        inflight,
        max: MAX_INFLIGHT,
    });
});

// Fingerprinted client bundle — safe to cache hard (immutable filenames).
app.use("/build", express.static("public/build", { immutable: true, maxAge: "1y" }));
// Other static assets (favicons, sitemap.xml, og images, admin demo).
app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

// Count only SSR/app requests toward the in-flight gauge that drives shed.
app.use((_req, res, next) => {
    inflight++;
    let released = false;
    const release = () => {
        if (released) return;
        released = true;
        inflight--;
    };
    res.on("finish", release);
    res.on("close", release);
    next();
});

app.all(
    "*",
    createRequestHandler({
        build: require(BUILD_DIR),
        mode: process.env.NODE_ENV,
    }),
);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console -- server bootstrap line, not app code
    console.log(`baiyue SSR server listening on http://0.0.0.0:${PORT} (max-inflight=${MAX_INFLIGHT})`);
});

# baiyue — VPS deploy (off Netlify → shared box, tenant #4)

Target: `https://baiyue.paynepew.dev`, behind the platform's shared edge Caddy on
`box.paynepew.dev`. Image-pull model (GHCR), no source tree on the box.

## What changed (this branch: `deploy/vps-migration`)

- **`server.js`** — replaced the Netlify Functions handler with a custom Express
  server (`@remix-run/express`) that hosts the Remix SSR build and exposes:
  - `GET /healthz` → 200 liveness
  - `GET /healthz/shed` → 503 when in-flight ≥ `BAIYUE_MAX_INFLIGHT` (default 32), else 200
  - an in-app in-flight cap (required of a single-process tenant, platform ADR-0015)
- **`remix.config.js`** — dropped `serverBuildTarget: "netlify"`; default Node build
  (`build/index.js` CJS + `public/build` assets), `serverModuleFormat: "cjs"`.
- **`package.json`** — removed `@netlify/functions`, `@remix-run/netlify`; added
  `@remix-run/express`, `express`, `compression`, `morgan`. `start` → `node server.js`.
  `engines.node` → `>=18`.
- **`Dockerfile`** — Node 20 LTS multi-stage (build → prune → slim runtime, non-root).
- **`docker-compose.prod.yml`** — `name: baiyue`, joins external `edge` net, `mem_limit`
  + `cpus`, `env_file: .env.prod`, no host ports, container healthcheck.
- **`.github/workflows/deploy.yml`** — CD: build → push GHCR → scp compose → ssh box →
  `compose pull && up` → in-container `/healthz` smoke.
- **`.env.example`**, **`.dockerignore`** added.

## Verification — DONE ✅ (Node 20 container)

1. **Lockfile refreshed** on Node 20; Dockerfile uses `npm ci` (reproducible, lockfile-pinned).
2. **Build + run green**: `docker build` clean (image 396 MB), container healthy,
   `/healthz` + `/healthz/shed` 200, all 5 SSR routes 200 vs real Contentful, 40/40 concurrent.
3. **RAM measured**: ~32 MiB idle / ~66 MiB peak → platform resolved capacity = **"fits"**
   (no 4 GB upgrade); `mem_limit: 256m` kept.

> Build verified on a Node 20 container (dev box runs Node 24 — exactly why the runtime is
> pinned to 20). Safe to merge once the owner box-prereqs below are in place.

## Owner / human steps (secrets — not automatable by the agent)

- Place `/opt/baiyue/.env.prod` (see `.env.example`): `CONTENTFUL_SPACE_ID`,
  `CONTENTFUL_ACCESS_TOKEN` (**rotate the old one**), `REACT_APP_GOOGLEMAP_API_KEY`,
  `PORT=3000`, `NODE_ENV=production`.
- GHCR pull creds on the box (or make the image public).
- Install the CD **deploy SSH public key** on `deploy@box`; add `DEPLOY_SSH_KEY`
  (private) to the repo's GitHub secrets.
- Referrer-restrict the Google Maps key to `baiyue.paynepew.dev` (cost backstop).

## Deferred (intentional, not blocking)

- The Google Maps key is still **hardcoded** in `app/pages/ContactPage/index.tsx`. It is a
  client-side key (inherently public, already in git history), so moving it to env does not
  make it secret — the real control is the Google-side referrer lock above. A proper env
  wiring (root loader → `window.ENV`) is a follow-up, not a security fix.
- `public/admin/` is a non-functional Decap-CMS demo remnant; can be deleted later.

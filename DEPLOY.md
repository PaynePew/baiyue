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

## Verification — PENDING (do before merge to `main`)

1. **Refresh the lockfile**: `npm install` on **Node 20** (regenerates `package-lock.json`
   for the dep swap), then flip the Dockerfile back to `npm ci`.
2. **Build + run locally** (Node 20): `docker build -t baiyue:test . && docker run --rm -p 127.0.0.1:3000:3000 --env-file .env baiyue:test`,
   then `curl localhost:3000/healthz` → 200 and load the site.
3. **Measure RAM**: `docker stats baiyue` under light load → send the measured RSS to the
   platform agent (gates go-live on the tight 2 GB box). Tune `mem_limit` to the real number.

> Build is NOT verified yet — authored on Node 24 (dev box); Remix 1.12 must build on
> Node 20. Do not merge to `main` until step 2 is green (never merge a broken file).

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

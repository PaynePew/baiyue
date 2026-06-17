# syntax=docker/dockerfile:1
# Multi-stage build for the baiyue Remix SSR app.
# Node 20 LTS — NOT 24 (Remix 1.12 is not validated on Node 24).

# ---- build stage ----
FROM node:20-bookworm-slim AS build
WORKDIR /app
# NODE_ENV is intentionally NOT "production" here so devDependencies
# (remix dev, tailwind, postcss) install for the build.
COPY package.json package-lock.json ./
# npm install (not ci) tolerates the lockfile lag from the Netlify->Express
# dependency swap until the lockfile is regenerated. Switch to `npm ci` once
# package-lock.json is refreshed.
RUN npm install --no-audit --no-fund
COPY . .
# tailwind/postcss -> app/styles/app.css, then `remix build` -> build/index.js
RUN npm run build
# slim node_modules down to runtime deps for the final image
RUN npm prune --omit=dev

# ---- runtime stage ----
FROM node:20-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Cap the V8 heap to keep RSS small on the tight 2 GB shared box.
ENV NODE_OPTIONS=--max-old-space-size=256
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/public ./public
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package.json ./package.json
EXPOSE 3000
USER node
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "server.js"]

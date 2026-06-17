/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    // Default Node build target (server -> build/index.js, assets -> public/build).
    // Served by the custom Express server in server.js. No longer Netlify-targeted.
    ignoredRouteFiles: ["**/.*"],
    serverModuleFormat: "cjs",
    future: {
        v2_errorBoundary: true,
    },
};

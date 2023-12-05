const workbox = require("workbox-build");

workbox.generateSW({
  cacheId: "pwa_oscar",
  globDirectory: "./",
  globPatterns: ["**/*.{css,js}"],
  globIgnores: ["**/generator.js", "**/sw.js", "node_modules/**/*"],
  swDest: "./sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:html|htm|xml)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "markup",
        expiration: {
          maxAgeSeconds: 1800,
        },
      },
    },
  ],
});

module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,ico,png,html,js,txt,css,svg,mjs}"
  ],
  "swDest": "build\\sw.js",
  "swSrc": "src\\sw.js",
  "injectionPointRegexp": /(const precacheManifest = )\[\](;)/
};
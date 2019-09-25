importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1/'})

const precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "d3d3be152c949509c580ecf6ab27b03e"
  },
  {
    "url": "favicon.ico",
    "revision": "33d46e7cf3159d286d3129c9b5feab74"
  },
  {
    "url": "icons/icon-128X128.png",
    "revision": "370891210453e2ba069a82c7d633c57f"
  },
  {
    "url": "icons/icon-20X20.png",
    "revision": "49c59ca7ed0af1ec44a4875bf05cd2a2"
  },
  {
    "url": "icons/icon-24X24.png",
    "revision": "10fc0f0c52efd59d5c6a9b9b3a9b4ceb"
  },
  {
    "url": "icons/icon-256X256.png",
    "revision": "ccf9ff55fa730a6b662d2c0b09f8cc10"
  },
  {
    "url": "icons/icon-32X32.png",
    "revision": "fe2e8c39f12b9547434414b430041455"
  },
  {
    "url": "icons/icon-48X48.png",
    "revision": "172a722860064df3029f82c1950ff67a"
  },
  {
    "url": "icons/icon-512X512.png",
    "revision": "781d4a7e926c53518552c6da71245a86"
  },
  {
    "url": "icons/icon-64X64.png",
    "revision": "8f90e85fd2e36ed58ea80cc7f8778afb"
  },
  {
    "url": "index.html",
    "revision": "e9e19835c35105b4b653b2b9142776d3"
  },
  {
    "url": "logo192.png",
    "revision": "581fa1d82b7152e685510b51d48edd3e"
  },
  {
    "url": "logo512.png",
    "revision": "260d57586012b0ed1ae78accc0bf7083"
  },
  {
    "url": "manifest.json",
    "revision": "878f937f50850748058f8e134c123c18"
  },
  {
    "url": "precache-manifest.b95443c7c8c4c5e75235c51a84d92b78.js",
    "revision": "b95443c7c8c4c5e75235c51a84d92b78"
  },
  {
    "url": "robots.txt",
    "revision": "ba9ff57f98bb924e968828bdc78bc7fe"
  },
  {
    "url": "service-worker.js",
    "revision": "fcdd5c258e97f8fa9732f92cfe0c390a"
  },
  {
    "url": "static/css/main.e10d6da1.chunk.css",
    "revision": "ada14f31656c6b96675a3b42d55cdc39"
  },
  {
    "url": "static/js/2.25e785b4.chunk.js",
    "revision": "e627c2fa4c7359c3c1de059c8d30ae51"
  },
  {
    "url": "static/js/main.37e5c906.chunk.js",
    "revision": "2ea3f57d70ea6157c57a263d3f06b746"
  },
  {
    "url": "static/js/runtime-main.f949f7e3.js",
    "revision": "af50ef3d9d6b48be6bfd5880bf2d0427"
  }
];

//workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1/'})

const precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "57da746d524b3020c38795b857c5c487"
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
    "revision": "7abcf1faf0bf0379a671abe2b844c70c"
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
    "revision": "f9f284d034b88afce9ea7f3d67360194"
  },
  {
    "url": "precache-manifest.6e21929fd58abdfcf806cdaa45cbbabd.js",
    "revision": "6e21929fd58abdfcf806cdaa45cbbabd"
  },
  {
    "url": "robots.txt",
    "revision": "ba9ff57f98bb924e968828bdc78bc7fe"
  },
  {
    "url": "service-worker.js",
    "revision": "72065d18eea979cb0ca3fc84eb5d6459"
  },
  {
    "url": "static/css/2.8f78e4b0.chunk.css",
    "revision": "7ebf3efb46ffb935792586f1d1242d60"
  },
  {
    "url": "static/css/main.acd95411.chunk.css",
    "revision": "4452ca363b03dce6be7e5c75a1d93876"
  },
  {
    "url": "static/js/2.eb3893ef.chunk.js",
    "revision": "11132ef3f17201b38cb73a9486b82c50"
  },
  {
    "url": "static/js/main.f0c3bede.chunk.js",
    "revision": "32a6f3e0236898a4a834dcd5e46600c2"
  },
  {
    "url": "static/js/runtime-main.f949f7e3.js",
    "revision": "af50ef3d9d6b48be6bfd5880bf2d0427"
  },
  {
    "url": "static/media/glyphicons-halflings-regular.89889688.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  }
];

//workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
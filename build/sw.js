importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1/'})

const precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "55e99001acc91ed4a5c1a4c7757dc378"
  },
  {
    "url": "favicon.ico",
    "revision": "33d46e7cf3159d286d3129c9b5feab74"
  },
  {
    "url": "favicon.png",
    "revision": "011ca593fb946f76c52e2473c788a439"
  },
  {
    "url": "icons/js-128X128.png",
    "revision": "7b5713ab7e516c945350f3f71954c332"
  },
  {
    "url": "icons/js-16X16.png",
    "revision": "e2d12631e0cc6bfa07ab36a206d605c4"
  },
  {
    "url": "icons/js-24X24.png",
    "revision": "efb69b1b442c00c0f8ad888b29c11e7f"
  },
  {
    "url": "icons/js-256X256.png",
    "revision": "c97fbadb6810ce4100c67a41b1c952a3"
  },
  {
    "url": "icons/js-32X32.png",
    "revision": "98214841582c64353bf2652fc53dc434"
  },
  {
    "url": "icons/js-512X512.png",
    "revision": "e56e37dea453afc79e0a029d0c615488"
  },
  {
    "url": "icons/js-64X64.png",
    "revision": "0706aae676521dd697182050660ed6b7"
  },
  {
    "url": "index.html",
    "revision": "779c3741babfe3c3e1d8ec7086bb12c3"
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
    "revision": "7c6140ff755a8936842b29470cd015f4"
  },
  {
    "url": "precache-manifest.1228291eaeb7e8a24865f67ff66ee0bb.js",
    "revision": "1228291eaeb7e8a24865f67ff66ee0bb"
  },
  {
    "url": "robots.txt",
    "revision": "ba9ff57f98bb924e968828bdc78bc7fe"
  },
  {
    "url": "service-worker.js",
    "revision": "0423e6f84fe9b51d7631fad2a9b99056"
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
    "url": "static/js/main.76f43ee1.chunk.js",
    "revision": "e958ed865757fd8294f2de2552632f73"
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
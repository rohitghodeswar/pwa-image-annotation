importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

//importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({modulePathPrefix: 'workbox-v4.3.1/'})

const precacheManifest = [];

//workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
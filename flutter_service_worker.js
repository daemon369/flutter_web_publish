'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2b532260b835b2fbcf6088c1cde2fdc4",
"/": "2b532260b835b2fbcf6088c1cde2fdc4",
"main.dart.js": "3da03cee5f98f6962ab1dab1eed186e1",
"LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"README.md": "08009c335382091ff320605b8c5a311b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "997465669e8fcf23092b05984e1a82be",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/LICENSE": "920900a0d619033b22c2018b1cfb19c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

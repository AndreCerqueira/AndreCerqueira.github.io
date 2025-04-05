const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/dfea9dafb45db1fc3df255a089a9a879.loader.js",
    "Build/797f55d3c9235ba210a7f6a3687a5b33.framework.js",
    "Build/5e669b62b495692e06aee2db8983f77f.data",
    "Build/9fcd15d582e9018d79e368e8f7c5d68d.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});

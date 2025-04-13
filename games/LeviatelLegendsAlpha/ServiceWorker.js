const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/493585e9dd9c80f164e0db9766a2fa29.loader.js",
    "Build/4e362dcb511406eb38cba3af6a2c2c6b.framework.js",
    "Build/8017e9ac79457dc592460c6fd8b4b2c7.data",
    "Build/6ed9eaf9e7b1e78f7d246f61905d63cc.wasm",
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

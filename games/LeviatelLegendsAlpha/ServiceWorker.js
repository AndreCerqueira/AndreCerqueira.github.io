const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/df6c4637061e087560775b40def13e79.loader.js",
    "Build/4e362dcb511406eb38cba3af6a2c2c6b.framework.js",
    "Build/42d74b7dae3fb672e38d470373b96a5e.data",
    "Build/721b502431be472e71c6a6eb51f3233a.wasm",
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

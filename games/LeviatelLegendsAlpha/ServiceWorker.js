const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/2e5176df4d4190a073212479c79dbdb4.loader.js",
    "Build/5e3737f539080891623c4dc3cb9acaef.framework.js",
    "Build/6a28816879cb4303aeec813fe529cafe.data",
    "Build/52218d20f0e99471b122a17a4f8b4086.wasm",
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

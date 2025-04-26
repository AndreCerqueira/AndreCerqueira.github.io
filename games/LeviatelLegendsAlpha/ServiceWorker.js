const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/fa525c3e658d49cbe347b834a83fe42e.loader.js",
    "Build/5e3737f539080891623c4dc3cb9acaef.framework.js",
    "Build/a9e3eaa1c1bb4ea0f8c7f6284a714784.data",
    "Build/bc52d9bc37a10e6d8ca45a4d6a45e826.wasm",
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

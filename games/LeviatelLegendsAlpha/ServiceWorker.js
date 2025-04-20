const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/f55aa72a74ae954419469327fb29d3dd.loader.js",
    "Build/4e362dcb511406eb38cba3af6a2c2c6b.framework.js",
    "Build/d6c3953c9276d94624cbd567aad7007e.data",
    "Build/671b999d6a663898ec16b3937f2513de.wasm",
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

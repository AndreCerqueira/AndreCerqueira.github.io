const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/d54c1c96404b481f7d98ac77c9d2bf99.loader.js",
    "Build/5e3737f539080891623c4dc3cb9acaef.framework.js",
    "Build/29b1a9b7929aec81e7d5d5ef33ceb373.data",
    "Build/66eaf198e1a1c2023b81c90d94efd872.wasm",
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

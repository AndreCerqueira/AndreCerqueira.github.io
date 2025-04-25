const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/03fd7e31960d5d700bd2f207580b8e7f.loader.js",
    "Build/5e3737f539080891623c4dc3cb9acaef.framework.js",
    "Build/92208a17556996bbbb687e909b243067.data",
    "Build/d34f2f3a658120e7acc4118c9ca0ddc1.wasm",
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

const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/e141d6751d5fbfe7703ed062aba72986.loader.js",
    "Build/f666fbb7d80f773c292e6f3ec229baba.framework.js",
    "Build/9f63d76ec948247a7a19f887f34debf1.data",
    "Build/d247ba4326ac262c4fc4854c675eb1c4.wasm",
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

const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/20ae02b7e3e15ed7a392a43ed663a07f.loader.js",
    "Build/5e3737f539080891623c4dc3cb9acaef.framework.js",
    "Build/08c7e646312e6415a980856533e4f018.data",
    "Build/d91600f042f589f9aa7843b61c3d538d.wasm",
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

const cacheName = "NestGames-Leviatel Legends-1.0.0";
const contentToCache = [
    "Build/042198c865b9ceaec6eda851193d2090.loader.js",
    "Build/1538960ac958c9bd114c7ea2456b8baa.framework.js",
    "Build/2eed46b082e9ed08d76aa2a9ad8ac280.data",
    "Build/3fe0621883c6e71f7ebae2e565955c67.wasm",
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

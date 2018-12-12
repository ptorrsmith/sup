
//obtained from https://github.com/googlecodelabs/your-first-pwapp



let dataCacheName = 'pwaDataCache';
let cacheName = 'pwaPageCache';
let filesToCache = [
  '/',
  '/styles.css',
  '/bundle.js',
  '/app.html',
  'https://unpkg.com/leaflet@1.0.1/dist/leaflet.css'
];

self.addEventListener('install', function (e) {
  // console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (e) {
  // console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          // console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  // console.log('[Service Worker] Fetch', e.request.url);


  var dataUrl = 'https://localhost:3000/data';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function (cache) {
        return fetch(e.request).then(function (response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      }).catch(() => {
        return fetch(e.request);
      })
    );
  }
});
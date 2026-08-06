const CACHE_NAME = 'atk-app-v1';
const assets = [
  'index.html',
  'manifest.json'
];

// Pemasangan Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Menjalankan Aplikasi via Cache untuk Kecepatan
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});

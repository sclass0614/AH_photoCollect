self.addEventListener('install', function(e) {
  console.log('Service Worker 설치됨');
  self.skipWaiting(); // 바로 활성화
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

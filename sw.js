self.addEventListener('install', (event) => {
  // Forces the waiting service worker to become the active service worker
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Allows an active service worker to set itself as the controller for all clients within its scope
  event.waitUntil(clients.claim());
});

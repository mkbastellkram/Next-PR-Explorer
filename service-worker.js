const CACHE='pr-explorer-v1-1';
const ASSETS=['./','./index.html','./style.css','./app.js','./pr-data.js','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{})));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

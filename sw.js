// console.log('service worker inside switch.js')
const cacheName = "app-shell-rsrs";
const Assets = [
    '/',
    './index.html', 
    '/js/app.js', 
    '/js/materialize.min.css', 
    '/css/style.css',
    '/css/materialize.min.css',
    '/img/An0.png',
    '/img/Boy.jpeg', 
    '/img/girl.jpeg',
];
self.addEventListener('install', evt => {
    console.log('service worker has been installed successfully!!')
});

caches.open(cacheName).then(cache => {
    cache.addAll(Assets);
});



//activated 
self.addEventListener('activate', evt => {
    console.log("Service worker activated");
});

self.addEventListener('fetch', evt => {
    console.log(evt);

    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || evt.request;
        })
    );
})
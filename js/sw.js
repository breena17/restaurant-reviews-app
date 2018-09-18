var cacheVersion = 'restaurant-reviews-v13';

const cacheFiles = [
    '/',
    '/restaurant.html',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/data/restaurants.json',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheVersion).then(function(cache) {
            return cache.addAll(cacheFiles);
        })
    );
});
/*
self.addEventListener('fetch', function() {
    console.log('Fetching');
    event.respondWith(fetch(event.request)
        .then(function(response) {
            if(response) return response;
            return fetch(event.request);
        })
    );
});
console.log('aye carumba');
*/
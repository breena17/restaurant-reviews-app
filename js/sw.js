var cacheVersion = 'restaurant-reviews-v15';

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

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
        .then(function(response) {
            if(response) { 
                return response;
            }
            else {
                //if request doesn't exist in cache, fetch and add to cache
                return fetch(event.request)
                .then(function(response) {
                    const cloneResponse = response.clone();
                    caches.open(cacheVersion).then(function(cache) {
                        cache.put(event.request, cloneResponse);
                    })
                    return response;
                })
                .catch(function() {
                    console.log('Error');
                });
            }
        })
    );
});

//https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-4-service-workers/
//helped me debug service worker, array for urls to cache and fetch event
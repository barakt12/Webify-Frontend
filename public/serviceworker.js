const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html', 'offline.html']

// INSTALL
self.addEventListener('install', async (ev) => {
  try {
    await ev.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
    )
  } catch (err) {
    console.log('Failed: ', err)
  }
})

// Listen for requests
self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request).then(() => {
      return fetch(ev.request).catch(() => caches.match('offline.html'))
    })
  )
})

// Activate the SW
self.addEventListener('activate', (ev) => {
  const cacheWhiteList = [CACHE_NAME]

  ev.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})

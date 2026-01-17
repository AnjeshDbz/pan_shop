self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("misra-paan").then(cache => {
      return cache.addAll(["/"]);
    })
  );
});

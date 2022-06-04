if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./serviceworker.js')
    } catch (err) {
      console.log(err)
    }
  })
}

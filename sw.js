self.addEventListener('install', evt=>{
    console.log('evt');
                
});

self.addEventListener('activate', evt =>{
    console.log('evt');
});

self.addEventListener('fetch', evt=>{
    if (!navigator.online){
    	evt.respondWith(new Response('pas dz zamala ya szamamalka'))
    }
    console.log(evt.request.url);
});

butInstall.addEventListener('click', evt=>{
  console.log('👍', 'butInstall-clicked');
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  promptEvent.userChoice.then((result) => {
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });
});

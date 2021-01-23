self.addEventListener('install', evt=>{
    console.log('evt');
                
});

self.addEventListener('activate', evt =>{
    console.log('evt');
});

self.addEventListener('fetch', evt=>{
    if (!navigator.online){
    	evt.respondWith(new Response('Impoooooooosible!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!👍👍👍👍👍👍👍👍👍👍👍👍'))
    }
    console.log(evt.request.url);
});


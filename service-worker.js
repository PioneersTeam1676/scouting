const version = 'v1.1.17';
const filesToCache = [
        "/scout/index.html",
        "/scout/offline.html",
        "/scout/manifest.json",
        "/scout/assets/js/jquery.min.js",
        "/scout/assets/css/bootstrap.min.css",
        "/scout/assets/js/bootstrap.bundle.min.js",
        "/scout/assets/css/ionic.bundle.css",
        "/scout/assets/js/ionic/ionic.esm.js",
        "/scout/assets/js/qrcode.min.js",
        "/scout/style.css",
        "/scout/script.js",
        "/scout/variables.css",
        "/scout/field.css",
        "/scout/field.js",
        "/scout/storage/session.js",
        "/scout/storage/users.js",
        "/scout/assets/img/bg.jpg",
        "/scout/assets/img/loader.gif",
        "/scout/assets/img/sunburst-pi.png",
        "/scout/assets/img/thomas.jpeg",
        "/scout/assets/img/examples/speaker.png",
        "/scout/assets/img/examples/amp.png",
        "/scout/assets/img/examples/trap.png",
        "/scout/assets/js/ionic/p-4fda5c35.entry.js",
        "/scout/assets/js/ionic/p-337ac0f5.entry.js",
        "/scout/assets/js/ionic/p-2327064c.entry.js",
        "/scout/assets/js/ionic/p-dcb5711d.entry.js",
        "/scout/assets/js/ionic/p-8f872991.entry.js",
        "/scout/assets/js/ionic/p-c771a6ef.entry.js",
        "/scout/assets/js/ionic/p-b6279412.entry.js",
        "/scout/assets/js/ionic/p-c11bab7e.entry.js",
        "/scout/assets/js/ionic/p-601e17b4.entry.js",
        "/scout/assets/js/ionic/p-7ce40e7b.entry.js",
        "/scout/assets/js/ionic/p-1f16d040.entry.js",
        "/scout/assets/js/ionic/p-94ff532b.entry.js",
        "/scout/assets/js/ionic/p-43a5edee.entry.js",
        "/scout/assets/js/ionic/p-31450f73.entry.js",
        "/scout/assets/js/ionic/p-16a61810.entry.js",
        "/scout/assets/js/ionic/p-3079950e.entry.js",
        "/scout/assets/js/ionic/p-ed7a529f.js",
        "/scout/assets/js/ionic/p-de55ec45.js",
        "/scout/assets/js/ionic/p-5d7e32ce.js",
        "/scout/assets/js/ionic/p-47794def.js",
        "/scout/assets/js/ionic/p-1e4371bd.js",
        "/scout/assets/js/ionic/p-b5839dc2.js",
        "/scout/assets/js/ionic/p-7b30edcc.js",
        "/scout/assets/js/ionic/p-27281edd.js",
        "/scout/assets/js/ionic/p-c61cc894.js",
        "/scout/assets/js/ionic/p-c858f685.js",
        "/scout/assets/js/ionic/p-06fee233.js",
        "/scout/assets/js/ionic/p-42f189f4.js",
        "/scout/assets/js/ionic/p-fb813dab.js",
        "/scout/assets/js/ionic/p-831269de.js",
        "/scout/assets/js/ionic/p-b253ad7f.js",
        "/scout/assets/js/ionic/p-a3f572a7.js",
        "/scout/assets/js/ionic/p-ccd02320.js",
        "/scout/assets/js/ionic/p-dbcba5a2.js",
        "/scout/assets/js/ionic/p-21ca1f1c.js",
        "/scout/assets/js/ionic/p-2b7827c7.js",
        "/scout/assets/js/ionic/p-9393a49f.js",
        "/scout/assets/js/ionic/p-2408c236.js",
        "/scout/assets/js/ionic/p-f5d2dc9b.js",
        "/scout/assets/js/ionic/p-ceceac26.js",
        "/scout/assets/js/ionic/p-bb3615f7.js",
        "/scout/assets/js/ionic/p-cdc277a6.js",
        "/scout/assets/js/ionic/p-31c495c2.js",
        "/scout/assets/js/ionic/p-4f777b5e.js",
        "/scout/assets/js/ionic/p-d47265c8.js",
        "/scout/assets/js/ionic/svg/sunny.svg",
        "/scout/assets/js/ionic/svg/game-controller.svg",
        "/scout/assets/js/ionic/svg/sunny-outline.svg",
        "/scout/assets/js/ionic/svg/bar-chart.svg",
        "/scout/assets/js/ionic/svg/star.svg",
        "/scout/assets/js/ionic/svg/cog.svg",
        "/scout/assets/js/ionic/svg/time.svg",
        "/scout/assets/field/field2024.jpg",
        "/scout/assets/field/A1.png",
        "/scout/assets/field/-A1.png",
        "/scout/assets/field/A2.png",
        "/scout/assets/field/-A2.png",
        "/scout/assets/field/A3.png",
        "/scout/assets/field/-A3.png",
        "/scout/assets/field/B1.png",
        "/scout/assets/field/-B1.png",
        "/scout/assets/field/B2.png",
        "/scout/assets/field/-B2.png",
        "/scout/assets/field/B3.png",
        "/scout/assets/field/-B3.png",
        "/scout/assets/field/B4.png",
        "/scout/assets/field/-B4.png",
        "/scout/assets/field/B5.png",
        "/scout/assets/field/-B5.png",
        "/scout/assets/field/C1.png",
        "/scout/assets/field/-C1.png",
        "/scout/assets/field/C2.png",
        "/scout/assets/field/-C2.png",
        "/scout/assets/field/C3.png",
        "/scout/assets/field/-C3.png",
        "/scout/assets/field/bArrow.png",
        "/scout/assets/field/-bArrow.png",
        "/scout/assets/field/rArrow.png",
        "/scout/assets/field/-rArrow.png",
        "/scout/assets/img/pwa/icon.png",
        "/scout/assets/img/pwa/piwebappA.png",
        "/scout/assets/img/pwa/piwebappB.png",
        "/scout/assets/img/pwa/piwebappC.png",
        "/scout/assets/img/pwa/12.9__iPad_Pro_landscape.png",
        "/scout/assets/img/pwa/11__iPad_Pro__10.5__iPad_Pro_landscape.png",
        "/scout/assets/img/pwa/10.9__iPad_Air_landscape.png",
        "/scout/assets/img/pwa/10.5__iPad_Air_landscape.png",
        "/scout/assets/img/pwa/10.2__iPad_landscape.png",
        "/scout/assets/img/pwa/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",
        "/scout/assets/img/pwa/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",
        "/scout/assets/img/pwa/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",
        "/scout/assets/img/pwa/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",
        "/scout/assets/img/pwa/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",
        "/scout/assets/img/pwa/iPhone_11__iPhone_XR_landscape.png",
        "/scout/assets/img/pwa/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",
        "/scout/assets/img/pwa/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",
        "/scout/assets/img/pwa/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",
        "/scout/assets/img/pwa/12.9__iPad_Pro_portrait.png",
        "/scout/assets/img/pwa/11__iPad_Pro__10.5__iPad_Pro_portrait.png",
        "/scout/assets/img/pwa/10.9__iPad_Air_portrait.png",
        "/scout/assets/img/pwa/10.5__iPad_Air_portrait.png",
        "/scout/assets/img/pwa/10.2__iPad_portrait.png",
        "/scout/assets/img/pwa/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",
        "/scout/assets/img/pwa/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",
        "/scout/assets/img/pwa/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",
        "/scout/assets/img/pwa/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",
        "/scout/assets/img/pwa/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",
        "/scout/assets/img/pwa/iPhone_11__iPhone_XR_portrait.png",
        "/scout/assets/img/pwa/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",
        "/scout/assets/img/pwa/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",
        "/scout/assets/img/pwa/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",
        "/scout/assets/img/profiles/100/0312bd3de6f8.jpg",
        "/scout/assets/img/profiles/100/031b9df3bbf5.jpg",
        "/scout/assets/img/profiles/100/07c1f94cd209.jpg",
        "/scout/assets/img/profiles/100/0819ddb05f35.jpg",
        "/scout/assets/img/profiles/100/09a9820a770c.jpg",
        "/scout/assets/img/profiles/100/0b8c6f4e84e2.jpg",
        "/scout/assets/img/profiles/100/0fb69c96abc0.jpg",
        "/scout/assets/img/profiles/100/1231d4b9f84e.jpg",
        "/scout/assets/img/profiles/100/13b617bef782.jpg",
        "/scout/assets/img/profiles/100/13b6f65bd6b7.jpg",
        "/scout/assets/img/profiles/100/17e5ee05c617.jpg",
        "/scout/assets/img/profiles/100/18aaed6042d5.jpg",
        "/scout/assets/img/profiles/100/1febbc789ae7.jpg",
        "/scout/assets/img/profiles/100/22a75ab8262d.jpg",
        "/scout/assets/img/profiles/100/23f2ef733bdc.jpg",
        "/scout/assets/img/profiles/100/2768393797fc.jpg",
        "/scout/assets/img/profiles/100/2a299b852ccf.jpg",
        "/scout/assets/img/profiles/100/2b4f26ec6697.jpg",
        "/scout/assets/img/profiles/100/2b9df4a8f308.jpg",
        "/scout/assets/img/profiles/100/2d13473f0404.jpg",
        "/scout/assets/img/profiles/100/2f4065c82541.jpg",
        "/scout/assets/img/profiles/100/2f642c4e5416.jpg",
        "/scout/assets/img/profiles/100/2f7db5a48873.jpg",
        "/scout/assets/img/profiles/100/2fd954b4b620.jpg",
        "/scout/assets/img/profiles/100/3b42edc32079.jpg",
        "/scout/assets/img/profiles/100/3f344d9fcdaa.jpg",
        "/scout/assets/img/profiles/100/3f357a871791.jpg",
        "/scout/assets/img/profiles/100/4315937ccd19.jpg",
        "/scout/assets/img/profiles/100/435b98dd33c6.jpg",
        "/scout/assets/img/profiles/100/4559e06df50b.jpg",
        "/scout/assets/img/profiles/100/47a97ecce76b.jpg",
        "/scout/assets/img/profiles/100/4bed06586a38.jpg",
        "/scout/assets/img/profiles/100/4f1746c30d6a.jpg",
        "/scout/assets/img/profiles/100/4ff944202e93.jpg",
        "/scout/assets/img/profiles/100/509fc248fee6.jpg",
        "/scout/assets/img/profiles/100/526c479470a7.jpg",
        "/scout/assets/img/profiles/100/5394179f5841.jpg",
        "/scout/assets/img/profiles/100/5afea2ccbeac.jpg",
        "/scout/assets/img/profiles/100/5d88b15f5c88.jpg",
        "/scout/assets/img/profiles/100/5f8627f2a12d.jpg",
        "/scout/assets/img/profiles/100/63f3766ab820.jpg",
        "/scout/assets/img/profiles/100/6b5c3abe1df8.jpg",
        "/scout/assets/img/profiles/100/6cfb88d4d566.jpg",
        "/scout/assets/img/profiles/100/6f9972584fe1.jpg",
        "/scout/assets/img/profiles/100/7170ffb7e2a7.jpg",
        "/scout/assets/img/profiles/100/7221339750c9.jpg",
        "/scout/assets/img/profiles/100/733b64e85bed.jpg",
        "/scout/assets/img/profiles/100/776abab9756b.jpg",
        "/scout/assets/img/profiles/100/7b0244d4ccd4.jpg",
        "/scout/assets/img/profiles/100/7b0622c243a3.jpg",
        "/scout/assets/img/profiles/100/7bb30956c454.jpg",
        "/scout/assets/img/profiles/100/7f66aa64f028.jpg",
        "/scout/assets/img/profiles/100/7f7a4682b166.jpg",
        "/scout/assets/img/profiles/100/7fec27eac194.jpg",
        "/scout/assets/img/profiles/100/831231d85b01.jpg",
        "/scout/assets/img/profiles/100/831a9dd2b57e.jpg",
        "/scout/assets/img/profiles/100/83c93aab81f4.jpg",
        "/scout/assets/img/profiles/100/83f78849c1a8.jpg",
        "/scout/assets/img/profiles/100/84c3236a57c2.jpg",
        "/scout/assets/img/profiles/100/84e1fb8a9ca5.jpg",
        "/scout/assets/img/profiles/100/8686207e80aa.jpg",
        "/scout/assets/img/profiles/100/872827981851.jpg",
        "/scout/assets/img/profiles/100/879d1e7bb6aa.jpg",
        "/scout/assets/img/profiles/100/9315a583e120.jpg",
        "/scout/assets/img/profiles/100/9789fa626cd0.jpg",
        "/scout/assets/img/profiles/100/97959428b83c.jpg",
        "/scout/assets/img/profiles/100/9b043bd760bb.jpg",
        "/scout/assets/img/profiles/100/9b4623631831.jpg",
        "/scout/assets/img/profiles/100/9b5b40ad1c1b.jpg",
        "/scout/assets/img/profiles/100/9b65e7d67dd9.jpg",
        "/scout/assets/img/profiles/100/9ba84fe3c58c.jpg",
        "/scout/assets/img/profiles/100/9fcdf3235e91.jpg",
        "/scout/assets/img/profiles/100/a07925f90344.jpg",
        "/scout/assets/img/profiles/100/a07a09039d7f2.jpg",
        "/scout/assets/img/profiles/100/a4f8f80803e20.jpg",
        "/scout/assets/img/profiles/100/a50170adc0fd.jpg",
        "/scout/assets/img/profiles/100/a53e40195bf42.jpg",
        "/scout/assets/img/profiles/100/a77d49a0f5c9.jpg",
        "/scout/assets/img/profiles/100/a7fef8be3a553.jpg",
        "/scout/assets/img/profiles/100/a846d4ba819a.jpg",
        "/scout/assets/img/profiles/100/a9380d14553bf.jpg",
        "/scout/assets/img/profiles/100/a9754d9c2f2c2.jpg",
        "/scout/assets/img/profiles/100/ab17416627e2.jpg",
        "/scout/assets/img/profiles/100/ad227fc5f264.jpg",
        "/scout/assets/img/profiles/100/affe2dad862b.jpg",
        "/scout/assets/img/profiles/100/b121928f6774.jpg",
        "/scout/assets/img/profiles/100/b7a6c5138488.jpg",
        "/scout/assets/img/profiles/100/b8354c23aeed.jpg",
        "/scout/assets/img/profiles/100/bb1fc7701957.jpg",
        "/scout/assets/img/profiles/100/bb716799544d.jpg",
        "/scout/assets/img/profiles/100/bf5d7713fa71.jpg",
        "/scout/assets/img/profiles/100/bfca7e7bac49.jpg",
        "/scout/assets/img/profiles/100/c37ebe78af05.jpg",
        "/scout/assets/img/profiles/100/c4556626b928.jpg",
        "/scout/assets/img/profiles/100/c736ab0ddd01.jpg",
        "/scout/assets/img/profiles/100/c7c8263416d1.jpg",
        "/scout/assets/img/profiles/100/c7cefceb2372.jpg",
        "/scout/assets/img/profiles/100/cd71fcf11b82.jpg",
        "/scout/assets/img/profiles/100/cfcbfc4cf74f.jpg",
        "/scout/assets/img/profiles/100/d363dfef8138.jpg",
        "/scout/assets/img/profiles/100/d37841d5b9d3.jpg",
        "/scout/assets/img/profiles/100/d519479a5949.jpg",
        "/scout/assets/img/profiles/100/d768afb82751.jpg",
        "/scout/assets/img/profiles/100/db041e29388b.jpg",
        "/scout/assets/img/profiles/100/db29f633f0d7.jpg",
        "/scout/assets/img/profiles/100/e08d4a832996.jpg",
        "/scout/assets/img/profiles/100/e3a25714a086.jpg",
        "/scout/assets/img/profiles/100/e627f360a513.jpg",
        "/scout/assets/img/profiles/100/e786688cc724.jpg",
        "/scout/assets/img/profiles/100/eb87ab1d4ef7.jpg",
        "/scout/assets/img/profiles/100/ec25e443f467.jpg",
        "/scout/assets/img/profiles/100/ef6209268538.jpg",
        "/scout/assets/img/profiles/100/efccc46f0803.jpg",
        "/scout/assets/img/profiles/100/f3e97489d2be.jpg",
        "/scout/assets/img/profiles/100/f44d951d99e4.jpg",
        "/scout/assets/img/profiles/100/f71eaa09c78c.jpg",
        "/scout/assets/img/profiles/100/f731cfbd1b3a.jpg",
        "/scout/assets/img/profiles/100/f76862b669a3.jpg",
        "/scout/assets/img/profiles/100/f7f4caaa4f67.jpg",
        "/scout/assets/img/profiles/100/fb601c88dbe3.jpg"
      ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(version).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    return;
  }    
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(response => {
        return caches.open(version).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
    .catch(() => {
      return caches.match('/scout/index.html');
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data.action === 'getVersion') {
    event.source.postMessage({ action: 'version', version: version });
  }
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== version) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

async function resetCaches() {
  // Delete old caches
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(cacheName => cacheName !== version);
  await Promise.all(oldCaches.map(cacheName => caches.delete(cacheName)));

  // Optionally, open the current cache and add new assets
  const cache = await caches.open(version);
  await cache.addAll(filesToCache);
}
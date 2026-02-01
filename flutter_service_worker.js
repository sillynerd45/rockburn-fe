'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "237a0cda34c4bd799cfa4b58abbcf7c5",
"assets/AssetManifest.bin.json": "93e818c06451f3190b779d683f518979",
"assets/AssetManifest.json": "a3c4990d37e55d847af2c886915cb5a8",
"assets/assets/graphql/mutation/asteroid_destroyed.graphql": "405813eee0c5de8cd080efb375f5bd1c",
"assets/assets/graphql/mutation/fuel_harvested.graphql": "1cfa3b65887a06957adbdec10dced00c",
"assets/assets/graphql/mutation/game_won.graphql": "594a7ce7a829d2c7bd565179e1344480",
"assets/assets/graphql/mutation/generate_galaxy.graphql": "aca21615a0605945ec6fa5df257d57a1",
"assets/assets/graphql/mutation/increment.graphql": "92aaf9b4703819bde841fb23d865505d",
"assets/assets/graphql/mutation/initialization.graphql": "617495dcc6a62357911237181ab25467",
"assets/assets/graphql/mutation/update_stats.graphql": "87cf93748d7d2de9d175e9406378b14f",
"assets/assets/graphql/query/admin_check.graphql": "80207752558e2f8482749b35bcdafce1",
"assets/assets/graphql/query/get_galaxy_data.graphql": "ca4b449a3c615a205a1b7aeb7046116d",
"assets/assets/graphql/query/get_game_data.graphql": "c9fdbe4ec5616029736bce24f9246a64",
"assets/assets/graphql/query/get_leaderboard.graphql": "b859802a287c8cef8776f9957079da4a",
"assets/assets/graphql/query/get_progress.graphql": "f98f1e07cf3b555a52a498755cc7f978",
"assets/assets/graphql/query/initialized.graphql": "9dd43a18154844d3323891972c2b6be5",
"assets/assets/graphql/subscription/notification.graphql": "bc8ff1b5aa036465ec01cae73b885c12",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "0998f7eff4087328d81603ff6067ccc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"config.json": "22b8a61b8560b206b4626cce3a76b216",
"dist/ethers.js": "f83c0111bef9bacc6c639f4f0d508868",
"dist/index.d.ts": "4b4039c708c16ce995f451956db27e88",
"dist/index.js": "d5f8786e89b49e60d2e9800a74dbb36b",
"dist/index.js.map": "01f867ebacd4fc5511e40471a9e2d4f5",
"dist/signer/Composite.d.ts": "b7a96daa44d21cc808ef51370260e023",
"dist/signer/Composite.js": "de5b2bc23635811ab1989547bb28aaff",
"dist/signer/Composite.js.map": "254d3e52599e6d20f984e2a3d0105d34",
"dist/signer/index.d.ts": "a0ba7bad618b4512569aadf905df1023",
"dist/signer/index.js": "c75ddf5123d102906e43816adda35747",
"dist/signer/index.js.map": "9b2eb06db8aad74e354ab73f7ded3b02",
"dist/signer/PrivateKey.d.ts": "c179361bbabb09d1e079bd12b9128d0e",
"dist/signer/PrivateKey.js": "d94e617ebb8816b6c8b3b2aa6f203840",
"dist/signer/PrivateKey.js.map": "1ce10f65301d0d6deece68578cbd1e22",
"dist/wasm/index.d.ts": "119654d84f1afc57354c5ab2fcebce16",
"dist/wasm/index.js": "1df0fae22fa8c8f9d9679f2eadcb62f1",
"dist/wasm/index_bg.wasm": "f1097170254b495b4902a3269a9d607c",
"dist/wasm/index_bg.wasm.d.ts": "39a0d0838670fe8378c9f0ad15c21c97",
"dist/wasm/snippets/wasm-bindgen-futures-b6504891c854894f/src/task/worker.js": "01915d7931b9d835705b78a334d25955",
"dist/wasm/snippets/web-thread-4d290c67e66c22e5/src/Client.js": "f808bff302184729641a9cc381b65d1c",
"dist/wasm/snippets/web-thread-4d290c67e66c22e5/src/worker.js": "68193ab3502c306e5d8077c6c5a4f32e",
"favicon-16x16.png": "1f5997a55a6b4b89f9f4b471c382d168",
"favicon-32x32.png": "623d25a2c7af40397a6bdd4e17668c2c",
"favicon.ico": "9454a714f1f6322d67c9b3e67f7063c7",
"favicon.png": "3dbd7280b349744454400b780425b730",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "4ff9fe34952a61ff0f8e7d1523b77261",
"fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"icons/Icon-192.png": "0e1b06d833e20017df62daa7de88914c",
"icons/Icon-512.png": "948d2dbd85bf189fa85e002b61f92313",
"icons/Icon-maskable-192.png": "0e1b06d833e20017df62daa7de88914c",
"icons/Icon-maskable-512.png": "948d2dbd85bf189fa85e002b61f92313",
"index.html": "377d33fbb3499c59ec4a65cf67ee934a",
"/": "377d33fbb3499c59ec4a65cf67ee934a",
"linera-wrapper.js": "b4fb9e750f9a57b102c25c91cc18cdca",
"main.dart.js": "21a4b6aabe6a8527fb83be2953c7e418",
"main.dart.mjs": "e0e618a646c745a2af2afbd25150e2c1",
"main.dart.wasm": "b61fa824745dcc33b773b9062bbb6d80",
"manifest.json": "9833a8163b19cec6188497a4fdf79011",
"version.json": "f48b98f14c05f45bb0aa0b532dc1effa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

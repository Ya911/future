if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),u={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1.4.3/_buildManifest.js",revision:"2d580f7039134e4e9849848f2b9d4d49"},{url:"/_next/static/1.4.3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1163.39ebdd2733119c74.js",revision:"39ebdd2733119c74"},{url:"/_next/static/chunks/1366.3e8eda880fcd2e56.js",revision:"3e8eda880fcd2e56"},{url:"/_next/static/chunks/1495-6b8512166d95de6e.js",revision:"6b8512166d95de6e"},{url:"/_next/static/chunks/1529.a979ec2d711119b2.js",revision:"a979ec2d711119b2"},{url:"/_next/static/chunks/1664-b6e5518efa2bfe95.js",revision:"b6e5518efa2bfe95"},{url:"/_next/static/chunks/1826.be6da8180bbcc7ab.js",revision:"be6da8180bbcc7ab"},{url:"/_next/static/chunks/2077.6f0effb2a798ee32.js",revision:"6f0effb2a798ee32"},{url:"/_next/static/chunks/2322.c91087ed8af42451.js",revision:"c91087ed8af42451"},{url:"/_next/static/chunks/2567.e0aab1619c7692da.js",revision:"e0aab1619c7692da"},{url:"/_next/static/chunks/2657.91d630d3e2c60cd8.js",revision:"91d630d3e2c60cd8"},{url:"/_next/static/chunks/2992.040b09f98acc24ed.js",revision:"040b09f98acc24ed"},{url:"/_next/static/chunks/3457.8962c506fb8a248a.js",revision:"8962c506fb8a248a"},{url:"/_next/static/chunks/3978-bf76d58974311041.js",revision:"bf76d58974311041"},{url:"/_next/static/chunks/4157.263bc6ee88ea74aa.js",revision:"263bc6ee88ea74aa"},{url:"/_next/static/chunks/4159.a95c4177cc5600aa.js",revision:"a95c4177cc5600aa"},{url:"/_next/static/chunks/4397.e3db29e9c2ca4163.js",revision:"e3db29e9c2ca4163"},{url:"/_next/static/chunks/4593-b321627110a23e34.js",revision:"b321627110a23e34"},{url:"/_next/static/chunks/4718.dcc1c83df75a93de.js",revision:"dcc1c83df75a93de"},{url:"/_next/static/chunks/5113.6c583a3800133e19.js",revision:"6c583a3800133e19"},{url:"/_next/static/chunks/5478.37b166f9979736c6.js",revision:"37b166f9979736c6"},{url:"/_next/static/chunks/5531.0ba5eb15d1bebb01.js",revision:"0ba5eb15d1bebb01"},{url:"/_next/static/chunks/5568.ad7b85c03a7b7044.js",revision:"ad7b85c03a7b7044"},{url:"/_next/static/chunks/5675-2ff24366b2553e7f.js",revision:"2ff24366b2553e7f"},{url:"/_next/static/chunks/5819.7649a82d92ce9c5c.js",revision:"7649a82d92ce9c5c"},{url:"/_next/static/chunks/6162.2c3590caa4266b8c.js",revision:"2c3590caa4266b8c"},{url:"/_next/static/chunks/6215.e7823af871989303.js",revision:"e7823af871989303"},{url:"/_next/static/chunks/6250.9155b56da3afab6a.js",revision:"9155b56da3afab6a"},{url:"/_next/static/chunks/6336.f52182d3681f0f55.js",revision:"f52182d3681f0f55"},{url:"/_next/static/chunks/641.53108a31afc3c0af.js",revision:"53108a31afc3c0af"},{url:"/_next/static/chunks/6447.9565a09ce2e7d074.js",revision:"9565a09ce2e7d074"},{url:"/_next/static/chunks/6506.6b7a23ea937b315a.js",revision:"6b7a23ea937b315a"},{url:"/_next/static/chunks/6917.788e41c471f7044b.js",revision:"788e41c471f7044b"},{url:"/_next/static/chunks/7357.a6d1749ebb876c73.js",revision:"a6d1749ebb876c73"},{url:"/_next/static/chunks/7534.8e9875b24af9daab.js",revision:"8e9875b24af9daab"},{url:"/_next/static/chunks/7661-cc6f1df4fe1b63ec.js",revision:"cc6f1df4fe1b63ec"},{url:"/_next/static/chunks/7739.5e120ae3106052f6.js",revision:"5e120ae3106052f6"},{url:"/_next/static/chunks/7791.2e0544e6dff5f0a0.js",revision:"2e0544e6dff5f0a0"},{url:"/_next/static/chunks/8048.793d75fb83d30c1f.js",revision:"793d75fb83d30c1f"},{url:"/_next/static/chunks/8158.1b46793c38943fc7.js",revision:"1b46793c38943fc7"},{url:"/_next/static/chunks/8397.f2f5a4ac23f2fa8a.js",revision:"f2f5a4ac23f2fa8a"},{url:"/_next/static/chunks/8456.d91a87877a645a25.js",revision:"d91a87877a645a25"},{url:"/_next/static/chunks/8793.7e96d016df8016b8.js",revision:"7e96d016df8016b8"},{url:"/_next/static/chunks/893.43c2c6cba50e3384.js",revision:"43c2c6cba50e3384"},{url:"/_next/static/chunks/9005-099d7904c07925b5.js",revision:"099d7904c07925b5"},{url:"/_next/static/chunks/9461.79740eb970766942.js",revision:"79740eb970766942"},{url:"/_next/static/chunks/9572.c02c94ffc00300e5.js",revision:"c02c94ffc00300e5"},{url:"/_next/static/chunks/9609.14819a45064c9fc9.js",revision:"14819a45064c9fc9"},{url:"/_next/static/chunks/9649.2621724d1b39c227.js",revision:"2621724d1b39c227"},{url:"/_next/static/chunks/9669.888e6301c17b28c9.js",revision:"888e6301c17b28c9"},{url:"/_next/static/chunks/9759.d74e3e02a656d6a2.js",revision:"d74e3e02a656d6a2"},{url:"/_next/static/chunks/9872.29a022a0f88e9743.js",revision:"29a022a0f88e9743"},{url:"/_next/static/chunks/9962.752ac9c3243f1699.js",revision:"752ac9c3243f1699"},{url:"/_next/static/chunks/framework-4ed89e9640adfb9e.js",revision:"4ed89e9640adfb9e"},{url:"/_next/static/chunks/main-7af4199ef62d9c91.js",revision:"7af4199ef62d9c91"},{url:"/_next/static/chunks/pages/404-4547f2180d92048a.js",revision:"4547f2180d92048a"},{url:"/_next/static/chunks/pages/500-1b7d080e8f4cca0b.js",revision:"1b7d080e8f4cca0b"},{url:"/_next/static/chunks/pages/_app-480c365d4ebabc7b.js",revision:"480c365d4ebabc7b"},{url:"/_next/static/chunks/pages/_error-f2496e8b9fdedb89.js",revision:"f2496e8b9fdedb89"},{url:"/_next/static/chunks/pages/auth-3bafbb490723d742.js",revision:"3bafbb490723d742"},{url:"/_next/static/chunks/pages/auth/error-95e2ced4f010f7d7.js",revision:"95e2ced4f010f7d7"},{url:"/_next/static/chunks/pages/auth/signin-95c90776a01ee307.js",revision:"95c90776a01ee307"},{url:"/_next/static/chunks/pages/auth/signup-ce844f3f6c22966c.js",revision:"ce844f3f6c22966c"},{url:"/_next/static/chunks/pages/books-714ffc0a46e517cf.js",revision:"714ffc0a46e517cf"},{url:"/_next/static/chunks/pages/bot-acdd03401fe63085.js",revision:"acdd03401fe63085"},{url:"/_next/static/chunks/pages/calculator-fde73b21670be833.js",revision:"fde73b21670be833"},{url:"/_next/static/chunks/pages/date-dcc6122f24961c90.js",revision:"dcc6122f24961c90"},{url:"/_next/static/chunks/pages/index-1bed7dd47c7c8d18.js",revision:"1bed7dd47c7c8d18"},{url:"/_next/static/chunks/pages/members-408bbce9fe1cbc54.js",revision:"408bbce9fe1cbc54"},{url:"/_next/static/chunks/pages/myaccount-3e3ddf16c52a18bf.js",revision:"3e3ddf16c52a18bf"},{url:"/_next/static/chunks/pages/setting-28ca9c2553118c7c.js",revision:"28ca9c2553118c7c"},{url:"/_next/static/chunks/pages/update-a299849c46f44524.js",revision:"a299849c46f44524"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-82c74096f175fb3c.js",revision:"82c74096f175fb3c"},{url:"/_next/static/css/57a5c73c1443e311.css",revision:"57a5c73c1443e311"},{url:"/_next/static/css/8ca1831d25bc400d.css",revision:"8ca1831d25bc400d"},{url:"/img/1-01.png",revision:"c593cb4a5363a584287cc0ee4f6d5521"},{url:"/img/Facebook.png",revision:"3f15f5022e28edac116eea52baf58156"},{url:"/img/android-icon-144x144.png",revision:"c8145d09ced24cf9f30eb5f16c9c25e7"},{url:"/img/android-icon-192x192.png",revision:"77480e78917dd871865842baa6a94e00"},{url:"/img/android-icon-36x36.png",revision:"127c7f0d80c4e321cf212e77652011b8"},{url:"/img/android-icon-48x48.png",revision:"8b24fece254622d43e9fa87bab4335ec"},{url:"/img/android-icon-512x512.png",revision:"913bf690263127d2155d01437727188b"},{url:"/img/android-icon-72x72.png",revision:"826f209b429437b98aa4078bcbb0f04f"},{url:"/img/android-icon-96x96.png",revision:"f4522ed0c803a52d7401bf52182fd573"},{url:"/img/apple-touch-icon.png",revision:"2020027521ac423e7cc02d0309c973e0"},{url:"/img/eye.svg",revision:"9637ff4e1bc2542d4a169132b6ad6fb8"},{url:"/img/fackbook.svg",revision:"71720950345e3515563569c5a24b40e4"},{url:"/img/favicon-16x16.png",revision:"6ea73b8d2cd757bdfc379c1d004f280e"},{url:"/img/favicon-32x32.png",revision:"9cbfcbad2f2b4aa412ab62d692db0464"},{url:"/img/google.png",revision:"c3446e13f5f20e9ce87357e2d0deceae"},{url:"/img/google.svg",revision:"648fa9faea73bcefeebcdd3c28c94c38"},{url:"/img/microphone.svg",revision:"19c0c3a5e16a7e0520e3b687ae353f5b"},{url:"/img/moon.svg",revision:"732fe4cc02d8993020130fc5ec363997"},{url:"/img/ms-icon-144x144.png",revision:"c8145d09ced24cf9f30eb5f16c9c25e7"},{url:"/img/sun.svg",revision:"75822d50f25d32dcdce330d7a42eb54e"},{url:"/manifest.json",revision:"a1322f7e40cba0f343ff27f0a9a64ea1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

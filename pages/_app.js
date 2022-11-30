import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { useEffect } from 'react';

const NextPr = dynamic(()=>import('nextjs-progressbar'))


export default function MyApp({ Component, pageProps: { session , ...pageProps }}) {
// استخدام البروفايدر وداخله بروبس الستور لتفعيل الريدكس 

// useEffect(()=>{
//     var customViewportCorrectionVariable = 'vh';
//     function setViewportProperty(doc) {
//       var prevClientHeight;
//       var customVar = '--' + ( customViewportCorrectionVariable || 'vh' );
//       function handleResize() {
//         var clientHeight = doc.clientHeight;
//         if (clientHeight === prevClientHeight) return;
//         requestAnimationFrame(function updateViewportHeight(){
//           doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
//           prevClientHeight = clientHeight;
//         });
//       }
//       handleResize();
//       return handleResize;
//     }
//     window.addEventListener('resize', setViewportProperty(document.documentElement));
//     return ()=> window.removeEventListener('resize', setViewportProperty(document.documentElement));
    
// },[])

const getLayout = Component.getLayout ?? ((page) => page) 



return (

<>

{/* Lyout Start with Chaldrin with progress */}
<NextPr
nonce={`${import('../styles/nprogress.css')}`}
color="#f3f3f3"
height={4}
/>
<Head>
<meta charSet="utf-8"/>
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"/>
<meta name="description" content="موقع تجريبي لأختبار الأنتاجية"/>
<meta name="keywords" content="Keywords" />
<link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#317efb"/>
<meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png"/>
<meta name="theme-color" content="#317efb" />
</Head>

<ErrorBoundary>
<SessionProvider session={session} >
{getLayout(<Component {...pageProps} />)}
</SessionProvider>
</ErrorBoundary>
</>
)

}












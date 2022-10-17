import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head'



export default function MyApp({ Component, pageProps: { session , ...pageProps }}) {
// استخدام البروفايدر وداخله بروبس الستور لتفعيل الريدكس 

const getLayout = Component.getLayout ?? ((page) => page) 



return (

<>
<SessionProvider session={session} >
{/* Lyout Start with Chaldrin with progress */}
<NextNProgress
nonce={`${import('../styles/nprogress.css')}`}
color="#29D"
startPosition={0.3}
height={5}
showOnShallow={true}
options={{ easing: "ease", speed: 500 }}
/>

{getLayout(
<>
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
<Component {...pageProps} />
</>
)}

{/*  Lyout END with Chaldrin with progress*/}
</SessionProvider>
</>
)

}












import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>더치페이</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coletivo Arruaça</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Coletivo Arruaça, ações, festa na rua - porto alegre - brasil - desde 2014"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Coletivo Arruaça" />
        <meta
          property="og:description"
          content="Coletivo Arruaça, ações, festa na rua - porto alegre - brasil - desde 2014"
        />
        <meta property="og:url" content="https://coletivoarruaca.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          itemProp="image"
          content="/img/icon-512.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

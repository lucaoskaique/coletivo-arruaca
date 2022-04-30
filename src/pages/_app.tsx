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
          content="https://instagram.fpoa8-1.fna.fbcdn.net/v/t51.2885-19/94392931_801073810415854_1567991426174681088_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpoa8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=eX44xFw-2gYAX8PbBsL&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8vEWKq0PyTeKpJEldsIcAFTf__nwrsouBUIttEQDB_-A&oe=62737908&_nc_sid=7bff83"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

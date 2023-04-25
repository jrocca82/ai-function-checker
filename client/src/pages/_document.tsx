import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Function Translator" key="title"/>
        <meta property="og:description" content="Translate functions using AI" key="description"/>
        <meta
          property="og:image"
          content="FT.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
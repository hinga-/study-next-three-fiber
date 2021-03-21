import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SITE_ORIGIN, SITE_TITLE, SITE_DESCRIPTION } from '@/constants/env'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta name="theme-color" content="#333" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:url" content={SITE_ORIGIN} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:site_name" content={SITE_TITLE} />
          <meta property="og:image" content={`${SITE_ORIGIN}/ogp.png`} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta name="twitter:image" content={`${SITE_ORIGIN}/ogp.png`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

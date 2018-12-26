import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { TypographyStyle, GoogleFont } from 'react-typography';

import typography from '../lib/typography';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <Head>
          <title>How Is That Spelled?</title>
          {this.props.styleTags}

          <meta name="viewport" content="width=device-width,initial-scale=1.0" />

          <meta name="description" content="Ever happened to you that you can pronounce a word but can't spell it? Yeah me too." />

          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
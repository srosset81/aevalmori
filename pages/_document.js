import { Document, Head, Main, NextScript } from 'utils/next';
import { ServerStyleSheet } from 'utils/styling';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Anna Elisa Valmori</title>
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

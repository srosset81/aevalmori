import React from 'react';
import { Html, Document, Head, Main, NextScript } from 'utils/next';
import { ServerStyleSheet } from 'utils/styling';

const supportedLocale = ['fr', 'it'];

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    const queryLocale = ctx.query.locale;
    const locale = supportedLocale.find(l => l === queryLocale) ? queryLocale : 'fr';

    const linguiCatalog = await import(`raw-loader!../locale/${locale}/messages.js`).then(mod => mod.default);

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, ...page, styleTags, linguiCatalog, locale };
  }

  render() {
    const { linguiCatalog, locale } = this.props;
    return (
      <Html lang={locale}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            href="https://fonts.googleapis.com/css?family=Lobster|Open+Sans:400,700,400italic,700italic|Montserrat:400,700|Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <link href="/static/fonts/stylesheet.css" rel="stylesheet" />
          <meta name="google-site-verification" content="myJ_CwUBXOaGJlyttvQKhJtgoiJgNXjOV0HA_pPxRBQ" />
          <meta httpEquiv="Content-Language" content={locale} />
          <script dangerouslySetInnerHTML={{ __html: linguiCatalog }} />
          <script dangerouslySetInnerHTML={{ __html: `
            (function(window, document, dataLayerName, id) {
            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
            function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"}
            var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
            tags.async=!0,tags.src="https://nouvel-air.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
            })(window, document, 'dataLayer', '213c92e9-4502-40a7-b2e3-496d123f47c1');
          `}} />
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

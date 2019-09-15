import React from 'react';
import NextApp from 'next/app';
import { I18nProvider } from '@lingui/react';
import getCatalog from '@catalogs';
import { withApollo } from '../utils/apollo';

class App extends NextApp {
  static async getInitialProps({ query, Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, locale: ctx.query.locale };
  }

  render() {
    const { Component, pageProps, locale } = this.props;
    const catalog = getCatalog(locale);
    return (
      <I18nProvider language={locale} catalogs={{ [locale]: catalog }}>
        <Component {...pageProps} />
      </I18nProvider>
    );
  }
}

export default withApollo(App);

import React from 'react';
import NextApp from 'next/app';
import { TolgeeProvider, tolgee } from '../utils/i18n';
import { withApollo } from '../utils/apollo';

class App extends NextApp {
  static async getInitialProps({ query, Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, locale: ctx.query.locale || 'fr' };
  }

  render() {
    const { Component, pageProps, locale } = this.props;
    return (
      <TolgeeProvider tolgee={tolgee} ssr={{ language: locale }}>
        <Component {...pageProps} />
      </TolgeeProvider>
    );
  }
}

export default withApollo(App);

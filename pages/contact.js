import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { TopSection, FooterSection, ContactSection, QuoteSection } from 'components/section';

const ContactPage = () => (
  <Layout>
    <Head>
      <title>Contactez-moi - Anna Elisa Valmori, psychologue à Paris</title>
    </Head>
    <TopSection image="butterfly-3.jpg">Contactez-moi</TopSection>
    <ContactSection />
    <QuoteSection author="Bert Hellinger" color="black" bg="lightRose">
      La réalité rend fort et libre quand elle est reconnue.
    </QuoteSection>
    <FooterSection />
  </Layout>
);

export default ContactPage;

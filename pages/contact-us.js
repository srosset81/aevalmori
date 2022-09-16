import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { TopSection, FooterSection, ContactSection } from 'components/section';

const ContactUsPage = () => (
  <Layout>
    <Head>
      <title>Contactez-nous - Nouvel air</title>
    </Head>
    <TopSection image="bird.jpg">Contactez-nous</TopSection>
    <ContactSection />
    <FooterSection />
  </Layout>
);

export default ContactUsPage;

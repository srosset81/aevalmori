import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { TopSection, FooterSection } from 'components/section';
import ContactUsSection from "../components/section/ContactUsSection";

const ContactUsPage = () => (
  <Layout>
    <Head>
      <title>Contactez-nous - Nouvel air</title>
    </Head>
    <TopSection image="bird.jpg">Contactez-nous</TopSection>
    <ContactUsSection />
    <FooterSection />
  </Layout>
);

export default ContactUsPage;

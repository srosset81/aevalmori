import React from 'react';
import { Layout } from 'components/app';
import { TopSection, FooterSection, ContactSection, NewsletterSection } from 'components/section';

const ContactPage = () => (
    <Layout>
      <TopSection image="contact.jpg">Contactez-moi</TopSection>
      <ContactSection/>
      <NewsletterSection/>
      <FooterSection />
    </Layout>
);

export default ContactPage;

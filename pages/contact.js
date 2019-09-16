import React from 'react';
import { Layout } from 'components/app';
import { TopSection, FooterSection, ContactSection, NewsletterSection, QuoteSection } from 'components/section';

const ContactPage = () => (
  <Layout>
    <TopSection image="contact.jpg">Contactez-moi</TopSection>
    <ContactSection />
    <QuoteSection author="C.G. Jung" bg="lightRose">
      Votre vision devient claire lorsque vous pouvez regarder dans votre cœur. Celui qui regarde à l’extérieur de soi
      ne fait que rêver ; celui qui regarde en soi se réveille.
    </QuoteSection>
    <NewsletterSection />
    <FooterSection />
  </Layout>
);

export default ContactPage;

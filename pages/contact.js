import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { TopSection, FooterSection, ContactSection, QuoteSection } from 'components/section';
import { useTranslate } from 'utils/i18n';

const ContactPage = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <Head>
        <title>{t('contact.headTitle', 'Contactez-moi - Anna Elisa Valmori, psychologue à Paris')}</title>
      </Head>
      <TopSection image="butterfly-3.jpg">{t('contact.topTitle', 'Contactez-moi')}</TopSection>
      <ContactSection />
      <QuoteSection author="Bert Hellinger" color="black" bg="primaryLight">
        {t('contact.quote', 'La réalité rend fort et libre quand elle est reconnue.')}
      </QuoteSection>
      <FooterSection />
    </Layout>
  );
};

export default ContactPage;

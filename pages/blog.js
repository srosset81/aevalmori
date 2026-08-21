import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import {LeadP, P} from 'components/text';
import { AnimOnAppear } from 'components/motion';
import {MenuSection, QuoteSection, FooterSection, AnnounceSection, TopSection} from 'components/section';
import { useTranslate } from 'utils/i18n';

const BlogPage = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <Head>
        <title>
          {t(
            'blog.headTitle',
            'Blog d\'Anna Elisa Valmori, psychologue et facilitatrice de constellations familiales à Paris'
          )}
        </title>
      </Head>
      <TopSection image="contact.jpg">
        {t('blog.title', 'Blog')}
      </TopSection>
      <MenuSection
        right
        title={t('blog.prisoner.title', 'Je me sens prisonnier !')}
        image="prisoner.jpg"
        link="blog-prisoner"
        linkCaption={t('blog.prisoner.linkCaption', "Lire l'article")}
      >
        {t(
          'blog.prisoner.body.before',
          "Cette période exceptionnelle est un grand bouleversement pour nous tous. Pour la première fois en " +
            "Europe, depuis les guerres mondiales, nous vivons une privation presque totale de notre liberté de " +
            "mouvement, au nom d'une plus grande sécurité. "
        )}
        <strong>
          {t(
            'blog.prisoner.body.bold',
            'Que pouvons-nous apprendre pour en sortir plus conscients et plus forts ?'
          )}
        </strong>
      </MenuSection>
      <MenuSection
        left
        title={t('blog.innerChild.title', "L'enfant intérieur")}
        image="inner-child.jpg"
        link="blog-inner-child"
        linkCaption={t('blog.innerChild.linkCaption', "Lire l'article")}
      >
        {t(
          'blog.innerChild.body',
          "Ces derniers temps, on a beaucoup entendu parler du concept d'enfant intérieur. Les références dans le " +
            'monde de la psychologie sont nombreuses : Jung parle de “l\'enfant divin” ; selon Winnicott, il s’agit ' +
            "de notre vrai moi ; pour Eric Berne, père de l'analyse transactionnelle, le moi-enfant est une " +
            'véritable instance de la personnalité qui se trouve dialoguer avec le moi-parent et le moi-adulte.'
        )}
      </MenuSection>
      <FooterSection />
    </Layout>
  );
};

export default BlogPage;

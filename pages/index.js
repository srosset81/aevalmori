import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import { P, H } from 'components/text';
import { AnimOnAppear } from 'components/motion';
import { MenuSection, FooterSection, BookingSection } from 'components/section';

const IndexPage = () => (
  <Layout>
    <Head>
      <title>Anna Elisa Valmori, psychologue et facilitatrice de constellations familiales à Paris</title>
    </Head>
    <BgImage src="/static/images/homepage.jpg" minH="100vh" align="middle" position="bottom left">
      <Div maxW="650px">
        <AnimOnAppear>
          <P
            shadow
            color="white"
            align="center"
            font="title"
            fontSize={{ xs: '6em', sm: '8em ' }}
            m="0"
            style={{ lineHeight: 0.7 }}
          >
            Anna Elisa Valmori
          </P>
          <P
            bold
            shadow
            color="white"
            align="center"
            font="subTitle"
            fontSize={{ xs: '1.7em', sm: '1.7em' }}
            lineHeight="1.4em"
            m="15px 0"
            style={{ textTransform: 'uppercase', letterSpacing: 2 }}
          >
            Psychologue et Facilitatrice de Constellations Familiales
          </P>
        </AnimOnAppear>
        <br />
        <br />
        <br />
      </Div>
    </BgImage>
    <BookingSection />
    {/*<QuoteSection author="C.G. Jung" bg="lightRose">*/}
    {/*  Votre vision devient claire lorsque vous pouvez regarder dans votre cœur. Celui qui regarde à l’extérieur de soi*/}
    {/*  ne fait que rêver ; celui qui regarde en soi se réveille.*/}
    {/*</QuoteSection>*/}
    <MenuSection right title="Qui suis-je ?" image="elisa.jpg" link="about">
      Ayant toujours été passionnée par la compréhension de la nature humaine, il a été très naturel pour moi d’orienter
      mes études vers la relation d’aide. Au travers de mon parcours, j’ai intégré différentes visions et orientations
      afin de pouvoir offrir différents outils aux personnes qui viennent me voir.
    </MenuSection>
    <MenuSection left title="Ma vision" image="single-tree-2.jpg" link="vision">
      Nous ne sommes pas seulement notre psychisme ou notre corps, mais nous formons un tout au sein duquel la dimension
      transpersonnelle et spirituelle a également son importance.
    </MenuSection>
    <MenuSection right title="Séances individuelles" image="plant-growing-2.jpg" link="services-individuals">
      Je propose des parcours personnalisés dans lesquels j’intègre les instruments que j'ai expérimentés sur moi-même
      au cours des années. Une valeur particulière est donnée au choix des objectifs à atteindre et à la réalisation de
      soi selon une vision holistique, transpersonnelle et globale de l'être humain.
    </MenuSection>
    <MenuSection left title="Constellations familiales" image="birds-sky.jpg" link="services-constellations">
      Les constellations familiales donnent la possibilité de nous reconnecter à nos racines. Le but est d’amener
      l’amour là où il y a eu souffrance, de laisser les fardeaux et les conflits dont nous sommes chargés et qui ne
      nous appartiennent pas, en laissant à chacun sa part de responsabilité.
    </MenuSection>
    <MenuSection right title="D.M.O.K.A." image="birds-chain.jpg" link="services-dmoka">
      La D.M.O.K.A. est une approche neuro-émotionnelle qui permet de déprogrammer le stress, les traumatismes, de
      changer ses croyances, d’adopter de nouveaux comportements et de se sortir des schémas récurrents en reconnaissant
      et en renforçant ses propres ressources.
    </MenuSection>
    <MenuSection left title="Témoignages" image="flowers.jpg" link="testimonies">
      Au fil des années, j'ai récolté de beaux témoignages que je souhaite partager avec vous sur cette page.
    </MenuSection>
    <MenuSection right title="Blog" image="contact.jpg" link="blog">
      Je vous partage mes réflexions par rapport aux thématiques que je rencontre dans mon travail, qui peuvent vous
      aider à éclairer des interrogations, vous inspirer... N'hésitez pas à les partager !
    </MenuSection>
    <MenuSection left title="Contactez-moi" image="butterfly-3.jpg" link="contact">
      N'hésitez pas à prendre contact avec moi, je répondrai à votre demande dans les meilleurs délais.
    </MenuSection>
    <FooterSection />
  </Layout>
);

export default IndexPage;

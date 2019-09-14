import React from 'react';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';
import { AnimOnAppear } from 'components/motion';
import { MenuSection, QuoteSection, FooterSection } from 'components/section';

const IndexPage = () => (
  <Layout>
    <BgImage src="/static/images/homepage.jpg" minH="100vh" align="middle" position="bottom left">
      <Div>
        <AnimOnAppear>
          <P
            shadow
            color="white"
            align="center"
            font="movingSkate"
            fontSize={{ xs: '6em', sm: '8em ' }}
            m="0"
            style={{ lineHeight: 0.7 }}
          >
            Anna Elisa
          </P>
          <P
            bold
            shadow
            color="white"
            align="center"
            font="caviarDreams"
            fontSize={{ xs: '1.7em', sm: '2em' }}
            m="0"
            style={{ textTransform: 'uppercase', letterSpacing: 2 }}
          >
            Valmori
          </P>
        </AnimOnAppear>
        <br />
        <br />
        <br />
      </Div>
    </BgImage>
    <QuoteSection author="Bert Hellinger" color="white" bg="darkPurple">
      La réalité rend fort et libre quand elle est reconnue.
    </QuoteSection>
    <MenuSection right title="Qui suis-je ?" image="elisa.jpg" link="about">
      Ayant toujours été passionnée par la compréhension de la nature humaine, il a été très naturel pour moi d’orienter
      mes études vers la relation d’aide. Au travers de mon parcours, j’ai intégré différentes visions et orientations
      afin de pouvoir offrir différents outils aux personnes qui viennent me voir.
    </MenuSection>
    <MenuSection title="Séances individuelles" image="plant-growing-2.jpg" link="services-individuals">
      Je propose des parcours personnalisés dans lesquels j’intègre les instruments que j'ai expérimentés sur moi-même
      au cours des années. Une valeur particulière est donnée au choix des objectifs à atteindre et à la réalisation de
      soi selon une vision holistique, transpersonnelle et globale de l'être humain.
    </MenuSection>
    <MenuSection right title="Constellations familiales" image="birds-sky.jpg" link="services-constellations">
      Les constellations familiales donnent la possibilité de nous reconnecter à nos racines. Le but est d’amener
      l’amour là où il y a eu souffrance, de laisser les fardeaux et les conflits dont nous sommes chargés et qui ne
      nous appartiennent pas, en laissant à chacun sa part de responsabilité.
    </MenuSection>
    <MenuSection title="Contactez-moi" image="contact.jpg" link="contact">
      N'hésitez pas à prendre contact avec moi en laissant vos coordonnées, je répondrai à votre demande dans les
      meilleurs délais.
    </MenuSection>
    <FooterSection />
  </Layout>
);

export default IndexPage;

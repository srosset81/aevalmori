import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Cell, Div, Row } from 'components/layout';
import { SideImage } from 'components/media';
import { P, LeadP } from 'components/text';
import { TopSection, FooterSection, ContentSection, TestimonySection, ContactSection } from 'components/section';
import { Trans } from '@lingui/macro';

const Year = ({ year, bg, children }) => (
  <Cell w={{ xs: 1, sm: 1 / 3 }} bg={bg}>
    <Div p={{ xs: '30px 25px', sm: '50px' }}>
      <P fontSize="3em" lineHeight="0.8em" m="0">
        {year}
      </P>
      <P fontSize="1.1em" m="15px 0 0">
        {children}
      </P>
    </Div>
  </Cell>
);

const AboutPage = () => (
  <Layout>
    <Head>
      <title>Contactez-moi - Anna Elisa Valmori, psychologue à Paris</title>
    </Head>
    <TopSection image="path-2.jpg" position="center bottom">
      <Trans id="about.title">Qui suis-je</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        Ayant toujours été passionnée par la compréhension de la nature humaine, il a été très naturel pour moi
        d’orienter mes études vers la relation d’aide. Au travers de mon parcours, j’ai intégré différentes visions et
        orientations afin de pouvoir offrir différents outils aux personnes qui viennent me voir.
      </LeadP>
      <SideImage src="/static/images/elisa-psi-2.jpg" />
      <P>
        Selon les légendes familiales, ma vocation de psychologue a été décelée très tôt : dès ma petite enfance,
        j'étais naturellement attirée vers les autres et, en particulier, vers les enfants ou les personnes en
        difficultés.
        <br />
        J'ai aussi ressenti – je crois depuis toujours – l'élan d’explorer, de connaître en profondeur les relations
        humaines, les différents phénomènes qui font notre société, afin de comprendre leur raison d’être...
        <br />
        Cette soif des connaissances m'a amené, en parallèle à mon parcours universitaire et à mon entrée dans le monde
        des adultes, à me lancer dans des voyages à l’autre bout du monde et à me plonger dans des voyages intérieurs.
        <br />
        Les premiers m’ont permis de connaître des réalités, cultures et modes de vie complètement différents du mien,
        mais surtout de me connaître plus en profondeur, loin de la célèbre « zone de confort », la cage dorée qui nous
        berce dans nos habitudes.
        <br />
        Les deuxièmes, qui m’ont conduit à la recherche de la vérité et de mon essence, furent tout aussi passionnants
        mais aussi parfois tortueux et difficiles.
      </P>
      <P>
        La connaissance de soi n’est pas toujours un voyage plaisant, surtout lorsqu’on va à la rencontre de notre part
        d’ombre, de nos peurs et de nos limites. Jung disait:{' '}
        <em>« Ce n’est pas en regardant la lumière qu’on devient lumineux, mais en plongeant dans son obscurité. »</em>
        <br />
        Pour cette raison, il peut être utile d’être accompagné par quelqu’un qui est déjà passé par ces sentiers
        tortueux, même s’il est important de se rappeler que nous sommes tous en chemin et que le travail sur soi
        continue toute la vie…
      </P>
      <P>
        J'ai beaucoup de gratitude pour tous les thérapeutes et formateurs qui m’ont transmis les connaissances et les
        outils que j'utilise aujourd’hui dans ma pratique et qui m'ont accompagné sur ce chemin – en particulier Gilles
        Placet et Pascale Chavance. C'est aussi grâce à eux si aujourd’hui je suis la psychologue que je suis.
      </P>
    </ContentSection>
    <Row>
      <Year month="Novembre" year="2005" bg="lightBlue">
        Obtention du diplôme de psychologie (Master&nbsp;II), psychologie clinique et communauté (110/110 avec mention)
      </Year>
      <Year month="Décembre" year="2006" bg="lightPurple">
        Participation au premier séminaire de Constellations Familiales
      </Year>
      <Year month="Septembre" year="2008" bg="lightBlue">
        Obtention du titre de Master en PNL humaniste intégré auprès de l’association Aleph (Italie)
      </Year>
      <Year month="Fin" year="2009" bg="lightPurple">
        Formation professionnelle en D.M.O.K.A., délivré par Pascal Chavance et Gilles Placet
      </Year>
      <Year month="Janvier" year="2011" bg="lightBlue">
        Certificat de Facilitatrice en Constellations Systémiques, délivré par l'Institut de Management Systémique
      </Year>
      <Year month="Fin" year="2017" bg="lightPurple">
        Déménagement en France et début d'une nouvelle vie&nbsp;!
      </Year>
    </Row>
    <ContactSection />
    <TestimonySection id="1368702" />
    <FooterSection />
  </Layout>
);

export default AboutPage;

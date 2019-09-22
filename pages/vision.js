import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { SideImage } from 'components/media';
import { P, LeadP } from 'components/text';
import {
  TopSection,
  FooterSection,
  QuoteSection,
  ContentSection,
  TestimonySection,
  ContactSection
} from 'components/section';

const VisionPage = () => (
  <Layout>
    <Head>
      <title>Ma vision - Anna Elisa Valmori, psychologue à Paris</title>
    </Head>
    <TopSection image="single-tree-2.jpg" position="bottom left">
      Ma vision
    </TopSection>
    <ContentSection id="vision">
      <LeadP>
        Nous ne sommes pas seulement notre psychisme ou notre corps, mais nous formons un tout au sein duquel la
        dimension transpersonnelle et spirituelle a également son importance. Notre santé et notre bien-être sont
        influencés par le dialogue et l’équilibre dynamique de toutes les parties de notre être, ainsi que par
        l’interaction avec les systèmes auquel nous appartenons – en particulier notre famille. Ce dernier point est ce
        qui caractérise l’approche systémique.
      </LeadP>
      <SideImage src="/static/images/colibris.jpg" noBottomMargin />
      <P>
        La personne qui demande de l’aide parce qu’elle vit une souffrance, est en effet souvent porteuse d’une
        problématique plus profonde du système auquel elle appartient. Elle porte la lumière sur un déséquilibre qui,
        grâce au travail sur soi, peut être dépassé, ainsi que le formule A. Jodorowsky :{' '}
        <em>
          « Les souffrances familiales, comme les anneaux d'une chaîne, se répètent de génération en génération jusqu'à
          ce qu'un descendant (...) en prenne conscience et transforme sa malédiction en bénédiction. »
        </em>
      </P>
      <P>
        La vision systémique permet d’élargir le regard à tout le système auquel nous appartenons – en dernière
        instance, la société – en mettant en lumière les mécanismes et inégalités qui bloquent notre pleine réalisation
        dans notre singularité, authenticité et liberté de conscience. La célèbre citation de Krishnamurti,{' '}
        <em>« ce n’est pas un signe de bonne santé mentale que d’être bien adapté à une société malade »</em>, reflète
        le piège dans lequel on tombe quand on cherche à « normaliser » la souffrance. On empêche alors que la crise
        devienne un moteur de changement au niveau personnel et sociétal.
      </P>
      <P>
        En tant que psychologue, j’espère contribuer à la création d’une société plus juste, en permettant à ceux qui
        viennent me voir d’initier ou d’approfondir un travail intérieur. Comme le dit le philosophe et paysan Pierre
        Rabhi,{' '}
        <em>
          « la vraie révolution est celle qui nous amène à nous transformer nous-mêmes pour transformer le monde »
        </em>
        .
      </P>
      <P style={{ clear: 'both' }}></P>
    </ContentSection>
    <QuoteSection author="Ameya Canovi" bg="darkPurple" color="white">
      Si vous y réfléchissez, votre malheur n'est pas causé par l'autre. Il vous a toujours appartenu. Tant que vous ne
      faites pas un travail sérieux, constant et honnête avec vous-même, vous rencontrerez toujours les mêmes
      dynamiques, les mêmes histoires
    </QuoteSection>
    <TestimonySection id="1368702" />
    <ContactSection />
    <FooterSection />
  </Layout>
);

export default VisionPage;

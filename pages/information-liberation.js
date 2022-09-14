import React from 'react';
import Head from 'next/head';
import {Layout} from 'components/app';
import {SideImage} from 'components/media';
import {LeadP, P, SubTitle} from 'components/text';
import {
  TopSection,
  FooterSection,
  TestimonySection,
  ContentSection,
  QuoteSection,
  AnnounceSection
} from 'components/section';
import {Trans} from '@lingui/macro';
import InformationSection from "../components/section/InformationSection";

const InformationLiberationPage = () => (
  <Layout>
    <Head>
      <title>Libération de l'information intra- et inter-organisation - Nouvel air</title>
    </Head>
    <TopSection image="tree.jpg">
      <Trans id="information-liberation.title">Libération de l'information</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        La juste circulation des informations via les outils numériques adéquats est un facteur essentiel de leur santé
        et de leur vitalité. Nous travaillons sur la circulation intra- et inter-organisations des informations depuis
        de nombreuses années et pouvons vous orienter et vous accompagner dans vos choix stratégiques, mais aussi
        développer des solutions sur mesure.
      </LeadP>
      <SubTitle>Circulation intra-organisation</SubTitle>
      <P>
        Si vos informations ne sont disponibles qu’à un petit nombre, il sera difficile d’impliquer une communauté plus
        large, en particulier si elle est bénévole. S’il est désiré, le partage du pouvoir sera rendu plus compliqué,
        voir impossible.
      </P>
      <P>
        Si les personnes sont noyées sous un flot d’informations non-pertinentes pour elles, cela
        paralysera également les efforts entrepris vers plus d’implication et de partage.
      </P>
      <P>
        De nos jours il existe de nombreux outils informatiques: espaces de chat, forums, wikis, ERP... Mais encore
        faut-il choisir l'outil répondant aux besoins précis de votre organisation, et trouver le bon moyen de
        l'intégrer à votre fonctionnement actuel, tant informatique qu'humain.
      </P>
      <InformationSection image="organigraph.png" link="https://cercles.jardiniersdunous.org">
        <strong>OrganiGraph</strong> est un logiciel open-source que nous avons développé avec l’objectif d’aider les
        organisations à rendre visible leur fonctionnement. Il permet de visualisation la structure de l’organisation
        (sous la forme d’une hiérarchie de cercles) et, pour chaque cercles, de voir les personnes impliquées, le
        calendrier des réunions, les documents, les actualités, etc. Un outil simple qui permet à n’importe qui de
        visualisation ce qui se passe pour potentiellement s’impliquer.
      </InformationSection>
      <SubTitle>Circulation inter-organisations</SubTitle>
      <P>
        Avec des outils appropriés, l’information peut circuler au-delà de votre organisation et aller toucher les
        acteurs de votre écosystème, ouvrant des possibilités de collaboration et de synergie.
      </P>
      <P>
        <a href="https://fr.wikipedia.org/wiki/Web_s%C3%A9mantique">Le web sémantique</a> est un standard qui permet à différentes organisations de partager leurs
        données, grâce à des vocabulaires communs. Il a été mis au point par le W3C, l’organisme international qui a permis l’émergence du
        web grâce à l’élaboration de standards communs (email, web…). Nous collaborons depuis 2018 avec <a href="https://virtual-assembly.org">l’Assemblée
        Virtuelle</a> pour mettre au point des technologies facilitant son déploiement.
      </P>
      <InformationSection right image="colibris.png" link="/colibris-study">
        Colibris a fait appel à Nouvel air pour résoudre un problème de communication inter-organisation: donner plus de
        visibilité à ce qui se passe à l’intérieur du mouvement. Notre solution a permis d’ouvrir l’intégralité des
        données du mouvement, ouvrant la voie à de la coopération inter-organisations.
      </InformationSection>
    </ContentSection>
    <FooterSection/>
  </Layout>
);

export default InformationLiberationPage;

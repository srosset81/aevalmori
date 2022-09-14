import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { SideImage } from 'components/media';
import { LeadP, P, SubTitle } from 'components/text';
import {
  TopSection,
  FooterSection,
  TestimonySection,
  ContentSection,
} from 'components/section';
import { Trans } from '@lingui/macro';

const OrganizationalConstellationsPage = () => (
  <Layout>
    <Head>
      <title>Constellations d'organisations à Compiègne et Paris - Nouvel air</title>
    </Head>
    <TopSection image="constellations-2.jpg">
      <Trans id="organizational-constellations.title">Constellations d'organisations</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        La Constellation d'organisation est un outil qui permet, à travers des mises en scènes, de faire apparaître
        votre organisation telle qu’elle est, dans toute sa complexité. Il permet de constater les dynamiques et
        résistances qui existent au sein du collectif, mais aussi de les faire évoluer en faisant littéralement “bouger
        les choses”.
      </LeadP>
      <SideImage align="left" src="/static/images/constellations-3.jpg"/>
      <P>
        Cet outil est une adaptation des Constellation familiales, pratiqué depuis des décennies partout dans le monde.
        En effet, une entreprise, une association, un groupe de personnes travaillant ensemble dans un but commun,
        constitue un système qui est régis par les mêmes principes que les systèmes familiaux. C’est un organisme à part
        entière, qui peut avoir besoin d’être “guéri” pour retrouver sa pleine vitalité et mener à bien sa mission.
      </P>
      <SubTitle>Pourquoi faire une Constellation d’organisation ?</SubTitle>
      <ul>
        <li>
          <P>
            Vous avez besoin de clarifier la raison d’être de votre organisation, de retrouver le lien avec ses
            bénéficiaires ?
          </P>
        </li>
        <li>
          <P>
            Vous voulez redynamiser les différents rôles et cercles qui la composent, ou imaginer une nouvelle manière
            de fonctionner ensemble ?
          </P>
        </li>
        <li>
          <P>
            Vous voulez mieux comprendre sa place dans un écosystème ou un territoire ?
          </P>
        </li>
        <li>
          <P>
            Vous rencontrez des tensions ou des difficultés par rapport à l’argent ?
          </P>
        </li>
        <li>
          <P>
            L’organisation est passée par des phases “traumatisantes” et vous ressentez que cela impacte encore son
            fonctionnement actuel ?
          </P>
        </li>
      </ul>
      <SubTitle>📃 Comment se déroule une Constellation ?</SubTitle>
      <SideImage align="right" src="/static/images/constellation-organisation.jpg"/>
      <P>
        La mise en scène d’une Constellation passe par plusieurs étapes : après avoir clarifié la problématique avec le
        facilitateur, la personne choisit parmi les participants des représentants de sa propre famille (ou de son
        organisation, s’il s’agit d’une constellation d’organisation). Il peut aussi choisir de mettre en scène son
        blocage, son objectif personnel, un symptôme dont il souffre, etc.
        <br/>
        A ce moment on peut observer la création d'un champ conscient, grâce auquel les participants auront accès à des
        sentiments, des émotions, parfois des symptômes physiques appartenant aux personnes qu'ils représentent.
        <br/>
        Accompagnant le mouvement, l'animateur pose des questions aux représentants pour obtenir des informations sur
        leur état d'esprit et leurs relations avec les autres personnages de la scène. Il peut aussi leur proposer des
        phrases qui révèlent les liens entre les personnages, pour favoriser l'expression de non-dits, des émotions,
        afin qu'un changement puisse se produire.
        <br/>
        Au fur et à mesure que la Constellation avance, les représentants entrent en contact les uns avec les autres,
        accompagnés dans l'expression de leur ressenti. Chacun prend sa juste place et l'énergie du champ devient plus
        légère.
        <br/>
        La résolution d'une Constellation donne à tous les participants le sentiment d’être déchargés d'un poids – un
        sentiment de paix émerge au sein du champ d'énergie familial.
      </P>
    </ContentSection>
    <TestimonySection id="1519285"/>
    <ContentSection>
      <SideImage align="left" src="/static/images/fusee.jpg"/>
      <SubTitle>✨ Offre d'accompagnement gratuit</SubTitle>
      <P>
        Si nous avons lancé « Nouvel air », c’est parce que nous sommes convaincus que des organisations saines peuvent
        avoir un profond impact sur le monde. Mais nous savons également que les organisations – en particulier les
        associations – n’ont pas toujours les moyens de se procurer les « soins » dont elles auraient besoin, soit parce
        qu’elles sont justement en difficultés financières, soit parce qu’elles fonctionnent avec des moyens économiques
        très limités.
      </P>
      <P>
        Face à ce constat, nous souhaitons « faire notre part » en proposant – au maximum deux fois par année – une
        constellation gratuite à une organisation qui en fait la demande. Cette offre comprend la « formule complète »
        que nous proposons dans nos prestations payantes, à savoir :
      </P>
      <ul>
        <li>
          <P>
            une visio de préparation pour déterminer précisément les problèmes sur lesquels vous souhaitez travailler ;
          </P>
        </li>
        <li>
          <P>
            une demi-journée de constellation (naturellement en présentiel), avec débrief « à chaud » des participants ;
          </P>
        </li>
        <li>
          <P>
            une débrief « à froid » pour réfléchir à ce qui est sorti de la constellation et imaginer les prochains pas
            qui pourraient être entrepris.
          </P>
        </li>
      </ul>
      <P>
        Pour candidater, merci de prendre connaissance de ce document.
      </P>
      <P style={{clear: 'both'}}></P>
    </ContentSection>
    <FooterSection/>
  </Layout>
);

export default OrganizationalConstellationsPage;

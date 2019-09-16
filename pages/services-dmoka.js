import React from 'react';
import { Layout } from 'components/app';
import { LeadP, P } from 'components/text';
import {
  TopSection,
  ContactSection,
  FooterSection,
  QuoteSection,
  ContentSection,
  TestimonySection
} from 'components/section';
import { Trans } from '@lingui/macro';
import { SideImage } from '../components/media';

const ServicesDmokaPage = () => (
  <Layout>
    <TopSection image="birds-chain.jpg">
      <Trans id="services.dmoka.title">D.M.O.K.A.</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        La D.M.O.K.A. est une approche neuro-émotionnelle qui permet de déprogrammer le stress, les traumatismes, de
        changer ses croyances, d’adopter de nouveaux comportements et de se sortir des schémas récurrents en
        reconnaissant et en renforçant ses propres ressources.
      </LeadP>
      <SideImage src="/static/images/adult-adventure.jpg" />
      <P>
        Pendant mon parcours de développement personnel et professionnel, j’ai rencontré et intériorisé différentes
        orientations et instruments qui me servent comme une « boîte à outils » afin d’aider les personnes qui font
        appel à moi dans leur singularité et leur demande spécifique.
      </P>
      <P>
        Cette approche dite « intégrative » reflète ma vision du monde et de l’être humain (lien vers « ma vision »).
        Elle permet de porter un regard plus large sur les problèmes qui peuvent être rencontrés, compte tenu qu’il
        n’existe pas une seule voie pour dépasser une problématique, et que chaque parcours est différent d’un autre.
      </P>
      <P>
        Il est en effet souvent nécessaire d'élargir l'horizon au « système » auquel appartient la personne, afin
        d'identifier l'événement non-résolu de la généalogie qui a laissé des traces dans la mémoire familiale et qui se
        répète depuis des générations.
      </P>
      <P>
        J’accompagne le patient dans la recherche de sa propre vérité, pour l’aider à accéder à la connaissance profonde
        de soi-même. Il n’y a pas de temps pré-établi. C’est la personne qui formule sa propre demande sur la base de ce
        qui est important pour elle : cela peut être un état de souffrance, un mal-être à dépasser, un besoin de soutien
        dans un moment délicat de sa vie, le désir d’atteindre un objectif (de type émotionnel, relationnel, matériel…)
        ou de sortir de scénarios répétitifs.
      </P>
      <P>
        Dans mon accompagnement, je mets à disposition des outils dont la finalité est l’autonomie de la personne et la
        prise de responsabilité : savoir écouter et répondre à ses propres besoins, pouvoir prendre des décisions sur la
        base de ce qui nous représente vraiment, avec pour objectif ultime la réalisation profonde de soi.
      </P>
      <P>
        Mon souhait est que chacun d’entre nous puisse transformer ses souffrances en talents – comme les alchimistes
        transmutaient le plomb en or – et puisse entreprendre le plus ardu mais gratifiant des chemins&nbsp;: devenir
        créateur de sa propre vie.
      </P>
    </ContentSection>
    <TestimonySection type="Dmoka" />
    <ContactSection />
    <FooterSection />
  </Layout>
);

export default ServicesDmokaPage;
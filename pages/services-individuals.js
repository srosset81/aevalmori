import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { SideImage } from 'components/media';
import { LeadP, P } from 'components/text';
import { TopSection, ContactSection, FooterSection, ContentSection, QuoteSection } from 'components/section';
import { Trans } from '@lingui/macro';
import { PageLink } from '../utils/router';

const ServiceIndividualPage = () => (
  <Layout>
    <Head>
      <title>Séances individuelles - Anna Elisa Valmori, psychologue à Paris</title>
    </Head>
    <TopSection image="plant-growing-2.jpg" position="bottom right">
      <Trans id="services.individuals.title">Séances individuelles</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        Je propose des parcours personnalisés dans lesquels j’intègre les instruments que j'ai expérimentés sur moi-même
        au cours des années. Une valeur particulière est donnée au choix des objectifs à atteindre et à la réalisation
        de soi selon une vision holistique, transpersonnelle et globale de l'être humain.
      </LeadP>
      <SideImage src="/static/images/bottle-cut.jpg" />
      <P>
        Nous sommes à un moment historique de grand renouvellement, nous avons accès à d’innombrables informations,
        thérapies, livres, techniques… Les choix que nous pouvons faire pour notre vie semblent infinis et, parfois,
        cela nous paralyse et nous désoriente, parce qu’il y a moins de points de repères que dans le passé. Pour cette
        raison il est important, aujourd’hui plus que jamais, d’entrer en contact profondément avec nous-même, avec
        cette part de sagesse qui nous accompagne depuis toujours, même si nous n’avons pas toujours été à son écoute.
        C’est grâce à elle que nous pouvons reconquérir un espace de liberté intérieur et retrouver la voie qui nous est
        propre.
      </P>
      <P>
        Pendant mon parcours de développement personnel et professionnel, j’ai rencontré et intériorisé différentes
        orientations et instruments qui me servent comme une « boîte à outils » afin d’aider les personnes qui font
        appel à moi dans leur singularité et leur demande spécifique.
      </P>
      <P>
        Cette approche dite « intégrative » reflète ma <PageLink page="vision">vision du monde et de l’être humain</PageLink>. Elle permet de porter un regard plus
        large sur les problèmes qui peuvent être rencontrés, compte tenu qu’il n’existe pas une seule voie pour dépasser
        une problématique, et que chaque parcours est différent d’un autre.
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
    <QuoteSection author="C.G. Jung" bg="lightRose">
      Votre vision devient claire lorsque vous pouvez regarder dans votre cœur. Celui qui regarde à l’extérieur de soi
      ne fait que rêver ; celui qui regarde en soi se réveille.
    </QuoteSection>
    <ContactSection />
    <FooterSection />
  </Layout>
);

export default ServiceIndividualPage;

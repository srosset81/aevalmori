import React from 'react';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { SideImage } from 'components/media';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Trans } from '@lingui/macro';

const ServicesConstellationsPage = () => (
  <Layout>
    <TopSection image="tree.jpg">
      <Trans id="services.constellations.title">Constellations familiales</Trans>
    </TopSection>
    <Div p="40px">
      <SideImage src="/static/images/butterfly.jpg "/>
      <SubTitle>
        <Trans id="services.constellations.title">Constellations familiales</Trans>
      </SubTitle>
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
      <P style={{ marginBottom: 0 }}>
        Mon souhait est que chacun d’entre nous puisse transformer ses souffrances en talents – comme les alchimistes
        transmutaient le plomb en or – et puisse entreprendre le plus ardu mais gratifiant des chemins&nbsp;: devenir
        créateur de sa propre vie.
      </P>
    </Div>
    <Div bg="ultraLightGrey" h="160px" align="middle" p="20px">
      <Div maxW="800px">
        <P fontSize="1.3em" align="center">
          <em>
            « Votre vision devient claire lorsque vous pouvez regarder dans votre cœur. Celui qui regarde à l’extérieur
            de soi ne fait que rêver ; celui qui regarde en soi se réveille. »
          </em>
          <br />
          C.G. Jung
        </P>
      </Div>
    </Div>
    <FooterSection />
  </Layout>
);

export default ServicesConstellationsPage;

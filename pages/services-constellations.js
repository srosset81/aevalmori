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
  QuoteSection,
  AnnounceSection
} from 'components/section';
import { useTranslate } from 'utils/i18n';

const ServicesConstellationsPage = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <Head>
        <title>
          {t('services-constellations.headTitle', 'Constellations Familiales à Paris - Anna Elisa Valmori, psychologue')}
        </title>
      </Head>
      <TopSection image="birds-sky.jpg">
        {t('services-constellations.title', 'Constellations familiales')}
      </TopSection>
      <ContentSection>
        <LeadP>
          {t(
            'services-constellations.lead',
            'Les Constellations familiales donnent la possibilité de nous reconnecter à nos racines. Le but est ' +
              'd’amener l’amour là où il y a eu souffrance, de laisser les fardeaux et les conflits dont nous sommes ' +
              'chargés et qui ne nous appartiennent pas, en laissant à chacun sa part de responsabilité.'
          )}
        </LeadP>
        <SideImage src="/static/images/birds-black-violet.jpg" />
        <P>
          {t(
            'services-constellations.intro',
            "Les Constellations familiales telles que nous les connaissons aujourd'hui doivent leur synthèse et " +
              'leur diffusion dans le monde entier à Bert Hellinger, psychanalyste allemand décédé en 2019. La ' +
              'méthode qu’il met au point combine deux aspects fondamentaux :'
          )}
        </P>
        <ul>
          <li>
            <P>
              {t(
                'services-constellations.hellinger.li1',
                "d'une part, l'aspect rituel, le lien avec la terre et les ancêtres, qu’il tient de son expérience " +
                  'de missionnaire en Afrique pendant une quinzaine d’années ;'
              )}
            </P>
          </li>
          <li>
            <P>
              {t(
                'services-constellations.hellinger.li2',
                "d’autre part, les approches thérapeutiques occidentales, notamment l'analyse transactionnelle, la " +
                  'thérapie familiale systémique et les constellations familiales (théorisées par Ruth McClendon et ' +
                  'Leslie Kadis), qu’Hellinger étudie à son retour en Allemagne.'
              )}
            </P>
          </li>
        </ul>
        <SubTitle>{t('services-constellations.systemicVision.title', 'La vision systémique')}</SubTitle>
        <P>
          {t('services-constellations.systemicVision.p1.l1', "Selon la vision systémique portée par Hellinger, nous sommes tous connectés, en résonance avec les autres et avec l'environnement qui nous entoure. En particulier, notre famille est un champ énergétique au sein duquel nous évoluons depuis notre naissance : chacun y occupe une place unique.")}
        <br />
        {t('services-constellations.systemicVision.p1.l2', "En élargissant notre regard, nous pouvons voir que nous sommes tous liés par une trame invisible : nous appartenons à une famille, qui dépend à son tour de la réunion de deux groupes familiaux, remontant aux générations précédentes et donnant vie à un arbre généalogique, unique pour chacun d’entre nous.")}
        </P>
        <P>
          {t('services-constellations.systemicVision.p2.l1', "Ces systèmes sont régis par des lois qu’Hellinger appelle les « ordres de l'amour ». Lorsque ces ordres ne sont pas respectés, le système n'est plus en équilibre et des problèmes apparaissent qui, s’ils ne remontent pas à la conscience, sont transmis aux générations suivante. C'est le cas des événements tragiques ou des « violations systémiques » (lorsqu’une personne de la famille a été exclue, jugée, traitée injustement, etc.).")}
        <br />
        {t('services-constellations.systemicVision.p2.l2', "Cette transmission se fait principalement de manière inconsciente : la personne qui vit un blocage dans sa vie n’est que le porteur d’un symptôme de déséquilibre du système – l'inconscient familial répète (ou manifeste) ce qui n’est pas résolu, reconnu et compris.")}
        <br />
        {t('services-constellations.systemicVision.p2.l3', "Il est à noter que, souvent, ce fardeau – qui ne nous appartient pas – est porté par loyauté et amour envers le système, avec l’espoir de réparer ce qui s'est passé.")}
        </P>
        <P>
          {t('services-constellations.systemicVision.p3.l1', "Le but d'une Constellations est de rétablir l'ordre, d’amener l’amour là où il y a eu souffrance et de donner la voix à celles et ceux qui ont été jugés, exclus et traités injustement.")}
        <br />
        {t('services-constellations.systemicVision.p3.l2', "Grâce à cette mise en scène, chacun de nous peut prendre sa propre place dans le système familial en laissant, avec amour, leurs destin à ceux qui les ont précédés et en leur rendant les poids et des responsabilités qui ne lui appartiennent pas.")}
        </P>
        <SubTitle>
          {t('services-constellations.why.title', 'Pourquoi participer à une Constellation ?')}
        </SubTitle>
        <SideImage align="right" src="/static/images/flowers-2.jpg" />
        <P>
          {t(
            'services-constellations.why.intro',
            'Chacun de nous peut vivre des difficultés dans sa vie, à différents niveaux, car il existe différents ' +
              'types de besoins fondamentaux chez l’être humain. Une Constellation familiale peut être pertinente ' +
              'si vous êtes dans l’un ou l’autre de ces cas :'
          )}
        </P>
        <ul>
          <li>
            <P>
              {t(
                'services-constellations.why.li1',
                'Vous vivez des dynamiques répétitives dans votre vie : symptômes psycho-physiques récurrents, ' +
                  "dynamiques relationnelles qui vous font souffrir, échecs dans vos entreprises, difficultés sur " +
                  "votre lieu de travail ou dans votre relation avec l'argent ;"
              )}
            </P>
          </li>
          <li>
            <P>
              {t(
                'services-constellations.why.li2',
                'Vous voulez vous réaliser pleinement dans votre vie professionnelle, amoureuse, vous sentir ' +
                  'joyeux et présent ici et maintenant ;'
              )}
            </P>
          </li>
          <li>
            <P>
              {t(
                'services-constellations.why.li3',
                'Vous voulez atteindre un objectif spécifique dans votre vie, comprendre en profondeur une ' +
                  'difficulté dans le "système" dont vous faites partie (famille, entreprise, association, etc.) ' +
                  'pour retrouver équilibre et harmonie ;'
              )}
            </P>
          </li>
          <li>
            <P>
              {t(
                'services-constellations.why.li4',
                "Vous n'arrivez pas à prendre votre place dans la vie, vous voulez découvrir votre mission ;"
              )}
            </P>
          </li>
          <li>
            <P>
              {t(
                'services-constellations.why.li5',
                "Vous voulez suivre un chemin de connaissance de soi au sein d'un groupe où vous pouvez faire " +
                  "l'expérience de la confiance et de l'absence de jugement."
              )}
            </P>
          </li>
        </ul>
        <SubTitle>
          {t('services-constellations.how.title', 'Comment se déroule une Constellation ?')}
        </SubTitle>
        <P>
          {t('services-constellations.how.p1.l1', "La mise en scène d’une Constellation passe par plusieurs étapes : après avoir clarifié la problématique avec le facilitateur, la personne choisit parmi les participants des représentants de sa propre famille (ou de son organisation, s’il s’agit d’une constellation d’organisation). Il peut aussi choisir de mettre en scène son blocage, son objectif personnel, un symptôme dont il souffre, etc.")}
        <br />
        {t('services-constellations.how.p1.l2', "A ce moment on peut observer la création d'un champ conscient, grâce auquel les participants auront accès à des sentiments, des émotions, parfois des symptômes physiques appartenant aux personnes qu'ils représentent.")}
        <br />
        {t('services-constellations.how.p1.l3', "Accompagnant le mouvement, l'animateur pose des questions aux représentants pour obtenir des informations sur leur état d'esprit et leurs relations avec les autres personnages de la scène. Il peut aussi leur proposer des phrases qui révèlent les liens entre les personnages, pour favoriser l'expression de non-dits, des émotions, afin qu'un changement puisse se produire.")}
        <br />
        {t('services-constellations.how.p1.l4', "Au fur et à mesure que la Constellation avance, les représentants entrent en contact les uns avec les autres, accompagnés dans l'expression de leur ressenti. Chacun prend sa juste place et l'énergie du champ devient plus légère.")}
        <br />
        {t('services-constellations.how.p1.l5', "La résolution d'une Constellation donne à tous les participants le sentiment d’être déchargés d'un poids – un sentiment de paix émerge au sein du champ d'énergie familial.")}
        </P>
      </ContentSection>
      <TestimonySection id="1519285" />
      <ContentSection>
        <SideImage align="left" src="/static/images/butterfly.jpg" />
        <SubTitle>
          {t('services-constellations.changes.title', 'Quels changements peut-on attendre ?')}
        </SubTitle>
        <P>
          {t('services-constellations.changes.p1.l1', "Grâce à la Constellation familiale, nous sortons de l'analyse et l'interprétation rationnelles et entrons dans le champ des observations phénoménologiques, sans aucun jugement. La Constellation peut nous montrer une vision différente de celle que nous avons toujours eue de notre problème ou de notre difficulté : une origine inconnue auparavant, une image de la relation entre nos parents différente de celle qui nous connaissions depuis toujours, etc...")}
        <br />
        {t('services-constellations.changes.p1.l2', "Les fondements du travail des Constellations est de regarder la réalité et « prendre les choses comme elles sont » (dixit Hellinger). Sans cette acceptation, nos souhaits, nos peurs et nos jugements interférent avec notre perception et nous empêchent d'avancer et de changer.")}
        </P>
        <P>
          {t('services-constellations.changes.p2.l1', "Les Constellations sont capables de produire de puissants changements. Elles mettent en mouvement des processus de guérison importants, dont le temps d'action ne peut pas être prédéterminé")}
        <br />
        {t('services-constellations.changes.p2.l2', "La personne doit toutefois avoir la volonté d’intégrer ce qui lui a été montré lors de la Constellation. Plus son niveau de responsabilité individuelle est élevé, plus cela se fera naturellement.")}
        </P>
        <P>
          {t('services-constellations.changes.p3.l1', "Prendre notre place dans le système familial est le premier pas fondamental qui nous permet de prendre notre place d’adulte dans le monde.")}
        <br />
        {t('services-constellations.changes.p3.l2', "En nous reconnectant à nos racines et en disant « oui » à la vie – vie qui est passée à travers nos parents pour arriver jusqu’à nous – nous pouvons être authentiquement nous-mêmes. Nous pouvons aussi recueillir les dons et talents qui sont arrivés jusqu’à nous à travers notre arbre généalogique.")}
        </P>
        <P style={{ clear: 'both' }}></P>
      </ContentSection>
      <QuoteSection author="Alejandro Jodorowsky" color="black" bg="tertiaryLight">
        {t(
          'services-constellations.quote',
          'Sentir qu’on se détache du passé, se retrouver dans un corps d’adulte, porter le fardeau des années ' +
            'douloureuses. Mais au cœur, garder l’enfant, comme une hostie vivante, comme un canari blanc, comme ' +
            'un digne diamant, comme une lucidité sans murs. Portes et fenêtres ouvertes, traversées par le ' +
            'vent, seulement par le vent, rien que par le vent.'
        )}
      </QuoteSection>
      <FooterSection />
    </Layout>
  );
};

export default ServicesConstellationsPage;

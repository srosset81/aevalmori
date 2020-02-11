import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { SideImage } from 'components/media';
import { LeadP, P } from 'components/text';
import {
  TopSection,
  FooterSection,
  TestimonySection,
  ContentSection,
  QuoteSection,
  ContactSection
} from 'components/section';
import { Trans } from '@lingui/macro';

const BlogInnerChildPage = () => (
  <Layout>
    <Head>
      <title>L'enfant intérieur - Blog d'Anna Elisa Valmori, psychologue</title>
    </Head>
    <TopSection image="inner-child.jpg">
      <Trans id="blog.inner-child.title">L'enfant intérieur</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        Ces derniers temps, on a beaucoup entendu parler du concept d'enfant intérieur. Les références dans le monde de
        la psychologie sont nombreuses : Jung parle de “l'enfant divin” et de notre essence ; selon Winnicott, il s’agit
        de notre vrai moi ; pour Eric Berne, père de l'analyse transactionnelle, le moi-enfant est une véritable
        instance de la personnalité qui se trouve vivre et dialoguer avec le moi-parent et le moi-adulte.
      </LeadP>
      <SideImage src="/static/images/inner-child-2.jpg" />
      <P>
        Tout au long de notre existence, il y a cette partie de nous ─ l'enfant que nous avons été ─ qui nous
        accompagne, même si souvent nous n'avons pas été éduqués à la reconnaître et à l'écouter. Mais qu'est-ce que
        cela signifie en pratique ? Cela signifie que, même si nous sommes devenus adultes, indépendants, parents,
        libres de prendre les décisions de notre vie, il y a une partie de nous qui a besoin de soins, d'amour,
        d'attention, de protection, de nourriture, de tendresse…
      </P>
      <P>
        Il y a deux aspects indissociables de l'enfant intérieur, les deux faces d'une même pièce : d'une part, il y a
        l'enfant qui porte avec lui son histoire, ses éventuels traumatismes et blessures ; d'autre part, il y a la
        partie la plus pure de nous-mêmes, l'énergie vitale, la créativité, le contact avec notre “moi supérieur” qui,
        selon les croyances personnelles, peut représenter le lien avec notre propre Âme.
        <br />
        Prendre contact avec l'enfant blessé est souvent une étape difficile, car il est douloureux de ressentir à
        nouveau notre souffrance passée. Comme enfants, nous avons tous vécu des situations dans lesquelles nous nous
        sommes sentis rejetés, abandonnés, trahis, humiliés, traités injustement (voir “Les cinq blessures” de Lise
        Bourbeau) ─ des situations dans lesquelles nos besoins n'ont pas été écoutés et acceptés. Nous avons presque
        tous fait l'expérience de l'amour “conditionné” lorsque les adultes autour de nous nous ont demandé, de façon
        plus ou moins voilée, d'être différents de ce que nous étions.
        <br />
        Mais le risque lorsque nous “fermons les robinets” du ressenti pour éviter la souffrance, c’est de ne plus
        pouvoir non plus ressentir les émotions de joie et de bonheur. Si nous nous empêchons d’aller à la rencontre de
        cette partie blessée en nous, il devient plus difficile d'accéder à notre part d'énergie vitale, à cette
        ressource inépuisable dans lequel nous pouvons puiser pour réaliser notre vie et la rendre pleine de sens.
      </P>
      <P>
        Beaucoup de gens pensent que cela n'en vaut pas la peine et qu'il est trop tard : ils tombent dans la
        résignation, pensent qu'il n'y a plus rien à faire… Ils croient que ce qu'ils auraient pu être et devenir, si
        les choses n'étaient pas allées d'une certaine façon, n'existera jamais.
        <br />
        Mon expérience personnelle et professionnelle m'a montré que même les enfants les plus blessés, les enfants
        maltraités, abusés n'attendent qu’une chose: que quelqu'un, un adulte aimant, fasse le pas pour les voir, les
        écouter et les prendre par la main.
      </P>
      <P>
        Bien souvent, nous oublions cette partie de nous-mêmes lorsque nous sommes devenus adultes. Et, de façon
        inconsciente, nous lui faisons revivre les blessures et les traumatismes que nous avons déjà vécus, ayant
        intériorisé la manière dont les adultes se sont comportés avec nous.
        <br />
        Si nous nous sommes sentis rejetés, ne méritant pas d’être aimé, et si cette blessure est encore "ouverte", il
        est habituel de rejeter cette partie fragile, de la juger. Si nous avons manqué de reconnaissance, si nous nous
        sommes presque jamais sentis à la hauteur, nous essaierons par tous les moyens de chercher la reconnaissance à
        l’extérieur mais cela ne sera jamais suffisant...
      </P>
      <P>
        La bonne nouvelle, c’est qu'il est possible de briser ce cercle vicieux : nous pouvons devenir nos propres
        parents, nous pouvons être ces adultes aimants qui peuvent enfin donner à leur enfant intérieur ce dont il a
        besoin et ce qui lui a tant manqué.
        <br />
        Et plus il y aura d'adultes qui auront pris conscience de l'existence de leur enfant intérieur et qui s'en
        seront occupé, plus la chaîne de blessures, de violences et d'incompréhensions ─ souvent transgénérationnelle ─
        sera brisée. Car souvent les adultes qui ne peuvent pas entrer en contact avec leurs propres émotions ravivent à
        leur tour, par un jeu de miroirs, ces blessures chez les enfants qu'ils rencontrent sur leur chemin.
      </P>
      <P>
        Comment franchir cette étape ? Il existe de nombreux chemins et le mieux est de sentir lequel est le plus adapté
        à nos besoins.
        <br />
        Pour ma part, en vue d’accompagner les personnes dans la reconnexion avec leur enfant intérieur, je propose un
        parcours de séances individuelles avec des techniques telles que : DMOKA (dont l'objectif principal est le
        remaniement du traumatisme en agissant, grâce aux mouvements oculaires rapides, sur les circuits neuronaux du
        cerveau limbique et émotionnel), les visualisations et l'hypnose ericksonienne pour entrer en contact profond
        avec l'enfant intérieur, les ateliers de Constellations Familiales.
        <br />
        Je rapporte ci-dessous quelques lignes d’un témoignage écrit par une jeune mère qui a participé à une journée de
        Constellations Familiales, afin de vous montrer quels types de résultats concrets peuvent être obtenus dans le
        cadre d’un travail sur l'enfant intérieur.
      </P>
      <TestimonySection id="2716835" showMore={false} expand />
      <P>
        En embrassant la souffrance et en guérissant nos blessures, en écoutant notre enfant intérieur, il est donc
        possible d'accéder à cette partie de nous qui existe et existera toujours, malgré tout, et qui peut devenir
        notre plus grande alliée.
      </P>
    </ContentSection>
    <QuoteSection author="Ameya Canovi" bg="lightPurple">
      Si vous y réfléchissez, votre malheur n'est pas causé par l'autre. Il vous a toujours appartenu. Tant que vous ne
      faites pas un travail sérieux, constant et honnête avec vous-même, vous rencontrerez toujours les mêmes
      dynamiques, les mêmes histoires
    </QuoteSection>
    <ContactSection />
    <FooterSection />
  </Layout>
);

export default BlogInnerChildPage;

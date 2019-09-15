import React from 'react';
import { Layout } from 'components/app';
import { Cell, Div, Row } from 'components/layout';
import { Image, SideImage } from 'components/media';
import { P, LeadP, SubTitle } from 'components/text';
import { TopSection, FooterSection, QuoteSection, ContentSection } from 'components/section';
import { Trans } from '@lingui/macro';

const AboutPage = () => (
  <Layout>
    <TopSection image="elisa.jpg">
      <Trans id="about.title">Qui suis-je</Trans>
    </TopSection>
    <ContentSection>
      <LeadP>
        Ayant toujours été passionnée par la compréhension de la nature humaine, il a été très naturel pour moi
        d’orienter mes études vers la relation d’aide. Au travers de mon parcours, j’ai intégré différentes visions et
        orientations afin de pouvoir offrir différents outils aux personnes qui viennent me voir.
      </LeadP>
      <SideImage src="/static/images/elisa-psi.jpg" />
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
        <em>
          « Ce n’est pas en regardant la lumière qu’on devient lumineux, mais en plongeant dans son obscurité. Mais ce
          travail est souvent désagréable, donc impopulaire. »
        </em>
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
      <P>
        Depuis sept ans, j’accompagne mes patients, hommes et femmes courageux, qui ont décidés d’aller au-delà d’une
        vision superficielle d’eux-mêmes et d’embrasser leurs souffrances. En découvrant le sens supérieur de nos
        expériences, on s’allège petit à petit, et le chemin devient plus joyeux et libre des conditionnements
        extérieurs et intérieurs.
      </P>
      <P>
        Ma mission est d’accueillir et d’accompagner les personnes dans le plus ardu mais le plus enrichissant des
        chemins : devenir responsable de sa propre vie et créateur de sa propre réalité.
      </P>
      <P>
        Nous sommes à un moment historique de grand renouvellement, nous avons accès à d’innombrables informations,
        thérapies, livres, techniques… Les choix que nous pouvons faire pour notre vie semblent infinis et, parfois,
        cela nous paralyse et nous désoriente, parce qu’il y a moins de points de repères que dans le passé. Pour cette
        raison il est important, aujourd’hui plus que jamais, d’entrer en contact profondément avec nous-même, avec
        cette part de sagesse qui nous accompagne depuis toujours, même si nous n’avons pas toujours été à son écoute.
        C’est grâce à elle que nous pouvons reconquérir un espace de liberté intérieur et retrouver la voie qui nous est
        propre.
      </P>
    </ContentSection>
    <QuoteSection author="C.G. Jung">
      Votre vision devient claire lorsque vous pouvez regarder dans votre cœur. Celui qui regarde à l’extérieur de soi
      ne fait que rêver ; celui qui regarde en soi se réveille.
    </QuoteSection>
    <ContentSection id="vision">
      <SubTitle>Ma vision</SubTitle>
      <SideImage src="/static/images/colibris.jpg" align="right" />
      <P>
        Nous ne sommes pas seulement notre psychisme ou notre corps, mais nous formons un tout au sein duquel la
        dimension transpersonnelle et spirituelle a également son importance. Notre santé et notre bien-être sont
        influencés par le dialogue et l’équilibre dynamique de toutes les parties de notre être, ainsi que par
        l’interaction avec les systèmes auquel nous appartenons – en particulier notre famille. Ce dernier point est ce
        qui caractérise l’approche systémique.
      </P>
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
    </ContentSection>
    <FooterSection />
  </Layout>
);

export default AboutPage;

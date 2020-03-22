import React from 'react';
import YouTube from 'react-youtube';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { LeadP, P, SubTitle } from 'components/text';
import {
  TopSection,
  ContactSection,
  FooterSection,
  ContentSection,
  TestimonySection,
  QuoteSection,
  VideoSection, AnnounceSection
} from 'components/section';
import { SideImage } from '../components/media';

const ServicesDmokaPage = () => (
  <Layout title="D.M.O.K.A.">
    <Head>
      <title>
        D.M.O.K.A. à Paris- Déprogrammation par les Mouvements Oculaires, Kinesthésiques et Auditifs - Anna Elisa
        Valmori, psychologue à Paris
      </title>
    </Head>
    <AnnounceSection dmoka />
    <TopSection image="wave.jpg" position="center bottom">
      D.m.o.k.a.
    </TopSection>
    <ContentSection>
      <LeadP>
        La D.M.O.K.A.® (Déprogrammation par les Mouvements Oculaires, Kinesthésiques et Auditifs) est une approche
        neuro-émotionnelle qui permet de déprogrammer le stress, les traumatismes, de changer ses croyances, d’adopter
        de nouveaux comportements et de se sortir des schémas récurrents en reconnaissant et en renforçant ses propres
        ressources.
      </LeadP>
      <SideImage src="/static/images/eye-2.jpg" />
      <P>
        La D.M.O.K.A. est une des thérapies neuro-émotionnelles les plus efficaces. Ses origines remontent à des
        techniques telles que le yoga occulaire, l'I.M.O. (Intégration par les Mouvements Oculaires) et les mouvements
        orthoptiques, ainsi que dans l'hypnose, la PNL et les thérapies humanistes.
      </P>
      <P>
        Il s’agit d’une méthode thérapeutique qui a été conçue au début des années 2000 par{' '}
        <a href="https://www.dmoka.org/" target="_blank">
          Pascale Chavance
        </a>
        , orthoptiste diplômée de la faculté de médecine de Paris et spécialiste en thérapies humanistes et familiales.
      </P>
      <SubTitle>Comment fonctionne la D.M.O.K.A. ?</SubTitle>
      <P>
        La D.M.O.K.A. permet de désensibiliser des chocs et événements traumatisants – récents et lointains – qui ont
        laissés des traces dans notre mémoire (agressions, violence, deuils, traumatismes, mais aussi de simples chocs
        émotionnels, stress, culpabilité, colère...) et d'en désactiver l'impact négatif.
      </P>
      <P>
        La prise de conscience d'un choc ne résout pas toujours de façon automatique les manifestations physiques ou
        émotionnelles qui en découlent. En effet, le choc inhibe la possibilité d'intégration de l'événement
        traumatique, qui reste généralement bloqué au niveau du “cerveau émotionnel”, sans pouvoir être traité par
        l'analyse rationnelle du cerveau cognitif.
      </P>
      <P>
        Chaque fois que nous nous trouvons confrontés à un événement qui a des similitude avec le traumatisme original,
        une réponse de survie est déclenchée par notre cerveau. Or cette réponse est inadapée aux circonstances du
        moment présent parce que, dans cette état d’urgence, notre cerveau émotionnel prédomine sur notre cerveau
        rationnel. Nos capacités d'analyse et de prise de décisions sont donc perturbées.
      </P>
      <P>
        La D.M.O.K.A. permet, à partir du sentiment négatif ressenti sur le moment, de créer des liens et des
        connections avec des événements et des traumatismes du passé, offrant ainsi la possibilité d’intégrer des
        expériences douloureuses. On a ainsi l’opportunité de changer des croyances limitantes ou des perceptions
        erronées, de mieux se connaître et de trouver des solutions dans notre vie en rapport avec notre propre vérité.
      </P>
    </ContentSection>
    <VideoSection id="IlAUmzI6O9E" />
    <ContentSection>
      <SubTitle>Dans quels cas la D.M.O.K.A. est-elle pertinente ?</SubTitle>
      <P>
        La D.M.O.K.A. est très efficace pour les T.S.P.T., les troubles de stress post-traumatique (suite à des viols,
        violences, accidents..), les deuils non résolus ainsi que dans le traitement des sentiments “négatif” tels que
        la culpabilité ou la colère. Elle permet également de faire face à des scénarios récurrents d’échecs ou
        d’insatisfaction, à du stress sévère, des phobies, des addictions...
      </P>
      <P>
        Ce traitement donne également d’excellents résultats au niveau psycho-somatique (intolérances alimentaires,
        eczéma, acouphènes, attaques de panique, etc.).
      </P>
      <P>
        La D.M.O.K.A. peut être insérée dans un parcours thérapeutique, mais peut aussi être utilisée ponctuellement
        dans une situation de stress, un choc, ou dans le domaine du développement personnel (comme pour du coaching,
        par exemple), afin de libérer des blocages et atteindre les objectifs que l’on s’est fixé.
      </P>
      <SubTitle>Comment se passe une séance de D.M.O.K.A. ?</SubTitle>
      <P>
        La D.M.O.K.A. est une approche qui peut être objectivée par le patient et par le thérapeute. Au début de la
        séance, la personne est invitée à revivre la situation stressante et/ou traumatique et à indiquer le niveau de
        stress ressenti sur une échelle de 0 (calme) à 10 (niveau de stress maximal).
      </P>
      <P>
        Pendant la séance, on utilise les mouvements oculaires, kinesthésiques et auditifs reprenant les mécanismes
        naturels d’auto-guérison existants chez l’être humain. À la fin de la séance, le patient évaluera le changement
        par rapport à la situation initiale : généralement l'impact négatif et le stress sera alors très faible, voire
        inexistant.
      </P>
      <P>
        La D.M.O.K.A. permet d'ancrer des “états-ressources”, de changer nos croyances sur nous-mêmes et sur la réalité,
        en utilisant des "cognitions positives" personnelles qui nous permettent de poursuivre le processus
        d'élaboration et de changement même après la séance, nous amenant dans un état de bien-être, de légèreté et de
        paix intérieure.
      </P>
    </ContentSection>
    <TestimonySection type="Dmoka" />
    <ContactSection />
    <FooterSection />
  </Layout>
);

export default ServicesDmokaPage;

import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { P, SubTitle } from 'components/text';
import { ContactSection, FooterSection, QuoteSection } from 'components/section';
import { styled, theme, mediaQuery } from 'utils/styling';

const PERFACTIVE_URL = 'https://perfactive.fr/anna-elisa-valmori/date-v2?people=11236&reason=110694';

const Hero = styled.div`
  background: linear-gradient(135deg, rgba(80, 50, 90, 0.55) 0%, rgba(60, 40, 90, 0.55) 100%),
    url('/static/images/ose-prendre-ta-place-hero.jpg') center/cover no-repeat;
  color: white;
  padding: 60px 25px;
  text-align: center;
  ${mediaQuery('sm')} {
    padding: 80px 50px;
  }
`;

const Section = styled(({ alt, ...props }) => <div {...props} />)`
  padding: 45px 25px;
  ${props => props.alt && `background: #f7f2f9;`}
  ${mediaQuery('sm')} {
    padding: 60px 50px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const CtaButton = styled(({ light, ...props }) => <a {...props} />)`
  display: inline-block;
  font-family: ${theme.fontFamily.subTitle};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 1.1em;
  text-decoration: none;
  cursor: pointer;
  padding: 15px 35px;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  color: ${props => (props.light ? theme.colors.primaryDark : 'white')};
  background-color: ${props => (props.light ? 'white' : theme.colors.primaryDark)};
  border: 1px solid ${props => (props.light ? 'white' : theme.colors.primaryDark)};
  &:hover {
    background-color: transparent;
    color: ${props => (props.light ? 'white' : theme.colors.primaryDark)};
  }
`;

const PainPoint = styled.div`
  background: white;
  padding: 25px;
  margin: 20px 0;
  border-left: 4px solid ${theme.colors.primaryDark};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SolutionBox = styled.div`
  background: #f7f2f9;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  ${mediaQuery('sm')} {
    padding: 50px;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 40px 0;
  ${mediaQuery('lg')} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Step = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  ul {
    text-align: left;
    margin-top: 15px;
    padding-left: 20px;
    color: ${theme.colors.darkGrey};
  }
  li {
    margin: 10px 0;
  }
`;

const StepNumber = styled.div`
  background: ${theme.colors.primaryDark};
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  margin: 0 auto 20px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 40px 0;
  ${mediaQuery('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Benefit = styled.div`
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Testimonial = styled(({ highlight, ...props }) => <div {...props} />)`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  border-top: 4px solid ${theme.colors.primaryLight};
  ${props =>
    props.highlight &&
    `
    border-left: 5px solid ${theme.colors.primaryDark};
    background: #fdfcfe;
  `}
`;

const ImagineBox = styled.div`
  background: linear-gradient(135deg, #f7f7fa 0%, ${theme.colors.secondaryLight} 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 40px 0;
  ${mediaQuery('sm')} {
    padding: 50px;
  }
`;

const CtaSection = styled.div`
  text-align: center;
  padding: 60px 25px;
  background: linear-gradient(135deg, #b48cb1 0%, ${theme.colors.primaryDark} 100%);
  color: white;
  ${mediaQuery('sm')} {
    padding: 80px 50px;
  }
`;

const CtaInnerBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 30px;
  max-width: 700px;
  margin: 30px auto;
  text-align: left;
  ${mediaQuery('sm')} {
    padding: 40px;
  }
`;

const About = styled.div`
  overflow: hidden;
`;

const AboutText = styled.div``;

const PortraitImage = styled.img`
  width: 300px;
  max-width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  float: left;
  margin: 0 30px 15px 0;
`;

const JoyImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const IllustrationImage = styled.img`
  width: 100%;
  max-width: ${props => props.maxW || '700px'};
  display: block;
  margin: ${props => props.m || '20px auto 30px'};
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const SectionTitle = ({ children, ...props }) => (
  <SubTitle color="primaryDark" align="center" fontSize={{ xs: '1.4em', md: '1.8em' }} m="0 0 30px" {...props}>
    {children}
  </SubTitle>
);

const CtaCenter = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primaryDark};
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-bottom: 15px;
  font-size: 1em;
  text-decoration: underline;
`;

const ReadMore = ({ tail, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {open && children}
      {tail}
      <ReadMoreButton onClick={() => setOpen(!open)}>{open ? 'Lire moins ←' : 'Lire la suite →'}</ReadMoreButton>
    </>
  );
};

const OsePrendreTaPlacePage = () => (
  <Layout>
    <Head>
      <title>Parcours Ose prendre ta place - Anna Elisa Valmori, psychologue</title>
    </Head>

    {/* HERO */}
    <Hero>
      <P shadow color="white" align="center" font="title" fontSize={{ xs: '3.5em', md: '5.5em' }} m="0" lineHeight="1em">
        Ose prendre ta place
      </P>
      <P color="white" align="center" fontSize="1.1em" m="10px 0">
        Par Anna-Elisa Valmori, psychologue
      </P>
      <P color="white" align="center" fontSize={{ xs: '1.2em', md: '1.5em' }} m="0 0 30px">
        Un accompagnement pour celles et ceux qui passent toujours après les autres. Pour apprendre à dire non sans
        culpabilité et reprendre leur place.
      </P>
      <P color="white" align="center" italic fontSize="1.3em" m="20px 0">
        Combien de fois t'es-tu senti passer à côté de ta vie&nbsp;?
      </P>
      <P color="white" align="center" italic fontSize="1.3em" m="20px 0">
        Et si tu pouvais enfin te choisir, sans culpabilité ni peur d'être abandonné&nbsp;?
      </P>
      <Div m="40px 0 0" align="center">
        <CtaButton href="#appel" light>
          Je veux en savoir plus → réserver l'appel
        </CtaButton>
      </Div>
    </Hero>

    {/* PAIN POINTS */}
    <Section>
      <Container>
        <SectionTitle>Te reconnais-tu dans l'une de ces situations&nbsp;?</SectionTitle>
        <PainPoint>
          <P m="0">
            Tu es épuisé de toujours passer après les autres. Tu donnes tout aux autres et il ne reste plus rien pour
            toi. Tu voudrais enfin vivre pour toi, mais tu ne sais pas comment.
          </P>
        </PainPoint>
        <PainPoint>
          <P m="0">
            Tu as une peur constante de déplaire. Tu dis oui par automatisme, même quand tout ton corps te crie de dire
            non. La culpabilité t'envahit dès que tu penses à toi.
          </P>
        </PainPoint>
        <PainPoint>
          <P m="0">
            Tu cherches l'amour et la validation à l'extérieur. Tu as l'impression que si tu ne fais pas plaisir aux
            autres, tu ne seras pas aimé. Tu attends leur approbation pour te sentir bien.
          </P>
        </PainPoint>
        <PainPoint>
          <P m="0">
            Tu te sens trop sensible. Les émotions te submergent, tu absorbes celles des autres, et tu voudrais pouvoir
            te protéger sans te couper complètement de ce que tu ressens.
          </P>
        </PainPoint>
        <PainPoint>
          <P m="0">
            Tu rêves de relations authentiques où tu peux être toi-même, poser tes limites sans te justifier pendant
            des heures, et te sentir respecté sans avoir peur d'être abandonné.
          </P>
        </PainPoint>
        <PainPoint>
          <P m="0">
            Tu es fatigué de vivre pour les autres. Tu voudrais commencer à exister pour toi, mais tu ne sais pas par
            où commencer sans te sentir égoïste.
          </P>
        </PainPoint>
      </Container>
    </Section>

    {/* TU AS ESSAYÉ */}
    <Section alt>
      <Container>
        <SectionTitle>Tu as essayé différentes choses</SectionTitle>
        <P align="center" fontSize="1.2em" m="0 0 30px">
          Tu as cherché à apaiser cette partie de toi qui ne va pas bien en essayant diverses approches&nbsp;: yoga,
          respiration, sophrologie, thérapies énergétiques, séances de développement personnel, coaching…
        </P>
        <P align="center" fontSize="1.2em" m="0 0 30px">
          Ces démarches t'ont souvent apporté un soulagement temporaire, mais inévitablement,{' '}
          <strong>les mêmes problèmes reviennent toujours.</strong>
        </P>
        <P align="center" fontSize="1.2em" m="0 0 30px">
          Tu t'es senti mieux, mais le problème est revenu. Peut-être que ce dont tu as besoin, c'est une approche qui
          aille travailler encore plus en profondeur.
        </P>
        <P align="center" fontSize="1.2em" m="0">
          Et à force, tu finis par te dire que rien ne marche sur toi. Que c'est peut-être toi, le problème.
        </P>
      </Container>
    </Section>

    {/* SOLUTION */}
    <Section>
      <Container>
        <SolutionBox>
          <SubTitle color="primaryDark" align="center" fontSize={{ xs: '1.3em', md: '1.5em' }} m="0 0 20px">
            Laisse-moi te rassurer et t'expliquer pourquoi c'est normal
          </SubTitle>
          <P fontSize="1.2em" lineHeight="1.8em" m="0">
            Le problème ce n'est pas toi. C'est que tu avances en faisant plein de choses différentes, des séances par
            ci par là. Tu éteins le feu, tu mets des sparadraps sur tes blessures, ça va un peu mieux et après tu
            arrêtes…
          </P>
          <P fontSize="1.2em" lineHeight="1.8em" m="20px 0 0">
            Mais malheureusement la vie te confronte à de nouvelles situations et tes schémas reviennent en force.
          </P>
          <P fontSize="1.2em" lineHeight="1.8em" m="20px 0 0">
            Tant que tu n'auras pas fait le processus jusqu'au bout, jusqu'à déraciner les causes profondes de la
            souffrance que tu vis depuis des années, les symptômes continueront à émerger.
          </P>
        </SolutionBox>
      </Container>
    </Section>

    <QuoteSection author="Carl Jung" bg="tertiaryLight">
      Rends conscient l'inconscient, sinon c'est l'inconscient qui guidera ta vie et tu appelleras ça le destin.
    </QuoteSection>

    {/* LE PARCOURS */}
    <Section alt>
      <Container>
        <SectionTitle>C'est pour arrêter ce schéma infernal que j'ai conçu ce parcours</SectionTitle>
        <P align="center" fontSize="1.3em" lineHeight="1.8em" m="30px 0">
          <strong>«&nbsp;Ose prendre ta place&nbsp;»</strong> est un programme de{' '}
          <strong>transformation profonde en 4 mois</strong> qui t'accompagne à&nbsp;:
        </P>
        <Div maxW="800px" m="0 auto">
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Te choisir enfin</strong>, sans culpabilité ni peur de déplaire
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Faire des choix qui sont justes pour toi</strong>, alignés avec tes vrais besoins
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Dire NON</strong> avec clarté et poser tes limites sans te justifier
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Retrouver confiance en toi</strong> et une véritable estime de toi-même
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Arrêter de chercher l'amour et la validation à l'extérieur</strong>
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Arrêter de t'épuiser</strong> en voulant sauver les autres à leur place
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Commencer à exister aussi pour toi</strong>, sans te sentir égoïste, et prendre pleinement ta
            place
          </P>
          <P fontSize="1.1em" lineHeight="2em" m="0">
            ✨ <strong>Créer des relations authentiques</strong> où tu peux être toi-même sans peur d'être abandonné
          </P>
        </Div>
        <P align="center" fontSize="1.2em" lineHeight="1.8em" m="40px 0 30px">
          En travaillant sur tes blessures du passé avec des méthodes concrètes et un accompagnement profond, tu
          transformeras ta relation avec toi-même, tu apprendras à dire NON, à poser tes limites et commencer à vivre
          aussi pour toi.
        </P>
        <Div maxW="700px" m="40px auto">
          <P align="center" italic fontSize="1.3em" lineHeight="1.8em" color="primaryDark" m="0">
            «&nbsp;Transformer tes souffrances en forces, et devenir créateur de ta propre vie.&nbsp;»
          </P>
        </Div>
        <CtaCenter>
          <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener">
            Prends ta place → oui, je le veux maintenant
          </CtaButton>
        </CtaCenter>
      </Container>
    </Section>

    {/* 3 ÉTAPES */}
    <Section>
      <Container>
        <SectionTitle>Les 3 étapes du parcours Ose prendre ta place 🎯</SectionTitle>
        <IllustrationImage src="/static/images/ose-prendre-ta-place-steps.jpg" alt="Papillon et chrysalide" />
        <StepsGrid>
          <Step>
            <StepNumber>1</StepNumber>
            <SubTitle color="primaryDark" align="center" fontSize="1.2em" m="0 0 15px">
              Ose rompre les schémas du passé
            </SubTitle>
            <P align="left" color="primaryDark" m="0 0 10px">
              Libération de la culpabilité, de la peur d'être abandonné et du besoin de validation extérieure.
            </P>
            <P align="left" m="0">
              Déracinement des causes profondes qui te font dire oui par peur de déplaire.
            </P>
            <ul>
              <li>🎯 D.M.O.K.A®&nbsp;: Déprogrammation des traumatismes et des croyances limitantes</li>
              <li>Vision systémique et transgénérationnelle&nbsp;: Psychogénéalogie et Constellations Familiales</li>
              <li>Identification et transformation des schémas répétitifs inconscients</li>
            </ul>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <SubTitle color="primaryDark" align="center" fontSize="1.2em" m="0 0 15px">
              Ose te connaître vraiment
            </SubTitle>
            <P align="left" italic color="primaryDark" m="0 0 10px">
              Construction de ta nouvelle maison intérieure
            </P>
            <P align="left" m="0">
              Reconnexion avec ton enfant intérieur pour retrouver confiance, clarté et estime de soi. Apprendre à te
              protéger sans te couper de tes émotions.
            </P>
            <ul>
              <li>D.M.O.K.A®&nbsp;: Reprogrammation de nouvelles croyances positives</li>
              <li>Hypnose Ericksonienne</li>
              <li>Visualisations et méditations guidées</li>
              <li>Constellations Familiales</li>
              <li>Gestion des émotions</li>
            </ul>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <SubTitle color="primaryDark" align="center" fontSize="1.2em" m="0 0 15px">
              Ose prendre ta place
            </SubTitle>
            <P align="left" color="primaryDark" m="0 0 10px">
              Devenir l'adulte aimant dont tu aurais eu besoin.
            </P>
            <P align="left" m="0">
              Te choisir enfin&nbsp;: dire NON sans culpabilité, poser tes limites et créer des relations où tu peux
              être toi-même.
            </P>
            <ul>
              <li>Identification et expression de tes besoins</li>
              <li>Création de limites saines</li>
              <li>Commencer à vivre aussi pour toi</li>
              <li>Outils à utiliser en toute autonomie pour accueillir tes parts blessées et ton enfant intérieur</li>
            </ul>
          </Step>
        </StepsGrid>
      </Container>
    </Section>

    {/* CE QUE TU VAS OBTENIR */}
    <Section alt>
      <Container>
        <SectionTitle>Ce que comprend le parcours</SectionTitle>
        <IllustrationImage
          src="/static/images/ose-prendre-ta-place-benefits.jpg"
          alt="Graines germant, symbole de croissance"
        />
        <BenefitsGrid>
          <Benefit>
            <P fontSize="3em" m="0 0 15px" align="center">
              🎯
            </P>
            <SubTitle color="primaryDark" align="center" fontSize="1.1em" m="0 0 10px">
              10 Séances Individuelles
            </SubTitle>
            <P align="center" m="0">
              Un accompagnement personnalisé et sur mesure, adapté à ta situation unique
            </P>
          </Benefit>
          <Benefit>
            <P fontSize="3em" m="0 0 15px" align="center">
              ♾️
            </P>
            <SubTitle color="primaryDark" align="center" fontSize="1.1em" m="0 0 10px">
              Accès illimité aux ressources
            </SubTitle>
            <P align="center" m="0">
              Accès illimité à toutes les ressources nécessaires pour compléter ton parcours, à ton rythme
            </P>
          </Benefit>
          <Benefit>
            <P fontSize="3em" m="0 0 15px" align="center">
              💬
            </P>
            <SubTitle color="primaryDark" align="center" fontSize="1.1em" m="0 0 10px">
              Support WhatsApp
            </SubTitle>
            <P align="center" m="0">
              Pour être accompagné dans l'émergence des résistances au changement.
            </P>
          </Benefit>
          <Benefit>
            <P fontSize="3em" m="0 0 15px" align="center">
              📝
            </P>
            <SubTitle color="primaryDark" align="center" fontSize="1.1em" m="0 0 10px">
              Exercices Pratiques
            </SubTitle>
            <P align="center" m="0">
              Nouvelles routines et exercices entre les séances pour ancrer le travail et intégrer les changements au
              quotidien
            </P>
          </Benefit>
        </BenefitsGrid>
        <CtaCenter>
          <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener">
            Prends ta place
          </CtaButton>
        </CtaCenter>
      </Container>
    </Section>

    {/* IMAGINE */}
    <Section alt>
      <Container>
        <SectionTitle>Imagine ta vie transformée…</SectionTitle>
        <IllustrationImage
          src="/static/images/ose-prendre-ta-place-imagine.jpg"
          alt="Fleurs d'amandier en pleine floraison, symbole de renouveau"
          maxW="350px"
          m="0 auto 30px"
        />
        <ImagineBox>
          <P align="center" fontSize="1.4em" bold color="primaryDark" m="0 0 30px">
            Ferme les yeux et imagine…
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0 0 25px">
            Comment serait ta vie si tu pouvais dire NON sans culpabilité, sans cette peur constante de déplaire qui te
            paralyse&nbsp;?
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0 0 25px">
            Si tu pouvais enfin te choisir, vivre pour toi sans te sentir égoïste, et arrêter de tout donner aux autres
            jusqu'à l'épuisement&nbsp;?
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0 0 25px">
            Si tu pouvais arrêter de chercher l'amour et la validation à l'extérieur, et enfin retrouver confiance,
            clarté et estime de toi&nbsp;?
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0">
            Cette personne qui occupe pleinement sa place, qui pose ses limites avec assurance, qui a des relations
            authentiques où elle peut être elle-même… <strong>c'est toi dans 4 mois.</strong>
          </P>
        </ImagineBox>
        <Div maxW="700px" m="30px auto 0">
          <P align="center" italic fontSize="1.1em" color="primaryDark" m="0">
            «&nbsp;Ta vision devient claire lorsque tu peux regarder dans ton cœur. Celui qui regarde à l'extérieur de
            soi ne fait que rêver&nbsp;; celui qui regarde en soi se réveille.&nbsp;» C.G. Jung
          </P>
        </Div>
      </Container>
    </Section>

    {/* QUI SUIS-JE */}
    <Section id="qui-suis-je">
      <Container>
        <SectionTitle>Qui suis-je&nbsp;?</SectionTitle>
        <About>
          <PortraitImage src="/static/images/ose-prendre-ta-place-1.jpg" alt="Anna-Elisa Valmori" />
          <AboutText>
            <SubTitle color="primaryDark" align="left" fontSize="1.3em" m="0 0 15px">
              Je suis Anna-Elisa Valmori
            </SubTitle>
            <P m="0 0 15px">
              Psychologue depuis 2005, facilitatrice en Constellations Familiales et formée à la technique D.M.O.K.A.®
              pour le traitement des traumatismes, j'ai une approche intégrative qui combine différentes
              orientations&nbsp;: PNL, hypnose éricksonienne, psychogénéalogie, travail sur l'enfant intérieur.
            </P>
            <P m="0 0 15px">
              Je t'accompagne à retrouver ton enfant intérieur et sa joie de vivre parce que je suis passée par là
              moi-même.
            </P>
            <P m="0 0 15px">
              À un moment de ma vie, je me suis retrouvée face à des choix qui ne correspondaient pas aux attentes de
              ma famille&nbsp;: en 2017, j'ai quitté l'Italie par amour, en l'espace de quelques mois, et j'ai
              recommencé ma vie à zéro, en m'installant dans un endroit où personne ne me connaissait. Je sais ce que
              c'est que de vivre le syndrome du sauveur, la culpabilité qui s'installe quand on choisit sa propre voie.
            </P>
            <P m="0 0 15px">
              J'ai osé recommencer de zéro dans un pays étranger, exercer comme psychologue et animer des groupes de
              Constellations Familiales qui ont été complets pendant des années. Aujourd'hui encore, j'ai adopté un
              mode de vie semi-nomade, et j'ai appris que prendre sa place, ce n'est pas s'ancrer à un seul endroit,
              mais savoir la retrouver partout où la vie me mène&nbsp;: notre vraie place et notre sécurité se trouvent
              à l'intérieur de nous.
            </P>
            <P m="0">
              Ce qui me donne le plus de satisfaction aujourd'hui, c'est d'aider les personnes à prendre leur place,
              dans la recherche de leur propre vérité, pour savoir écouter leurs besoins, prendre des décisions
              alignées, et atteindre la réalisation profonde de soi.
            </P>
          </AboutText>
        </About>
      </Container>
    </Section>

    {/* TÉMOIGNAGES */}
    <Section>
      <Container>
        <SectionTitle>Ce qu'ils disent du parcours</SectionTitle>
        <IllustrationImage src="/static/images/ose-prendre-ta-place-testimonials.jpg" alt="Fleurs de cerisier" />

        <Testimonial highlight>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            <strong>
              «&nbsp;Je viens de terminer le parcours OSE PRENDRE TA PLACE. Quelle expérience et quelle rapidité pour
              retrouver, en ce qui me concerne, la confiance en soi&nbsp;! C'est exactement ce que recherche une
              thérapie courte et efficace avec l'accompagnement d'Anna-Elisa tout en douceur.&nbsp;»
            </strong>
          </P>
          <P bold color="primaryDark" m="0">
            ⭐⭐⭐⭐⭐ Sabine
          </P>
        </Testimonial>

        <Testimonial highlight>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            <strong>
              «&nbsp;J'ai plus travaillé en une séance avec Anna-Elisa sur mon passé qu'avec ma psy habituelle en 6
              mois, et ça m'a fait un bien fou&nbsp;!&nbsp;»
            </strong>{' '}
            La technique Dmoka m'a permis de dissoudre la douleur de mon enfant intérieur. Je me sens aujourd'hui plus
            légère, comme si de nombreuses barrières sont tombées.
          </P>
          <P bold color="primaryDark" m="0">
            C.
          </P>
        </Testimonial>

        <Testimonial highlight>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;J'avais fait une première séance psy avec Anna-Elisa il y a 3 ans. Cette séance avait vraiment été
            révélatrice quant au sujet abordé.&nbsp;»
          </P>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;J'ai finalement repris contact avec elle l'année dernière, sentant que d'autres sujets me
            travaillaient et me pesaient depuis trop longtemps. J'avais besoin d'être accompagnée pour mieux comprendre
            et faire ressortir certaines émotions.&nbsp;»
          </P>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            <strong>
              «&nbsp;Via le parcours 'Ose prendre ta place', Anna-Elisa a très bien su me guider pour m'aider à me
              comprendre, écouter mes besoins et trouver qui je suis. Grâce à cela, j'arrive aujourd'hui à poser mes
              limites et trouver une sérénité dans ma vie personnelle et professionnelle que je n'avais jamais eu
              auparavant.&nbsp;»
            </strong>
          </P>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;Je sais aujourd'hui vers qui me tourner sans hésiter si le besoin se fait ressentir de reprendre une
            séance. Encore merci pour ton écoute et ton travail de qualité&nbsp;!&nbsp;»
          </P>
          <P bold color="primaryDark" m="0">
            ⭐⭐⭐⭐⭐ Lison
          </P>
        </Testimonial>

        <Testimonial highlight>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;J'ai réalisé le parcours Ose prendre ta place que j'ai terminé en juin 2026. Avant de débuter le
            parcours, j'ai consulté Anna-Elisa à 3 reprises l'an dernier, un peu en urgence. Elle a toujours été d'une
            aide incroyable, qui m'a permis d'aller mieux directement après les séances.&nbsp;»
          </P>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            <strong>
              «&nbsp;Le parcours a été pour moi salvateur, je ne regrette pas&nbsp;! Il est structuré pour progresser
              véritablement et ne pas se perdre. Anna-Elisa a su me recentrer sur mes objectifs de départ tout en les
              faisant évoluer au besoin.&nbsp;»
            </strong>
          </P>
          <ReadMore>
            <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
              «&nbsp;Ce qui m'a plu avec Anna-Elisa dès le départ, c'est le fait qu'elle n'est pas dans la
              complaisance&nbsp;: elle dit ce qui est, avec douceur, bienveillance, respect et honnêteté. En soi, tout
              ce que l'on peut rechercher chez quelqu'un qui veut vraiment nous aider.&nbsp;»
            </P>
            <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
              «&nbsp;Je continue avec Anna-Elisa à une fréquence beaucoup moins intense que le parcours, pour
              travailler ce qu'il reste. Je la remercie du fond du cœur pour son temps, qu'elle ne compte pas, que ce
              soit pendant les séances ou même en dehors, où elle reste présente et disponible pour conseiller et
              aider à voir les choses avec plus de douceur envers soi-même. Merci&nbsp;!&nbsp;»
            </P>
          </ReadMore>
          <P bold color="primaryDark" m="0">
            ⭐⭐⭐⭐⭐ Céline
          </P>
        </Testimonial>

        <Testimonial highlight>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;J'ai contacté Elisa alors que je venais d'être arrêtée pour un épuisement professionnel, sceptique
            quant à la méthode DMOKA. Dès le premier rendez-vous, la magie a opéré&nbsp;: un cadre rassurant, plein de
            douceur et d'empathie, où je me suis sentie parfaitement entendue.&nbsp;»
          </P>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            <strong>
              «&nbsp;Le résultat est bluffant&nbsp;: levée de tous les blocages évoqués en séance, y compris le
              burn-out, retour de la joie et de la confiance en soi.&nbsp;»
            </strong>
          </P>
          <ReadMore
            tail={
              <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
                «&nbsp;Je suis heureuse de témoigner que l'accompagnement d'Elisa a tout simplement transformé ma vie.
                J'avais déjà suivi une thérapie de plusieurs années sans autant de bénéfices.&nbsp;»
              </P>
            }
          >
            <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
              «&nbsp;Quant à la DMOKA, j'avais confiance en Elisa pour lui partager les images qui me venaient, et
              elle s'est toujours montrée ouverte sur ces visions. Visions à partir desquelles nous avons
              travaillé.&nbsp;»
            </P>
            <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
              «&nbsp;Une séance m'a particulièrement marquée, celle où j'avais partagé ma peur de ne plus aimer mon
              fils suite à des crises d'adolescence assez marquées. Elisa a su mettre le doigt sur l'amour
              conditionnel dans lequel j'avais été élevée et qui marquait encore mes relations, notamment celle avec
              mon fils.&nbsp;»
            </P>
            <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
              «&nbsp;Le changement a été spectaculaire&nbsp;: j'ai toute confiance dans l'amour que je porte à mon
              fils, tout en sachant aussi poser le cadre et manifester mon autorité. Je suis la maman aimante et la
              mère tutrice. Mes peurs sont débloquées, je me retrouve moi et me libère des masques et mémoires
              anciennes. Tout cela dans un profond respect et une assurance tranquille.&nbsp;»
            </P>
          </ReadMore>
          <P bold color="primaryDark" m="0">
            ⭐⭐⭐⭐⭐ A.
          </P>
        </Testimonial>

        <Testimonial>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;Quand je repense à l'année dernière, j'ai l'impression que plusieurs années se sont écoulées.
            J'étais complètement perdue et j'ai pu renouer avec mes proches, accepter de faire entrer des amis dans ma
            vie.{' '}
            <strong>
              Je suis enfin devenue moi-même, telle que je suis vraiment. Pas un être humain en mode automatique
              attendant que sa vie passe. J'ai enfin vécu.
            </strong>
            &nbsp;»
          </P>
          <P bold color="primaryDark" m="0">
            M.
          </P>
        </Testimonial>

        <Testimonial>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;Après avoir essayé plusieurs types d'accompagnement, celui d'Anna-Elisa s'est avéré le plus efficace
            dès la première séance. Son écoute active lui permet d'identifier avec rapidité les points sur lesquels
            travailler et c'est avec douceur et empathie qu'elle nous accompagne.&nbsp;»
          </P>
          <P bold color="primaryDark" m="0">
            L.
          </P>
        </Testimonial>

        <Testimonial>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;Pendant des années, j'ai cherché des réponses sans résultats probants. Grâce à ma constellation,
            j'ai pu dépasser et accepter la mort de mon père. Pour la première fois, j'ai envie de faire ma vie et de
            me réaliser. Après 26 années passées avec ce poids, c'est une libération.&nbsp;»
          </P>
          <P bold color="primaryDark" m="0">
            E.
          </P>
        </Testimonial>

        <Testimonial>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;Anna-Elisa m'a accompagnée sur un chemin de guérison avec douceur et bienveillance. Après avoir
            testé un certain nombre de thérapeutes, j'ai fait la rencontre d'Anna-Elisa qui m'a tout de suite mise à
            l'aise et avec qui j'ai pu tout de suite me sentir en confiance. L'accompagnement est pragmatique et les
            méthodes proposées font leur effet. La pertinence des analyses d'Anna-Elisa m'a souvent permis de mettre
            en lumière les problématiques essentielles à travailler. Je la remercie et la recommande vivement.&nbsp;»
          </P>
          <P bold color="primaryDark" m="0">
            F.
          </P>
        </Testimonial>

        <Testimonial highlight>
          <P italic color="grey" lineHeight="1.8em" m="0 0 15px">
            «&nbsp;Avec la DMOKA, les résultats ont été bluffants sur la compréhension de moi-même et surtout le retour
            de la confiance, de la joie et de la libération de ce qui ne m'appartient pas. Accompagnement de grande
            qualité et à l'efficacité redoutable&nbsp;: la transformation au quotidien est évidente et durable. Merci
            Anna-Elisa&nbsp;!&nbsp;»
          </P>
          <P bold color="primaryDark" m="0">
            ⭐⭐⭐⭐⭐ Yaëlle
          </P>
        </Testimonial>

        <CtaCenter>
          <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener">
            Toi aussi tu veux changer → réserve l'appel
          </CtaButton>
        </CtaCenter>
        <P align="center" m="30px 0 0">
          <a href="https://maps.app.goo.gl/dS2EU7DYLq9ihMVY7" target="_blank" style={{ color: theme.colors.primaryDark }}>
            Voir tous les avis sur Google →
          </a>
        </P>
      </Container>
    </Section>

    {/* RESPIRO PRE-CTA */}
    <Section>
      <Container>
        <IllustrationImage
          src="/static/images/ose-prendre-ta-place-respiro.jpg"
          alt="Coucher de soleil sur la mer"
          maxW="550px"
          m="0 auto 20px"
        />
      </Container>
    </Section>

    {/* CTA RÉSERVER */}
    <CtaSection id="appel">
      <Container>
        <SubTitle color="white" align="center" fontSize={{ xs: '1.4em', md: '1.8em' }} m="0 0 30px">
          Prêt à te choisir, enfin&nbsp;?
        </SubTitle>
        <CtaInnerBox>
          <SubTitle color="white" align="left" fontSize="1.2em" m="0 0 20px">
            Avant de commencer, on fait connaissance
          </SubTitle>
          <P color="white" m="0 0 15px">
            Je ne travaille pas avec tout le monde, ni de la même manière avec chacun.
          </P>
          <P color="white" m="0 0 15px">
            Avant tout engagement, on prend le temps d'un appel. Tu me parles de là où tu en es, de ce qui te bloque.
            De mon côté, je te dis honnêtement si ce parcours est fait pour toi, et comment on l'ajusterait à tes
            objectifs.
          </P>
          <P color="white" m="0">
            Pas de pression, pas d'engagement à ce stade. Juste un vrai échange pour voir si on avance ensemble.
          </P>
        </CtaInnerBox>
        <P color="white" align="center" fontSize="1.3em" m="0 0 40px">
          Ne laisse pas passer une année de plus à vivre que pour les autres.
          <br />
          Le moment de te choisir SANS CULPABILITÉ, c'est maintenant.
        </P>
        <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener" light>
          Réserve ta séance découverte gratuite
        </CtaButton>
        <P color="white" align="center" fontSize="1.1em" m="30px 0 0">
          📧 aelisa.valmori@gmail.com
          <br />
          💬 Ou contacte-moi directement sur WhatsApp
        </P>
      </Container>
    </CtaSection>

    {/* FAQ */}
    <Section>
      <Container>
        <SectionTitle>Questions fréquentes</SectionTitle>
        <Div maxW="800px" m="0 auto">
          <Div m="0 0 30px">
            <SubTitle color="primaryDark" fontSize="1.2em" m="0 0 10px">
              Combien de temps dure le parcours&nbsp;?
            </SubTitle>
            <P m="0">
              Le parcours complet dure 4 mois avec 10 séances&nbsp;: les 3-4 premières séances sont hebdomadaires ou
              tous les 10 jours, puis les suivantes ont lieu toutes les deux ou trois semaines. Entre les séances, tu
              recevras des exercices pratiques pour intégrer le travail effectué.
            </P>
          </Div>
          <Div m="0 0 30px">
            <SubTitle color="primaryDark" fontSize="1.2em" m="0 0 10px">
              Est-ce que ça marche vraiment&nbsp;?
            </SubTitle>
            <P m="0">
              Au début du parcours, nous définissons ensemble les objectifs et un domaine de ta vie, afin que le
              travail soit efficace et les changements mesurables, contrairement à des séances à l'unité où l'on agit
              sur l'urgence et le symptôme. Aucun parcours ne fonctionne sans ton engagement. Ce que je peux t'assurer,
              c'est que je serai à tes côtés pendant ces 4 mois pour t'accompagner au mieux. Contrairement aux
              approches qui soulagent temporairement, ce parcours va à la racine des problèmes. Des résultats sont
              possibles dès les premières séances, et la transformation devient durable car tu intègres de nouveaux
              schémas profondément.
            </P>
          </Div>
          <Div m="0 0 30px">
            <SubTitle color="primaryDark" fontSize="1.2em" m="0 0 10px">
              Les séances se font en ligne ou en présentiel&nbsp;?
            </SubTitle>
            <P m="0">
              Les séances sont possibles en ligne, avec l'avantage de ne pas avoir à te déplacer à chaque fois pour
              rejoindre le cabinet, ce qui te permet de gagner du temps pour te consacrer aux exercices et au travail
              après les séances.
            </P>
          </Div>
          <Div m="0 0 30px">
            <SubTitle color="primaryDark" fontSize="1.2em" m="0 0 10px">
              Combien coûte le parcours&nbsp;?
            </SubTitle>
            <P m="0">
              Le parcours prévoit différentes modalités de paiement, y compris en plusieurs fois. C'est certes un
              engagement pour nous deux, et ce sera ton premier vrai pas vers un changement profond. Tu pourras poser
              toutes tes questions pendant l'appel découverte.
            </P>
          </Div>
          <Div m="0">
            <SubTitle color="primaryDark" fontSize="1.2em" m="0 0 10px">
              Y a-t-il des facilités de paiement&nbsp;?
            </SubTitle>
            <P m="0">
              Oui, le paiement en 3 fois est possible pour faciliter ton investissement dans ta transformation.
            </P>
          </Div>
        </Div>
      </Container>
    </Section>

    {/* FINAL CTA */}
    <Section alt>
      <Container>
        <SectionTitle>Ta nouvelle vie t'attend</SectionTitle>
        <Div align="center" m="30px 0">
          <JoyImage src="/static/images/ose-prendre-ta-place-2.jpg" alt="La joie de vivre" />
        </Div>
        <Div maxW="800px" m="30px auto">
          <P align="center" fontSize="1.2em" lineHeight="1.8em" m="0">
            Imagine-toi dans 4 mois&nbsp;: tu te réveilles en sachant que tu es ta priorité. Tu dis
            «&nbsp;non&nbsp;» sans te justifier. Tu ne cherches plus l'approbation des autres pour te sentir bien. Tu
            vis pour toi, et tu te sens enfin libre.
          </P>
        </Div>
        <Div maxW="800px" m="30px auto">
          <P align="center" fontSize="1.2em" lineHeight="1.8em" m="0">
            Tu as des relations authentiques où tu peux être toi-même. Tu poses tes limites avec assurance. Tu n'es
            plus épuisé de tout donner aux autres. Tu occupes pleinement ta place. Tu commences enfin à te donner de la
            valeur, et la vie te le rend.
          </P>
        </Div>
        <Div maxW="800px" m="30px auto">
          <P align="center" fontSize="1.2em" lineHeight="1.8em" m="0">
            <strong>
              Cette transformation est possible. Et elle commence par une décision&nbsp;: celle de te choisir, SANS
              CULPABILITÉ.
            </strong>
          </P>
        </Div>
        <CtaCenter>
          <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener">
            Commence ton parcours maintenant
          </CtaButton>
        </CtaCenter>
      </Container>
    </Section>

    <ContactSection />
    <FooterSection />
  </Layout>
);

export default OsePrendreTaPlacePage;

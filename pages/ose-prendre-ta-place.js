import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div, Hidden } from 'components/layout';
import { BgImage } from 'components/media';
import { P, SubTitle } from 'components/text';
import { ContactSection, FooterSection, QuoteSection, TopSection, TestimonySection } from 'components/section';
import { Testimonies } from 'components/ui';
import { styled, theme, mediaQuery } from 'utils/styling';
import { useTranslate } from 'utils/i18n';
import WhatsappIcon from '../svg/whatsapp.svg';

const PERFACTIVE_URL = 'https://perfactive.fr/anna-elisa-valmori/date-v2?people=11236&reason=110694';

const Hero = styled.div`
  color: black;
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

const Container = styled.div(({ maxW }) => `
  max-width: ${maxW || '1000px'};
  margin: 0 auto;
`);

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

const PainPointList = styled.ul`
  list-style: none;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 0;
  ${mediaQuery('sm')} {
    max-width: calc(100% - 140px);
  }
`;

const PainPoint = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin: 20px 0;
  font-family: ${theme.fontFamily.regular};
  font-size: 1.2em;
  line-height: 1.8em;
  &::before {
    content: '✅';
    flex-shrink: 0;
  }
`;

const BenefitList = styled.ul`
  list-style: none;
  max-width: 900px;
  margin: 30px auto 0;
  padding: 0;
`;

const BenefitPoint = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin: 15px 0;
  font-family: ${theme.fontFamily.regular};
  font-size: 1.2em;
  line-height: 1.7em;
  &::before {
    content: '';
    flex-shrink: 0;
    width: 1.3em;
    height: 1.3em;
    margin-top: 0.2em;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFC72C'%3E%3Cpath d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 008.25 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'/%3E%3C/svg%3E") center / contain no-repeat;
  }
`;

const SolutionBox = styled.div`
  background: #f7f2f9;
  padding: 30px;
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
  width: 400px;
  max-width: 100%;
  height: 470px;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  float: left;
  margin: 0 30px 30px 0;
  ${mediaQuery('sm')} {
    margin: 0 45px 45px 0;
  }
`;

const JoyImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: 350px;
  object-fit: cover;
`;

const IllustrationImage = styled.img`
  width: 100%;
  max-width: ${props => props.maxW || '700px'};
  display: block;
  margin: ${props => props.m || '20px auto 30px'};
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const TriedRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  ${mediaQuery('md')} {
    flex-direction: row;
    align-items: flex-start;
    gap: 60px;
  }
`;

const TriedText = styled.div`
  flex: 1;
`;

const TriedImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: 420px;
  object-fit: cover;
  flex-shrink: 0;
`;

const SectionTitle = ({ children, large, ...props }) => (
  <SubTitle color="primaryDark" align="center" fontSize={{ xs: '1.7em', md: '2em' }} m="0 0 30px" large={large} {...props}>
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
  const { t } = useTranslate();
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {open && children}
      {tail}
      <ReadMoreButton onClick={() => setOpen(!open)}>
        {open ? t('ose-prendre-ta-place.readMore.less', 'Lire moins ←') : t('ose-prendre-ta-place.readMore.more', 'Lire la suite →')}
      </ReadMoreButton>
    </>
  );
};

const OsePrendreTaPlacePage = () => {
  const { t } = useTranslate();

  return (
    <Layout>
      <Head>
        <title>
          {t(
            'ose-prendre-ta-place.headTitle',
            'Parcours "Ose prendre ta place" - Anna Elisa Valmori, psychologue'
          )}
        </title>
      </Head>

      <BgImage src="/static/images/empty-boat-6.jpg" h="500px" align="middle" position="bottom left">
        <Div m="15px">
          <P
            shadow
            color="white"
            align="center"
            font="title"
            fontSize={{ xs: '6em', md: '9em' }}
            m="0 0 15px"
            lineHeight="0.7em"
          >
            {t('ose-prendre-ta-place.hero.title', 'Ose prendre ta place')}
          </P>
          <P shadow color="white" align="center" fontSize={{ xs: '1.5em', md: '2em' }} lineHeight="1em" italic m="0">
            {t('ose-prendre-ta-place.hero.subtitle', 'Par Anna Elisa Valmori, psychologue')}
          </P>
           <Hidden md lg xl>
              <Div h="80px" />
           </Hidden>
        </Div>
      </BgImage>

      <Div bg="primaryDark" p="45px 25px">
        <Container>
          <P color="white" align="center" fontSize="1.5em" m="0 0 30px">
{t('ose-prendre-ta-place.intro.p1a', "Un accompagnement pour celles et ceux qui passent toujours après les autres.")}
            <br />
            {t('ose-prendre-ta-place.intro.p1b', "Pour apprendre à dire non sans culpabilité et reprendre sa place.")}
          </P>
          <P color="white" align="center" italic fontSize="1.3em" m="20px 0">
            {t('ose-prendre-ta-place.intro.p2a', "Combien de fois t'es-tu senti·e passer à côté de ta vie ?")}
            <br />
            {t('ose-prendre-ta-place.intro.p2b', "Et si tu pouvais enfin te choisir, sans culpabilité ni peur d'être abandonné ?")}
          </P>
          <Div m="40px 0 0" align="center">
            <CtaButton
              href="#appel"
              light
              onClick={e => {
                e.preventDefault();
                document.getElementById('appel').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('ose-prendre-ta-place.intro.cta', "Je veux en savoir plus → réserver l'appel")}
            </CtaButton>
          </Div>
        </Container>
      </Div>

      {/* PAIN POINTS */}
      <Section>
        <Container>
          <SectionTitle large>
            {t('ose-prendre-ta-place.painPoints.title', "Te reconnais-tu dans l'une de ces situations ?")}
          </SectionTitle>
          <PainPointList>
            <PainPoint>
              <span>
                <b>{t('ose-prendre-ta-place.painPoints.1.lead', 'Tu es épuisé·e de toujours passer après les autres.')}</b>{' '}
                {t(
                  'ose-prendre-ta-place.painPoints.1.rest',
                  'Tu donnes tout aux autres et il ne reste plus rien pour toi. Tu voudrais enfin vivre pour toi, mais tu ne sais pas comment.'
                )}
              </span>
            </PainPoint>
            <PainPoint>
              <span>
                <b>{t('ose-prendre-ta-place.painPoints.2.lead', 'Tu as une peur constante de déplaire.')}</b>{' '}
                {t(
                  'ose-prendre-ta-place.painPoints.2.rest',
                  "Tu dis oui par automatisme, même quand tout ton corps te crie de dire non. La culpabilité t'envahit dès que tu penses à toi."
                )}
              </span>
            </PainPoint>
            <PainPoint>
              <span>
                <b>{t("ose-prendre-ta-place.painPoints.3.lead", "Tu cherches l'amour et la validation à l'extérieur.")}</b>{' '}
                {t(
                  'ose-prendre-ta-place.painPoints.3.rest',
                  "Tu as l'impression que si tu ne fais pas plaisir aux autres, tu ne seras pas aimé·e. Tu attends leur approbation pour te sentir bien."
                )}
              </span>
            </PainPoint>
            <PainPoint>
              <span>
                <b>{t('ose-prendre-ta-place.painPoints.4.lead', 'Tu te sens trop sensible.')}</b>{' '}
                {t(
                  'ose-prendre-ta-place.painPoints.4.rest',
                  'Les émotions te submergent, tu absorbes celles des autres, et tu voudrais pouvoir te protéger sans te couper complètement de ce que tu ressens.'
                )}
              </span>
            </PainPoint>
            <PainPoint>
              <span>
                <b>
                  {t(
                    'ose-prendre-ta-place.painPoints.5.lead',
                    'Tu rêves de relations authentiques où tu peux être toi-même,'
                  )}
                </b>{' '}
                {t(
                  'ose-prendre-ta-place.painPoints.5.rest',
                  "poser tes limites sans te justifier pendant des heures, et te sentir respecté·e sans avoir peur d'être abandonné·e."
                )}
              </span>
            </PainPoint>
            <PainPoint>
              <span>
                <b>{t('ose-prendre-ta-place.painPoints.6.lead', 'Tu es fatigué·e de vivre pour les autres.')}</b>{' '}
                {t(
                  'ose-prendre-ta-place.painPoints.6.rest',
                  'Tu voudrais commencer à exister pour toi, mais tu ne sais pas par où commencer sans te sentir égoïste.'
                )}
              </span>
            </PainPoint>
          </PainPointList>
        </Container>
      </Section>

      {/* TU AS ESSAYÉ */}
      <Section alt>
        <Container maxW="1200px">
          <TriedRow>
            <TriedText>
              <SectionTitle align="left" fontSize={{ xs: '1.7em', md: '2em' }}>
                {t('ose-prendre-ta-place.tried.title', 'Tu as essayé différentes choses')}
              </SectionTitle>
              <P align="left" fontSize="1.2em" lineHeight="1.8em">
                {t(
                  'ose-prendre-ta-place.tried.p1',
                  "Tu as cherché à apaiser cette partie de toi qui ne va pas bien en essayant diverses approches : yoga, respiration, sophrologie, thérapies énergétiques, séances de développement personnel, coaching…"
                )}
              </P>
              <P align="left" fontSize="1.2em" lineHeight="1.8em">
                {t('ose-prendre-ta-place.tried.p2.before', "Ces démarches t'ont souvent apporté un soulagement temporaire, mais inévitablement, ")}
                <strong>{t('ose-prendre-ta-place.tried.p2.bold', "les mêmes problèmes reviennent toujours.")}</strong>
              </P>
              <P align="left" fontSize="1.2em" lineHeight="1.8em">
                {t(
                  'ose-prendre-ta-place.tried.p3',
                  "Tu t'es senti·e mieux, mais le problème est revenu. Peut-être que ce dont tu as besoin, c'est une approche qui aille travailler encore plus en profondeur."
                )}
              </P>
              <P align="left" fontSize="1.2em" lineHeight="1.8em" m="0">
                {t(
                  'ose-prendre-ta-place.tried.p4',
                  "Et à force, tu finis par te dire que rien ne marche sur toi. Que c'est peut-être toi, le problème."
                )}
              </P>
            </TriedText>
            <TriedImage
              src="/static/images/woman-alone.jpg"
              alt={t('ose-prendre-ta-place.tried.imageAlt', 'Femme seule cherchant des réponses')}
            />
          </TriedRow>
        </Container>
      </Section>

      {/* SOLUTION */}
      <Section>
        <Container>
          <SolutionBox>
            <SubTitle color="primaryDark" align="center" fontSize={{ xs: '1.7em', md: '2em' }} m="0 0 20px">
              {t('ose-prendre-ta-place.solution.title', "Laisse-moi te rassurer et t'expliquer pourquoi c'est normal")}
            </SubTitle>
            <P fontSize="1.2em" lineHeight="1.8em" m="0">
              {t(
                'ose-prendre-ta-place.solution.p1',
                "Le problème ce n'est pas toi. C'est que tu avances en faisant plein de choses différentes, des séances par ci par là. Tu éteins le feu, tu mets des sparadraps sur tes blessures, ça va un peu mieux et après tu arrêtes…"
              )}
            </P>
            <P fontSize="1.2em" lineHeight="1.8em" m="20px 0 0">
              {t(
                'ose-prendre-ta-place.solution.p2',
                'Mais malheureusement la vie te confronte à de nouvelles situations et tes schémas reviennent en force.'
              )}
            </P>
            <P fontSize="1.2em" lineHeight="1.8em" m="20px 0 0">
              {t(
                'ose-prendre-ta-place.solution.p3',
                "Tant que tu n'auras pas fait le processus jusqu'au bout, jusqu'à déraciner les causes profondes de la souffrance que tu vis depuis des années, les symptômes continueront à émerger."
              )}
            </P>
          </SolutionBox>
        </Container>
      </Section>

      <QuoteSection author="C.G. Jung" bg="white" p="0 25px 45px">
        {t(
          'ose-prendre-ta-place.quote1',
          "Rends conscient l'inconscient, sinon c'est l'inconscient qui guidera ta vie et tu appelleras ça le destin."
        )}
      </QuoteSection>

      <TopSection image="birds-chain-2.jpg" position="center center" />

      {/* LE PARCOURS */}
      <Section alt>
        <Container>
          <SectionTitle large>
            {t('ose-prendre-ta-place.parcours.title', "C'est pour arrêter ce schéma infernal que j'ai conçu ce parcours")}
          </SectionTitle>
          <P align="center" fontSize="1.2em" lineHeight="1.8em" m="30px 0">
            <strong>{t('ose-prendre-ta-place.parcours.intro.bold1', "« Ose prendre ta place »")}</strong>
            {t('ose-prendre-ta-place.parcours.intro.mid', " est un programme de ")}
            <strong>{t('ose-prendre-ta-place.parcours.intro.bold2', "transformation profonde en 4 mois")}</strong>
            {t('ose-prendre-ta-place.parcours.intro.after', " qui t'accompagne à :")}
          </P>
          <BenefitList>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.1.lead', 'Te choisir enfin')}</strong>
                {t('ose-prendre-ta-place.parcours.benefit.1.rest', ', sans culpabilité ni peur de déplaire')}
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.2.lead', 'Faire des choix qui sont justes pour toi')}</strong>
                {t('ose-prendre-ta-place.parcours.benefit.2.rest', ', alignés avec tes vrais besoins')}
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.3.lead', 'Dire NON')}</strong>
                {t('ose-prendre-ta-place.parcours.benefit.3.rest', ' avec clarté et poser tes limites sans te justifier')}
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.4.lead', 'Retrouver confiance en toi')}</strong>
                {t('ose-prendre-ta-place.parcours.benefit.4.rest', ' et une véritable estime de toi-même')}
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>
                  {t(
                    'ose-prendre-ta-place.parcours.benefit.5.lead',
                    "Arrêter de chercher l'amour et la validation à l'extérieur"
                  )}
                </strong>
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.6.lead', "Arrêter de t'épuiser")}</strong>
                {t('ose-prendre-ta-place.parcours.benefit.6.rest', ' en voulant sauver les autres à leur place')}
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.7.lead', 'Commencer à exister aussi pour toi')}</strong>
                {t(
                  'ose-prendre-ta-place.parcours.benefit.7.rest',
                  ', sans te sentir égoïste, et prendre pleinement ta place'
                )}
              </span>
            </BenefitPoint>
            <BenefitPoint>
              <span>
                <strong>{t('ose-prendre-ta-place.parcours.benefit.8.lead', 'Créer des relations authentiques')}</strong>
                {t(
                  'ose-prendre-ta-place.parcours.benefit.8.rest',
                  " où tu peux être toi-même sans peur d'être abandonné·e"
                )}
              </span>
            </BenefitPoint>
          </BenefitList>
          <P align="center" fontSize="1.2em" lineHeight="1.8em" m="40px 0 30px">
            {t(
              'ose-prendre-ta-place.parcours.outro',
              "En travaillant sur tes blessures du passé avec des méthodes concrètes et un accompagnement profond, tu transformeras ta relation avec toi-même, tu apprendras à dire NON, à poser tes limites et commencer à vivre aussi pour toi."
            )}
          </P>
          <CtaCenter>
            <CtaButton
              href="#appel"
              onClick={e => {
                e.preventDefault();
                document.getElementById('appel').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('ose-prendre-ta-place.parcours.cta', 'Prends ta place → oui, je le veux maintenant')}
            </CtaButton>
          </CtaCenter>
          <Div maxW="400px" m="40px auto 0">
            <P align="center" italic fontSize="1.3em" lineHeight="1.5em" color="primaryDark" m="0">
              {t(
                'ose-prendre-ta-place.parcours.quote',
                "« Transformer tes souffrances en forces, et devenir créateur de ta propre vie. »"
              )}
            </P>
          </Div>
        </Container>
      </Section>

      {/* 3 ÉTAPES */}
      <Section>
        <Container>
          <SectionTitle large>{t('ose-prendre-ta-place.steps.title', 'Les 3 étapes du parcours Ose prendre ta place')}</SectionTitle>
          <StepsGrid>
            <Step>
              <StepNumber>1</StepNumber>
              <SubTitle color="primaryDark" align="center" m="0 0 15px">
                {t('ose-prendre-ta-place.step1.title', 'Ose rompre les schémas du passé')}
              </SubTitle>
              <P align="left" color="primaryDark" m="0 0 10px">
                {t(
                  'ose-prendre-ta-place.step1.p1',
                  "Libération de la culpabilité, de la peur d'être abandonné et du besoin de validation extérieure."
                )}
              </P>
              <P align="left" m="0">
                {t(
                  'ose-prendre-ta-place.step1.p2Intro',
                  'Déracinement des causes profondes qui te font dire oui par peur de déplaire.'
                )}
                <ul>
                  <li>
                    {t(
                      'ose-prendre-ta-place.step1.li1',
                      'D.M.O.K.A® : Déprogrammation des traumatismes et des croyances limitantes'
                    )}
                  </li>
                  <li>
                    {t(
                      'ose-prendre-ta-place.step1.li2',
                      'Vision systémique et transgénérationnelle : Psychogénéalogie et Constellations Familiales'
                    )}
                  </li>
                  <li>
                    {t(
                      'ose-prendre-ta-place.step1.li3',
                      'Identification et transformation des schémas répétitifs inconscients'
                    )}
                  </li>
                </ul>
              </P>

            </Step>
            <Step>
              <StepNumber>2</StepNumber>
              <SubTitle color="primaryDark" align="center" m="0 0 15px">
                {t('ose-prendre-ta-place.step2.title', 'Ose te connaître vraiment')}
              </SubTitle>
              <P align="left"  color="primaryDark" m="0 0 10px">
                {t('ose-prendre-ta-place.step2.p1', 'Construction de ta nouvelle maison intérieure')}
              </P>
              <P align="left" m="0">
                {t(
                  'ose-prendre-ta-place.step2.p2Intro',
                  'Reconnexion avec ton enfant intérieur pour retrouver confiance, clarté et estime de soi. Apprendre à te protéger sans te couper de tes émotions.'
                )}
                <ul>
                  <li>
                    {t(
                      'ose-prendre-ta-place.step2.li1',
                      'D.M.O.K.A® : Reprogrammation de nouvelles croyances positives'
                    )}
                  </li>
                  <li>{t('ose-prendre-ta-place.step2.li2', 'Hypnose Ericksonienne')}</li>
                  <li>{t('ose-prendre-ta-place.step2.li3', 'Visualisations et méditations guidées')}</li>
                  <li>{t('ose-prendre-ta-place.step2.li4', 'Constellations Familiales')}</li>
                  <li>{t('ose-prendre-ta-place.step2.li5', 'Gestion des émotions')}</li>
                </ul>
              </P>

            </Step>
            <Step>
              <StepNumber>3</StepNumber>
              <SubTitle color="primaryDark" align="center" m="0 0 15px">
                {t('ose-prendre-ta-place.step3.title.line1', 'Ose')}<br />
                {t('ose-prendre-ta-place.step3.title.line2', 'prendre')}<br />
                {t('ose-prendre-ta-place.step3.title.line3', 'ta place')}
              </SubTitle>
              <P align="left" color="primaryDark" m="0 0 10px">
                {t('ose-prendre-ta-place.step3.p1', "Devenir l'adulte aimant dont tu aurais eu besoin.")}
              </P>
              <P align="left" m="0">
                {t(
                  'ose-prendre-ta-place.step3.p2Intro',
                  'Te choisir enfin : dire NON sans culpabilité, poser tes limites et créer des relations où tu peux être toi-même.'
                )}
                <ul>
                  <li>{t('ose-prendre-ta-place.step3.li1', 'Identification et expression de tes besoins')}</li>
                  <li>{t('ose-prendre-ta-place.step3.li2', 'Création de limites saines')}</li>
                  <li>
                    {t(
                      'ose-prendre-ta-place.step3.li3',
                      'Outils à utiliser en toute autonomie pour accueillir tes parts blessées et ton enfant intérieur'
                    )}
                  </li>
                </ul>
              </P>
            </Step>
          </StepsGrid>
        </Container>
      </Section>

      {/* CE QUE QUE COMPREND LE PARCOURS */}
      <Section alt>
        <Container>
          <SectionTitle large>{t('ose-prendre-ta-place.comprend.title', 'Ce que comprend le parcours')}</SectionTitle>
          <BenefitsGrid>
            <Benefit>
              <P fontSize="3em" m="0 0 15px" align="center">
                🎯
              </P>
              <SubTitle color="primaryDark" align="center" m="0 0 10px">
                {t('ose-prendre-ta-place.benefit1.title', '10 Séances Individuelles')}
              </SubTitle>
              <P align="center" m="0">
                {t(
                  'ose-prendre-ta-place.benefit1.desc',
                  'Un accompagnement personnalisé et sur mesure, adapté à ta situation unique'
                )}
              </P>
            </Benefit>
            <Benefit>
              <P fontSize="3em" m="0 0 15px" align="center">
                ♾️
              </P>
              <SubTitle color="primaryDark" align="center" m="0 0 10px">
                {t('ose-prendre-ta-place.benefit2.title', 'Accès illimité aux ressources')}
              </SubTitle>
              <P align="center" m="0">
                {t(
                  'ose-prendre-ta-place.benefit2.desc',
                  'Accès illimité à toutes les ressources nécessaires pour compléter ton parcours, à ton rythme'
                )}
              </P>
            </Benefit>
            <Benefit>
              <P fontSize="3em" m="0 0 15px" align="center">
                <WhatsappIcon style={{ width: '1.2em', height: '1.2em', fill: '#25D366', verticalAlign: 'middle' }} />
              </P>
              <SubTitle color="primaryDark" align="center" m="0 0 10px">
                {t('ose-prendre-ta-place.benefit3.title', 'Support WhatsApp')}
              </SubTitle>
              <P align="center" m="0">
                {t(
                  'ose-prendre-ta-place.benefit3.desc',
                  "Pour être accompagné dans l'émergence des résistances au changement."
                )}
              </P>
            </Benefit>
            <Benefit>
              <P fontSize="3em" m="0 0 15px" align="center">
                📝
              </P>
              <SubTitle color="primaryDark" align="center" m="0 0 10px">
                {t('ose-prendre-ta-place.benefit4.title', 'Exercices Pratiques')}
              </SubTitle>
              <P align="center" m="0">
                {t(
                  'ose-prendre-ta-place.benefit4.desc',
                  'Nouvelles routines et exercices entre les séances pour ancrer le travail et intégrer les changements au quotidien'
                )}
              </P>
            </Benefit>
          </BenefitsGrid>
          <CtaCenter>
            <CtaButton
              href="#appel"
              onClick={e => {
                e.preventDefault();
                document.getElementById('appel').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('ose-prendre-ta-place.comprend.cta', 'Prends ta place')}
            </CtaButton>
          </CtaCenter>
        </Container>
      </Section>

      <TopSection image="wave.jpg" position="bottom left">
        {t('ose-prendre-ta-place.topSection.imagineTitle', 'Imagine ta vie transformée…')}
      </TopSection>

      {/* IMAGINE */}
      <Div bg="tertiaryLight" p="60px 25px">
        <Container maxW="1100px">
          <SubTitle align="center" fontSize={{ xs: '1.7em', md: '2em' }}>
            {t('ose-prendre-ta-place.imagine.title', 'Ferme les yeux et imagine…')}
          </SubTitle>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="20px 0 20px">
            {t(
              'ose-prendre-ta-place.imagine.p1',
              "Comment serait ta vie si tu pouvais dire NON sans culpabilité, sans cette peur constante de déplaire qui te paralyse ?"
            )}
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0 0 20px">
            {t(
              'ose-prendre-ta-place.imagine.p2',
              "Si tu pouvais enfin te choisir, vivre pour toi sans te sentir égoïste, et arrêter de tout donner aux autres jusqu'à l'épuisement ?"
            )}
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0 0 20px">
            {t(
              'ose-prendre-ta-place.imagine.p3',
              "Si tu pouvais arrêter de chercher l'amour et la validation à l'extérieur, et enfin retrouver confiance, clarté et estime de toi ?"
            )}
          </P>
          <P align="center" italic fontSize="1.2em" lineHeight="1.9em" m="0">
            {t('ose-prendre-ta-place.imagine.p4.before', "Cette personne qui occupe pleinement sa place, qui pose ses limites avec assurance, qui a des relations authentiques où elle peut être elle-même… ")}
            <strong>{t('ose-prendre-ta-place.imagine.p4.bold', "cette personne, c'est toi dans 4 mois.")}</strong>
          </P>
        </Container>
      </Div>

      {/* <QuoteSection author="C.G. Jung" bg="tertiaryLight">
        Ta vision devient claire lorsque tu peux regarder dans ton cœur. Celui qui regarde à l'extérieur de
        soi ne fait que rêver&nbsp;; celui qui regarde en soi se réveille.
      </QuoteSection> */}

      {/* QUI SUIS-JE */}
      <Section id="qui-suis-je">
        <Container>
          <About>
            <PortraitImage src="/static/images/elisa-livres.jpg" alt="Anna Elisa Valmori" />
            <AboutText>
              <SubTitle color="primaryDark" fontSize={{ xs: '1.7em', md: '2em' }} m="0 0 30px" large>
                {t('ose-prendre-ta-place.about.title', 'Qui suis-je ?')}
              </SubTitle>
              <P m="0 0 15px">
                <strong>{t('ose-prendre-ta-place.about.p1.bold', "Je suis Anna Elisa Valmori.")}</strong>
                  {t('ose-prendre-ta-place.about.p1.after', " Psychologue depuis 2005, facilitatrice en Constellations Familiales et formée à la technique D.M.O.K.A.® pour le traitement des traumatismes, j'ai une approche intégrative qui combine différentes orientations : PNL, hypnose éricksonienne, psychogénéalogie, travail sur l'enfant intérieur.")}
              </P>
              <P m="0 0 15px">
                {t(
                  'ose-prendre-ta-place.about.p2',
                  'Je t\'accompagne à retrouver ton enfant intérieur et sa joie de vivre parce que je suis passée par là moi-même.'
                )}
              </P>
              <P m="0 0 15px">
                {t(
                  'ose-prendre-ta-place.about.p3',
                  "À un moment de ma vie, je me suis retrouvée face à des choix qui ne correspondaient pas aux attentes de ma famille : en 2017, j'ai quitté l'Italie pour vivre une histoire d'amour qui est devenue, au fil des années, la plus importante de ma vie, et j'ai recommencé ma vie à zéro en l'espace de quelques mois, en m'installant dans un endroit où personne ne me connaissait. Je sais ce que c'est que de vivre le syndrome du sauveur, cette culpabilité qui s'installe quand on choisit sa propre voie."
                )}
              </P>
              <P m="0 0 15px">
                {t(
                  'ose-prendre-ta-place.about.p4',
                  "J'ai osé recommencer de zéro dans un pays étranger, exercer comme psychologue et animer des groupes de Constellations Familiales qui ont été complets pendant des années. Aujourd'hui encore, j'ai adopté un mode de vie semi-nomade, et j'ai appris que prendre sa place, ce n'est pas s'ancrer à un seul endroit, mais savoir la retrouver partout où la vie me mène : notre vraie place et notre sécurité se trouvent à l'intérieur de nous."
                )}
              </P>
              <P m="0">
                {t(
                  'ose-prendre-ta-place.about.p5',
                  "Ce qui me donne le plus de satisfaction aujourd'hui, c'est d'aider les personnes à prendre leur place, dans la recherche de leur propre vérité, pour savoir écouter leurs besoins, prendre des décisions alignées, et atteindre la réalisation profonde de soi."
                )}
              </P>
            </AboutText>
          </About>
        </Container>
      </Section>

      <TopSection image="phare-4.jpg" position="top right">
        {t('ose-prendre-ta-place.topSection.testimonies', 'Témoignages')}
      </TopSection>

      {/* TÉMOIGNAGES */}
      <Section>
        <Container>
          <SectionTitle large>{t('ose-prendre-ta-place.testimonies.title', "Ce qu'ils disent du parcours")}</SectionTitle>
          <Testimonies />
          <CtaCenter>
            <CtaButton
              href="#appel"
              onClick={e => {
                e.preventDefault();
                document.getElementById('appel').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('ose-prendre-ta-place.testimonies.cta', 'Toi aussi tu veux changer → réserve l\'appel')}
            </CtaButton>
          </CtaCenter>
          <P align="center" m="30px 0 0">
            <a href="https://www.google.com/maps/place/Anna+Elisa+VALMORI+%7C+Psychologue+Montpellier,+t%C3%A9l%C3%A9consultation/@43.6406432,3.8642972,859m/data=!3m2!1e3!5s0x12b6aed7950b0de7:0xa4d377f90c6f0f3a!4m8!3m7!1s0x47e7d5786f81be21:0xb0dac22308be1e08!8m2!3d43.6406432!4d3.8642972!9m1!1b1!16s%2Fg%2F11lh2ly2fb?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" style={{ color: theme.colors.primaryDark }}>
              {t('ose-prendre-ta-place.testimonies.googleLink', 'Voir tous les avis sur Google →')}
            </a>
          </P>
        </Container>
      </Section>

      {/* CTA RÉSERVER */}
      <CtaSection id="appel">
        <Container>
          <SubTitle color="white" align="center" fontSize={{ xs: '1.7em', md: '2em' }} m="0 0 30px">
            {t('ose-prendre-ta-place.cta.title', "Prêt·e à te choisir, enfin ?")}
          </SubTitle>
          <CtaInnerBox>
            <SubTitle color="white" fontSize={{ xs: '1.3em', md: '1.5em' }}>
              {t('ose-prendre-ta-place.cta.box.title', 'Avant de commencer, on fait connaissance')}
            </SubTitle>
            <P color="white">
              {t('ose-prendre-ta-place.cta.box.p1', 'Je ne travaille pas avec tout le monde, ni de la même manière avec chacun.')}
            </P>
            <P color="white">
              {t(
                'ose-prendre-ta-place.cta.box.p2',
                "Avant tout engagement, on prend le temps d'un appel. Tu me parles de là où tu en es, de ce qui te bloque. De mon côté, je te dis honnêtement si ce parcours est fait pour toi, et comment on l'ajusterait à tes objectifs."
              )}
            </P>
            <P color="white" m="0">
              {t(
                'ose-prendre-ta-place.cta.box.p3',
                "Pas de pression, pas d'engagement à ce stade. Juste un vrai échange pour voir si on avance ensemble."
              )}
            </P>
          </CtaInnerBox>
          <P color="white" align="center" fontSize="1.3em" m="0 0 40px">
            {t('ose-prendre-ta-place.cta.finalP.a', "Ne laisse pas passer une année de plus à vivre que pour les autres.")}
            <br />
            {t('ose-prendre-ta-place.cta.finalP.b', "Le moment de te choisir SANS CULPABILITÉ, c'est maintenant.")}
          </P>
          <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener" light>
            {t('ose-prendre-ta-place.cta.button', 'Réserve ta séance découverte gratuite')}
          </CtaButton>
          <P color="white" align="center" fontSize="1.1em" m="30px 0 0">
            <b>{t('ose-prendre-ta-place.cta.question.title', 'Une question ?')}</b><br />
            {t('ose-prendre-ta-place.cta.question.before', '✉️ Écris-moi à ')}
            <a href="mailto:aelisa.valmori@gmail.com" style={{ color: 'white' }}>
              aelisa.valmori@gmail.com
            </a>
            <br />
            <WhatsappIcon style={{ width: '1em', height: '1em', fill: '#25D366', verticalAlign: '-0.15em' }} />{' '}
            {t('ose-prendre-ta-place.cta.question.whatsappBefore', 'Ou ')}
            <a href="https://wa.me/393208103398" target="_blank" rel="noopener" style={{ color: 'white' }}>
              {t('ose-prendre-ta-place.cta.question.whatsappLabel', 'contacte-moi directement sur WhatsApp')}
            </a>
          </P>
        </Container>
      </CtaSection>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionTitle large>{t('ose-prendre-ta-place.faq.title', 'Questions fréquentes')}</SectionTitle>
          <Div maxW="800px" m="40px auto 0">
            <Div m="0 0 30px">
              <SubTitle color="primaryDark" fontSize={{ xs: '1.4em', md: '1.5em' }} m="0 0 10px">
                {t('ose-prendre-ta-place.faq1.title', 'Combien de temps dure le parcours ?')}
              </SubTitle>
              <P m="0">
                {t(
                  'ose-prendre-ta-place.faq1.p',
                  "Le parcours complet dure 4 mois avec 10 séances : les 3-4 premières séances sont hebdomadaires ou tous les 10 jours, puis les suivantes ont lieu toutes les deux ou trois semaines. Entre les séances, tu recevras des exercices pratiques pour intégrer le travail effectué."
                )}
              </P>
            </Div>
            <Div m="0 0 30px">
              <SubTitle color="primaryDark" fontSize={{ xs: '1.4em', md: '1.5em' }} m="0 0 10px">
                {t('ose-prendre-ta-place.faq2.title', 'Est-ce que ça marche vraiment ?')}
              </SubTitle>
              <P m="0">
                {t(
                  'ose-prendre-ta-place.faq2.p',
                  "Au début du parcours, nous définissons ensemble les objectifs et un domaine de ta vie, afin que le travail soit efficace et les changements mesurables, contrairement à des séances à l'unité où l'on agit sur l'urgence et le symptôme. Aucun parcours ne fonctionne sans ton engagement. Ce que je peux t'assurer, c'est que je serai à tes côtés pendant ces 4 mois pour t'accompagner au mieux. Contrairement aux approches qui soulagent temporairement, ce parcours va à la racine des problèmes. Des résultats sont possibles dès les premières séances, et la transformation devient durable car tu intègres de nouveaux schémas profondément."
                )}
              </P>
            </Div>
            <Div m="0 0 30px">
              <SubTitle color="primaryDark" fontSize={{ xs: '1.4em', md: '1.5em' }} m="0 0 10px">
                {t('ose-prendre-ta-place.faq3.title', 'Les séances se font en ligne ou en présentiel ?')}
              </SubTitle>
              <P m="0">
                {t(
                  'ose-prendre-ta-place.faq3.p',
                  "Les séances sont possibles en ligne, avec l'avantage de ne pas avoir à te déplacer à chaque fois pour rejoindre le cabinet, ce qui te permet de gagner du temps pour te consacrer aux exercices et au travail après les séances."
                )}
              </P>
            </Div>
            <Div m="0 0 30px">
              <SubTitle color="primaryDark" fontSize={{ xs: '1.4em', md: '1.5em' }} m="0 0 10px">
                {t('ose-prendre-ta-place.faq4.title', 'Combien coûte le parcours ?')}
              </SubTitle>
              <P m="0">
                {t(
                  'ose-prendre-ta-place.faq4.p.before',
                  "Le tarif du parcours peut varier selon la formule choisie. Plusieurs modalités de paiement sont proposées, y compris en plusieurs fois, pour que cet investissement reste accessible. C'est un engagement important à la hauteur du changement profond que tu es en train d'amorcer. Si tu veux en savoir plus sur le tarif, je t'invite à "
                )}
                <a href={PERFACTIVE_URL} target="_blank" rel="noopener">
                  {t('ose-prendre-ta-place.faq4.p.linkLabel', 'réserver un appel découverte avec moi')}
                </a>
                {t('ose-prendre-ta-place.faq4.p.after', '.')}
              </P>
            </Div>
          </Div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section alt>
        <Container>
          <SectionTitle large>{t('ose-prendre-ta-place.final.title', 'Ta nouvelle vie t\'attend')}</SectionTitle>
          <Div align="center" m="30px 0">
            <JoyImage src="/static/images/elisa.jpg" alt={t('ose-prendre-ta-place.final.imageAlt', 'La joie de vivre')} />
          </Div>
          <Div maxW="800px" m="30px auto">
            <P align="center" fontSize="1.2em" lineHeight="1.8em" m="0">
              {t(
                'ose-prendre-ta-place.final.p1',
                "Imagine-toi dans 4 mois : tu te réveilles en sachant que tu es ta priorité. Tu dis « non » sans te justifier. Tu ne cherches plus l'approbation des autres pour te sentir bien. Tu vis pour toi, et tu te sens enfin libre."
              )}
            </P>
          </Div>
          <Div maxW="800px" m="30px auto">
            <P align="center" fontSize="1.2em" lineHeight="1.8em" m="0">
              {t(
                'ose-prendre-ta-place.final.p2',
                "Tu as des relations authentiques où tu peux être toi-même. Tu poses tes limites avec assurance. Tu n'es plus épuisé·e de tout donner aux autres. Tu occupes pleinement ta place. Tu commences enfin à te donner de la valeur, et la vie te le rend."
              )}
            </P>
          </Div>
          <Div maxW="800px" m="30px auto">
            <P align="center" fontSize="1.2em" lineHeight="1.8em" m="0">
              <strong>
                  {t('ose-prendre-ta-place.final.p3', "Cette transformation est possible. Et elle commence par une décision : celle de te choisir, SANS CULPABILITÉ.")}
                </strong>
            </P>
          </Div>
          <CtaCenter>
            <CtaButton href={PERFACTIVE_URL} target="_blank" rel="noopener">
              {t('ose-prendre-ta-place.final.cta', 'Commence ton parcours maintenant')}
            </CtaButton>
          </CtaCenter>
        </Container>
      </Section>

      <Section>
        <Container>
          <TestimonySection id="ZivHW-VMRlCIYi_DKnXWoA" showMore={false} bg="white" p="0px" />
        </Container>
      </Section>

    </Layout>
  );
};

export default OsePrendreTaPlacePage;

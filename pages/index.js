import React from 'react';
import Head from 'next/head';
import {Layout} from 'components/app';
import {Div} from 'components/layout';
import {BgImage} from 'components/media';
import {P, H} from 'components/text';
import {AnimOnAppear} from 'components/motion';
import {MenuSection, FooterSection, QuoteSection} from 'components/section';
import ClientSection from "../components/section/ClientSection";

const IndexPage = () => (
  <Layout>
    <Head>
      <title>Nouvel air - Constellations d'organisations et Gouvernance partagée dans l'Oise et à Paris</title>
    </Head>
    <BgImage src="/static/images/pexels-melchor-gama-631342.jpg" minH="100vh" align="middle" position="bottom left">
      <Div maxW="650px">
        <AnimOnAppear>
          <P
            // shadow
            color="white"
            align="center"
            font="title"
            fontSize={{ xs: '3.5em', sm: '6.5em' }}
            m="0"
            style={{ lineHeight: 1 }}
          >
            Nouvel air
          </P>
          <P
            bold
            // shadow
            color="white"
            align="center"
            font="subTitle"
            fontSize={{ xs: '1.3em', sm: '1.5em' }}
            lineHeight="1.4em"
            m="15px 0"
            style={{textTransform: 'uppercase', letterSpacing: 2}}
          >
            Au coeur de votre organisation
          </P>
        </AnimOnAppear>
        <br/>
        <br/>
        <br/>
      </Div>
    </BgImage>
    <QuoteSection title="Notre raison d'être" author="Co-écrite en juillet 2022" color="black" bg="secondaryLight">
      Conscients que les organisations sont des corps vivants ayant besoin d'attention et de soin,
      nous désirons proposer des méthodes et outils innovants qui les aident à trouver équilibre et vitalité,
      afin qu'elles puissent pleinement réaliser leur raison d'être au sein de l'écosystème dans lequel elles sont se incarnées.
    </QuoteSection>
    <ClientSection />
    <MenuSection left title="Qui sommes-nous ?" image="about-us.jpg" link="about">
      Après nous être engagés plusieurs années ensemble dans le monde associatif, nous avons décidé en 2022 de mettre
      en commun nos compétences et de créer Nouvel air. Notre envie ? Aider les organisations à déployer leurs
      ailes, afin qu'elles contribuent pleinement à l'émergence d'une société où l'humain est au centre.
    </MenuSection>
    <MenuSection right title="Constellations d'organisations" image="constellations-2.jpg" link="organizational-constellations">
      La Constellation d'organisation est un outil qui permet, à travers des mises en scènes, de faire apparaître votre
      organisation telle qu’elle est, dans toute sa complexité. Il permet de constater les dynamiques et résistances qui
      existent au sein du collectif, mais aussi de les faire évoluer en faisant littéralement “bouger les choses”.
    </MenuSection>
    <MenuSection left title="Gouvernance partagée" image="gouvernance-partagee.jpg" link="shared-governance">
      A Nouvel air, nous explorons les méthodes et postures de la Gouvernance partagée depuis bientôt 5 ans, avec
      comme source d'inspiration principale l'Université du Nous. Nous croyons qu'il s'agit d'un élément-clé pour
      redonner du souffle à une organisation.
    </MenuSection>
    <MenuSection right title="Libération de l'information" image="tree.jpg" link="information-liberation">
      La juste circulation des informations via les outils numériques adéquats est un facteur essentiel de la santé
      et de la vitalité d'une organisation. Nous travaillons sur la circulation intra- et inter-organisations des
      informations depuis de nombreuses années et pouvons vous orienter et vous accompagner dans vos choix stratégiques,
      mais aussi développer des solutions sur mesure.
    </MenuSection>
    <MenuSection left title="Agenda" image="clouds.jpg" link="events">
      Nous proposons régulièrement des activités sur Compiègne autour de la gouvernance partagée et des Constellations
      d'organisations. Elles sont autant d'occasions de découvrir notre approche et de rencontrer des personnes sur le
      même chemin.
    </MenuSection>
    <MenuSection right title="Témoignages" image="balloons2.jpg" link="testimonies">
      Au fil des années, nous avons récolté de beaux témoignages que nous souhaitons partager avec vous sur cette page.
    </MenuSection>
    <MenuSection left title="Contactez-nous" image="bird.jpg" link="contact">
      N'hésitez pas à prendre contact avec nous, nous répondrons à votre demande dans les meilleurs délais.
    </MenuSection>
    <FooterSection/>
  </Layout>
);

export default IndexPage;

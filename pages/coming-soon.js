import React from 'react';
import Head from 'next/head';
import {Layout} from 'components/app';
import {Div} from 'components/layout';
import {BgImage} from 'components/media';
import {P, H} from 'components/text';
import {AnimOnAppear} from 'components/motion';
import {MenuSection, FooterSection, QuoteSection} from 'components/section';
import ClientSection from "../components/section/ClientSection";

const ComingSoonPage = () => (
  <>
    <Head>
      <title>Nouvel air - Constellations d'organisations et Gouvernance partagée dans l'Oise et à Paris</title>
    </Head>
    <BgImage src="/static/images/pexels-melchor-gama-631342.jpg" minH="100vh" align="middle" position="bottom left">
      <Div maxW="650px">
        <AnimOnAppear>
          <P
            shadow
            color="white"
            align="center"
            font="title"
            fontSize={{xs: '6em', sm: '6em'}}
            m="0"
            style={{ lineHeight: 1 }}
          >
            Nouvel air
          </P>
          <P
            bold
            shadow
            color="white"
            align="center"
            font="subTitle"
            fontSize={{ xs: '1.7em', sm: '1.8em' }}
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
  </>
);

export default ComingSoonPage;

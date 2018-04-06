import { Layout } from 'components/app';
import { Div, Row, Cell } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';

const ShadowP = P.extend`
  text-shadow: 2px 2px 3px black;
`;

const IndexPage = () => (
  <Layout>
    <BgImage src="/static/images/clouds.jpg" minH="100vh" align="middle">
      <Div>
        <ShadowP color="white" align="center" font="lobster" fontSize="4.5em" m="0">
          Anna Elisa Valmori
        </ShadowP>
        <ShadowP color="white" align="center" font="lobster" fontSize="1.5em" m="0">
          Psychopraticienne relationnelle
        </ShadowP>
          <br/><br/><br/>
      </Div>
    </BgImage>
    <P fontSize="3em" align="center">
      Bienvenue sur ce site !
    </P>
    <Row>
      <Cell w={1 / 3} />
    </Row>
  </Layout>
);

export default IndexPage;

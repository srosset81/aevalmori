import { Layout } from 'components/app';
import { Div, Row, Cell } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';

const IndexPage = () => (
  <Layout>
    <BgImage src="/static/images/arbre.jpg" minH="100vh" align="middle">
        <Div>
        <P color="ochreRed" align="center" font="lobster" fontSize="4.5em" m="0">Anna Elisa Valmori</P>
        <P color="ochreRed" align="center" font="lobster" fontSize="1.5em" m="0">Psychopraticienne relationnelle</P>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>y
        </Div>
    </BgImage>
    <P fontSize="3em" align="center">Bienvenue sur ce site !</P>
      <Row>
          <Cell w={1/3}></Cell>
      </Row>
  </Layout>
);

export default IndexPage;

import { Layout } from 'components/app';
import { Div, Row, Cell } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';
import { Button } from 'components/input';

const ShadowP = P.extend`
  text-shadow: 2px 2px 3px black;
`;

const Section = ({ right, image, title, children, link }) => (
  <Row>
    <Cell w={{ xs: 1, sm: 2 / 3 }} order={{ xs: '1', sm: right ? '3' : '0' }}>
      <BgImage src={`/static/images/${image}`} h={{ xs: '250px', sm: '500px' }} />
    </Cell>
    <Cell w={{ xs: 1, sm: 1 / 3 }} order="1" align="middle">
      <Div p="40px">
        <P bold fontSize="1.5em" m="0">
          {title}
        </P>
        <P lineHeight="1.7em">{children}</P>
        <Button>En savoir +</Button>
      </Div>
    </Cell>
  </Row>
);

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
        <br />
        <br />
        <br />
      </Div>
    </BgImage>
    <Div bg="lightRose" h="160px" align="middle" p="20px">
      <P fontSize="1.3em" align="center">
        <em>« La réalité rend fort et libre quand elle est reconnue »</em> - Bert Hellinger
      </P>
    </Div>
    <Section right title="Qui suis-je ?" image="elisa.jpg">
      Il existe des secrets qui, quand ils sont amenés à la lumière, ont un effet libérateur. Ces secrets attendent le
      moment où ils peuvent venir à la lumière. Un enfant caché, par exemple, est un exemple d’un tel secret. Le système
      n’est pas en paix jusqu’à ce que ce secret s’incarne soudainement. Alors, nous nous sentons plus léger.
    </Section>
    <Section title="Séances individuelles" image="single-tree.jpg">
      D’autres secrets doivent rester préservés. Ils ne veulent pas apparaître à la lumière, ne veulent pas que l’on
      s’approche d’eux, peut-être par curiosité. Sinon, cela aurait de fâcheuses conséquences. Le système reste en paix
      quand ce secret est bien gardé. C’est une forme de respect.
    </Section>
    <Section right title="Constellations familiales" image="flowers-2.jpg">
      Souvent, ceux qui se battent pour un héritage se soucient plus de leur héritage que la vie de leurs enfants. Ils
      sont complètement centrés sur cet héritage et en paient le coût avec la vie de leurs enfants. Ainsi, la liberté à
      propos d’un héritage est souvent l’option la plus belle. Ce que nous avons nous-mêmes gagné, nous l’avons gagné et
      il reste.
    </Section>
  </Layout>
);

export default IndexPage;

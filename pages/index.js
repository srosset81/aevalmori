import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { BgImage } from 'components/media';
import { P } from 'components/text';
import { AnimOnAppear } from 'components/motion';
import { MenuSection, FooterSection } from 'components/section';
import { Trans } from "@lingui/macro";

const IndexPage = () => (
  <Layout>
    <BgImage src="/static/images/clouds.jpg" minH="100vh" align="middle">
      <Div>
        <AnimOnAppear>
          <P shadow color="white" align="center" font="lobster" fontSize="4.5em" m="0">
            Anna Elisa Valmori
          </P>
          <P shadow color="white" align="center" font="lobster" fontSize="1.5em" m="0">
              <Trans id="home.work">
            Psychopraticienne relationnelle
              </Trans>
          </P>
        </AnimOnAppear>
        <br />
        <br />
        <br />
      </Div>
    </BgImage>
    <Div bg="darkPurple" h="160px" align="middle" p="20px">
      <P fontSize="1.5em" color="white" align="center">
        <em>« La réalité rend fort et libre quand elle est reconnue »</em> - Bert Hellinger
      </P>
    </Div>
    <MenuSection right title="Qui suis-je ?" image="elisa.jpg" link="/about">
      Il existe des secrets qui, quand ils sont amenés à la lumière, ont un effet libérateur. Ces secrets attendent le
      moment où ils peuvent venir à la lumière. Un enfant caché, par exemple, est un exemple d’un tel secret. Le système
      n’est pas en paix jusqu’à ce que ce secret s’incarne soudainement. Alors, nous nous sentons plus léger.
    </MenuSection>
    <MenuSection title="Séances individuelles" image="single-tree.jpg">
      D’autres secrets doivent rester préservés. Ils ne veulent pas apparaître à la lumière, ne veulent pas que l’on
      s’approche d’eux, peut-être par curiosité. Sinon, cela aurait de fâcheuses conséquences. Le système reste en paix
      quand ce secret est bien gardé. C’est une forme de respect.
    </MenuSection>
    <MenuSection right title="Constellations familiales" image="flowers-2.jpg">
      Souvent, ceux qui se battent pour un héritage se soucient plus de leur héritage que la vie de leurs enfants. Ils
      sont complètement centrés sur cet héritage et en paient le coût avec la vie de leurs enfants. Ainsi, la liberté à
      propos d’un héritage est souvent l’option la plus belle. Ce que nous avons nous-mêmes gagné, nous l’avons gagné et
      il reste.
    </MenuSection>
    <MenuSection title="Contactez-moi" image="contact.jpg" link="/contact">
      N'hésitez pas à prendre contact avec moi en laissant vos coordonnées, je répondrai à votre demande dans
      les meilleurs délais.
    </MenuSection>
    <FooterSection />
  </Layout>
);

export default IndexPage;

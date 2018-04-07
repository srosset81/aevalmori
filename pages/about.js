import { Layout } from 'components/app';
import { Cell, Div, Row } from 'components/layout';
import { Image } from 'components/media';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';

const AboutPage = () => (
  <Layout>
    <TopSection image="elisa.jpg" title="Qui suis-je ?" />
    <Row>
      <Cell w={{ xs: 1, sm: 1 / 2, md: 1 / 3 }}>
        <Div p="40px 0 40px 40px">
          <Image src="/static/images/elisa-psi.jpg" />
        </Div>
      </Cell>
      <Cell w={{ xs: 1, sm: 1 / 2, md: 2 / 3 }}>
        <Div p="40px">
          <SubTitle>Mon parcours</SubTitle>
          <P>
            Dott.ssa Anna Elisa Valmori, psicologa, master in Pnl umanistica integrata, formazione in biopsicosomatica,
            psicogenealogia, facilitatore in Costellazioni familiari Sistemico-umaniste e Quantiche e D.M.O.K.A
            (Deprogrammazione attraverso i movimenti oculari, cinestesici e uditivi). Conduco sedute individuali, di
            coppia e di gruppo, di consulenza e sostegno psicologico, crescita personale e consulenza psicogenealogica.
            Formata in D.M.O.K.A.: un approccio neuro-emozionale che permette di deprogrammare stress, traumi, cambiare
            le proprie credenze, mettere in atto nuovi comportamenti e uscire dagli schemi ricorrenti riconoscendo e
            rafforzando le proprie risorse.
          </P>
          <P>
            Conduco inoltre seminari di gruppo di Costellazioni familiari: uno strumento molto efficace che permette di
            vedere in profondità le radici delle nostre difficoltà in ambito relazionale, affettivo, materiale e
            lavorativo e trasformarle. Propongo percorsi personalizzati in cui integro gli strumenti in cui mi sono
            formata ed ho sperimentato su di me e in questi anni.
          </P>
          <P>
            Da questa elaborazione personale nasce una sintesi orientata al risultato, alla scelta degli obbiettivi che
            si vogliono perseguire e alla realizzazione di sé in una visione olistica e globale dell’essere umano, in
            cui ha la sua importanza la visione transpersonale e spirituale.
          </P>
        </Div>
      </Cell>
    </Row>
    <Div bg="lightGrey" h="160px" align="middle" p="20px">
      <Div maxW="800px">
        <P fontSize="1.3em" align="center">
          <em>
            « Toutes ses compétences acquises tout au long de mes différentes formations et surtout dans le cadre de mon
            activité me permettent de m’inscrire dans une démarche préventive et curative dans de nombreux domaines. »
          </em>
        </P>
      </Div>
    </Div>
    <FooterSection />
  </Layout>
);

export default AboutPage;

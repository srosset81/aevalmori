import { Div, Row, Cell } from 'components/layout';
import { P } from 'components/text';

const FooterSection = () => (
  <Div bg="black" p="20px 30px 20px 50px">
    <Row>
      <Cell w={{ xs: 1, sm: 1 / 3 }}>
        <P bold upper color="white">
          Anna Elisa Valmori
        </P>
        <P color="white" linkColor="white">
          Un site réalisé par{' '}
          <a href="https://www.webflex.fr" target="_blank">
            webflex
          </a>
        </P>
      </Cell>
      <Cell w={{ xs: 1, sm: 1 / 3 }}>
        <P bold upper color="white">
          Adresse
        </P>
        <P color="white" linkColor="white">
          Anna Elisa Valmori<br />
          10 ter Impasse Souchier<br />
          60500 Chantilly
        </P>
      </Cell>
      <Cell w={{ xs: 1, sm: 1 / 3 }}>
        <P bold upper color="white">
          Contact
        </P>
        <P color="white" linkColor="white">
          Tél: 06 59 02 64 79<br />
          Email: aelisa.valmori@gmail.com
        </P>
      </Cell>
    </Row>
  </Div>
);

export default FooterSection;

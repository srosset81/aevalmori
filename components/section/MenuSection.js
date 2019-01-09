import { Link } from 'utils/next';
import { Div, Row, Cell } from 'components/layout';
import { BgImage } from 'components/media';
import { P, SubTitle } from 'components/text';
import { Button } from 'components/input';

const MenuSection = ({ right, image, title, children, link = '/' }) => (
  <Row>
    <Cell w={{ xs: 1, sm: 2 / 3 }} order={{ xs: '1', sm: right ? '3' : '0' }}>
      <BgImage src={`/static/images/${image}`} h={{ xs: '250px', sm: '500px' }} />
    </Cell>
    <Cell w={{ xs: 1, sm: 1 / 3 }} order="1" align="middle">
      <Div p="40px">
        <SubTitle>{title}</SubTitle>
        <P m="10px 0 15px">{children}</P>
        <Link href={link}>
          <Button>En savoir +</Button>
        </Link>
      </Div>
    </Cell>
  </Row>
);

export default MenuSection;

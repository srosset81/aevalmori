import { PageLink } from 'utils/router';
import { Div, Row, Cell } from 'components/layout';
import { BgImage } from 'components/media';
import { P, SubTitle } from 'components/text';
import { Button } from 'components/input';

const MenuSection = ({ right, image, title, children, link = 'index' }) => (
  <Row>
    <Cell w={{ xs: 1, sm: 2 / 3 }} order={{ xs: '1', sm: right ? '3' : '0' }}>
      <BgImage src={image.startsWith('http') ? image : `/static/images/${image}`} h={{ xs: '200px', sm: '500px' }} />
    </Cell>
    <Cell w={{ xs: 1, sm: 1 / 3 }} order="1" align="middle">
      <Div p={{ xs: '25px', sm: '50px' }}>
        <SubTitle>{title}</SubTitle>
        <P m="25px 0">{children}</P>
        <PageLink page={link}>
          <Button>En savoir +</Button>
        </PageLink>
      </Div>
    </Cell>
  </Row>
);

export default MenuSection;

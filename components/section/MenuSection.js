import { PageLink } from 'utils/router';
import { Div, Row, Cell, AbsoluteDiv } from 'components/layout';
import { BgImage } from 'components/media';
import { P, SubTitle } from 'components/text';
import { Button } from 'components/input';

const MenuSection = ({ right, image, title, children, link = 'index', linkCaption = 'En savoir +' }) => (
  <Row>
    <Cell w={{ xs: 1, sm: 2 / 3 }} order={{ xs: '1', sm: right ? '3' : '0' }}>
      <BgImage src={image.startsWith('http') ? image : `/static/images/${image}`} h={{ xs: '200px', sm: '100%' }} minH={{ xs: '200px', sm: '500px' }} />
      <PageLink page={link}>
        <AbsoluteDiv top bottom left right />
      </PageLink>
    </Cell>
    <Cell w={{ xs: 1, sm: 1 / 3 }} order="1" align="middle">
      <Div p={{ xs: '25px', sm: '50px' }}>
        <SubTitle>
          <PageLink page={link}>{title}</PageLink>
        </SubTitle>
        <P m={{ xs: '15px 0', sm: '25px 0' }}>{children}</P>
        <PageLink page={link}>
          <Button>{linkCaption}</Button>
        </PageLink>
      </Div>
    </Cell>
  </Row>
);

export default MenuSection;

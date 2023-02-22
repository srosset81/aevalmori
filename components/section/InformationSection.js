import {Div, Row, Cell, AbsoluteDiv} from 'components/layout';
import { BgImage } from 'components/media';
import { Button } from 'components/input';

const InformationSection = ({ right, image, bg, children, linkCaption, link }) => (
  <Div bg={bg} align="middle" p={{ xs: '30px 25px', sm: '50px' }}>
    <Row>
      <Cell w={{ xs: 1, sm: 1 / 3 }} order={{ xs: '1', sm: right ? '3' : '0' }}>
        <BgImage src={image.startsWith('http') ? image : `/static/images/${image}`} h={{ xs: '200px', sm: '100%' }} /*minH={{ xs: '200px', sm: '500px' }}*/ />
        <a href={link} target="_blank" rel="noopener noreferrer">
          <AbsoluteDiv top bottom left right />
        </a>
      </Cell>
      <Cell w={{ xs: 1, sm: 2 / 3 }} order="1" align="middle">
        <Div p={{ xs: '30px 0 0 0', sm: right ? '0 50px 0 0' : '0 0 0 50px' }}>
          <Div>
            {children}
          </Div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button>{linkCaption}</Button>
            </a>
          )}
        </Div>
      </Cell>
    </Row>
  </Div>
);

InformationSection.defaultProps = {
  color: 'black',
  bg: 'ultraLightGrey',
  right: false,
  linkCaption: 'En savoir +'
};

export default InformationSection;

import { theme } from 'utils/styling';
import { Div, AbsoluteDiv, Ul, Separator, Row, Cell } from 'components/layout';
import { BgImage, Icon } from 'components/media';

import Facebook from 'static/svg/logo-facebook.svg';
import LinkedIn from 'static/svg/logo-linkedin.svg';

import NavLink from './NavLink';

const BorderedCell = Cell.extend`
  border-left: 1px #dddddd solid;
  border-right: 1px #dddddd solid;
`;

const HoverDiv = Div.extend`
  cursor: pointer;
  transition: all ease-in-out 300ms;
  &:hover {
    color: white;
    background-color: ${props => theme.colors[props.hoverBgColor]};
  }
`;

const Navigation = () => (
  <Div bg="background" h="100%">
    <Div align="center" p="20px">
      <BgImage src="/static/images/arbre-de-vie-300x300.jpg" h="200px" w="200px" />
    </Div>
    <Separator />
    <Div p="20px 30px">
      <Ul>
        <NavLink to="/">Accueil</NavLink>
        <Separator />
        <NavLink to="/">Qui suis-je?</NavLink>
        <Separator />
        <NavLink to="/">Constellations familiales</NavLink>
        <Separator />
        <NavLink to="/contact">Contact</NavLink>
      </Ul>
    </Div>

    <AbsoluteDiv bottom left right>
      <Separator />
      <Row>
        <Cell w={1 / 3} h="40px">
          <HoverDiv bg="lightGrey" hoverBgColor="facebook" align="middle" h="100%">
            <Icon size="18px" color="white">
              <Facebook />
            </Icon>
          </HoverDiv>
        </Cell>
        <BorderedCell w={0.32} h="40px">
          <HoverDiv bg="lightGrey" hoverBgColor="facebookDark" align="middle" h="100%">
            <Icon size="20px" color="white">
              <LinkedIn />
            </Icon>
          </HoverDiv>
        </BorderedCell>
        <Cell w={1 / 3} h="40px" align="middle">
          In
        </Cell>
      </Row>
    </AbsoluteDiv>
  </Div>
);

export default Navigation;

import { theme } from 'utils/styling';
import { Trans } from 'utils/intl';
import { Div, AbsoluteDiv, Ul, Separator, Row, Cell } from 'components/layout';
import { BgImage } from 'components/media';

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
    <p>
      <Trans>Accueil !</Trans>
    </p>
    <Separator />
    <Div p="20px 30px">
      <Ul>
        <NavLink to="/">
          <Trans>Accueil</Trans>
        </NavLink>
        <Separator />
        <NavLink to="/">
          <Trans>Qui suis-je?</Trans>
        </NavLink>
        <Separator />
        <NavLink to="/">
          <Trans>Constellations familiales</Trans>
        </NavLink>
        <Separator />
        <NavLink to="/contact">
          <Trans>Contact</Trans>
        </NavLink>
      </Ul>
    </Div>

    <AbsoluteDiv bottom left right>
      <Separator />
      <Row>
        <Cell w={1 / 3} h="40px">
          <HoverDiv hoverBgColor="facebook" align="middle" h="100%">
            Fb
          </HoverDiv>
        </Cell>
        <BorderedCell w={0.32} h="40px">
          <HoverDiv hoverBgColor="facebookDark" align="middle" h="100%">
            In
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

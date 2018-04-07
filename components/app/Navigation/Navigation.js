import { theme } from 'utils/styling';
import { Link } from 'utils/next';

import { Div, FixedDiv, Ul, Separator, Row, Cell } from 'components/layout';
import { Icon, Image } from 'components/media';

import Facebook from 'static/svg/logo-facebook.svg';
import LinkedIn from 'static/svg/logo-linkedin.svg';

import NavLink from './NavLink';

const ScrollableDiv = Div.extend`
  overflow-y: auto;
  overflow-x: hidden;
`;

const BorderedCell = Cell.extend`
  border-left: 1px #dddddd solid;
  border-right: 1px #dddddd solid;
`;

const HoverDiv = Div.extend`
  cursor: pointer;
  transition: all ease-in-out 200ms;
  &:hover {
    color: ${props => theme.colors[props.hoverColor]};
    background-color: ${props => theme.colors[props.hoverBgColor]};
  }
`;

const Navigation = () => (
  <ScrollableDiv bg="background" h="100%" w="100%">
    <Div align="center" p="20px 20px 0">
      <Link href="/">
        <Image src="/static/images/logo.png" w="200px" />
      </Link>
    </Div>
    <Separator />
    <Div p="20px 30px 70px">
      <Ul>
        <NavLink to="/">Accueil</NavLink>
        <Separator m="5px 0" />
        <NavLink to="/about">Qui suis-je?</NavLink>
        <Separator m="5px 0" />
        <NavLink to="/" indent>
          Séances individuelles
        </NavLink>
        <NavLink to="/" indent>
          Consultations en ligne
        </NavLink>
        <NavLink to="/" indent>
          Constellations familiales
        </NavLink>
        <NavLink to="/" indent>
          D.M.O.K.A.
        </NavLink>
        <Separator m="5px 0" />
        <NavLink to="/contact">Témoignages</NavLink>
        <Separator m="5px 0" />
        <NavLink to="/contact">Agenda</NavLink>
        <Separator m="5px 0" />
        <NavLink to="/contact">Blog</NavLink>
        <Separator m="5px 0" />
        <NavLink to="/contact">Contact</NavLink>
      </Ul>
    </Div>

    <FixedDiv bottom left w={{ xs: '320px', sm: '300px', md: '350px' }}>
      <Separator />
      <Row>
        <Cell w={1 / 3} h="42px">
          <a href="https://www.facebook.com/profile.php?id=100009866502497" target="_blank">
            <HoverDiv
              bg="background"
              color="darkGrey"
              hoverColor="white"
              hoverBgColor="facebook"
              align="middle"
              h="100%"
            >
              <Icon size="18px">
                <Facebook />
              </Icon>
            </HoverDiv>
          </a>
        </Cell>
        <BorderedCell w={0.32} h="42px">
          <HoverDiv
            bg="background"
            color="darkGrey"
            hoverColor="white"
            hoverBgColor="facebookDark"
            align="middle"
            h="100%"
          >
            <Icon size="18px">
              <LinkedIn />
            </Icon>
          </HoverDiv>
        </BorderedCell>
        <Cell w={1 / 3} h="42px" align="middle" bg="background" />
      </Row>
    </FixedDiv>
  </ScrollableDiv>
);

export default Navigation;

import React from 'react';
import Router from 'next/router';
import { Trans } from '@lingui/macro';
import { I18n } from '@lingui/react';

import { theme } from 'utils/styling';
import { PageLink } from 'utils/router';

import { Div, FixedDiv, Ul, Separator, Row, Cell } from 'components/layout';
import { Icon, Image } from 'components/media';

import Facebook from '../../../svg/logo-facebook.svg';
import LinkedIn from '../../../svg/logo-linkedin.svg';

import NavLink from './NavLink';
import FlagSelector from './FlagSelector';

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

const TransparentImage = Image.extend`
  mix-blend-mode: multiply;
`;

const Navigation = () => (
  <ScrollableDiv bg="background" h="100%" w="100%">
    <Div align="center" p="20px">
      <PageLink page="index">
        <TransparentImage src="/static/images/logo-ae.png" w="180px" />
      </PageLink>
    </Div>
    <Separator />
    <Div p="20px 30px 70px">
      <Ul>
        <NavLink page="index">
          <Trans id="menu.home">Accueil</Trans>
        </NavLink>
        <Separator m="5px 0" />
        <NavLink page="about">
          <Trans id="menu.about">Qui suis-je?</Trans>
        </NavLink>
        <Separator m="5px 0" />
        <NavLink page="index" indent>
          <Trans id="menu.individual-consulting">Séances individuelles</Trans>
        </NavLink>
        <NavLink page="index" indent>
          <Trans id="menu.online-consulting">Consultations en ligne</Trans>
        </NavLink>
        <NavLink page="index" indent>
          <Trans id="menu.family-constellations">Constellations familiales</Trans>
        </NavLink>
        <NavLink page="index" indent>
          <Trans id="menu.dmoka">D.M.O.K.A.</Trans>
        </NavLink>
        <Separator m="5px 0" />
        <NavLink page="testimonies">
          <Trans id="menu.testimony">Témoignages</Trans>
        </NavLink>
        <Separator m="5px 0" />
        <NavLink page="links">
          <Trans id="menu.links">Liens amis</Trans>
        </NavLink>
        <Separator m="5px 0" />
        <NavLink page="contact">
          <Trans id="menu.contact">Contact</Trans>
        </NavLink>
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
        <Cell w={1 / 3} h="42px" align="middle" bg="background">
          <I18n>
            {({ i18n }) => <FlagSelector value={i18n._language || 'fr'} onChange={value => Router.push('/' + value)} />}
          </I18n>
        </Cell>
      </Row>
    </FixedDiv>
  </ScrollableDiv>
);

export default Navigation;

import React from 'react';
import { useRouter } from 'next/router';
import { useTolgee } from 'utils/i18n';

import { styled, theme } from 'utils/styling';
import { PageLink, getUrl } from 'utils/router';

import { Div, FixedDiv, Ul, Separator, Row, Cell } from 'components/layout';
import { Icon, Image } from 'components/media';

import Facebook from '../../../svg/logo-facebook.svg';
import LinkedIn from '../../../svg/logo-linkedin.svg';
import Booking from '../../../svg/booking.svg';

import NavLink from './NavLink';
import FlagSelector from './FlagSelector';
import NavLinks from "./NavLinks";

const ScrollableDiv = styled(Div)`
  overflow-y: auto;
  overflow-x: hidden;
`;

const BorderedCell = styled(Cell)`
  box-sizing: border-box;
  border-left: 1px #dddddd solid;
  border-right: 1px #dddddd solid;
`;

const HoverDiv = styled(Div)`
  cursor: pointer;
  transition: all ease-in-out 200ms;
  &:hover {
    color: ${props => theme.colors[props.hoverColor]};
    background-color: ${props => theme.colors[props.hoverBgColor]};
  }
`;

const TransparentImage = styled(Image)`
  mix-blend-mode: multiply;
`;

const Navigation = () => {
  const locale = useTolgee(['language']).getLanguage() || 'fr';
  const router = useRouter();
  const currentPage = router.pathname === '/' ? 'index' : router.pathname.replace(/^\//, '');

  return (
  <ScrollableDiv bg="navBackground" h="100%" w="100%">
    <Div align="center" p={{ xs: '30px 30px 10px 10px', sm: '30px 30px 20px 30px' }}>
      <PageLink page="index">
        <TransparentImage src="/static/images/logo-4.png" w={{ xs: '80%', sm: '100%' }} />
      </PageLink>
    </Div>
    <Div p={{ xs: '0px 15px 70px 7.5px', sm: '0px 15px 70px' }}>
      <NavLinks />
    </Div>

    <FixedDiv bottom left w={{ xs: '100%', sm: '300px', md: '375px' }}>
      <Separator />
      <Row>
        <Cell w={0.25} h="42px">
          <a href="https://www.facebook.com/Anna-Elisa-Valmori-psychologue-104513137604349/" target="_blank">
            <HoverDiv
              bg="navBackground"
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
        <BorderedCell w={0.25} h="42px">
          <a href="https://www.linkedin.com/in/anna-elisa-valmori-a99155195/" target="_blank">
            <HoverDiv
              bg="navBackground"
              color="darkGrey"
              hoverColor="white"
              hoverBgColor="linkedin"
              align="middle"
              h="100%"
            >
              <Icon size="18px">
                <LinkedIn />
              </Icon>
            </HoverDiv>
          </a>
        </BorderedCell>
        <BorderedCell w={0.25} h="42px">
          <a href="https://perfactive.fr/psychologue/compiegne/anna-elisa-valmori" target="_blank">
            <HoverDiv
              bg="navBackground"
              color="darkGrey"
              hoverColor="white"
              hoverBgColor="booking"
              align="middle"
              h="100%"
            >
              <Icon size="18px">
                <Booking />
              </Icon>
            </HoverDiv>
          </a>
        </BorderedCell>
        <Cell w={0.25} h="42px" align="middle" bg="navBackground">
          <FlagSelector
            value={locale}
            onChange={otherLocale => router.push(getUrl(currentPage, otherLocale))}
          />
        </Cell>
      </Row>
    </FixedDiv>
  </ScrollableDiv>
  );
};

export default Navigation;

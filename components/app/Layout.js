import React, { useState } from 'react';
import { theme, ThemeProvider } from 'utils/styling';
import { Div, FixedDiv, Visible, Hidden } from 'components/layout';
import { Navigation } from 'components/app';
import HamburgerIcon from './HamburgerIcon';
import SideMenu from './SideMenu';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Hidden sm>
          <FixedDiv top left p="25px" zIndex="hamburger">
            <HamburgerIcon
              isOpen={menuOpen}
              menuClicked={() => setMenuOpen(!menuOpen)}
              width={32}
              height={22}
              strokeWidth={4}
              rotate={0}
              color={'grey'}
              borderRadius={5}
              animationDuration={0.5}
            />
          </FixedDiv>
          <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)}>
            <Navigation />
          </SideMenu>
        </Hidden>
        <Visible sm>
          <FixedDiv top left bottom w="350px" zIndex="navigation">
            <Navigation />
          </FixedDiv>
        </Visible>
        <Div p={{xs: '0', sm: '0 0 0 350px'}}>{children}</Div>
      </div>
    </ThemeProvider>
  );
}

export default Layout;

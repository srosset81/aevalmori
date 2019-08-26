import React from 'react';
import { styled, theme, ThemeProvider } from 'utils/styling';
import { Cell, Div, FixedDiv, Visible, Hidden } from 'components/layout';
import { Navigation } from 'components/app';

import HamburgerIcon from './HamburgerIcon';
import SideMenu from './SideMenu';

const Content = styled(Cell)`
  flex-grow: 1;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }
  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Hidden sm>
            <FixedDiv top left p="25px" zIndex="hamburger">
              <HamburgerIcon
                isOpen={this.state.isMenuOpen}
                menuClicked={this.toggleMenu}
                width={32}
                height={22}
                strokeWidth={4}
                rotate={0}
                color={this.state.isMenuOpen ? 'grey' : 'white'}
                borderRadius={5}
                animationDuration={0.5}
              />
            </FixedDiv>
            <SideMenu open={this.state.isMenuOpen} onClose={this.toggleMenu}>
              <Navigation />
            </SideMenu>
          </Hidden>

          <Visible sm>
            <FixedDiv top left bottom w="350px" zIndex="navigation">
              <Navigation />
            </FixedDiv>
          </Visible>

          <Div p={{ xs: '0', sm: '0 0 0 350px' }}>{children}</Div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;

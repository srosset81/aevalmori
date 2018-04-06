import { elastic as BurgerMenu } from 'react-burger-menu';
import { theme, ThemeProvider } from 'utils/styling';
import { Cell, Div, FixedDiv, Row, AbsoluteDiv } from 'components/layout';
import { Navigation } from 'components/app';

import HamburgerIcon from './HamburgerIcon';

const Content = Cell.extend`
  flex-grow: 1;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }
  componentDidMount() {
      setTimeout(this.toggleMenu, 700);
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
        <div id="outer-container">
          <FixedDiv top right p="25px" zIndex="hamburger">
            <HamburgerIcon
              isOpen={this.state.isMenuOpen}
              menuClicked={this.toggleMenu}
              width={32}
              height={22}
              strokeWidth={4}
              rotate={0}
              color="white"
              borderRadius={5}
              animationDuration={0.5}
            />
          </FixedDiv>

          <BurgerMenu
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
            styles={{
              bmMenu: {
                width: '100%'
              },
              bmMorphShape: {
                width: 0
              }
            }}
            noOverlay
            left
            isOpen={this.state.isMenuOpen}
            customBurgerIcon={false}

          >
            <Navigation />
          </BurgerMenu>

          {/*<FixedDiv top left bottom w="350px">
            <Navigation />
          </FixedDiv>*/}
          <div id="page-wrap">{children}</div>
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;

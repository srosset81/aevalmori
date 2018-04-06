import { push as BurgerMenu } from 'react-burger-menu';
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
  toggleMenu = () => {
    console.log('toggle');
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div id="outer-container">
          <FixedDiv top right p="20px" zIndex="hamburger">
            <HamburgerIcon
              isOpen={this.state.isMenuOpen}
              menuClicked={this.toggleMenu}
              width={32}
              height={22}
              strokeWidth={4}
              rotate={0}
              color="black"
              borderRadius={5}
              animationDuration={0.5}
            />
          </FixedDiv>
          <FixedDiv top right zIndex="navigation">
            <BurgerMenu
                pageWrapId="page-wrap"
                outerContainerId="outer-container"
              right
              isOpen={this.state.isMenuOpen}
              customBurgerIcon={false}
              customCrossIcon={false}
            >
              <Navigation />
            </BurgerMenu>
          </FixedDiv>

          <FixedDiv top left bottom w="350px">
            <Navigation />
          </FixedDiv>
          <Row id="page-wrap">
            <Cell w="350px" />
            <Content>
              <Div>{children}</Div>
            </Content>
          </Row>
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;

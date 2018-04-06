import { ThemeProvider, theme } from 'utils/styling';
import { Div, Row, Cell, FixedDiv } from 'components/layout';
import { Navigation } from 'components/app';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <FixedDiv top left bottom w={1 / 4} zIndex="navigation">
        <Navigation />
      </FixedDiv>
      <Row>
        <Cell w={1 / 4} />
        <Cell w={3 / 4}>
          <Div>{children}</Div>
        </Cell>
      </Row>
    </div>
  </ThemeProvider>
);

export default Layout;

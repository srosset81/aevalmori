import { ThemeProvider, theme } from 'utils/styling';
import { Div, Row, Cell, FixedDiv } from 'components/layout';
import { Navigation } from 'components/app';

const Content = Cell.extend`
    flex-grow: 1;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <FixedDiv top left bottom w="350px" zIndex="navigation">
        <Navigation />
      </FixedDiv>
      <Row>
        <Cell w="350px" />
        <Content>
          <Div>{children}</Div>
        </Content>
      </Row>
    </div>
  </ThemeProvider>
);

export default Layout;

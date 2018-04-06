import { Link } from 'utils/next';
import { styled } from 'utils/styling';

import { Li } from 'components/layout';
import { Text } from 'components/text';

const StyledLi = Li.extend`
  ${props => (props.indent ? `padding: 7px 0 6px 15px;` : `padding: 7px 0 6px;`)} width: 100%;
`;

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLink = ({ to, indent, children }) => (
  <StyledLi indent={indent}>
    <Link href={to}>
      <Text color="darkGrey" fontSize="0.95em">
        <StyledA>{children}</StyledA>
      </Text>
    </Link>
  </StyledLi>
);

NavLink.defaultProps = {
  indent: false
};

export default NavLink;

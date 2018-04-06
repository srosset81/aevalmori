import { Link } from 'utils/next';
import { styled } from 'utils/styling';

import { Li } from 'components/layout';
import { Text } from 'components/text';

const StyledLi = Li.extend`
  padding: 13px 0 12px;
  width: 100%;
`;

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLink = ({ to, children }) => (
  <StyledLi>
    <Link href={to}>
      <Text color="darkGrey" fontSize="0.95em">
        <StyledA>{children}</StyledA>
      </Text>
    </Link>
  </StyledLi>
);

export default NavLink;

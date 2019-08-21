import React from 'react';
import { PageLink } from 'utils/router';
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

const NavLink = ({ page, indent, children }) => (
  <StyledLi indent={indent}>
    <PageLink page={page}>
      <Text color="darkGrey" fontSize="0.95em">
        <StyledA>{children}</StyledA>
      </Text>
    </PageLink>
  </StyledLi>
);

NavLink.defaultProps = {
  indent: false
};

export default NavLink;

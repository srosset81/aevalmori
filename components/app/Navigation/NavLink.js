import React from 'react';
import { PageLink } from 'utils/router';
import { styled } from 'utils/styling';

import { Div, Li } from 'components/layout';
import { Text } from 'components/text';

const StyledDiv = styled(Div)`
  ${props => (props.indent ? `padding: 5px 0 4px 25px;` : `padding: 6px 0 5px 10px;`)}
  width: 100%;
`;

const StyledA = styled.span`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NavLink = ({ page, indent, children }) => (
  <Li>
    <StyledDiv indent={indent}>
      <PageLink page={page}>
        <Text color="navText" fontSize="1em">
          <StyledA>{children}</StyledA>
        </Text>
      </PageLink>
    </StyledDiv>
  </Li>
);

NavLink.defaultProps = {
  indent: false
};

export default NavLink;

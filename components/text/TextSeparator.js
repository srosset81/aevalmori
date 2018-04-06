import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle, responsivePropType } from 'utils/styling';

import { Text } from '../text';
import Div from '../layout/Div';

// prettier-ignore
const StyledDiv = styled(Div)`
  ${responsiveStyle({m: 'margin'})}
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${props => props.theme.colors[props.color]};
  }
`;

const TextSeparator = ({ m, children, color }) => (
  <StyledDiv align="middleCenter" m={m || '6px 0'} color="ultraLightGrey">
    &nbsp;&nbsp;
    <Text fontSize="0.9em" color={color || 'mediumGrey'}>
      {children}
    </Text>
    &nbsp;&nbsp;
  </StyledDiv>
);

TextSeparator.propTypes = {
  children: PropTypes.string,
  m: responsivePropType,
  color: PropTypes.string
};

export default TextSeparator;

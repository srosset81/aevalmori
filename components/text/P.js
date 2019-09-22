import React from 'react';
import { styled, responsiveStyle, responsivePropType } from 'utils/styling';
import Text from './Text';

// prettier-ignore
const StyledText = styled(Text)`
  display: block;
  width: 100%;
  ${responsiveStyle({align: 'text-align'})}
`;

const P = props => <StyledText as="p" {...props} />;

P.propTypes = {
  align: responsivePropType
};

P.defaultProps = {
  fontSize: '1.1em',
  lineHeight: '1.7em'
};

// Allows to refer to this component in other styled-components
// See https://www.styled-components.com/docs/advanced#caveat
export default styled(P)``;

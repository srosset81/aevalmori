import React from 'react';
import { styled, responsiveStyle, responsivePropType } from 'utils/styling';
import Text from './Text';

// prettier-ignore
const StyledText = styled(Text)`
  display: block;
  width: 100%;
  ${responsiveStyle({align: 'text-align'})}
`;

const P = (props) => (
    <StyledText as="p" {...props}/>
);

P.propTypes = {
  align: responsivePropType
};

P.defaultProps = {
  lineHeight: '1.7em'
};

export default P;

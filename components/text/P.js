import React from 'react';
import { responsiveStyle, responsivePropType } from 'utils/styling';
import Text from './Text';

// prettier-ignore
const P = Text.withComponent('p').extend`
  display: block;
  width: 100%;
  ${responsiveStyle({align: 'text-align'})}
`;

P.propTypes = {
  align: responsivePropType
};

P.defaultProps = {
  lineHeight: '1.7em'
};

export default P;

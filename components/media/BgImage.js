import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle, responsivePropType } from 'utils/styling';

import Div from '../layout/Div';

const BgImage = styled(Div)`
  background-image: url(${props => props.src}) ${props => (props.fallback ? `, url('${props.fallback}')` : '')};
  background-repeat: no-repeat;
  ${responsiveStyle({ size: 'background-size', position: 'background-position' })};
`;

BgImage.propTypes = {
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string,
  size: responsivePropType,
  position: responsivePropType
};

BgImage.defaultProps = {
  size: 'cover',
  position: 'center top'
};

export default BgImage;

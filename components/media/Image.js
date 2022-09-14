import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle } from 'utils/styling';

const Image = styled.img`
  width: ${props => props.w};
  height: ${props => props.h};
  ${responsiveStyle({ m: 'margin' })}
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  w: PropTypes.string,
  h: PropTypes.string,
};

Image.defaultProps = {
  w: '100%',
  h: 'auto'
};

export default Image;

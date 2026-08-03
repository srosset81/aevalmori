import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle } from 'utils/styling';

const Image = styled.img`
  height: ${props => props.h};
  ${responsiveStyle({ w: 'width', m: 'margin' })}
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  h: PropTypes.string,
};

Image.defaultProps = {
  w: '100%',
  h: 'auto'
};

export default Image;

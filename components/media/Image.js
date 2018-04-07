import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'utils/styling';

const Image = styled.img`
  width: ${props => props.w};
  height: auto;
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  w: PropTypes.string,
  h: PropTypes.height
};

Image.defaultProps = {
  w: '100%'
};

export default Image;

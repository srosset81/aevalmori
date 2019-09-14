import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'utils/styling';

const SideImage = styled.img`
  float: ${props => props.align};
  width: 360px;
  margin-left: ${props => (props.align === 'right' ? '50px' : '0px')};
  margin-right: ${props => (props.align === 'left' ? '50px' : '0px')};
  margin-bottom: 30px;

  &::after {
    clear: both;
  }
`;

SideImage.propTypes = {
  src: PropTypes.string.isRequired,
  align: PropTypes.string
};

SideImage.defaultProps = {
  align: 'left'
};

export default SideImage;

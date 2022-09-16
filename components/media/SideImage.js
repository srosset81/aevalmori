import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, mediaQuery } from 'utils/styling';

const SideImage = styled.img`
  float: ${props => props.align};
  width: ${props => props.width};
  max-width: 100%;
  ${props =>
    props.align === 'right' &&
    mediaQuery('sm')(props) &&
    css`
      margin-left: 50px;
    `}
  ${props =>
    props.align === 'left' &&
    mediaQuery('sm')(props) &&
    css`
      margin-right: 50px;
    `}
  margin-right: ${props => (props.align === 'left' ? '50px' : '0px')};
  margin-bottom: 25px;
  ${mediaQuery('sm')} {
    margin-bottom: ${props => (props.noBottomMargin ? '0px' : '35px')};
  }
  &::after {
    clear: both; 
  }
`;

SideImage.propTypes = {
  src: PropTypes.string.isRequired,
  align: PropTypes.string,
  width: PropTypes.string,
  noBottomMargin: PropTypes.bool
};

SideImage.defaultProps = {
  align: 'left',
  width: '360px'
};

export default SideImage;

import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, responsiveStyle, responsivePropType } from '../../utils/styling';
import Li from './Li';

// prettier-ignore
const Ul = styled.ul`
  -webkit-padding-start: 0px;
  list-style: none;
  margin: -3px;
  vertical-align: middle;
  ${responsiveStyle({ p: 'padding' })}
  ${props => !props.horizontal && css`width: 100%; height:100%;`}
  ${props => props.horizontal && css`height:100%;`}
  ${Li} {
    display: ${props => (props.horizontal ? 'inline-block' : 'block')};
    padding: 3px;
    ${props => props.horizontal && css`height:100%;`}
  }
`;

Ul.propTypes = {
  p: responsivePropType,
  horizontal: PropTypes.bool
};

export default Ul;

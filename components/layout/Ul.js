import React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '../../utils/styling';
import Li from './Li';

// prettier-ignore
const Ul = styled.ul`
  -webkit-padding-start: 0px;
  list-style: none;
  margin: -${props => props.p};
  vertical-align: middle;
  ${props => !props.horizontal && css`width: 100%; height:100%;`}
  ${props => props.horizontal && css`height:100%;`}
  ${Li} {
    display: ${props => (props.horizontal ? 'inline-block' : 'block')};
    padding: ${props => props.p};
    ${props => props.horizontal && css`height:100%;`}
  }
`;

Ul.propTypes = {
  p: PropTypes.string,
  horizontal: PropTypes.bool
};

Ul.defaultProps = {
  p: '3px'
};

export default Ul;

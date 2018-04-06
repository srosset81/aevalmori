import React from 'react';
import PropTypes from 'prop-types';
import Div from '../layout/Div';

// prettier-ignore
const Icon = Div.extend`
    > svg {
      width: ${props => props.size};
      height: ${props => props.size};
      vertical-align: middle;
      stroke-width: ${props => props.stroke || '1.3px'};
      ${props => props.pushUp && `position: relative; bottom: ${props.pushUp}px;`}
      > g, > polyline, > path, > polygon > g, > polygon {
        ${props => props.full ? 'fill' : 'stroke'}: ${props => props.theme.colors[props.color]};
        ${props => props.full && props.stroke && `stroke: ${props.theme.colors[props.color]};`}
      }
    }
`;

Icon.propTypes = {
  full: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string // ex: 18px
};

Icon.defaultProps = {
  full: true,
  color: 'black',
  size: '24px'
};

export default Icon;

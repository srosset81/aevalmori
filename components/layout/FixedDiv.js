import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';

const defaultToZero = style => (typeof style === 'string' ? style : '0');

// prettier-ignore
export const FixedDiv = Div.extend`
  position: fixed;
  ${props => props.scroll && `overflow: auto;`};
  ${props => props.bottom && 'bottom:' + defaultToZero(props.bottom) + ';'}
  ${props => props.top && 'top:' + defaultToZero(props.top) + ';'}
  ${props => props.left && 'left:' + defaultToZero(props.left) + ';'}
  ${props => props.right && 'right:' + defaultToZero(props.right) + ';'}
`;

const autorizedTypes = [PropTypes.string, PropTypes.bool];

FixedDiv.propTypes = {
  scroll: PropTypes.bool,
  bottom: PropTypes.oneOfType(autorizedTypes),
  top: PropTypes.oneOfType(autorizedTypes),
  left: PropTypes.oneOfType(autorizedTypes),
  right: PropTypes.oneOfType(autorizedTypes)
};

export default FixedDiv;

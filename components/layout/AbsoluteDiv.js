import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';

const defaultToZero = style => (typeof style === 'string' ? style : '0');

// prettier-ignore
export const AbsoluteDiv = Div.extend`
  position: absolute;
  ${props => props.bottom && 'bottom:' + defaultToZero(props.bottom) + ';'}
  ${props => props.top && 'top:' + defaultToZero(props.top) + ';'}
  ${props => props.left && 'left:' + defaultToZero(props.left) + ';'}
  ${props => props.right && 'right:' + defaultToZero(props.right) + ';'}
  ${props => props.opacity && `opacity: ${props.opacity};`}
`;

const autorizedTypes = [PropTypes.string, PropTypes.bool];

AbsoluteDiv.propTypes = {
  bottom: PropTypes.oneOfType(autorizedTypes),
  top: PropTypes.oneOfType(autorizedTypes),
  left: PropTypes.oneOfType(autorizedTypes),
  right: PropTypes.oneOfType(autorizedTypes),
  zIndex: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default AbsoluteDiv;

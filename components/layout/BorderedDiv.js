import React from 'react';
import PropTypes from 'prop-types';
import { css, responsiveStyle, responsivePropType } from '../../utils/styling';
import Div from './Div';

// prettier-ignore
export const BorderedDiv = Div.extend`
  ${props => !props.noBorder && css`border: 1px solid ${props => props.borderColor ? props.theme.colors[props.borderColor] : 'transparent'};`}
  ${responsiveStyle({borderRadius: 'border-radius'})}
  overflow: ${props => props.overflow ? props.overflow : 'visible'};
`;

BorderedDiv.propTypes = {
  borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  borderRadius: responsivePropType,
  noBorder: PropTypes.bool,
  overflow: PropTypes.string
};

BorderedDiv.defaultProps = {
  borderRadius: '3px'
};

export default BorderedDiv;

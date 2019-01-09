import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle, responsivePropType, css } from '../../utils/styling';
import Div from './Div';

// prettier-ignore
const Cell = styled(Div)`
  ${responsiveStyle({ order: 'order' })}
  ${props => props.flex && css`flex: ${props.flex};`}
`;

Cell.propTypes = {
  order: responsivePropType,
  flex: PropTypes.string
};

export default Cell;

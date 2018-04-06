import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, alignStyle, responsiveStyle, responsivePropType } from '../../utils/styling';

// prettier-ignore
const Div = styled.div`
  position: relative;
  ${props => props.color && css`color: ${props.theme.colors[props.color]};`}
  ${props => props.bg && css`background-color: ${props.theme.colors[props.bg]};`}
  ${props => props.noOverflow && css`overflow: hidden;`}
  ${responsiveStyle({m: 'margin', p: 'padding', w: 'width', h: 'height', maxW: 'max-width', maxH: 'max-height', minW: 'min-width', minH: 'min-height'})}
  ${alignStyle}
  ${props => props.zIndex && `z-index: ${props.theme.zIndex[props.zIndex]};`};
`;

Div.propTypes = {
  h: PropTypes.string,
  minW: responsivePropType,
  maxW: responsivePropType,
  minH: responsivePropType,
  maxH: responsivePropType,
  bg: PropTypes.string,
  noOverflow: PropTypes.bool,
  color: PropTypes.string,
  h: responsivePropType,
  w: responsivePropType,
  p: responsivePropType,
  m: responsivePropType,
  align: PropTypes.string,
  direction: PropTypes.string,
  zIndex: PropTypes.string
};

export default Div;

import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, responsiveStyle, responsivePropType } from '../../utils/styling';

// prettier-ignore
const Span = styled.div`
  display: inline-block;
  position: relative;
  ${props => props.left && css`float: left;`}
  ${props => props.right && css`float: right;`}
  ${props => props.color && css`color: ${props.theme.colors[props.color]};`}
  ${props => props.h && css`height: ${props.h};`}
  ${props => props.minW && css`min-width: ${props.minW};`}
  ${props => props.maxW && css`max-width: ${props.maxW};`}
  ${props => props.minH && css`min-height: ${props.minH};`}
  ${props => props.bg && css`background-color: ${props.theme.colors[props.bg]};`}
  ${props => props.borderRadius && css`border-radius: ${props.borderRadius};`}
  ${responsiveStyle({m: 'margin', p: 'padding', w: 'width', h: 'height'})}
  ${props => props.alignMiddle && css`> * {
    vertical-align: middle;
  }`}
`;

Span.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  h: responsivePropType,
  minW: PropTypes.string,
  maxW: PropTypes.string,
  minH: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  p: responsivePropType,
  m: responsivePropType,
  w: responsivePropType,
  borderRadius: PropTypes.string
};

export default Span;

import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle, responsivePropType } from 'utils/styling';

// prettier-ignore
const Span = styled.span`
    ${props => props.right && 'float: right;'}
    ${props => props.left && 'float: left;'}
    ${responsiveStyle({p: 'padding'})}
`;

Span.PropTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  p: responsivePropType
};

export default Span;

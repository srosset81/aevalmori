import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsiveStyle, responsivePropType } from 'utils/styling';

// prettier-ignore
const Separator = styled.div`
  ${responsiveStyle({m: 'margin'})}
  height: 1px;
  background-color: ${props => (props.color ? props.theme.colors[props.color] : props.theme.colors.navSeparator)};
`;

Separator.propTypes = {
  m: responsivePropType,
  color: PropTypes.string
};

export default Separator;

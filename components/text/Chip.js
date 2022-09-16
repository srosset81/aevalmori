import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, responsiveStyle, responsivePropType } from 'utils/styling';

// prettier-ignore
const Chip = styled.span`
    display: inline-block;
    padding: 3px 15px;
    ${props => props.bg && css`background-color: ${props.theme.colors[props.bg]};`}
    ${props => props.onClick && css`cursor: pointer;`}
    ${props => props.selected && css`font-weight: bold;`}
    border-radius: 15px;
    margin-left: 8px;
    ${responsiveStyle({p: 'padding'})}
`;

Chip.defaultProps = {
  bg: 'secondaryLight'
}

Chip.propTypes = {
  p: responsivePropType
};

export default Chip;

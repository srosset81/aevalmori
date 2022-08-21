import React from 'react';
import PropTypes from 'prop-types';

import { styled, css, responsiveStyle, responsivePropType } from 'utils/styling';

import { Icon } from 'components/media';

const buttonColors = {
  classic: {
    font: 'white',
    bg: 'primaryDark',
    border: 'primaryDark',
    hoverFont: 'primaryDark',
    hoverBg: 'transparent'
  },
  classicNoHover: {
    font: 'white',
    bg: 'secondaryDark',
    border: 'secondaryDark',
    hoverBg: 'secondaryDark'
  },
  classicLight: {
    font: 'white',
    bg: 'secondaryDark',
    border: 'white',
    hoverFont: 'secondaryDark',
    hoverBg: 'white'
  },
  classicHoverLight: {
    font: 'white',
    bg: 'secondaryDark',
    border: 'secondaryDark',
    hoverFont: 'white',
    hoverBg: 'transparent',
    hoverBorder: 'white'
  },
  darkGrey: {
    font: 'white',
    bg: 'lightGrey',
    border: 'lightGrey',
    hoverFont: 'white',
    hoverBg: 'primaryDark'
  }
  // primary: {
  //   font: 'white',
  //   bg: 'yellow',
  //   border: 'yellow'
  // },
  // primaryLight: {
  //   font: 'yellow',
  //   border: 'yellow'
  // },
  // primaryLightHover: {
  //   font: 'white',
  //   bg: 'yellow',
  //   border: 'yellow',
  //   hoverFont: 'yellow',
  //   hoverBg: 'transparent'
  // },
  // primaryDarkHover: {
  //   font: 'white',
  //   bg: 'yellow',
  //   border: 'yellow',
  //   hoverBg: 'orange',
  //   hoverBorder: 'orange'
  // },
  // whiteTransparent: {
  //   font: 'white',
  //   hoverBorder: 'white'
  // },
  // mediumGrey: {
  //   font: 'white',
  //   bg: 'mediumGrey',
  //   border: 'mediumGrey',
  //   hoverFont: 'mediumGrey',
  //   hoverBg: 'white'
  // },
  // lightGrey: {
  //   font: 'white',
  //   bg: 'lightGrey',
  //   border: 'lightGrey',
  //   hoverFont: 'mediumGrey',
  //   hoverBg: 'ultraLightGrey'
  // },
};

const buttonColorStyle = (prop, cssProp) => ({ colors, theme }) =>
  buttonColors[colors] && buttonColors[colors][prop]
    ? css`
        ${cssProp}: ${theme.colors[buttonColors[colors][prop]]};
      `
    : null;

const buttonSizes = {
  auto: {
    padding: '0.65em 1em',
    height: 'auto'
  },
  big: {
    padding: '0 13px',
    height: '56px'
  },
  normal: {
    padding: '0 11px',
    height: '38px'
  },
  medium: {
    padding: '0 10px',
    height: '33px'
  }
};

// prettier-ignore
const StyledButton = styled.button`
  flex: 0 0 auto; /* prevent height to be impacted by flex */
  display: inline-block;
  cursor: pointer;
  font-family: 'Caviar Dreams', 'Open Sans', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  padding: ${props => buttonSizes[props.size].padding };
  height: ${props => buttonSizes[props.size].height };
  ${props => props.bold && css`font-weight: bold;` }
  border-radius: 3px;
  border: 1px solid transparent;
  transition: all 0.1s ease-in-out;
  vertical-align: middle;

  ${buttonColorStyle('font', 'color')};
  ${buttonColorStyle('bg', 'background-color')};
  ${buttonColorStyle('border', 'border-color')};
  ${responsiveStyle({fontSize: 'font-size', w: 'width', m: 'margin'})}

  :hover {
    ${buttonColorStyle('hoverFont', 'color')};
    ${buttonColorStyle('hoverBg', 'background-color')};
    ${buttonColorStyle('hoverBorder', 'border-color')};
    ${props => buttonColors[props.colors].hoverBg === 'transparent' && css`background: none;`}
  }
`;

const Button = ({ children, icon, ...otherProps }) => (
  <StyledButton {...otherProps}>
    {icon && (
      <span>
        <Icon name={icon} size="1.1em" />
        &nbsp;&nbsp;
      </span>
    )}
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  colors: PropTypes.string,
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['auto', 'big', 'normal', 'medium']),
  fontSize: responsivePropType,
  w: responsivePropType,
  m: responsivePropType
};

Button.defaultProps = {
  colors: 'classic',
  size: 'normal',
  fontSize: '1em'
};

export default Button;

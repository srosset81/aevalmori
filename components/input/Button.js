import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, responsiveStyle, responsivePropType } from 'utils/styling';
import { Icon } from 'components/media';

const buttonColorStyle = (prop, cssProp) => ({ colors, theme }) =>
  theme.buttons[colors] && theme.buttons[colors][prop]
    ? css`
        ${cssProp}: ${theme.colors[theme.buttons[colors][prop]]};
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
    padding: '5px 11px',
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
    ${props => props.theme.buttons[props.colors].hoverBg === 'transparent' && css`background: none;`}
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

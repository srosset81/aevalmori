import React from 'react';
import PropTypes from 'prop-types';
import { styled, css, responsiveStyle, responsivePropType } from 'utils/styling';
import { translate } from 'utils/intl';

const BaseText = ({ children, className }) => <span className={className}>{translate(children)}</span>;

// prettier-ignore
const Text = styled(BaseText)`
  word-wrap: break-word;
  display: ${props => (props.m || props.p ? 'inline-block' : 'inline')};
  font-family: ${({ font, theme }) => (font ? theme.fontFamily[font] : theme.fontFamily.openSans)};
  line-height: ${props => props.lineHeight || '1.3em'};
  float: ${props => props.float};
  ${props => props.bold && css`font-weight: bold;`}
  ${props => props.italic && css`font-style: italic;`}
  ${props => props.color && css`color: ${props.theme.colors[props.color]};`}
  ${props => props.upper && css`text-transform: uppercase;`}
  ${props => props.underline && css`text-decoration: underline;`}
  ${responsiveStyle({m: 'margin', p: 'padding', fontSize: 'font-size'})}
  ${props => props.linkColor && css`> a, > span > a {
    color: ${props.theme.colors[props.linkColor]};
  }`}
`;

Text.propTypes = {
  font: PropTypes.string,
  upper: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.string,
  linkColor: PropTypes.string,
  lineHeight: PropTypes.string,
  fontSize: responsivePropType,
  m: responsivePropType,
  p: responsivePropType,
  underline: PropTypes.bool,
  float: PropTypes.string
};

export default Text;

import React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from 'utils/styling';

const Input = styled.input.attrs({
    type: props => props.type || 'text'
})`
  display: block;
  width: ${props => props.w || 'calc(100% - 20px)'};
  height: ${props => props.h || '22px'};
  margin: 3px 0;
  padding: 7px 10px;
  font-family: ${({ font, theme }) => (font ? theme.fontFamily[font] : theme.fontFamily.openSans)};
  font-size: ${props => props.fontSize || '14px'};
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  vertical-align: middle;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  ${props =>
    props.color &&
    css`
      color: ${props.theme.colors[props.color]};
    `} &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

Input.propTypes = {
    type: PropTypes.string,
    font: PropTypes.string,
    fontSize: PropTypes.string,
    color: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string
};

export default Input;

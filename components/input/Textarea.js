import React from 'react';
import { styled } from 'utils/styling';

const Textarea = styled.textarea.attrs(props => ({
  rows: props.rows || 5
}))`
  display: block;
  width: calc(100% - 20px);
  ${props => props.resize && `resize: ${props.resize};`} padding: 10px;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

export default Textarea;

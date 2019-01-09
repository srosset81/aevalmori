import React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '../../utils/styling';
import Div from './Div';
import Cell from './Cell';

// If value is '20px', returns '10px'
const halfValue = value => `${parseInt(value, 10) / 2}${value.slice(-2)}`;

// prettier-ignore
const Row = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${props => (props.gutter && css`margin: -${halfValue(props.gutter)};`)};
  > ${Cell} {
    ${props => (props.gutter && !props.noPaddingOnCells && css`padding: ${halfValue(props.gutter)};`)}
  }
`;

Row.propTypes = {
  gutter: PropTypes.string,
  noPaddingOnCells: PropTypes.bool
};

export default Row;

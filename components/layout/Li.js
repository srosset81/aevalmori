import React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '../../utils/styling';

// prettier-ignore
const Li = styled.li`
  ${props => props.invisible && css`display: none !important;`}
  ${props => props.w && css`width: ${props.w};`}
`;

Li.propTypes = {
  w: PropTypes.string
};

export default Li;

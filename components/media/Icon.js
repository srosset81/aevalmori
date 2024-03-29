import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'utils/styling';
import Span from '../text/Span';

// prettier-ignores
const Icon = styled(Span)`
  > svg {
    fill: currentColor;
    width: ${props => props.size};
    height: ${props => props.size};
    vertical-align: middle;
    ${props => props.pushUp && `position: relative; bottom: ${props.pushUp}px;`}
  }
`;

Icon.propTypes = {
  size: PropTypes.string // ex: 18px
};

Icon.defaultProps = {
  size: '24px'
};

export default Icon;

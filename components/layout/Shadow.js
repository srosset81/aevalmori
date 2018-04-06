import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '../../utils/styling';

const Shadow = styled.div`
  box-shadow: ${props => props.inset && 'inset'} 0px 0px ${props => props.depth}
    rgba(0, 0, 0, ${props => props.opacity || '0.5'});
`;

Shadow.propTypes = {
  depth: PropTypes.string,
  inset: PropTypes.bool,
  opacity: PropTypes.string
};

export default Shadow;

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../utils/styling';
import FixedDiv from './FixedDiv';

const StyledFixedDiv = styled(FixedDiv)`
  opacity: ${props => props.opacity};
  cursor: pointer;
`;

const Overlay = ({ bg, opacity, onClick, children }) => (
  <StyledFixedDiv
    left
    right
    top
    bottom
    onClick={onClick || null}
    bg={bg || 'black'}
    opacity={opacity || '0.2'}
    zIndex="overlay"
  >
    {children || null}
  </StyledFixedDiv>
);

Overlay.propTypes = {
  bg: PropTypes.string,
  opacity: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Overlay;

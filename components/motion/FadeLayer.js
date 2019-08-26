import React from 'react';
import { styled } from 'utils/styling';
import { FullScreenDiv, Div } from '../layout';

const BackLayer = styled(FullScreenDiv)`
  visibility: hidden;
  opacity: 0;
  transition: all linear 250ms;

  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const FadeOverlay = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => (props.bgColor ? props.theme.colors[props.bgColor] : 'black')};
  opacity: ${props => (props.opacity ? props.opacity / 100 : 0.5)};
`;

const FadeLayer = ({ visible, opacity, onClick, children }) => (
  <BackLayer className={visible && 'visible'}>
    {opacity > 0 && <FadeOverlay opacity={opacity} onClick={onClick} />}
    {children}
  </BackLayer>
);

FadeLayer.defaultProps = {
  opacity: 50,
  showNav: false
};

export default FadeLayer;

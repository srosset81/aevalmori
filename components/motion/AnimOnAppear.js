import React from 'react';
import TrackVisibility from 'react-on-screen';
import { styled } from 'utils/styling';

const AnimatedDiv = styled.div`
  position: relative;
  transition: all 0.8s ease-out;
  opacity: 0;
  left: 100px;

  &.visible {
    opacity: 1;
    left: 0;
  }
`;

const AnimOnAppaer = ({ children }) => (
  <TrackVisibility once>
    {({ isVisible }) => <AnimatedDiv className={isVisible && 'visible'}>{children}</AnimatedDiv>}
  </TrackVisibility>
);

export default AnimOnAppaer;

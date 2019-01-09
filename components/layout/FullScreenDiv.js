import React from 'react';
import Div from './Div';

const FullScreenDiv = Div.extend`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => props.theme.zIndex.overlay};
`;

export default FullScreenDiv;
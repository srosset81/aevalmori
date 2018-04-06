import React from 'react';
import Div from './Div';

const NAV_MIN_SIZE = 45;

// prettier-ignore
const FullPageDiv = Div.extend`
  min-height: calc(100vh - ${NAV_MIN_SIZE}px);
`;

export default FullPageDiv;

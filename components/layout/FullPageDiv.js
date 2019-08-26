import React from 'react';
import { styled } from 'utils/styling';
import Div from './Div';

const NAV_MIN_SIZE = 0;

// prettier-ignore
const FullPageDiv = styled(Div)`
  min-height: calc(100vh - ${NAV_MIN_SIZE}px);
`;

export default FullPageDiv;

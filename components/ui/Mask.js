import React from 'react';
import PropTypes from 'prop-types';
import { styled, responsivePropType } from '@hozana/styling';

import Div from '../layout/Div';
import AbsoluteDiv from '../layout/AbsoluteDiv';
import shadow from 'assets/img/shadow_publi.png';

// prettier-ignore
const StyledDiv = styled(Div)`
  pointer-event: none;
  background-image: url('${shadow}');
  background-repeat: repeat-x;
  background-size: 100% 100%;
`;

const Mask = ({ onClick, children, p, m, ...otherProps }) => (
  <AbsoluteDiv left bottom w="100%">
    <StyledDiv {...otherProps} w="100%" />
    <ReadMoreLink onClick={onClick} bg="white" p={p} m={m}>
      {children}
    </ReadMoreLink>
  </AbsoluteDiv>
);

Mask.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  p: responsivePropType,
  m: responsivePropType
};

export default Mask;

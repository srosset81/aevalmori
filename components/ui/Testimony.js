import React from 'react';
import PropTypes from 'prop-types';
import Div from '../layout/Div';
import AbsoluteDiv from '../layout/AbsoluteDiv';
import QuoteOpen from '../../svg/quote-open.svg';
import QuoteClose from '../../svg/quote-close.svg';

const Testimony = ({ children }) => (
  <Div p={{ xs: '45px 40px 10px 45px', md: '50px 90px 20px' }}>
    <AbsoluteDiv top left p={{ xs: '15px', md: '50px 40px 0px' }}>
      <QuoteOpen style={{ fill: 'grey' }} />
    </AbsoluteDiv>
    <Div>{children || null}</Div>
    <AbsoluteDiv bottom right p={{ xs: '0 15px 80px', md: '0px 40px 110px' }}>
      <QuoteClose style={{ fill: 'grey' }} />
    </AbsoluteDiv>
  </Div>
);

Testimony.propTypes = {
  children: PropTypes.node
};

export default Testimony;

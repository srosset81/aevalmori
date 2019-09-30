import React from 'react';
import { Div } from 'components/layout';
import { P } from 'components/text';

const QuoteSection = ({ author, bg, color, children }) => (
  <Div bg={bg} align="middle" p={{ xs: '45px 25px', sm: '50px' }}>
    <Div maxW="850px">
      <P fontSize="1.4em" lineHeight="1.3em" m="0 0 15px" color={color} align="center">
        <em>«&nbsp;{children}&nbsp;»</em>
      </P>
      <P fontSize="1.3em" lineHeight="1em" color={color} m="0" align="right">
        - {author}
      </P>
    </Div>
  </Div>
);

QuoteSection.defaultProps = {
  color: 'black',
  bg: 'ultraLightGrey'
};

export default QuoteSection;

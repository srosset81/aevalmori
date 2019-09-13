import React from 'react';
import { Div } from 'components/layout';
import { P } from 'components/text';

const QuoteSection = ({ author, bg, color, children }) => (
  <Div bg={bg} h="160px" align="middle" p="20px">
    <Div maxW="850px">
      <P fontSize="1.4em" color={color} align="center">
        <em>«&nbsp;{children}&nbsp;»</em>
      </P>
      <P fontSize="1.3em" color={color} align="right">
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

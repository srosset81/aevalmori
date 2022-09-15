import React from 'react';
import { Div } from 'components/layout';
import { P, H } from 'components/text';

const QuoteSection = ({ author, title, bg, color, children }) => (
  <Div bg={bg} align="middle" p={{ xs: '45px 25px', sm: '50px' }}>
    <Div maxW="850px">
      {title &&
        <P
          // shadow
          color="black"
          align="center"
          font="title"
          fontSize={{ xs: '2em', md: '3em' }}
          m="0 0 15px 0"
          lineHeight="1em"
        >
          {title}
        </P>
      }
      <P fontSize="1.4em" lineHeight="1.3em" m="0 0 15px" color={color} align="center">
        <em>«&nbsp;{children}&nbsp;»</em>
      </P>
      {author &&
        <P fontSize={{ xs: "1.1em", sm: "1.3em" }} lineHeight="1em" color={color} m="0" align="right">
          - {author}
        </P>
      }
    </Div>
  </Div>
);

QuoteSection.defaultProps = {
  color: 'black',
  bg: 'ultraLightGrey'
};

export default QuoteSection;

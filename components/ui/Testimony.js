import React from 'react';
import PropTypes from 'prop-types';
import Div from '../layout/Div';
import AbsoluteDiv from '../layout/AbsoluteDiv';
import QuoteOpen from '../../svg/quote-open.svg';
import QuoteClose from '../../svg/quote-close.svg';
import { P, SubTitle } from '../text';
import { Button } from '../input';
import { PageLink } from '../../utils/router';

function nl2br(str) {
  const newlineRegex = /(\r\n|\r|\n)/g;

  if (typeof str === 'number') {
    return str;
  } else if (typeof str !== 'string') {
    return '';
  }

  return str.split(newlineRegex).map(function(line, index) {
    if (line.match(newlineRegex)) {
      return React.createElement('br', { key: index });
    }
    return line;
  });
}

const Testimony = ({ testimony, showMore }) =>
  testimony ? (
    <Div p={{ xs: '45px 40px 10px 45px', md: '50px 90px 30px' }}>
      <AbsoluteDiv top left p={{ xs: '15px', md: '50px 40px 0px' }}>
        <QuoteOpen style={{ fill: 'grey' }} />
      </AbsoluteDiv>
      <Div>
        <SubTitle>{testimony.title}</SubTitle>
        <P>{nl2br(testimony.content.replace(/<[^>]*>?/gm, ''))}</P>
        {showMore && (
          <PageLink page="testimonies">
            <Button colors="mediumGrey" style={{ float: 'left' }}>
              Plus de témoignages
            </Button>
          </PageLink>
        )}
        <P fontSize="15pt" align="right" italic>
          - {testimony.surname || 'Anonyme'} {testimony.date ? `(${testimony.date})` : ''}
        </P>
      </Div>
      <AbsoluteDiv bottom right p={{ xs: '0 15px 80px', md: '0px 40px 110px' }}>
        <QuoteClose style={{ fill: 'grey' }} />
      </AbsoluteDiv>
    </Div>
  ) : null;

Testimony.propTypes = {
  testimony: PropTypes.object,
  showMore: PropTypes.bool
};

export default Testimony;

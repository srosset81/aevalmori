import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { styled } from '../../utils/styling';
import Div from '../layout/Div';
import AbsoluteDiv from '../layout/AbsoluteDiv';
import QuoteOpen from '../../svg/quote-open.svg';
import QuoteClose from '../../svg/quote-close.svg';
import { P, SubTitle } from '../text';
import { Button } from '../input';
import { PageLink } from '../../utils/router';
import { Hidden, Visible } from '../layout';

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

const Gradient = styled(AbsoluteDiv)`
  background: linear-gradient(to bottom, transparent, #ddd);
`;

const AllTestimoniesLink = ({ float }) => (
  <PageLink page="testimonies">
    <Button colors="greyViolet" style={{ float }} w={float ? undefined : '100%'}>
      Tous les témoignages
    </Button>
  </PageLink>
);

const Testimony = ({ testimony, showMore }) => {
  const contentRef = useRef(null);
  const [isLongText, setLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    setLongText(contentRef.current.clientHeight < contentRef.current.scrollHeight);
  }, [contentRef.current]);

  return testimony ? (
    <Div p={{ xs: '30px 25px 15px', md: '50px 80px 40px 90px' }}>
      <AbsoluteDiv top left p={{ xs: '25px 15px 15px', md: '47px 40px 0px' }}>
        <QuoteOpen style={{ fill: '#bd95f6' }} />
      </AbsoluteDiv>
      <Div maxH={isExpanded ? undefined : '300px'} noOverflow ref={contentRef}>
        <SubTitle p={{ xs: '0 0 0 30px', sm: '0px' }}>{showMore ? 'Témoignage' : testimony.title}</SubTitle>
        <P>{nl2br(testimony.content.replace(/<[^>]*>?/gm, ''))}</P>
        {showMore && (
          <Visible sm md lg xl>
            <AllTestimoniesLink float="left" />
          </Visible>
        )}
        <P fontSize="1.3em" align="right" italic lineHeight="1em">
          - {testimony.surname || 'Anonyme'} {testimony.date ? `(${testimony.date})` : ''}
        </P>
        {showMore && (
          <Hidden sm md lg xl>
            <Div p="0 0 15px">
              <AllTestimoniesLink />
            </Div>
          </Hidden>
        )}
        {isLongText && !isExpanded && (
          <Gradient bottom left right h="150px" align="middle">
            <Button colors="greyViolet" onClick={() => setIsExpanded(true)} m="30px 0 0">
              Lire plus
            </Button>
          </Gradient>
        )}
      </Div>
      {(!isLongText || isExpanded) && (
        <AbsoluteDiv bottom right p={{ xs: showMore ? '0 15px 120px' : '0 15px 65px', md: '0px 40px 110px' }}>
          <QuoteClose style={{ fill: '#bd95f6' }} />
        </AbsoluteDiv>
      )}
    </Div>
  ) : null;
};

Testimony.propTypes = {
  testimony: PropTypes.object,
  showMore: PropTypes.bool
};

export default Testimony;

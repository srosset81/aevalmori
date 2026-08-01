import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled, theme, css } from '../../utils/styling';
import Div from '../layout/Div';
import AbsoluteDiv from '../layout/AbsoluteDiv';
import QuoteOpen from '../../svg/quote-open.svg';
import QuoteClose from '../../svg/quote-close.svg';
import { P, SubTitle, Markdown } from '../text';
import { Button } from '../input';
import { PageLink } from '../../utils/router';
import { Hidden, Visible } from '../layout';

const Gradient = styled(AbsoluteDiv)`
  background: ${props => css`linear-gradient(to bottom, transparent, ${props.bg ? props.theme.colors[props.bg] : 'white'})`};
`;

const AllTestimoniesLink = ({ float }) => (
  <PageLink page="testimonies">
    <Button colors="darkGrey" style={{ float }} w={float ? undefined : '100%'}>
      Tous les témoignages
    </Button>
  </PageLink>
);

const Testimony = ({ bg, testimony, showMore, expand }) => {
  const contentRef = useRef(null);
  const [isLongText, setLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(expand);
  useEffect(() => {
    setLongText(contentRef.current.clientHeight < contentRef.current.scrollHeight);
  }, [contentRef.current]);

  return testimony ? (
    <Div p="25px 0">
      <Hidden sm md lg xl>
        <AbsoluteDiv top="20px" left="-10px">
          <QuoteOpen style={{ fill: theme.colors.primaryDark }} />
        </AbsoluteDiv>
      </Hidden>
      <Visible sm md lg xl>
        <AbsoluteDiv top="20px" left="-45px">
          <QuoteOpen style={{ fill: theme.colors.primaryDark }} />
        </AbsoluteDiv>
      </Visible>
      <Div maxH={isExpanded ? undefined : '300px'} noOverflow ref={contentRef} m="-25px 0 10px">
        <SubTitle p={{ xs: '0 0 0 30px', sm: '0px' }}>{showMore ? 'Témoignage' : testimony.title}</SubTitle>
        {testimony.googleReview && (
          <P fontSize="1em" lineHeight="0.6em" color="grey" p="10px 0 0">
            {testimony.stars && [0, 1, 2, 3, 4].fill('⭐', 0, testimony.stars).join('')}
            &nbsp;
            Avis certifié sur Google
            (<a href={testimony.googleReview} target="_blank" rel="noopener noreferrer" style={{ color: 'grey' }}>
              Voir l'original
            </a>)
          </P>
        )}
        <Markdown>{testimony.content}</Markdown>
        {showMore && (
          <Visible sm md lg xl>
            <AllTestimoniesLink float="left" />
          </Visible>
        )}
        <P fontSize="1.3em" align="right" lineHeight="1em">
          <i>{testimony.surname || 'Anonyme'} {testimony.date ? `(${testimony.date})` : ''}</i>
        </P>
        {showMore && (
          <Hidden sm md lg xl>
            <Div p="0 0 15px">
              <AllTestimoniesLink />
            </Div>
          </Hidden>
        )}
        {isLongText && !isExpanded && (
          <Gradient bottom left right h="150px" align="middle" bg={bg}>
            <Button colors="darkGrey" onClick={() => setIsExpanded(true)} m="30px 0 0">
              Lire plus
            </Button>
          </Gradient>
        )}
      </Div>
      {(!isLongText || isExpanded) && (
        <AbsoluteDiv bottom="45px" right="-45px">
          <QuoteClose style={{ fill: theme.colors.primaryDark }} />
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

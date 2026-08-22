import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslate } from '../../utils/i18n';
import { styled, theme, css, mediaQuery } from '../../utils/styling';
import Div from '../layout/Div';
import AbsoluteDiv from '../layout/AbsoluteDiv';
import QuoteOpen from '../../svg/quote-open.svg';
import QuoteClose from '../../svg/quote-close.svg';
import { P, Markdown } from '../text';
import { Button } from '../input';
import { PageLink } from '../../utils/router';
import { Hidden, Visible } from '../layout';

const Title = styled(P)`
  font-family: ${({ theme }) => theme.fontFamily.subTitle};
  font-size: 1.5em;
  font-weight: bold;
  margin: 20px 0 15px;
  line-height: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;

  a,
  a:hover {
    color: black;
    text-decoration: none;
  }
`;

const Gradient = styled(AbsoluteDiv)`
  background: ${props => css`linear-gradient(to bottom, transparent, ${props.bg ? props.theme.colors[props.bg] : 'white'})`};
`;

const ReviewMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 10px 0 0;
  ${mediaQuery('sm')} {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;

const Stars = styled.div`
  white-space: nowrap;
  line-height: 1.0em;
  font-size: 1em;
  margin-top: -3px;
`;

const AllTestimoniesLink = ({ float }) => {
  const { t } = useTranslate();
  return (
    <PageLink page="testimonies">
      <Button colors="darkGrey" style={{ float }} w={float ? undefined : '100%'}>
        {t('testimony.allTestimonies', 'Tous les témoignages')}
      </Button>
    </PageLink>
  );
};

const Testimony = ({ bg, testimony, showMore, expand }) => {
  const { t } = useTranslate();
  const contentRef = useRef(null);
  const [isLongText, setLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(expand);
  useEffect(() => {
    setLongText(contentRef.current.clientHeight < contentRef.current.scrollHeight);
  }, [contentRef.current]);

  return testimony ? (
    <Div p="15px 0">
      <Visible sm md lg xl>
        <AbsoluteDiv top="10px" left="-50px">
          <QuoteOpen style={{ fill: theme.colors.primaryDark }} />
        </AbsoluteDiv>
      </Visible>
      <Div maxH={isExpanded ? undefined : { xs: '500px', md: '300px' }} noOverflow ref={contentRef} m="-25px 0 10px">
        <Title>{showMore ? t('testimony.fallbackTitle', 'Témoignage') : testimony.title}</Title>
        {testimony.googleReview && (
          <ReviewMeta>
            {testimony.stars && <Stars>{[0, 1, 2, 3, 4].fill('⭐', 0, testimony.stars).join('')}</Stars>}
            <P fontSize="1em" lineHeight="1.2em" color="grey" m="0">
              {t('testimony.certifiedReview', 'Avis certifié sur Google')}{' '}
              (<a href={testimony.googleReview} target="_blank" rel="noopener noreferrer" style={{ color: 'grey' }}>
                {t('testimony.seeOriginal', "Voir l'original")}
              </a>)
            </P>
          </ReviewMeta>
        )}
        <Markdown>{testimony.content}</Markdown>
        {showMore && (
          <Visible sm md lg xl>
            <AllTestimoniesLink float="left" />
          </Visible>
        )}
        <P fontSize="1.2em" italic align="right" lineHeight="1em">
          <i>- {testimony.surname || t('testimony.anonymous', 'Anonyme')} {testimony.date ? `(${testimony.date})` : ''}</i>
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
              {t('testimony.readMore', 'Lire plus')}
            </Button>
          </Gradient>
        )}
      </Div>
      {/* {(!isLongText || isExpanded) && (
        <Visible sm md lg xl>
          <AbsoluteDiv bottom="45px" right="-45px">
            <QuoteClose style={{ fill: theme.colors.primaryDark }} />
          </AbsoluteDiv>
        </Visible>
      )} */}
    </Div>
  ) : null;
};

Testimony.propTypes = {
  testimony: PropTypes.object,
  showMore: PropTypes.bool
};

export default Testimony;

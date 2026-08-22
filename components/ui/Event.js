import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { useTranslate, useTolgee } from 'utils/i18n';
import { styled } from '../../utils/styling';
import { Div, AbsoluteDiv } from '../layout';
import { P, SubTitle, Markdown } from '../text';
import { Button } from '../input';
import { PageLink } from '../../utils/router';
import { Hidden, Visible } from '../layout';
import LinkIcon from '../../svg/link.svg';
import SideImage from '../media/SideImage';

const dateFormat = (date, locale, options) =>
  new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'fr-FR', options).format(new Date(date));

const fromDateToDate = (event, locale, t) => {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  if (startDate.getDate() === endDate.getDate()) {
    return t('event.dateRange.sameDay', 'Le {date} de {startTime} à {endTime}', {
      date: dateFormat(event.startDate, locale, { dateStyle: 'full' }),
      startTime: dateFormat(event.startDate, locale, { timeStyle: 'short' }),
      endTime: dateFormat(event.endDate, locale, { timeStyle: 'short' })
    });
  } else {
    return t('event.dateRange.multiDay', 'Du {start} au {end}', {
      start: dateFormat(event.startDate, locale, { dateStyle: 'long', timeStyle: 'short' }),
      end: dateFormat(event.endDate, locale, { dateStyle: 'long', timeStyle: 'short' })
    });
  }
};

const Gradient = styled(AbsoluteDiv)`
  background: linear-gradient(to bottom, transparent, #fff);
`;

const SquareDiv = styled(Div)`
  overflow: hidden;
  height: 0;
  padding-top: 85%;
  margin-right: 30px;
`;

const FlexDiv = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AllEventsLink = ({ float }) => {
  const { t } = useTranslate();
  return (
    <PageLink page="testimonies">
      <Button colors="darkGrey" style={{ float }} w={float ? undefined : '100%'}>
        {t('event.allEvents', 'Tous les événements')}
      </Button>
    </PageLink>
  );
};

const Event = ({ event, showMore, expand }) => {
  const { t } = useTranslate();
  const locale = useTolgee(['language']).getLanguage() || 'fr';
  const contentRef = useRef(null);
  const [isLongText, setLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(expand);
  useEffect(() => {
    setLongText(contentRef.current.clientHeight < contentRef.current.scrollHeight);
  }, [contentRef.current]);

  return event ? (
    <Div p={{ xs: '0px', md: '25px 0px' }} m={{ xs: '0 0 25px', sm: '0px' }}>
      <Hidden sm md lg xl>
        <Div bg="primaryLight" p="15px">
          <P align="center" m="0" upper>{dateFormat(event.startDate, locale, { weekday: 'long' })}</P>
          <P align="center" m="0" fontSize="55px" lineHeight="1em" bold>{dateFormat(event.startDate, locale, { day: 'numeric' })}</P>
          <P align="center" m="0" lineHeight="2em" upper>{dateFormat(event.startDate, locale, { month: 'long' })}</P>
        </Div>
      </Hidden>
      <Div p={{ xs: '30px 0 0', sm: '0 0 0 180px' }} maxH={isExpanded ? undefined : '400px'} noOverflow ref={contentRef}>
        <Visible sm md lg xl>
          <AbsoluteDiv top left h="180px" w="180px">
            <SquareDiv bg="primaryLight">
              <AbsoluteDiv top bottom left right p="20px">
                <FlexDiv>
                  <P align="center" m="0" upper>{dateFormat(event.startDate, locale, { weekday: 'long' })}</P>
                  <P align="center" m="0" fontSize="55px" lineHeight="1em" bold>{dateFormat(event.startDate, locale, { day: 'numeric' })}</P>
                  <P align="center" m="0" lineHeight="2em" upper>{dateFormat(event.startDate, locale, { month: 'long' })}</P>
                </FlexDiv>
              </AbsoluteDiv>
            </SquareDiv>
          </AbsoluteDiv>
        </Visible>
        <SubTitle p={{ xs: '0px', sm: '0px' }}>
          {showMore ? t('event.fallbackTitle', 'Evénement') : event.title}
          {!expand &&
            <PageLink page="event" param={event.id}>
              <LinkIcon style={{ width: 18, height: 18, marginLeft: 5, fill: 'lightgrey' }} />
            </PageLink>
          }
        </SubTitle>
        <P m="10px 0" italic>{fromDateToDate(event, locale, t)}</P>
        {event.image &&
          <a href={event.image.url} target="_blank">
            <SideImage align="right" src={event.image.url} />
          </a>
        }
        <Markdown>{event.content}</Markdown>
        {showMore && (
          <Visible sm md lg xl>
            <AllEventsLink float="left" />
          </Visible>
        )}
        {showMore && (
          <Hidden sm md lg xl>
            <Div p="0 0 15px">
              <AllEventsLink />
            </Div>
          </Hidden>
        )}
        {isLongText && !isExpanded && (
          <Gradient bottom left right h="150px" align="middle">
            <Button colors="darkGrey" onClick={() => setIsExpanded(true)} m="30px 0 0">
              {t('event.readMore', 'Lire plus')}
            </Button>
          </Gradient>
        )}
      </Div>
    </Div>
  ) : null;
};

Event.propTypes = {
  event: PropTypes.object,
  showMore: PropTypes.bool
};

export default Event;

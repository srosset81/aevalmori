import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { I18n } from '@lingui/react';
import Markdown from 'markdown-to-jsx';
import { styled } from '../../utils/styling';
import { Div, AbsoluteDiv, Row, Cell } from '../layout';
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

const fromDateToDate = (event, i18n) => {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  if (startDate.getDate() === endDate.getDate()) {
    return(`Le ${i18n.date(event.startDate, { dateStyle: 'full' })} de ${i18n.date(event.startDate, { timeStyle: 'short' })} à ${i18n.date(event.endDate, { timeStyle: 'short' })}`);
  } else {
    return(`Du ${i18n.date(event.startDate, { dateStyle: 'long', timeStyle: 'short' })} au ${i18n.date(event.endDate, { dateStyle: 'long', timeStyle: 'short' })}`);
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

const AllEventsLink = ({ float }) => (
  <PageLink page="testimonies">
    <Button colors="greyViolet" style={{ float }} w={float ? undefined : '100%'}>
      Tous les événements
    </Button>
  </PageLink>
);

const Event = ({ event, showMore, expand }) => {
  const contentRef = useRef(null);
  const [isLongText, setLongText] = useState(false);
  const [isExpanded, setIsExpanded] = useState(expand);
  useEffect(() => {
    setLongText(contentRef.current.clientHeight < contentRef.current.scrollHeight);
  }, [contentRef.current]);

  return event ? (
    <I18n>
      {({ i18n }) => (
        <Div p={{ xs: '25px 0px' }}>
          <Row>
            <Cell w={{ xs: 1, sm: 1 / 6 }}>
              <SquareDiv bg="lightPurple">
                <AbsoluteDiv top bottom left right p="20px">
                  <FlexDiv>
                    <P align="center" m="0" upper>{i18n.date(event.startDate, { weekday: 'long' })}</P>
                    <P align="center" m="0" fontSize="80px" font="montserrat" lineHeight="1.2em" bold>{i18n.date(event.startDate, { day: 'numeric' })}</P>
                    <P align="center" m="0" upper>{i18n.date(event.startDate, { month: 'long' })}</P>
                  </FlexDiv>
                </AbsoluteDiv>
              </SquareDiv>
            </Cell>
            <Cell w={{ xs: 1, sm: 5 / 6 }}>
              <Div maxH={isExpanded ? undefined : '300px'} noOverflow ref={contentRef}>
                <SubTitle p={{ xs: '0 0 0 30px', sm: '0px' }}>{showMore ? 'Evénement' : event.title}</SubTitle>
                <P italic>{fromDateToDate(event, i18n)}</P>
                {/*<P>{nl2br(event.content.replace(/<[^>]*>?/gm, '').replace(/&#39;/gm, `'`))}</P>*/}
                <Markdown
                  options={{
                    overrides: {
                      p: P,
                    },
                  }}
                >{event.content}</Markdown>
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
                    <Button colors="greyViolet" onClick={() => setIsExpanded(true)} m="30px 0 0">
                      Lire plus
                    </Button>
                  </Gradient>
                )}
              </Div>
            </Cell>
          </Row>
        </Div>
      )}
      </I18n>
  ) : null;
};

Event.propTypes = {
  event: PropTypes.object,
  showMore: PropTypes.bool
};

export default Event;

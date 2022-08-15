import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
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

const Gradient = styled(AbsoluteDiv)`
  background: linear-gradient(to bottom, transparent, #ddd);
`;

const SquareDiv = styled(Div)`
  overflow: hidden;
  height: 0;
  padding-top: 85%;
  margin-right: 30px;
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
    <Div p={{ xs: '50px 80px' }}>
      <Row>
        <Cell w={{ xs: 1, sm: 1 / 6 }}>
          <SquareDiv bg="violet">
            <AbsoluteDiv top bottom left right p="20px">
              Dimanche
              25
              Septembre
            </AbsoluteDiv>
          </SquareDiv>
        </Cell>
        <Cell w={{ xs: 1, sm: 5 / 6 }}>
          <Div maxH={isExpanded ? undefined : '300px'} noOverflow ref={contentRef}>
            <SubTitle p={{ xs: '0 0 0 30px', sm: '0px' }}>{showMore ? 'Evénement' : event.title}</SubTitle>
            <P>{nl2br(event.content.replace(/<[^>]*>?/gm, '').replace(/&#39;/gm, `'`))}</P>
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
  ) : null;
};

Event.propTypes = {
  event: PropTypes.object,
  showMore: PropTypes.bool
};

export default Event;

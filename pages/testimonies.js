import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Layout } from 'components/app';
import { Cell, Div, Row } from 'components/layout';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Testimony } from 'components/ui';
import { Trans } from '@lingui/macro';
import Divider from '../svg/divider.svg';

export function nl2br(str) {
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

const TestimoniesPage = () => {
  const { loading, error, data } = useQuery(gql`
    {
      allTestimonyFrs {
        title
        content(markdown: true)
        surname
        date
        participatedAt
      }
    }
  `);

  return (
    <Layout>
      <TopSection image="flowers.jpg">
        <Trans id="testimonies.title">Témoignages</Trans>
      </TopSection>
      <Row>
        <Cell w={{ xs: 1 }}>
          {data &&
            data.allTestimonyFrs &&
            data.allTestimonyFrs.map((testimony, i) => (
              <Div bg="lightGrey" key={i}>
                {i > 0 && (
                  <Div align="middle">
                    <Divider style={{ fill: 'rgba(213,121,139,0.39)' }} width="280px" />
                  </Div>
                )}
                <Testimony key={i}>
                  <SubTitle>{testimony.title}</SubTitle>
                  <P>{nl2br(testimony.content.replace(/<[^>]*>?/gm, ''))}</P>
                  <P fontSize="15pt" align="right" italic>
                    - {testimony.surname || 'Anonyme'} ({testimony.date})
                  </P>
                </Testimony>
              </Div>
            ))}
        </Cell>
      </Row>
      <FooterSection />
    </Layout>
  );
};

export default TestimoniesPage;

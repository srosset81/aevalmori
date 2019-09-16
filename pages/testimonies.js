import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Layout } from 'components/app';
import { Cell, Div, Row } from 'components/layout';
import { TopSection, FooterSection } from 'components/section';
import { Testimony } from 'components/ui';
import { Trans } from '@lingui/macro';
import Divider from '../svg/divider.svg';

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
              <Div bg="ultraLightGrey" key={i}>
                {i > 0 && (
                  <Div align="middle">
                    <Div w={{ xs: 4 / 5, sm: 3 / 5 }}>
                      <Divider style={{ fill: 'rgba(213,121,139,0.39)' }} width="100%" />
                    </Div>
                  </Div>
                )}
                <Testimony testimony={testimony} />
              </Div>
            ))}
        </Cell>
      </Row>
      <FooterSection />
    </Layout>
  );
};

export default TestimoniesPage;

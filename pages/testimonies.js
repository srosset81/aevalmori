import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { P } from 'components/text';
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
      <Head>
        <title>Témoignages - Anna Elisa Valmori, psychologue à Paris</title>
      </Head>
      <TopSection image="flowers.jpg">
        <Trans id="testimonies.title">Témoignages</Trans>
      </TopSection>
      <Div bg="ultraLightGrey">
        {loading && (
          <Div minH="100vh" p={{ xs: '25px', sm: '50px' }}>
            <P align="center">Chargement en cours...</P>
          </Div>
        )}
        {data &&
          data.allTestimonyFrs &&
          data.allTestimonyFrs.map((testimony, i) => (
            <>
              {i > 0 && (
                <Div align="middle">
                  <Div w={{ xs: 4 / 5, sm: 3 / 5 }}>
                    <Divider style={{ fill: 'rgba(213,121,139,0.39)' }} width="100%" />
                  </Div>
                </Div>
              )}
              <Testimony testimony={testimony} />
            </>
          ))}
      </Div>
      <FooterSection />
    </Layout>
  );
};

export default TestimoniesPage;

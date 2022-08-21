import React, { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Div } from 'components/layout';
import { P } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Event } from 'components/ui';
import { Trans } from '@lingui/macro';

const EventsPage = () => {
  // const now = useMemo(() => (new Date()).toISOString(), []);

  const { loading, error, data } = useQuery(
    gql`
      query ($now: DateTime!) {
        allEventFrs(orderBy: startDate_ASC, filter: { endDate: { gt: $now }}) {
          title
          content
          startDate
          endDate
        }
      }
    `,
    {
      variables: { now: '2022-09-10' }
    }
  );

  return (
    <Layout>
      <Head>
        <title>Agenda - Anna Elisa Valmori, psychologue à Paris</title>
      </Head>
      <TopSection image="single-tree-2.jpg">
        <Trans id="events.title">Agenda</Trans>
      </TopSection>
      <Div p={{ xs: "30px", sm: "50px 80px" }}>
        {loading && (
          <Div minH="100vh" p={{ xs: '25px', sm: '50px' }}>
            <P align="center">Chargement en cours...</P>
          </Div>
        )}
        {data &&
          data.allEventFrs &&
          data.allEventFrs.map((event, i) => (
            <Event event={event} expand={false} key={i} />
          ))}
      </Div>
      <FooterSection />
    </Layout>
  );
};

export default EventsPage;

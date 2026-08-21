import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Visible, Div, Row, Cell, Separator } from 'components/layout';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Event } from 'components/ui';
import { useTranslate, useTolgee } from 'utils/i18n';
import Tags from "../components/ui/Tags";
import { eventsTags } from "../utils/constants";

const now = (new Date()).toISOString().substring(0,10);

const EventsPage = () => {
  const { t } = useTranslate();
  const locale = useTolgee(['language']).getLanguage() || 'fr';
  const [tag, setTag] = useState();

  const { loading, error, data } = useQuery(
    gql`
      query ($now: DateTime!, $tag: String, $locale: SiteLocale) {
        allEventFrs(orderBy: startDate_ASC, filter: { endDate: { gt: $now }, topic: { eq: $tag } }, first: 100, locale: $locale) {
          id
          title
          content
          startDate
          endDate
          image {
            url
          }
        }
      }
    `,
    {
      variables: {
        now,
        tag,
        locale
      }
    }
  );

  return (
    <Layout>
      <Head>
        <title>{t('events.headTitle', 'Agenda - Anna Elisa Valmori, psychologue à Paris')}</title>
      </Head>
      <TopSection image="events.jpg">
        {t('events.title', 'Agenda')}
      </TopSection>
      <Div p={{ xs: "30px", sm: "50px 80px" }}>
        <Row>
          <Cell w={{ xs: 1, sm: 1/2 }}>
            <SubTitle>{t('events.subtitle', '📅 Prochains événements')}</SubTitle>
          </Cell>
          <Cell w={{ sm: 1/2 }}>
            <Visible sm md lg xl>
              <Tags tags={eventsTags} tag={tag} setTag={setTag} />
            </Visible>
          </Cell>
        </Row>
        {loading && (
          <Div minH="100vh" p={{ xs: '25px', sm: '50px' }}>
            <P align="center">{t('events.loading', 'Chargement en cours...')}</P>
          </Div>
        )}
        {data &&
          data.allEventFrs &&
          data.allEventFrs.map((event, i) => (
            <React.Fragment key={i}>
              <Separator m="15px 0px" color="ultraLightGrey" />
              <Event event={event} expand={false} />
            </React.Fragment>
          ))}
        {!loading && (data && data.allEventFrs.length === 0) && (
          <Div minH="500px">
            <P>{t('events.empty', "Aucun événement n'a été trouvé.")}</P>
            {tag &&
              <P onClick={() => setTag()} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                {t('events.removeFilters', 'Enlever les filtres')}
              </P>
            }
          </Div>
        )}
      </Div>
      <FooterSection />
    </Layout>
  );
};

export default EventsPage;

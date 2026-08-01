import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Visible, Cell, Div, Row, Separator } from 'components/layout';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Testimony } from 'components/ui';
import { Trans } from '@lingui/macro';
import Tags from "../components/ui/Tags";
import { testimoniesTags } from "../utils/constants";

const TestimoniesPage = () => {
  const [tag, setTag] = useState();

  const { loading, error, data } = useQuery(
    gql`
      query ($tag: String) {
        allTestimonyFrs(filter: { participatedAt: { eq: $tag } }, first: 100) {
          title
          content
          surname
          date
          participatedAt
          googleReview
          stars
          order
        }
      }
    `,
    {
      variables: {
        tag
      }
    }
  );

  return (
    <Layout>
      <Head>
        <title>Témoignages - Anna Elisa Valmori, psychologue à Paris</title>
      </Head>
      <TopSection image="flowers.jpg">
        <Trans id="testimonies.title">Témoignages</Trans>
      </TopSection>
      <Div p={{ xs: "30px", sm: '50px 80px' }}>
        <Row>
          <Cell w={{ xs: 1, sm: 1/2 }}>
            <SubTitle>Témoignages 💌</SubTitle>
          </Cell>
          <Cell w={{ sm: 1/2 }}>
            <Visible sm md lg xl>
              <Tags tags={testimoniesTags} setTag={setTag} tag={tag} />
            </Visible>
          </Cell>
        </Row>
        {loading && (
          <Div minH="100vh" p={{ xs: '25px', sm: '50px' }}>
            <P align="center">Chargement en cours...</P>
          </Div>
        )}
        {data &&
          data.allTestimonyFrs &&
          data.allTestimonyFrs.map((testimony, i) => (
            <React.Fragment key={i}>
              <Separator m="0px 0px 25px" color="lightGrey" />
              <Testimony testimony={testimony} />
            </React.Fragment>
          ))}
        {!loading && (data && data.allTestimonyFrs.length === 0) && (
          <Div minH="500px">
            <P>Aucun témoignage n'a été trouvé.</P>
            {tag &&
              <P onClick={() => setTag()} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Enlever les filtres</P>
            }
          </Div>
        )}
      </Div>
      <FooterSection />
    </Layout>
  );
};

export default TestimoniesPage;

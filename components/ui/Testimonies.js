import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Head from 'next/head';
import { Layout } from 'components/app';
import { Visible, Cell, Div, Row, Separator } from 'components/layout';
import { P, SubTitle } from 'components/text';
import { TopSection, FooterSection } from 'components/section';
import { Testimony } from 'components/ui';
import { useTolgee } from 'utils/i18n';

const Testimonies = () => {
  const locale = useTolgee(['language']).getLanguage() || 'fr';
  const [tag, setTag] = useState();

  const { loading, error, data } = useQuery(
    gql`
      query ($locale: SiteLocale) {
        allTestimonyFrs(filter: { order:{ exists: true }}, orderBy: order_ASC, locale: $locale) {
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
        locale
      }
    }
  );

  if (loading || !data) return null;

  return data &&
    data.allTestimonyFrs &&
    data.allTestimonyFrs.map((testimony, i) => (
      <React.Fragment key={i}>
        {i > 0 && <Separator m="-10px 0 25px" color="lightGrey" />}
        <Testimony testimony={testimony} />
      </React.Fragment>
  ));
};

export default Testimonies;

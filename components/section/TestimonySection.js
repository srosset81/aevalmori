import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Testimony } from 'components/ui';
import { Div } from '../layout';
import { useTolgee } from 'utils/i18n';

const TestimonySection = ({ type, bg, p, id, showMore, expand }) => {
  const locale = useTolgee(['language']).getLanguage() || 'fr';
  const filter = type ? `participatedAt: {eq: "${type}"}` : `id: {eq: "${id}"}`;

  const { loading, error, data } = useQuery(gql`
    {
      testimonyFr(filter: {${filter}}, locale: ${locale}) {
        title
        content
        surname
        date
        participatedAt
        googleReview
        stars
      }
    }
  `);

  return data && data.testimonyFr ? (
    <Div bg={bg || "ultraLightGrey"} p={p || { xs: "30px", sm: '30px 80px' }}>
      <Testimony testimony={data.testimonyFr} showMore={showMore} expand={expand} bg="ultraLightGrey" />
    </Div>
  ) : null;
};

TestimonySection.defaultProps = {
  showMore: true
};

export default TestimonySection;

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Testimony } from 'components/ui';
import { Div } from '../layout';

const TestimonySection = ({ type, id }) => {
  const filter = type ? `participatedAt: {eq: "${type}"}` : `id: {eq: "${id}"}`;

  const { loading, error, data } = useQuery(gql`
    {
      testimonyFr(filter: {${filter}}) {
        title
        content(markdown: true)
        surname
        date
        participatedAt
      }
    }
  `);

  return data.testimonyFr ? (
    <Div bg="ultraLightGrey">
      <Testimony testimony={data.testimonyFr} showMore />
    </Div>
  ) : null;
};

export default TestimonySection;

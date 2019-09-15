import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Testimony } from 'components/ui';
import { Div } from '../layout';
import { Loading } from '../media';

const TestimonySection = ({ type }) => {
  const { loading, error, data } = useQuery(gql`
    {
      testimonyFr(filter: {participatedAt: {eq: "${type}"}}) {
        title
        content(markdown: true)
        surname
        date
        participatedAt
      }
    }
  `);

  return data.testimonyFr ? (
    <Div bg="lightGrey">
      <Testimony testimony={data.testimonyFr} showMore />
    </Div>
  ) : null;
};

export default TestimonySection;

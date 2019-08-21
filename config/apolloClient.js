import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com',
  fetch
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: 'b47cb924ee1156df2414276b7dff5a'
  }
}));

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default apolloClient;

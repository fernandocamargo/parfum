import { ApolloServer, gql } from 'apollo-server';

import * as types from 'types';
import * as resolvers from 'resolvers';

import { port } from '../package.json';

const success = ({ url }) => console.log(`GraphQL server running at ${url}`);

const failure = error =>
  console.log(`Error details: ${JSON.stringify(error, null, 2)}`);

export default new ApolloServer({
  typeDefs: gql(Object.values(types).join('')),
  resolvers: { Query: resolvers },
})
  .listen(port)
  .then(success)
  .catch(failure);

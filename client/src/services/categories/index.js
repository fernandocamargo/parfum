import gql from 'graphql-tag';

import { GraphQL } from 'clients';

const query = gql`
  {
    categories {
      id
      name
      items {
        name
        total
      }
    }
  }
`;

export const getCategories = () =>
  GraphQL.query({ query }).then(({ data: { categories } }) => categories);

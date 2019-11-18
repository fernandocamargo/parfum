import gql from 'graphql-tag';

import { GraphQL } from 'clients';

const query = gql`
  {
    products {
      id
      name
      slug
      brand
      type
      image
      price
      size
      rating
    }
  }
`;

export const getProducts = () =>
  GraphQL.query({ query }).then(({ data: { products } }) => products);

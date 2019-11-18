export default `
  type Query {
    categories: [Category]
    products(
      size: Int,
      page: Int,
      sort: String,
      order: String,
      keywords: String
    ): [Product]
  }
`;

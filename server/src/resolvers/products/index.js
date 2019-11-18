import products from 'data/products.json';

export default (_, { size = 10, page = 1, sort, order, keywords }) => {
  const start = (page - 1) * size;
  const end = start + size;

  return products.filter(() => true).slice(start, end);
};

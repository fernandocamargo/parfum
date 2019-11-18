import update from 'immutability-helper';

import products from 'data/products.json';

const increment = (value = 0) => value + 1;

const by = property => ({ [property]: current }, { [property]: next }) => {
  switch (true) {
    case current < next:
      return -1;
    case current > next:
      return 1;
    default:
      return 0;
  }
};

export default () =>
  Object.entries(
    products.reduce(
      (categories, product) =>
        Object.entries(categories).reduce((stack, [field, category]) => {
          const { [field]: name } = product;
          const value = update(category, {
            values: { [name]: { $apply: increment } },
          });

          return update(stack, { [field]: { $set: value } });
        }, categories),
      {
        brand: { name: 'Brands', values: {} },
        type: { name: 'Types', values: {} },
        size: { name: 'Sizes', values: {} },
      }
    )
  ).reduce(
    (stack, [id, { values, ...category }]) =>
      stack.concat({
        ...category,
        items: Object.entries(values)
          .reduce((_stack, [name, total]) => _stack.concat({ name, total }), [])
          .sort(by('name')),
        id,
      }),
    []
  );

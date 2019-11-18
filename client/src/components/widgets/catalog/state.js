import { Machine, assign } from 'xstate';

import { getProducts } from 'services';

export default Machine({
  id: 'home',
  initial: 'idle',
  context: { products: [], error: null },
  states: {
    idle: {
      on: { FETCH: 'loading' },
    },
    loading: {
      invoke: {
        src: () => getProducts(),
        onDone: {
          target: 'success',
          actions: assign({
            products: ({ products: current }, { data: next }) =>
              current.concat(next),
          }),
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: (...params) => console.log('onError();', params),
          }),
        },
      },
    },
    success: {
      on: { FETCH: 'loading' },
    },
    failure: {
      on: { FETCH: 'loading' },
    },
  },
});

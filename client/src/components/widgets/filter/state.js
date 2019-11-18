import { Machine, assign } from 'xstate';

import { getCategories } from 'services';

export default Machine({
  id: 'home',
  initial: 'idle',
  context: { categories: [], error: null },
  states: {
    idle: {
      on: { FETCH: 'loading' },
    },
    loading: {
      invoke: {
        src: () => getCategories(),
        onDone: {
          target: 'success',
          actions: assign({
            categories: ({ categories: current }, { data: next }) =>
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

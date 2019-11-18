import { string } from 'prop-types';
import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';

import { Product } from 'components/widgets';

import state from './state';
import withStyle from './style';

const renderProduct = product => <Product key={product.id} {...product} />;

const Catalog = ({ className }) => {
  const [
    {
      context: { products },
    },
    dispatch,
  ] = useMachine(state);

  useEffect(() => {
    dispatch('FETCH');
  }, [dispatch]);

  return <div className={className}>{products.map(renderProduct)}</div>;
};

Catalog.propTypes = {
  className: string.isRequired,
};

Catalog.defaultProps = {};

export default withStyle(Catalog);

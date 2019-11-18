import { string } from 'prop-types';
import React from 'react';

import { Catalog, Filter } from 'components/widgets';

import withStyle from './style';

const Home = ({ className }) => (
  <section className={className}>
    <Filter />
    <Catalog />
  </section>
);

Home.propTypes = {
  className: string.isRequired,
};

Home.defaultProps = {};

export default withStyle(Home);

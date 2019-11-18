import { string } from 'prop-types';
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Details, Home } from 'components/pages';
import { Loader } from 'components/widgets';

import withStyle from './style';

const App = ({ className }) => (
  <div className={className}>
    <header>
      <h2>Parfum</h2>
    </header>
    <main>
      <Suspense fallback={<Loader />}>
        <Route path="/" component={Home} exact />
        <Route path="/:id" component={Details} />
      </Suspense>
    </main>
    <footer>Lorem ipsum</footer>
  </div>
);

App.propTypes = {
  className: string.isRequired,
};

App.defaultProps = {};

export default withStyle(App);

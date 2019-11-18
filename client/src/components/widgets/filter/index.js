import xorWith from 'lodash/xorWith';
import isEqual from 'lodash/isEqual';
import { string } from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';
import { useMachine } from '@xstate/react';

import Category from './category';
import state from './state';
import withStyle from './style';

const Filter = ({ className }) => {
  const [
    {
      context: { categories },
    },
    dispatch,
  ] = useMachine(state);
  const [keywords, setKeywords] = useState('');
  const [selection, setSelection] = useState([]);
  const submit = useCallback(event => {
    event.preventDefault();
    console.log('submit();');
  }, []);
  const changeKeywords = useCallback(
    ({ target: { value } }) => setKeywords(value),
    []
  );
  const changeSelection = useCallback(
    next => () => setSelection(current => xorWith(current, [next], isEqual)),
    []
  );
  const renderCategory = useCallback(
    category => (
      <Category key={category.id} {...category} onChange={changeSelection} />
    ),
    [changeSelection]
  );

  useEffect(() => {
    dispatch('FETCH');
  }, [dispatch]);

  return (
    <aside className={className}>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Filter the results:</legend>
          <dl>
            <dt>
              <label htmlFor="keywords">Keywords</label>
            </dt>
            <dd>
              <input
                type="text"
                id="keywords"
                value={keywords}
                onChange={changeKeywords}
              />
            </dd>
          </dl>
          {categories.map(renderCategory)}
          <button type="submit">Apply</button>
        </fieldset>
      </form>
    </aside>
  );
};

Filter.propTypes = {
  className: string.isRequired,
};

Filter.defaultProps = {};

export default withStyle(Filter);

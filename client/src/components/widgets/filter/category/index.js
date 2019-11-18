import { string, arrayOf, shape, number } from 'prop-types';
import React, { useCallback } from 'react';

import withStyle from './style';

const Category = ({ className, id, name, items, onChange }) => {
  const renderItem = useCallback(
    ({ name, total }, index) => {
      const value = [id, name];
      const _id = value.join('-');

      return (
        <div key={index}>
          <input type="checkbox" id={_id} onChange={onChange(value)} />
          <label htmlFor={_id}>
            <strong>{name} </strong>
            <em>
              <span>(</span>
              <span>{total}</span>
              <span> item(s)</span>
              <span>)</span>
            </em>
          </label>
        </div>
      );
    },
    [onChange, id]
  );

  return (
    <dl className={className}>
      <dt>{name}</dt>
      <dd>{items.map(renderItem)}</dd>
    </dl>
  );
};

Category.propTypes = {
  className: string.isRequired,
  name: string.isRequired,
  items: arrayOf(
    shape({
      name: string.isRequired,
      total: number.isRequired,
    })
  ),
};

Category.defaultProps = {
  items: [],
};

export default withStyle(Category);

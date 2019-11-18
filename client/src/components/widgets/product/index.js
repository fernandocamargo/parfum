import { string, number } from 'prop-types';
import React from 'react';

import withStyle from './style';

const Product = ({
  className,
  name,
  slug,
  brand,
  type,
  image,
  price,
  size,
  rating,
}) => {
  const url = `//flaconi.de/${slug}`;

  return (
    <article className={className}>
      <h1>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h1>
      <dl>
        <dt>Brand</dt>
        <dd>{brand}</dd>
      </dl>
      <dl>
        <dt>Type</dt>
        <dd>{type}</dd>
      </dl>
      <dl>
        <dt>Size</dt>
        <dd>{size}</dd>
      </dl>
      <dl>
        <dt>Price</dt>
        <dd>{price}</dd>
      </dl>
      <dl>
        <dt>Rating</dt>
        <dd>{rating}</dd>
      </dl>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </article>
  );
};

Product.propTypes = {
  className: string.isRequired,
  name: string.isRequired,
  slug: string.isRequired,
  brand: string.isRequired,
  type: string.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  size: string.isRequired,
  rating: number.isRequired,
};

Product.defaultProps = {};

export default withStyle(Product);

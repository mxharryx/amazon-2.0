import React from 'react';

function ProductFeed({ products }) {
  return (
    <div>
      <h1>Products here...</h1>
      {products.map(({ id, title, price, description, category, image }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
}

export default ProductFeed;

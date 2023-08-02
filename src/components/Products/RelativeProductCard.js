import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="card mb-4">
      <img src={image.url} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

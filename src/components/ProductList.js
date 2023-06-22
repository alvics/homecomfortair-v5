import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const ProductList = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct {
        nodes {
          id
          title
          price
          }
        }
      }
    
  `
  );


  const products = data.allStrapiProduct.nodes;

  return (
    <div>
    {console.log(data, "from ProductList Page!")}
      <h2>Product List Page!</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}, {product.price}</li>
             
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
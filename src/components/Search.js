import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false); 
  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct {
        edges {
          node {
            id
            title
            slug
            price
            cool_capacity
                 image {
                  url
                }
            sub_categories {
              title
            }
          }
        }
      }
    }
  `);

  const allProducts = data.allStrapiProduct.edges;

   const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value.length >= 2); // Show results when the search term length is at least 2 characters
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setShowResults(false);
  };


  const filteredProducts = allProducts.filter((product) => {
    const titleMatch = product.node.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const subCategoryMatch = product.node.sub_categories.some(
      (subCategory) =>
        subCategory.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const coolingCapacityMatch = product.node.cool_capacity
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return titleMatch || subCategoryMatch || coolingCapacityMatch;
  });

  return (
    <div className="search-container d-flex">
      <input
        className="input-search"
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Search products..."
      />

      {/*   */}
 



      {/*  */}

      <button class="search-btn" type="submit">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" height="16" fill="#ffffff" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      </button>
     {searchTerm.length >= 2 && (
  <ul className="ul-search">
<div className='d-flex flex-row-reverse mr-4 pb-2 pt-2 close-icon'>{searchTerm && ( // Conditionally render the "x" icon when there's a search term
        <button className="clear-search" onClick={handleClearSearch}>
        <svg className="clear-search-icon fw-600" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 384 512" fill="#000000"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        </button>
      )}</div>




    {filteredProducts.map((product) => (
      <li className="li-search pt-1" key={product.node.id}>
        <Link to={`/products/${product.node.slug}`} className="d-flex">
          <div className="image-container">
            <img
              src={product.node.image.url}
              alt={product.node.sub_categories[0].title}
              className="product-image"
            />
          </div>
          <h3 className="h3-search text-capitalize">
            {product.node.sub_categories[0].title}
          </h3>
          <p className="cooling-capacity pl-1 d-flex">
            {product.node.cool_capacity}
            <span className="price fw-600"> ${product.node.price}</span>
          </p>
        </Link>
      </li>
    ))}
  </ul>
)}

    </div>
  );
};

export default Search;

import React, { useState } from 'react';
import SplitSystems from './Products/Products';
import { graphql } from 'gatsby';

const Sidebar = ({ categories, products, setFilteredProducts }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Filter products based on the clicked category
    const filteredProducts = products.filter((product) =>
      product.sub_categories.some((subCategory) => subCategory.title === category)
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="col-sm-12 col-md-4">
      <div className=" bg-white p-4">
        {/* Sidebar content */}
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </li>
          ))}
        </ul>
        {activeCategory === "Brands" && (
          <ul>
            {products.flatMap((product) => product.sub_categories).map((subcategory) => (
              <li key={subcategory.title}>{subcategory.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ProductList = ({ filteredProducts }) => {
  return (
    <div className="col-md-8">
      {/* Product list */}
      <SplitSystems products={filteredProducts} />
    </div>
  );
};

const TwoColumnLayout = ({ data }) => {
  const allProducts = data?.allStrapiProduct?.nodes || [];
  const allCategories = ['Split System', 'Ducted System', 'Multi heady system', 'Brands'];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  console.log('All Products:!!!!!', allProducts);

  return (
    <div className="container">
      <div className="row">
        <Sidebar
          categories={allCategories}
          products={allProducts}
          setFilteredProducts={setFilteredProducts}
        />
        <ProductList filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export const query = graphql`
  {
    allStrapiProduct {
      nodes {
        id
        title
        price
        image {
          url
        }
        sub_categories {
          title
        }
      }
    }
  }
`;

export default TwoColumnLayout;

import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Dropdown, DropdownButton } from "react-bootstrap"
import Product from "./Product"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct {
        nodes {
          id
          title
          price
          slug
          image {
            url
          }
          sub_categories {
            title
          }
        }
      }
    }
  `);

  const products = data.allStrapiProduct.nodes;
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  // Get unique sub_category titles
  const subCategoryTitles = Array.from(new Set(products.map(product => product.sub_categories?.title)));

  // Filter products by selected sub_category
  const filteredProducts = selectedSubCategory
    ? products.filter(product => product.sub_categories?.title === selectedSubCategory)
    : products;

  return (
    <section>
     

      {/* Sub Category Dropdown */}
      <DropdownButton title={selectedSubCategory || "All Sub Categories"}>
        <Dropdown.Item onClick={() => setSelectedSubCategory(null)}>All Sub Categories</Dropdown.Item>
        {subCategoryTitles.map(title => (
          <Dropdown.Item key={title} onClick={() => setSelectedSubCategory(title)}>{title}</Dropdown.Item>
        ))}
      </DropdownButton>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

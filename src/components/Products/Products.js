import React, { useState } from "react";
import Product from "./Product";
import { graphql, useStaticQuery } from "gatsby";

const Products = () => {
  const query = useStaticQuery(graphql`
    {
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

  const allProducts = query.allStrapiProduct.nodes;
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const allBrands = Array.from(
    new Set(
      allProducts.flatMap((product) =>
        product.sub_categories.map((subCategory) => subCategory.title)
      )
    )
  );

  const handleBrandFilter = (brand) => {
    if (brand === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.sub_categories.some((subCategory) => subCategory.title === brand)
      );
      setFilteredProducts(filtered);
    }
  };

  const handlePriceLowToHigh = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const handlePriceHighToLow = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  return (
    <div className="container shop-page">
      <div className="row">
        <div className="col-sm col-md-3 col-lg-2 col-xl-2 hide-side mt-2">
          <div className="by-white">
            <div className="position-fixed bg-white p-4 min-vh-75 rounded border left-side-menu">
              <h4 className="fsz-16 mb-3 fw-700">
                <u>Shop by Brand</u>
              </h4>
              <ul>
                <li
                  className="d-flex"
                  onClick={() => handleBrandFilter("All")}
                >
                  <button className="d-flex fsz-14 text-capitalize">
                    All Brands
                    <span className="ml-3 mt-2 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
                {allBrands.map((brand) => (
                  <li key={brand} onClick={() => handleBrandFilter(brand)}>
                    <button className="fsz-14 d-flex text-capitalize">
                      {brand}{" "}
                      <span className="ml-3 mt-2 text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="text-capitalize fsz-14 d-flex"
                    onClick={handlePriceLowToHigh}
                  >
                    Price
                    <span className="fsz-14 ml-1"> (Low to High)</span>
                    <span className="ml-3 mt-2 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    className="text-capitalize fsz-14 d-flex"
                    onClick={handlePriceHighToLow}
                  >
                    Price
                    <span className="fsz-14 ml-2"> (High to Low)</span>
                    <span className="ml-3 mt-1 text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 bg-white mt-2 p-3 border rounded">
          <div className="d-md-flex justify-between">
            <h1 className="fsz-21">Shop for Split System Air Conditioning</h1>
            
         

          {/* Dropdown Button */}
          <div className="dropdown">
            <button
              className="mt-3 border border-dark px-2 pt-1 pb-1 fsz-14 gallery-btn dropdown-toggle me-sm-3 text-black"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by brand
            </button>
            <div className="dropdown-menu archive-dropdown" aria-labelledby="dropdownMenuButton1">
              <button
                className="dropdown-item"
                onClick={() => handleBrandFilter("All")}
              >
                All brands
              </button>
              {allBrands.map((brand) => (
                <button
                  key={brand}
                  className="dropdown-item"
                  onClick={() => handleBrandFilter(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
          </div>

          <section>
            <div className="product-grid pt-2">
              {filteredProducts.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </section>
        </div>
        <div className="col-md-0 col-lg-2 col-xl-2 p-2">
          <img
            className="border fluid"
            src="https://res.cloudinary.com/ewebdesigns/image/upload/v1687332607/side-special_njemjl.png"
            alt="home comfort air banner promotion"
            height="600px"
            width="200px"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

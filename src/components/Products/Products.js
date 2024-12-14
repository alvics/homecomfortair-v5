// SHOP PAGE DISPLAY FILTERED A/C's
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { graphql, useStaticQuery } from "gatsby";
import StaticImage from "../StaticQueryImages"
// import Footer from "../Footer-shop";

const Products = () => {
  const query = useStaticQuery(graphql`
    {
      allStrapiProduct(sort: {price: ASC}) {
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
          cool_capacity
        }
      }
    }
  `);

  const allProducts = query.allStrapiProduct.nodes;
  const allBrands = Array.from(
    new Set(
      allProducts.flatMap((product) =>
        product.sub_categories.map((subCategory) => subCategory.title)
      )
    )
  );

  // Create cooling capacity ranges
  const coolingCapacityRanges = [];
  for (let i = 2; i <= 10; i++) {
    coolingCapacityRanges.push({
      min: i,
      max: i + 0.9,
    });
  }

  // Create price ranges
  const priceRanges = [
    { min: 1000, max: 1299 },
    { min: 1300, max: 1449 },
    { min: 1450, max: 1599 },
    { min: 1600, max: 1899 },
    { min: 1900, max: 2999 },
    { min: 3000, max: 999999},
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCoolingCapacities, setSelectedCoolingCapacities] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const handlePriceRangeFilter = (range) => {
    setSelectedPriceRanges((prevRanges) => {
      const index = prevRanges.findIndex(
        (r) => r.min === range.min && r.max === range.max
      );
      if (index !== -1) {
        return prevRanges.filter((item, i) => i !== index);
      } else {
        return [...prevRanges, range];
      }
    });
  };


  const handleBrandFilter = (brand) => {
    setSelectedBrands((prevBrands) => {
      if (brand === "All") {
        return brand;
      }
      if (prevBrands.includes(brand)) {
        return prevBrands.filter((item) => item !== brand);
      } else {
        return [...prevBrands, brand];
      }
    });
  };

  const handleCoolingCapacityFilter = (range) => {
    setSelectedCoolingCapacities((prevRanges) => {
      const index = prevRanges.findIndex((r) => r.min === range.min && r.max === range.max);
      if (index !== -1) {
        return prevRanges.filter((item, i) => i !== index);
      } else {
        return [...prevRanges, range];
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setSelectedCoolingCapacities([]);
    setSelectedPriceRanges([]);
  };

  const filterProducts = () => {
    let filtered = allProducts;

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => {
        if (selectedBrands === "All") {
          return true; // Show all products when "All Brands" is selected
        } else {
          return selectedBrands.includes(product.sub_categories[0].title);
        }
      });
    }

    // Filter by selected cooling capacities
    if (selectedCoolingCapacities.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCoolingCapacities.some(
          (range) =>
            parseFloat(product.cool_capacity) >= range.min &&
            parseFloat(product.cool_capacity) <= range.max
        )
      );
    }

    // Filter by selected price ranges
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some(
          (range) => product.price >= range.min && product.price <= range.max
        )
      );
    }

    // Sort by price (lowest to highest)
    filtered.sort((a, b) => a.price - b.price);

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedBrands, selectedCoolingCapacities, selectedPriceRanges]);

  // Function to check if a brand is selected
  const isBrandSelected = (brand) => {
    return selectedBrands === "All"
      ? selectedBrands === brand
      : selectedBrands.includes(brand);
  };

  // Function to check if a cooling capacity range is selected
  const isCoolingCapacitySelected = (range) => {
    return selectedCoolingCapacities.some(
      (r) => r.min === range.min && r.max === range.max
    );
  };

  // Function to check if a price range is selected
  const isPriceRangeSelected = (range) => {
    return selectedPriceRanges.some(
      (r) => r.min === range.min && r.max === range.max
    );
  };

  // Function to handle sorting products by brand
  const handleSortByBrand = (brand) => {
    if (brand === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) =>
          product.sub_categories[0].title === brand
        )
      );
    }
  };

  return (
    <>
    <div className="container shop-page" style={{marginTop:"120px"}}>
      {/* Sidebar */}
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2 hide-side mt-2 by-white" style={{maxWidth: 170, margin: 10}} >
          <div className="" >
            <div className="bg-white p-2 rounded border left-side-menu sidebar-main">
            <div className="pt-4">
              <h4 className="fsz-16 mb-3 fw-700">
  <u>Shop by Brand</u>
</h4>
<ul>
  <li>
    <label className={`d-flex fsz-14 text-capitalize ${isBrandSelected("All") ? "selected" : ""}`}>
      <input
       style={{ cursor: "pointer" }}
        type="checkbox"
        onChange={() => handleBrandFilter("All")}
        checked={selectedBrands === "All"}
      />
      <span className="shop-checkbox" style={{ cursor: "pointer" }}>All Brands</span>
    </label>
  </li>
  {allBrands.map((brand) => (
    <li key={brand}>
      <label className={`fsz-14 d-flex text-capitalize ${isBrandSelected(brand) ? "selected" : ""}`}>
        <input
          type="checkbox"
          onChange={() => handleBrandFilter(brand)}
          checked={selectedBrands !== "All" && selectedBrands.includes(brand)}
        />
        <span className="shop-checkbox" style={{ cursor: "pointer" }}>{brand}</span>
      </label>
    </li>
  ))}
</ul>

              <h4 className="fsz-16 mb-3 mt-4 fw-700" id="scrollspyHeading1">
                <u>Kilowatt Range</u>
              </h4>
              <ul>
                {coolingCapacityRanges.map((range) => (
                  <li key={`${range.min}-${range.max}`}>
                    <label style={{ cursor: "pointer" }}>
                      <input
                        style={{ cursor: "pointer" }}
                        type="checkbox"
                        onChange={() => handleCoolingCapacityFilter(range)}
                        checked={selectedCoolingCapacities.some(
                          (r) => r.min === range.min && r.max === range.max
                        )}
                      />
                      <span className={`shop-checkbox fsz-14 ${isCoolingCapacitySelected(range) ? "font-bold" : ""}`}>{`${range.min.toFixed(1)} - ${range.max.toFixed(1)} kW`}</span>
                    </label>
                  </li>
                ))}
              </ul>

                 <h4 className="fsz-16 mb-3 mt-4 fw-700">
                <u>Price Range</u>
              </h4>
              <ul className="">
                {priceRanges.map((range) => (
                  <li key={`${range.min}-${range.max}`}>
                    <label style={{ cursor: "pointer" }}>
                      <input
                        style={{ cursor: "pointer" }}
                        name="priceRange"
                        type="checkbox"
                        onChange={() => handlePriceRangeFilter(range)}
                        checked={isPriceRangeSelected(range)}
                      />
                      <span className={`shop-checkbox fsz-14 ${isPriceRangeSelected(range) ? "font-bold" : ""}`}>{`$${range.min} - ${range.max === 999999 ? "Above" : '$' + range.max}`}</span>
                    </label>
                  </li>
                ))}
              </ul>

              <button
                className="text-capitalize fsz-14 d-block w-100 mt-4 btn btn-outline-primary"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-18 col-xl-8 bg-white mt-2 p-3 border rounded shop shop-board">
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
                  onClick={() => handleSortByBrand("All")}
                >
                  All brands
                </button>
                {allBrands.map((brand) => (
                  <button
                    key={brand}
                    className="dropdown-item"
                    onClick={() => handleSortByBrand(brand)}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
            {/* Splits Image  */}
       <div className="shop-banners about-us wrapper-about-img rounded">
              <StaticImage
                filename="splits-add-11-pow.png"
                alt="home comfort air image"
                className="rounded"
              />
            </div>

          {/* Product Listing */}
          <section>
            <div className="product-grid pt-2">
              {filteredProducts.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
  <div className="container mt-4">
          {/* Splits Image  */}
      
      </div>
          </section>

          
          
        </div>
         <div className="col-md-1 col-lg-2 col-xl-2 p-2">
        <div className="shop-banners-2 img-thumbnail border img-fluid rounded">  <StaticImage
                filename="side-banner-midea.png"
                alt="home comfort air image"
                className="rounded"
              /></div>
          <div className="shop-banners-2 mt-3 border img-fluid rounded">    <StaticImage
                filename="side-banner-samsung.png"
                alt="home comfort air image"
                className="rounded"
              /></div>
       
              <div className="shop-banners-2 mt-3 border img-fluid rounded">  <StaticImage
                filename="side-banner-haier.png"
                alt="home comfort air image"
                /></div>
             
        </div>
     
      </div>
    
    </div>

     
     </>
  );
};

export default Products;

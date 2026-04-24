import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import { snapToStandard } from "../RoomSizeCalculator"

const AllFilteredProducts = ({ filterKw, onClear }) => {
  const { allStrapiProduct: { nodes: allProducts } } = useStaticQuery(query)

  const products = allProducts
    .filter(p => !p.slug?.includes("ducted"))
    .filter(p => snapToStandard(parseFloat(p.cool_capacity)) === filterKw)

  if (products.length === 0) {
    return (
      <div style={{
        textAlign: "center",
        padding: "56px 24px",
        border: "2px dashed #e8eef5",
        borderRadius: 16,
        color: "#6b7280",
      }}>
        <p style={{ fontWeight: 700, fontSize: 16, color: "#1f2937", marginBottom: 8 }}>
          No {filterKw}kW systems currently available
        </p>
        <p style={{ fontSize: 14, marginBottom: 20 }}>
          We may be able to source one for you — or try a different size.
        </p>
        <button
          onClick={onClear}
          style={{
            background: "#0075C9",
            color: "#fff",
            border: "none",
            borderRadius: "2em",
            padding: "10px 24px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Show all products
        </button>
      </div>
    )
  }

  return (
    <div className="product-grid midea">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export const query = graphql`
  {
    allStrapiProduct(
      filter: { sub_categories: { elemMatch: { title: { ne: "carrier" } } } }
      sort: { price: ASC }
    ) {
      nodes {
        id
        title
        price
        slug
        cool_capacity
        image { url }
      }
    }
  }
`

export default AllFilteredProducts

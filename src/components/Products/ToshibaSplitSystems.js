// GET all Toshiba products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import { snapToStandard } from "../RoomSizeCalculator"
// import styles from "../../css/products.module.css"

const ToshibaProducts = ({ filterKw }) => {
  const {
    allStrapiProduct: { nodes: allProducts },
  } = useStaticQuery(query)

  const products = filterKw
    ? allProducts.filter(p => snapToStandard(parseFloat(p.cool_capacity)) === filterKw)
    : allProducts

  if (filterKw && products.length === 0) return null

  return (
    <section>
      <div className="product-grid Toshiba">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allStrapiProduct(
      filter: {sub_categories: {elemMatch: {title: {eq: "toshiba"}}}}
      sort: {price: ASC}
    ) {
      nodes {
        id
        image {
          url
        }
       
        title
        price
        slug
        cool_capacity
        description {
          data {
            description
          }
        }
      }
    }
  }
`

export default ToshibaProducts

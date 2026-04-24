// GET all Daikin products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import { snapToStandard } from "../RoomSizeCalculator"
// import styles from "../../css/products.module.css"

const DaikinSplitSystems = ({ filterKw }) => {
  const {
    allStrapiProduct: { nodes: allProducts },
  } = useStaticQuery(query)

  const splitProducts = allProducts.filter(p => !p.slug?.includes("ducted"))
  const products = filterKw
    ? splitProducts.filter(p => snapToStandard(parseFloat(p.cool_capacity)) === filterKw)
    : splitProducts

  if (filterKw && products.length === 0) return null

  return (
    <section>
      <div className="product-grid midea">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allStrapiProduct(
      filter: {sub_categories: {elemMatch: {title: {eq: "daikin"}}}}
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
;


export default DaikinSplitSystems
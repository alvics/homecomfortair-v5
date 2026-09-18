// GET all Hisense products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import { snapToStandard } from "../RoomSizeCalculator"

const HisenseSplitSystems = ({ filterKw }) => {
  const {
    allStrapiProduct: { nodes: allProducts },
  } = useStaticQuery(query)

  const products = filterKw
    ? allProducts.filter(p => snapToStandard(parseFloat(p.cool_capacity)) === filterKw)
    : allProducts

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
      filter: {sub_categories: {elemMatch: {title: {eq: "hisense"}}}}
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


export default HisenseSplitSystems

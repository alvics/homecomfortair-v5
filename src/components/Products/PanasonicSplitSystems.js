// GET all Panasonic products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
import { snapToStandard } from "../RoomSizeCalculator"

const PanasonicSplitSystems = ({ filterKw, model }) => {
  const {
    allStrapiProduct: { nodes: allProducts },
  } = useStaticQuery(query)

  let products = allProducts.filter(p => !p.slug?.includes("ducted"))
  if (model) products = products.filter(p => p.model === model)
  if (filterKw) products = products.filter(p => snapToStandard(parseFloat(p.cool_capacity)) === filterKw)

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
      filter: {sub_categories: {elemMatch: {title: {eq: "panasonic"}}}}
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
        model
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

export default PanasonicSplitSystems

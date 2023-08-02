// GET all Carrier products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery } from "gatsby"
// import styles from "../../css/products.module.css"

const CarrierProducts = () => {
  // Check to see if we have the query
  // const data = useStaticQuery(query)
  // console.log(data)
  // get allStrapiProducts and change the nodes name to products
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section>
      <div className="product-grid Carrier">
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

const query = graphql`
   {
    allStrapiProduct(
      filter: {sub_categories: {elemMatch: {title: {eq: "carrier"}}}}
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
        description {
          data {
            description
          }
        }
      }
    }
  }
`

export default CarrierProducts

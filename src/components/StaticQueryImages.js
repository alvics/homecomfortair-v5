// CALL ALL IMAGES TO USE THROUGH-OUT THE SITE
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StaticImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={props.alt} fluid={imageFluid} />
    }}
  />
)
export default StaticImage

// Now call any image in any component by importing this file

// import StaticImage from "../components/StaticQueryImages"

// and call image - <StaticImage filename="cas.jpg" alt="ducted air image" />

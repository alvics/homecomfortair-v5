import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StaticImage = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n =>
    n.node.relativePath.includes(filename)
  )

  if (!image || !image.node.childImageSharp) return null

  return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
}

export default StaticImage

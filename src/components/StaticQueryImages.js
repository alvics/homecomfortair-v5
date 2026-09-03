import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StaticImage = ({ filename, alt, style, imgStyle, contain }) => {
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

  const fluid = image.node.childImageSharp.fluid

  if (contain) {
    return (
      <img
        alt={alt}
        src={fluid.src}
        srcSet={fluid.srcSet}
        sizes={fluid.sizes}
        style={{ objectFit: "contain", ...style }}
      />
    )
  }

  return <Img alt={alt} fluid={fluid} style={style} imgStyle={imgStyle} />
}

export default StaticImage

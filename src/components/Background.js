import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Form from "./contactForm"

const Hero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Fragment>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
        <div
          className="d-grid-- just-content-center pb-2"
          style={{ backgroundColor: `rgba(255, 255, 255, 0.9)` }}
        >
          <Form />
        </div>
      </BackgroundImage>
    </Fragment>
  )
}

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "homecomfort-2.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero

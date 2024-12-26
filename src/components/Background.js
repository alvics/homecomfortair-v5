import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Form from "./ContactForm"

const Hero = props => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <Fragment>
      <BackgroundImage id="hero-image" fluid={data.fluid.childImageSharp.fluid}>
      
        <div
          className="container pb-2"
          style={{ backgroundColor: `rgba(255, 255, 255, 0.9)` }}
        >
        <div className="col"></div>
        
        <div className="w-50 p-4" style={{maxWidth: '100px'}} ><Form /></div>
          <div className="col"></div>
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

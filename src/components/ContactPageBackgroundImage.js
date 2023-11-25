import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "homecomfort.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <div>
     <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`rgba(255, 255, 255, 0.9)`}
      
    >
    <div className="d-grid-- just-content-center pb-2"
          style={{ backgroundColor: `rgba(255, 255, 255, 0.9)` }}>
    <ContactForm />
    </div>
      
    </BackgroundImage>
    </div>
   
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
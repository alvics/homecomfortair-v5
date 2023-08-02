import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "Daikin-Split-Family9.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.heroImage);

  return (
    <div style={{ height: '450px', position: 'relative' }}>
      <GatsbyImage image={image} alt="Hero Image" style={{ height: '100%', objectPosition: 'top center' }} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // Change opacity here (0.6 means 60% opacity)
        }}
      ></div>
    </div>
  );
};

export default Hero;

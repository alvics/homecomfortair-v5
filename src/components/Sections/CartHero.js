import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import StaticImage from "../StaticQueryImages"
import MyForm from '../heroForm';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "MHI-hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.heroImage);

  return (
    <div className="hero-container">
      {/* Background image and overlay */}
      <GatsbyImage image={image} alt="Hero Image" className="hero-bg-image" />
      <div className="hero-overlay"></div>

      {/* Hero content container */}
      <div className="hero-content">
        <div className="hero-box">
          <StaticImage
            filename="HCA-2-avatar.png"
            alt="home comfort air image"
            className="hero-logo"
          />
          <h1 className="hero-heading">
            <span className="hero-heading-primary cap"
            style={{ color: `rgb(35,31,32)` }}
            >
            
              Home<span style={{ fontWeight: 600 }}>Comfort</span>Air
            </span>
          </h1>
          <h2 className="hero-heading-h2">
            <span className="hero-heading-secondary font-caveat">
              Shop Split System Air Conditioning
            </span>
          </h2>
          <p id="hero-text" className="px-5">
            Here’s a quick overview of your split system pick.
          </p>
        </div>
      </div>
      
      {/* CSS Styles for Responsiveness */}
      <style jsx>{`
        .hero-container {
          height: 600px; /* Fixed height for desktop */
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          z-index: -1; /* Ensures hero is behind all content */
        }
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.4);
        }
        .hero-content {
          position: relative;
          z-index: 2; /* Ensures content is above the overlay */
          color: #231f20;
          width: 100%;
          max-width: 1200px;
          padding: 0 1rem;
        }
        .hero-box {
          background-color: rgba(255, 255, 255, 0.7);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%; /* Now always 100% of the container width */
          margin: 0 auto;
        }
        .hero-logo {
          width: 100px;
          height: auto;
          margin: 0 auto 1rem;
        }
        .hero-heading {
        color:
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .hero-heading-primary {
          white-space: nowrap; /* Prevents the text from wrapping */
        }
        .hero-heading-h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-family: 'Caveat', cursive;
        }
        #hero-text {
          font-size: 1rem;
          color: #666;
        }
        .font-semibold {
          font-weight: 600;
        }
        .font-caveat {
          font-family: 'Caveat', cursive;
        }
        
        /* Responsive adjustments for smaller screens */
        @media (max-width: 768px) {
          .hero-container {
            height: 400px; /* Shorter height for mobile screens */
          }
          .hero-heading {
            font-size: 2rem;
          }
          .hero-heading-h2 {
            font-size: 1.25rem;
          }
          .hero-box {
            padding: 1.5rem;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
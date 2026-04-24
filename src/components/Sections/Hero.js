import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import StaticImage from "../StaticQueryImages"
import MyForm from '../heroForm';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.heroImage);

  return (
    <div className="hero-image-wrapper" style={{ height: '780px', position: 'relative', overflow: 'hidden' }}>
      <GatsbyImage
        image={image}
        alt="Hero Image"
        style={{ height: '100%', width: '100%' }}
        imgStyle={{ objectPosition: 'center center' }}
      />

      {/* Directional gradient: dark left for text legibility, lighter right for form */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '130%',
          background: 'linear-gradient(105deg, rgb(4 21 33 / 76%) 0%, rgba(4, 21, 33, 0.75) 45%, rgba(4, 21, 33, 0.3) 100%)',
        }}
      />

      <div className="container">
        <div className="row hero-text-form">

          {/* Left: hero copy */}
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="hero-box pt-2 m-auto">
              <StaticImage
                filename="HCA-2-avatar.png"
                alt="home comfort air image"
              />
              <h1 className="text-center hero-heading">
                <span
                  className="hero-heading-primary cap"
                  style={{ color: '#ffffff', textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                >
                  Gold Coast Air Conditioning
                </span>
              </h1>
              <h2 className="hero-heading-h2">
                <span
                  className="hero-heading-secondary"
                  style={{ fontFamily: `'Caveat', cursive`, color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}
                >
                  Home Comfort Air — The smart choice in air conditioning
                </span>
              </h2>
              <p id="hero-text" className="px-5" style={{ color: '#ffffff', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
                Gold Coast air conditioning specialists. We supply and install
                all major brands throughout south east Queensland — Gold Coast,
                Brisbane and Ipswich.
              </p>
              <div className="pb-1">
                <Link to="/products">
                  <button className="btn-- btn-green--">Shop A/C</button>
                </Link>
                <Link to="/products/split-system-air-conditioning/">
                  <button className="btn-- btn-primary-- ml-2">
                    Split Systems
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: quote form */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div
              className="form-overlay p-4"
              style={{
                borderRadius: '16px',
                backgroundColor: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(4,21,33,0.25)',
                width: '100%',
                maxWidth: '460px',
              }}
            >
              <span
                className="h3 fw-600 d-flex justify-content-center"
                style={{ color: '#041521' }}
              >
                Request a quote
              </span>
              <i className="text-center text-blue">
                Air conditioning Installations
              </i>
              <div id="hero-form">
                <MyForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

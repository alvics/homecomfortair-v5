import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import StaticImage from "../StaticQueryImages"
import MyForm from '../heroForm';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "homecomfort-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.heroImage);

  return (
    <div style={{ height: '650px', position: 'relative' }}>
      <GatsbyImage image={image} alt="Hero Image" style={{ height: '100%', objectPosition: 'top center' }} />
      <div
        style={{
          
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // Change opacity here (0.6 means 60% opacity)
        }}
      ></div>

       <div className="container" >
      <div className="row hero-text-form">
      <div className="col-sm-12 col-md-12 col-lg-8"> <div className="hero-box py-3 m-auto">
                  <StaticImage
                    filename="HCA-2-avatar.png"
                    alt="home comfort air image"
                  />
                  <h1 className="text-center hero-heading">
                    <span
                      className="hero-heading-primary cap"
                      style={{ color: `rgb(35,31,32)` }}
                    >
                      Home<span style={{ fontWeight: 600 }}>Comfort</span>Air
                    </span>
                  </h1>
                  <h2 className="hero-heading-h2">
                    <span
                      className="hero-heading-secondary"
                      style={{ fontFamily: `'Caveat', cursive` }}
                    >
                      The smart choice in air conditioning
                    </span>
                  </h2>
                  <p className="px-5">
                    Residential air conditioning specialists, we supply and
                    install all major brands throughout south east Queensland,
                    from Ipswich, Brisbane and the Gold Coast.
                  </p>
                  <div className="pb-3">
                    <Link to="/products">
                      <button className="btn-- btn-green--">Shop A/C</button>
                    </Link>

                    <Link to="/split-systems">
                      <button className="btn-- btn-primary-- ml-2">
                        Split Systems
                      </button>
                    </Link>
                  </div>
                </div></div>

      <div className="col-sm-12 col-md-12 col-lg-4"><div className="form-overlay p-4">
                  <span
                    className="h3 fw-600 d-flex justify-content-center"
                    style={{ color: `#2d3136` }}
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

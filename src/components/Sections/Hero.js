import React, { Fragment } from 'react';
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
      heroMobile: file(relativePath: { eq: "Daikin-Split-Family9.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.heroImage);
  const mobileImage = getImage(data.heroMobile);

  return (
    <Fragment>
    <style>{`
      @media (max-width: 991px) {
        .hero-image-wrapper { height: 820px !important; }
        #hero-text { font-size: 13px !important; padding-left: 8px !important; padding-right: 8px !important; }
        .hero-heading-primary { font-size: 2.2rem !important; }
        .winter-sale-badge { bottom: 80px !important; right: 16px !important; }
      }
      @media (max-width: 991px) {
        .hero-avatar-wrap { display: none; }
      }
      @media (max-width: 767px) {
        .hero-image-wrapper { height: 620px !important; }
        .hero-heading-primary { font-size: 2rem !important; }
      }
      @media (max-width: 480px) {
        .hero-image-wrapper { height: 600px !important; }
      }
      /* Mobile image swap */
      .hero-img-mobile { display: none; }
      @media (max-width: 767px) {
        .hero-img-desktop { display: none; }
        .hero-img-mobile { display: block; }
      }
    `}</style>
    <div className="hero-image-wrapper" style={{ height: '780px', position: 'relative', overflow: 'hidden' }}>
      {/* Desktop hero image — hidden on mobile */}
      <GatsbyImage
        image={image}
        alt="Hero Image"
        className="hero-img-desktop"
        style={{ height: '100%', width: '100%' }}
        imgStyle={{ objectPosition: 'center center' }}
      />
      {/* Mobile hero image — shown only on phones */}
      <GatsbyImage
        image={mobileImage}
        alt="Hero Image"
        className="hero-img-mobile"
        style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
        imgStyle={{ objectFit: 'cover', objectPosition: 'center top' }}
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
              <div className="hero-avatar-wrap">
                <StaticImage
                  filename="HCA-2-avatar.png"
                  alt="home comfort air image"
                />
              </div>
              <h1 className="text-center hero-heading">
                <span
                  className="hero-heading-primary cap"
                  style={{ color: '#ffffff', textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
                >
                  Gold Coast Air Conditioning
                </span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '6px 14px', margin: '8px 0 12px' }}>
                {[
                  { icon: '✓', text: 'Licensed Installers' },
                  { icon: '✓', text: '5-Year Warranty' },
                  { icon: '✓', text: '18+ Years Experience' },
                ].map(({ icon, text }) => (
                  <span key={text} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    color: 'rgba(255,255,255,0.92)',
                    fontSize: 13,
                    fontWeight: 600,
                    textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                    letterSpacing: '0.01em',
                  }}>
                    <span style={{ color: '#00c4b3', fontWeight: 800, fontSize: 15 }}>{icon}</span>
                    {text}
                  </span>
                ))}
              </div>
              <p id="hero-text" className="px-5" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 6px rgba(0,0,0,0.4)', fontSize: 15, lineHeight: 1.6 }}>
                One call, fully installed. We supply, deliver and install your
                new system in a single visit — no middlemen, no hassle. Backed
                by a 5-year workmanship warranty.
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

              {/* Google Reviews Badge */}
              <a
                href="/#reviews"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  marginTop: 14,
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: 40,
                  border: '1px solid rgba(255,255,255,0.25)',
                  textDecoration: 'none',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                {/* Google G */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>

                {/* Stars */}
                <span style={{ display: 'flex', gap: 1 }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC05">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </span>

                {/* Text */}
                <span style={{
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}>
                  5.0 · 37 Google Reviews
                </span>
              </a>
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
                style={{ color: '#041521', marginBottom: 2 }}
              >
                Request a quote
              </span>
              <p style={{ textAlign: 'center', fontSize: 12, color: '#64748b', margin: '0 0 10px', fontWeight: 500 }}>
                Free &amp; no obligation — we'll be in touch within 2 hours
              </p>
              <div id="hero-form">
                <MyForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Hero;

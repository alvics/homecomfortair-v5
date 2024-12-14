import React, { Fragment } from "react"
import { Link } from "gatsby"
import StaticImage from "../components/StaticQueryImages"
import BrandsLogo from "../components/BrandLogoBtn"

// import { graphql, useStaticQuery } from "gatsby"
// import Image from "gatsby-image"

// const getImage = graphql`
//   {
//     fluid: file(relativePath: { eq: "sensitive-logo_40.png" }) {
//       childImageSharp {
//         fluid {
//           src
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Footer = () => {
  //  const data = useStaticQuery(getImage)
  return (
    <Fragment>
      <div className="banner-blue container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="footer-img-wrapper">
                <StaticImage
                  id="sensitive-img"
                  filename="Home-Comfort-Air-WHITE-650.png"
                  alt="ducted air image"
                />
              </div>
            </div>

            <div className="col">
              <div className="sensitive-text">
                Our top priority is ensuring 100% customer satisfaction. Rest assured, we offer a 5-year warranty on the workmanship of all new installations. Our team is at your service six days a week, reachable between 8am and 5pm.
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-img-wrapper arctick">
                <StaticImage
                  id="sensitive-img"
                  filename="logo-arctick.png"
                  alt="ducted air image"
                />
              </div>
            </div>

            <div className="col">
              <div className="h4 sensitive-heading">
                Experts in residential
                <br /> air conditioning
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-green">
        <div
          className="text-white"
          style={{
            margin: `0 auto`,
            maxWidth: 1440,
            padding: `0 1.0875rem 1.45rem`,
            color: `white`,
            textAlign: `center`,
          }}
        >
          {" "}
          <div className="footer-logo" style={{ paddingTop: 17 }}>
            <StaticImage
              id="sensitive-img"
              filename="Home-Comfort-Air-WHITE-600.png"
              alt="ducted air image"
            />
          </div>
        </div>
      </div>

      <footer id="footer-main">
        <div className="grid-300">
          <section className="footer-1 text-center">
            <div className="text-left">
              <h4>Servicing</h4>
              <p><Link to="/ipswich-air-conditioning">Ipswich</Link></p>
              <p><Link to="/brisbane-air-conditioning">Brisbane</Link></p>
              <p><Link to="/gold-coast-air-conditioning">Gold Coast</Link></p>
              <p><Link to="/tweed-heads-air-conditioning">Tweed Heads</Link></p>
            </div>
          </section>

          <section className="footer-2 text-center">
            <div className="text-left">
              <h4>Air Conditioning</h4>
              <p>
                <Link to="/split-systems-air-conditioning">Split System Air Conditioning</Link>
              </p>
              <p>
                <Link to="/ducted-systems">Ducted System Air Conditioning</Link>
              </p>
              <p>
                <Link to="/multi-head-systems">
                  Multi-head Air Conditioning
                </Link>
              </p>
              <p>
                <Link to="/service">Service Maintenance</Link>
              </p>
            </div>
          </section>

          <section className="footer-3 text-center">
            <div className="text-left">
              <h4>Brands</h4>
              <p><Link to="/products/daikin-split-system-air-conditioning">Daikin</Link></p>
              <p><Link to="/products/toshiba-split-system-air-conditioning">Toshiba</Link></p>
              <p><Link to="/products/samsung-split-system-air-conditioning">Samsung</Link></p>
              <p> <Link to="/products/midea-split-system-air-conditioning">Midea</Link></p>
            </div>
          </section>

          <section className="footer-4 text-center">
            <div className="text-left">
              <h4>Latest News</h4>
                <p>
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link to="/service-areas">
                  Service Area's
                </Link>
              </p>
              <p>
                <Link to="/products">
                  Shop Air Conditioning
                </Link>
              </p>
              <p>
                {" "}
                <Link to="/products/haier-split-system-air-conditioning">
                  Most Popular A/C
                </Link>
              </p>
            
            </div>
          </section>
        </div>
        
      </footer>
<div className="container-fluid bg-white"><BrandsLogo /></div>
      <div
        className="text-center bg-dark"
        style={{ borderTop: `1px solid #eee` }}
      >
        <span className="mt-2 pb-1 text-white" style={{ fontSize: "12px" }}>
          {" "}
          © {new Date().getFullYear()}
          <a className="mt-2 text-white pl-1" href="https://ewebdesigns.com.au">
            Powered by | eWebDesigns
          </a>
        </span>
      </div>
    </Fragment>
  )
}

export default Footer

import React, { Fragment } from "react"
import { Link } from "gatsby"
import StaticImage from "../components/StaticQueryImages"

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

const FooterShop = () => {
  //  const data = useStaticQuery(getImage)
  return (
    <footer>
      <div className="banner-blue container-fluid rounded-top">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="footer-img-wrapper">
               
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

      

      <div
        className="text-center bg-dark rounded-bottom"
        style={{ borderTop: `1px solid #eee` }}
      >
        <span className="mt-2 pb-1 text-white" style={{ fontSize: "12px" }}>
          {" "}
          © {new Date().getFullYear()}
          <a className="mt-2 text-white pl-1" href="https://ewebdesigns.com.au">
            Powered by | 1eWebDesigns
          </a>
        </span>
      </div>
    </footer>
  )
}

export default FooterShop

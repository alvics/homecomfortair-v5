//*****************/
// DESKTOP NAV MENU 
//*****************/

import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ShopMegaMenu from "./shopMegaMenu"
import OurServicesMenu from "./ourServicesMenu"
import TopNavMenu from "./topDesktopNavMenu"
// import AboutNavMenu from "./aboutNavBtn"
// import FacebookIcon from "@material-ui/icons/Facebook"
import StaticImg from "../StaticQueryImages"
import BrandNavMenu from "./brandsNav"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "Home-Comfort-Air-logo-650.png" }) {
      childImageSharp {
        fluid(maxWidth: 240, quality: 100) {
          src
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px"
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0"
// }

const Header = () => {
  const data = useStaticQuery(getImage)
  return (
    <div>
    
    <TopNavMenu />

      <nav id="desktop-nav d-sm-none" className="fixed-top pt-3 pb-2 d-none d-sm-block" style={{borderBottom: '3px solid rgb(0, 117, 201)', borderTop: '1px solid rgb(0, 117, 201)'}}>
        <div className="container" id="navbar">
          <div id="logo" className="reverse">
            <div className="logo">
              <Link id="logo-header" to="/">
                <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="desktop-links" id="links">
            <Link to="/">Home</Link>
           
         <Link to="/about-us">About</Link>  

         <ShopMegaMenu />

         <OurServicesMenu />

         <BrandNavMenu />

            <Link  to="/contact">Contact</Link>
            <span className="mt-1">
            <a href="https://www.facebook.com/Home-Comfort-Air-1713459065551004/?ref=bookmarks"
              target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook mb-1" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg></a>   
            </span>
            

             <span id="daikin-dealer-logo" style={{width:110, marginRight: 5, position:"absolute",right:100,top:50}}>

  <Link to="/products/#daikin"><StaticImg filename="daikin-logo2.png"  alt="Daikin logo" /></Link>
 </span>

          </div>
         
        </div>
 
      </nav>
    </div>
  )
}

export default Header

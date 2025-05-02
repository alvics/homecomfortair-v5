// ++++=========================================
// ***** MOBILE MENU ***************************
// *****=======================================

import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import DropdownBtn from "../DropDownBtn"
// import DropdownShopBtn from "../DropDownShopBtn"
import DropDownBrand from "../DropDownBrandBtn"
import Search from "../Search"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "Home-Comfort-Air-WHITE-600.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          src
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

const MenuIcon = styled.button`
  z-index: 8;

  div {
    width: 1.5rem;
    height: 0.3rem;
    background: #fefefe;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const Wrapper = styled.div`
  background: #fff;
  height: 80px;
  width: 100%;
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 30px;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  z-index: 99999999;
  margin-top: 100px;

  li {
    margin-top: 1rem;
  }

  a {
    font-size: 16px;
    color: #000;
    transition: color 300ms;

    :hover {
      color: rgb(0, 117, 201);
    }

    .body-wrapper {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`

const Logo = styled.div`
  margin: 0 0 0 0
` 

const MobileNav = () => {
  const data = useStaticQuery(getImage)
  const [nav, showNav] = useState(false)
  return (
    <Wrapper
      className="Start-Nav mobile-nav bg-red fixed-top d-lg-none d-xl-none d-xxl-none
    "
    style={{ borderBottom: '3px solid rgb(0, 117, 201)'}}
    >
    <div className="logo-top container-fluid" style={{ backgroundColor: 'rgb(0, 117, 201)'}}>
     <div class="row">

        <div className="mobile-nav-logo mb-3 pt-2">
       <Logo>
       
       <Link to="/">
        <Image fluid={data.fluid.childImageSharp.fluid} alt="home comfort air logo" />
        </Link>
      
      </Logo>
      </div>

              <div className="col">
      
      <span className="menu-icon" >
       <MenuIcon id="menu-icon--" nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      </span>
</div>

    

    

   
      </div>
</div>

      <div className="container mobile-search"><Search /></div>

      <MenuLinks id="menu-wrapper-mobile" nav={nav}>
        <ul className="" style={{ marginTop: '-150px'}}>
        <li>
          <span
              style={{ PaddingBottom: 5 }}
              className="phone-nav"
            >
              <a
                style={{ fontSize: 15 }}
                className="call-icon d-flex align-items-center text-shadow-1 btn-- btn-green-- my-0 ml-5 mb-4 "
                href="tel:0404602657"
              >
                <span style={{ fontSize: 22 }} className="material-icons ">
                 <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 512 512">
  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="white" />
</svg>

                </span>{" "}
                <span
                  className="phone-num fw-600 ml-1"
                  style={{ whiteSpace: `nowrap` }}
                >
                  Call 0404 602 657
                </span>
              </a>
            </span>
        </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <div class="dropdown-divider"></div>
          <li>
            <Link to="/about-us">About</Link> 
          </li>
          <div class="dropdown-divider"></div>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <div class="dropdown-divider"></div>
          <DropdownBtn />
          <div class="dropdown-divider"></div>
           <li>
            <DropDownBrand />
          </li>
          <div class="dropdown-divider"></div>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <div class="dropdown-divider"></div>
          <li>

            <Link
              style={{ marginTop: `-3px` }}
              id="facebook-svg"
              to="https://www.facebook.com/Home-Comfort-Air-1713459065551004/?ref=bookmarks"
              target="blank"
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{
                  background: `new 0 0 512 512`,
                  maxWidth: 30,
                  cursor: `pointer`,
                }}
              >
                <g>
                  <g>
                    <path
                      d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80
			h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </li>
          <div class="dropdown-divider"></div>
        </ul>
      </MenuLinks>
    </Wrapper>
  )
}

export default MobileNav

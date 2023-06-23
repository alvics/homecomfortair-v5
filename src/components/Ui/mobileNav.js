// ++++=========================================
// ***** MOBILE MENU ***************************
// *****=======================================

import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import DropdownBtn from "../DropDownBtn"
import DropdownShopBtn from "../DropDownShopBtn"
import DropDownBrand from "../DropDownBrandBtn"


const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "Home-Comfort-Air-logo-650.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
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
    height: 0.2rem;
    background: rgb(65, 64, 66);
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
  top: 0;
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
  margin: 58px 0 0 20px;
`

const MobileNav = () => {
  const data = useStaticQuery(getImage)
  const [nav, showNav] = useState(false)
  return (
    <Wrapper
      className="mobile-nav fixed-top d-lg-none d-xl-none d-xxl-none
    "
    >
      <Logo>
        <Image fluid={data.fluid.childImageSharp.fluid} alt="logo" />
      </Logo>
      <MenuIcon id="menu-icon--" nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <MenuLinks id="menu-wrapper-mobile" nav={nav}>
        <ul className="" style={{ marginTop: '-150px'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <div class="dropdown-divider"></div>
          <li>
            <Link to="/about-us">About</Link> 
          </li>
          <div class="dropdown-divider"></div>
          <li>
            <DropdownShopBtn />
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

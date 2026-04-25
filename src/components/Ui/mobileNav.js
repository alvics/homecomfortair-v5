import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import DropdownBtn from "../DropDownBtn"
import DropDownBrand from "../DropDownBrandBtn"
import Search from "../Search"
import CartIcon from "../CartIcon"

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
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    width: 22px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
    transition: opacity 280ms, transform 280ms;

    :first-child {
      transform: ${({ nav }) => (nav ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ nav }) => (nav ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)")};
    }
  }
`

const MenuLinks = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999998;
  /* iOS Safari safe overflow-scroll */
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  transition: transform 320ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  padding-top: 160px;
  padding-bottom: 48px;
  /* Prevent Safari from collapsing the element */
  -webkit-transform: ${({ nav }) => (nav ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)")};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border-bottom: 1px solid #f0f4f8;
  }

  a {
    font-size: 17px;
    font-weight: 500;
    color: #041521;
    display: block;
    padding: 16px 24px;
    -webkit-tap-highlight-color: rgba(0, 117, 201, 0.08);
    :active {
      background: rgba(0, 117, 201, 0.08);
    }
  }
`

const MobileNav = () => {
  const data = useStaticQuery(getImage)
  const [nav, showNav] = useState(false)

  return (
    <>
      {/* Fixed header bar — always on top of everything */}
      <div
        className="mobile-nav d-lg-none d-xl-none d-xxl-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999999,
          backgroundColor: 'rgb(0, 117, 201)',
          boxShadow: '0 2px 8px rgba(4,21,33,0.18)',
        }}
      >
        {/* Logo + controls row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 16px',
        }}>
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div /><div /><div />
          </MenuIcon>

          <div style={{ width: 190, flexShrink: 0 }}>
            <Link to="/">
              <Image fluid={data.fluid.childImageSharp.fluid} alt="home comfort air logo" />
            </Link>
          </div>

          <div className="mobile-nav-header" style={{ color: '#fff' }}>
            <CartIcon />
          </div>
        </div>

        {/* Search bar — full width white row */}
        <div style={{
          backgroundColor: '#fff',
          padding: '8px 12px',
          borderBottom: '1px solid #e8eef5',
        }}>
          <Search />
        </div>
      </div>

      {/* Full-screen slide-in nav panel */}
      <MenuLinks id="menu-wrapper-mobile" nav={nav}>
        <ul>
          <li><Link to="/about-us" onClick={() => showNav(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => showNav(false)}>Pricing</Link></li>
          <li><DropdownBtn onNavigate={() => showNav(false)} /></li>
          <li><DropDownBrand onNavigate={() => showNav(false)} /></li>
          <li style={{ border: 'none', padding: '16px 24px 8px' }}>
            <Link to="/contact" onClick={() => showNav(false)} style={{
              display: 'block',
              textAlign: 'center',
              background: 'rgb(0, 196, 179)',
              color: '#fff',
              fontWeight: 700,
              borderRadius: '2em',
              padding: '14px 24px',
              fontSize: '16px',
              letterSpacing: '0.02em',
            }}>
              Get a Quote
            </Link>
          </li>
          <li style={{ border: 'none' }}>
            <Link
              to="https://www.facebook.com/Home-Comfort-Air-1713459065551004/?ref=bookmarks"
              target="blank"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '13px', padding: '12px 24px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#1877f2">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
              Follow us on Facebook
            </Link>
          </li>
        </ul>
      </MenuLinks>
    </>
  )
}

export default MobileNav

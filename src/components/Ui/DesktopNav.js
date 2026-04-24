import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Search from '../Search'
import CartIcon from '../CartIcon'
import ServicesMegaMenu, { ServicesMegaPanel } from './ServicesMegaMenu'
import BrandsMegaMenu, { BrandsMegaPanel } from './BrandsMegaMenu'

const DesktopNav = () => {
  const [searchOpen, setSearchOpen]   = useState(false)
  const [activeMenu, setActiveMenu]   = useState(null) // 'services' | 'brands' | null
  const navRef  = useRef(null)
  const timerRef = useRef(null)

  const data = useStaticQuery(graphql`
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
  `)

  // ── Helpers ──────────────────────────────────────────────
  const openMenu = (name) => {
    clearTimeout(timerRef.current)
    setActiveMenu(name)
    setSearchOpen(false)
  }
  const closeMenu = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 120)
  }

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setSearchOpen(false); setActiveMenu(null) }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close search when clicking outside
  useEffect(() => {
    if (!searchOpen) return
    const onDoc = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setSearchOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [searchOpen])

  return (
    <div ref={navRef} className="d-none d-lg-block">

      {/* ── Main nav bar — the positioned ancestor for mega panels ── */}
      <nav className="hca-desktop-nav fixed-top">
        <div className="hca-nav-inner">

          {/* Logo */}
          <Link to="/" className="hca-nav-logo" onClick={() => setActiveMenu(null)}>
            <Image fluid={data.fluid.childImageSharp.fluid} alt="Home Comfort Air" />
          </Link>

          {/* Primary links */}
          <div className="hca-nav-links">
            <Link to="/about-us">About</Link>
            <Link to="/products">Pricing</Link>

            <ServicesMegaMenu
              isOpen={activeMenu === 'services'}
              onMouseEnter={() => openMenu('services')}
              onMouseLeave={closeMenu}
            />

            <BrandsMegaMenu
              isOpen={activeMenu === 'brands'}
              onMouseEnter={() => openMenu('brands')}
              onMouseLeave={closeMenu}
            />
          </div>

          {/* Right-side actions */}
          <div className="hca-nav-actions">

            {/* Phone */}
            <a href="tel:0404602657" className="hca-nav-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              0404 602 657
            </a>

            {/* Get A Quote CTA */}
            <Link to="/contact" className="nav-quote-btn">Get A Quote</Link>

            {/* Search icon toggle */}
            <button
              className={`hca-search-toggle${searchOpen ? ' active' : ''}`}
              onClick={() => { setSearchOpen(s => !s); setActiveMenu(null) }}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              type="button"
            >
              {searchOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
              )}
            </button>

            {/* Cart — far right */}
            <CartIcon />

          </div>
        </div>

        {/* ── Mega panels — absolute from this fixed nav, so always full viewport width ── */}
        {activeMenu === 'services' && (
          <div
            className="mega-panel"
            onMouseEnter={() => openMenu('services')}
            onMouseLeave={closeMenu}
          >
            <ServicesMegaPanel />
          </div>
        )}
        {activeMenu === 'brands' && (
          <div
            className="mega-panel"
            onMouseEnter={() => openMenu('brands')}
            onMouseLeave={closeMenu}
          >
            <BrandsMegaPanel />
          </div>
        )}
      </nav>

      {/* ── Search dropdown panel ── */}
      <div className={`hca-search-panel fixed-top${searchOpen ? ' hca-search-panel--open' : ''}`}>
        <div className="hca-search-panel-inner">
          <Search />
        </div>
      </div>

      {/* ── Mega menu backdrop ── */}
      {activeMenu && (
        <div
          className="mega-backdrop"
          onMouseEnter={() => setActiveMenu(null)}
        />
      )}

    </div>
  )
}

export default DesktopNav

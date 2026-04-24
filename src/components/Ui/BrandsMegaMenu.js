import React from 'react'
import { Link } from 'gatsby'

import mideaImg    from '../../images/brands/midea-logo.png'
import haierImg    from '../../images/brands/2560px-Haier_logo..png'
import samsungImg  from '../../images/brands/samsung-logo-2.png'
import toshibaImg  from '../../images/toshiba.jpg'
import daikinImg   from '../../images/brands/daikin.jpg'
import mitsuImg    from '../../images/brands/mitsubishi-electric.jpg'
import mhiImg      from '../../images/MHI-Logo.jpg'
import hitachiImg  from '../../images/brands/Hitachi-logo.png'
import carrierImg  from '../../images/brands/carrier.png'

const BRANDS = [
  { to: '/products/midea-split-system-air-conditioning',              label: 'Midea',               img: mideaImg },
  { to: '/products/haier-split-system-air-conditioning',              label: 'Haier',               img: haierImg,   imgStyle: { maxWidth: '70%', maxHeight: '70%' } },
  { to: '/products/samsung-split-system-air-conditioning',            label: 'Samsung',             img: samsungImg },
  { to: '/products/toshiba-split-system-air-conditioning',            label: 'Toshiba',             img: toshibaImg },
  { to: '/products/daikin-split-system-air-conditioning',             label: 'Daikin',              img: daikinImg },
  { to: '/products/mitsubishi-electric-split-system-air-conditioning',label: 'Mitsubishi Electric', img: mitsuImg },
  { to: '/products/mhi-split-system-air-conditioning',                label: 'Mitsubishi Heavy',    img: mhiImg },
  { to: '/products/hitachi-split-system-air-conditioning',            label: 'Hitachi',             img: hitachiImg, imgStyle: { maxWidth: '110%', maxHeight: '110%' } },
  { to: '/products/carrier-split-system-air-conditioning',            label: 'Carrier',             img: carrierImg, imgStyle: { maxWidth: '70%', maxHeight: '70%' } },
]

// Panel content — rendered in DesktopNav directly inside the fixed header
export const BrandsMegaPanel = () => (
  <div className="mega-inner mega-inner--brands">
    <div className="mega-brands-grid">
      <p className="mega-col-heading">Shop by brand</p>
      <div className="mega-brands-tiles">
        {BRANDS.map(brand => (
          <Link key={brand.to} to={brand.to} className="mega-brand-tile">
            <div className="mega-brand-img-wrap">
              <img src={brand.img} alt={brand.label} style={brand.imgStyle || {}} />
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="mega-promo mega-promo--brands">
      <div className="mega-promo-inner">
        <span className="mega-promo-badge">Authorised Dealer</span>
        <h3 className="mega-promo-heading">Australia's top<br />AC brands</h3>
        <p className="mega-promo-body">We supply and install all major brands — helping you choose the right system for your home and budget.</p>
        <Link to="/products/split-system-air-conditioning" className="mega-promo-btn">View all products →</Link>
      </div>
    </div>
  </div>
)

// Trigger button only — panel is lifted into DesktopNav
const BrandsMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => (
  <button
    className={`mega-trigger${isOpen ? ' mega-trigger--active' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    type="button"
    aria-expanded={isOpen}
  >
    Brands
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 512 512" className={`mega-chevron${isOpen ? ' mega-chevron--up' : ''}`}>
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="currentColor"/>
    </svg>
  </button>
)

export default BrandsMegaMenu

import React from 'react'
import { Link } from 'gatsby'

const SYSTEMS = [
  {
    to: '/products/split-system-air-conditioning',
    label: 'Split Systems',
    desc: 'Supply & install for single rooms or open-plan living',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="2"/>
        <path d="M7 11v4M12 11v4M17 11v4"/>
        <rect x="6" y="15" width="12" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    to: '/ducted-systems',
    label: 'Ducted Systems',
    desc: 'Whole-home comfort with discreet ceiling cassette systems',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    to: '/multi-head-systems',
    label: 'Multi-Head Systems',
    desc: 'One outdoor unit cooling multiple indoor zones',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="9" height="5" rx="1"/>
        <rect x="13" y="3" width="9" height="5" rx="1"/>
        <rect x="2" y="16" width="9" height="5" rx="1"/>
        <rect x="13" y="16" width="9" height="5" rx="1"/>
        <line x1="6" y1="8" x2="6" y2="12"/>
        <line x1="18" y1="8" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="18" y2="12"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
      </svg>
    ),
  },
]

const INFO = [
  {
    to: '/installation-warranty',
    label: '5 Year Installation Warranty',
    desc: 'All installs backed by our 5-year workmanship guarantee',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    to: '/split-ac-installation-cost',
    label: 'Installation Cost Guide',
    desc: 'Transparent pricing — know what to expect before you call',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    to: '/split-system-replacement',
    label: 'System Replacement',
    desc: 'Upgrade or replace your existing air conditioning system',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
  {
    to: '/service-areas',
    label: 'Service Areas',
    desc: 'Gold Coast · Brisbane · Ipswich and surrounding regions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    to: '/service',
    label: 'Maintenance',
    desc: 'Keep your system running at peak performance year-round',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    to: '/home-comfort-club',
    label: 'Home Comfort Club',
    desc: 'Membership plans with priority service & repair discounts',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

// Panel content — rendered in DesktopNav directly inside the fixed header
export const ServicesMegaPanel = () => (
  <div className="mega-inner">
    <div className="mega-col">
      <p className="mega-col-heading">Systems</p>
      {SYSTEMS.map(item => (
        <Link key={item.to} to={item.to} className="mega-item">
          <span className="mega-item-icon">{item.icon}</span>
          <span className="mega-item-text">
            <strong>{item.label}</strong>
            <span>{item.desc}</span>
          </span>
        </Link>
      ))}
    </div>

    <div className="mega-col">
      <p className="mega-col-heading">Information</p>
      {INFO.map(item => (
        <Link key={item.to} to={item.to} className="mega-item">
          <span className="mega-item-icon">{item.icon}</span>
          <span className="mega-item-text">
            <strong>{item.label}</strong>
            <span>{item.desc}</span>
          </span>
        </Link>
      ))}
    </div>

    <div className="mega-promo">
      <div className="mega-promo-inner">
        <p className="mega-promo-eyebrow">Gold Coast · Brisbane · Ipswich</p>
        <h3 className="mega-promo-heading">Get a free<br />in-home quote</h3>
        <p className="mega-promo-body">Our team will assess your space and recommend the best system at the right price.</p>
        <Link to="/contact" className="mega-promo-btn">Book a quote →</Link>
      </div>
    </div>
  </div>
)

// Trigger button only — panel is lifted into DesktopNav
const ServicesMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => (
  <button
    className={`mega-trigger${isOpen ? ' mega-trigger--active' : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    type="button"
    aria-expanded={isOpen}
  >
    Services
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 512 512" className={`mega-chevron${isOpen ? ' mega-chevron--up' : ''}`}>
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="currentColor"/>
    </svg>
  </button>
)

export default ServicesMegaMenu

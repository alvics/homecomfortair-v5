import React from 'react'
import { Link } from 'gatsby'
import StaticImage from './StaticQueryImages'

const keyPoints = [
  {
    title: '18+ Years Experience',
    sub: 'Residential & commercial installations',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Licensed & Insured Technicians',
    sub: 'ARCtick licensed/QBE Insured',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: '5-Year Installation Warranty',
    sub: 'Plus up to 10-year manufacturer cover',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Available 6 Days a Week',
    sub: '8am–5pm, Monday to Saturday',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "We'll Beat Any Written Quote",
    sub: 'Best price, guaranteed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
]

const whyUsItems = [
  {
    title: 'Commercial & Residential',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Quality Workmanship',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Licensed Experts',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Fast & Efficient Service',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: '5–10 Year Mfr Warranty',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: '5 Year Install Warranty',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Beat Any Written Quote',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Complete A/C Service',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const AboutSection = () => (
  <section className="section-3">

    <div className="section-heading">
      <h2 className="section-title">Local Experts You Can Trust</h2>
    </div>

    <div className="about-section-grid">

      <div className="about-text-col">
        <p className="about-intro">
          We've been supplying and installing air conditioning for families and builders across the{' '}
          <Link to="/gold-coast-air-conditioning">Gold Coast</Link>,{' '}
          <Link to="/brisbane-air-conditioning">Brisbane</Link>,{' '}
          <Link to="/ipswich-air-conditioning">Ipswich</Link> and{' '}
          <Link to="/tweed-heads-air-conditioning">Tweed Heads</Link> for over 18 years. Every job
          is handled by licensed technicians and backed by our 5-year workmanship warranty.
        </p>

        <ul className="about-key-points">
          {keyPoints.map(({ title, sub, icon }) => (
            <li key={title} className="about-key-point">
              <div className="about-point-icon">{icon}</div>
              <div className="about-point-text">
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="about-cta-row">
          <a className="btn btn-green--" href="tel:0404602657">Call 0404 602 657</a>
          <Link to="/contact" className="about-quote-link">Get a free quote →</Link>
        </div>
      </div>

      <div className="about-image-col">
        <div className="home-comfort-air-img">
          <StaticImage
            filename="homecomfort.jpg"
            alt="Home Comfort Air — Gold Coast air conditioning installers"
          />
        </div>
        <div className="img-caption mt-2">
          <strong style={{ display: 'block' }}>HOME COMFORT AIR</strong>
          <span style={{ fontFamily: `'Caveat', cursive`, display: 'block' }}>
            The smart choice in air conditioning
          </span>
        </div>
      </div>

    </div>

    <div className="section-heading" style={{ marginTop: '48px' }}>
      <h2 className="section-title">Why Choose Us</h2>
    </div>
    <div className="why-us-card-grid">
      {whyUsItems.map(({ title, icon }) => (
        <div key={title} className="why-us-card">
          <div className="why-us-card-icon">{icon}</div>
          <div className="why-us-card-title">{title}</div>
        </div>
      ))}
    </div>

  </section>
)

export default AboutSection

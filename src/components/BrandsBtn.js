import React from 'react'
import { Link } from "gatsby"

import haierLogo        from '../images/haier.jpg'
import daikinLogo       from '../images/brands/daikin.jpg'
import mitsubishiLogo   from '../images/brands/mitsubishi-electric.jpg'
import mideaLogo        from '../images/brands/midea-logo.png'
import samsungLogo      from '../images/samsung.jpg'
import toshibaLogo      from '../images/toshiba.jpg'
import hitachiLogo      from '../images/brands/Hitachi-logo.png'
import mhiLogo          from '../images/MHI-Logo.jpg'

const brands = [
  { src: haierLogo,      alt: "Haier",               to: "/products/haier-split-system-air-conditioning" },
  { src: daikinLogo,     alt: "Daikin",              to: "/products/daikin-split-system-air-conditioning" },
  { src: mitsubishiLogo, alt: "Mitsubishi Electric",  to: "/products/mitsubishi-electric-split-system-air-conditioning" },
  { src: mideaLogo,      alt: "Midea",               to: "/products/midea-split-system-air-conditioning" },
  { src: samsungLogo,    alt: "Samsung",             to: "/products/samsung-split-system-air-conditioning" },
  { src: toshibaLogo,    alt: "Toshiba",             to: "/products/toshiba-split-system-air-conditioning" },
  { src: hitachiLogo,    alt: "Hitachi",             to: "/products/hitachi-split-system-air-conditioning" },
  { src: mhiLogo,        alt: "Mitsubishi Heavy Industries", to: "/products/mhi-split-system-air-conditioning" },
]

const BrandsBtn = () => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 12,
  }}>
    {brands.map(({ src, alt, to }) => (
      <Link
        key={alt}
        to={to}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e8eef5",
          borderRadius: 12,
          background: "#fff",
          padding: "12px 10px",
          height: 90,
          textDecoration: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "#0075C9"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,117,201,0.12)" }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8eef5"; e.currentTarget.style.boxShadow = "none" }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: "100%",
            maxHeight: 60,
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Link>
    ))}
  </div>
)

export default BrandsBtn

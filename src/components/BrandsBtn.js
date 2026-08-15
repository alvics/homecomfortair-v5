import React from 'react'
import { Link } from "gatsby"

import haierLogo        from '../images/haier.jpg'
import daikinLogo       from '../images/brands/daikin.jpg'
import mitsubishiLogo   from '../images/brands/mitsubishi-electric.jpg'
import mideaLogo        from '../images/brands/midea-logo.png'
import samsungLogo      from '../images/brands/samsung-logo-2.png'
import toshibaLogo      from '../images/toshiba.jpg'
import hitachiLogo      from '../images/brands/Hitachi-logo.png'
import mhiLogo          from '../images/MHI-Logo.jpg'
import fujitsuLogo      from '../images/products/Haier/fujistsu/logo-fujitsu.svg'

const brands = [
  { src: haierLogo,      alt: "Haier",                      to: "/products/haier-split-system-air-conditioning" },
  { src: daikinLogo,     alt: "Daikin",                     to: "/products/daikin-split-system-air-conditioning" },
  { src: mitsubishiLogo, alt: "Mitsubishi Electric",        to: "/products/mitsubishi-electric-split-system-air-conditioning" },
  { src: mideaLogo,      alt: "Midea",                      to: "/products/midea-split-system-air-conditioning" },
  { src: samsungLogo,    alt: "Samsung",                    to: "/products/samsung-split-system-air-conditioning" },
  { src: toshibaLogo,    alt: "Toshiba",                    to: "/products/toshiba-split-system-air-conditioning" },
  { src: hitachiLogo,    alt: "Hitachi",                    to: "/products/hitachi-split-system-air-conditioning" },
  { src: mhiLogo,        alt: "Mitsubishi Heavy Industries", to: "/products/mhi-split-system-air-conditioning" },
  { src: fujitsuLogo,    alt: "Fujitsu",                    to: "/products/fujitsu-split-system-air-conditioning" },
]

const BrandsBtn = () => (
  <div className="brands-grid">
    {brands.map(({ src, alt, to }) => (
      <Link key={alt} to={to} className="brand-card">
        <img src={src} alt={alt} className="brand-card-img" />
      </Link>
    ))}
  </div>
)

export default BrandsBtn

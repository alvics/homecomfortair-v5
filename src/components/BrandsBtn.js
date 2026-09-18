import React from 'react'
import { Link } from "gatsby"

import haierLogo        from '../images/brands/cropped/haier.png'
import daikinLogo       from '../images/brands/cropped/daikin.png'
import mitsubishiLogo   from '../images/brands/cropped/mitsubishi-electric.png'
import mideaLogo        from '../images/brands/cropped/midea.png'
import hisenseLogo      from '../images/Hisense/hisense.png'
import toshibaLogo      from '../images/brands/cropped/toshiba.png'
import mhiLogo          from '../images/brands/cropped/mhi.png'
import fujitsuLogo      from '../images/products/Haier/fujistsu/logo-fujitsu.svg'
import panasonicLogo    from '../images/Panasonic/logo-cropped.png'

const brands = [
  { src: haierLogo,      alt: "Haier",                      to: "/products/haier-split-system-air-conditioning" },
  { src: daikinLogo,     alt: "Daikin",                     to: "/products/daikin-split-system-air-conditioning" },
  { src: mitsubishiLogo, alt: "Mitsubishi Electric",        to: "/products/mitsubishi-electric-split-system-air-conditioning" },
  { src: mideaLogo,      alt: "Midea",                      to: "/products/midea-split-system-air-conditioning" },
  { src: hisenseLogo,    alt: "Hisense",                    to: "/products/hisense-split-system-air-conditioning" },
  { src: toshibaLogo,    alt: "Toshiba",                    to: "/products/toshiba-split-system-air-conditioning" },
  { src: mhiLogo,        alt: "Mitsubishi Heavy Industries", to: "/products/mhi-split-system-air-conditioning" },
  { src: fujitsuLogo,    alt: "Fujitsu",                    to: "/products/fujitsu-split-system-air-conditioning", style: { maxWidth: "80%", maxHeight: "80%" } },
  { src: panasonicLogo,  alt: "Panasonic",                  to: "/products/panasonic-split-system-air-conditioning" },
]

const BrandsBtn = () => (
  <div className="brands-grid">
    {brands.map(({ src, alt, to, style }) => (
      <Link key={alt} to={to} className="brand-card">
        <img src={src} alt={alt} className="brand-card-img" style={style} />
      </Link>
    ))}
  </div>
)

export default BrandsBtn

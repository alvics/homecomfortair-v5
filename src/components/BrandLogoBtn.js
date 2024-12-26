import React from 'react'
import { Link }  from "gatsby"
import StaticImage from './StaticQueryImages'

// import Img from 'gatsby-image'

const BrandsImages = () => {


    return (
          <div className="image-button-container d-flex flex-wrap justify-content-evenly">

    <div className="image-button col col-md-3 col-6 pt-3" style={{maxWidth: 100}}>
    <Link to="/products/mhi-split-system-air-conditioning">
      <StaticImage filename="MHI-Logo.jpg" alt="mhi-logo" />
    </Link>
    </div> 

  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products/haier-split-system-air-conditioning">
      <StaticImage filename="haier.jpg" alt="haier-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products/daikin-split-system-air-conditioning">
      <StaticImage filename="daikin.jpg" alt="daikin-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products/mitsubishi-split-system-air-conditioning">
      <StaticImage filename="mitsubishi-electric.jpg" alt="mitsubishi-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products/midea-split-system-air-conditioning">
      <StaticImage filename="midea-logo.jpg" alt="midea-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products/samsung-split-system-air-conditioning">
      <StaticImage filename="samsung.jpg" alt="samsung-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products/toshiba-split-system-air-conditioning">
      <StaticImage filename="toshiba.jpg" alt="toshiba-logo" />
    </Link>
  </div>
</div>

    )
}

export default BrandsImages

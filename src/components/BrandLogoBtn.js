import React from 'react'
import { Link }  from "gatsby"
import StaticImage from './StaticQueryImages'

// import Img from 'gatsby-image'

const BrandsImages = () => {


    return (
          <div className="image-button-container d-flex flex-wrap justify-content-evenly">

    <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="products">
      <StaticImage filename="carrier.jpg" alt="carrier-logo" />
    </Link>
    </div> 

  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products">
      <StaticImage filename="haier.jpg" alt="haier-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products">
      <StaticImage filename="daikin.jpg" alt="daikin-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products">
      <StaticImage filename="mitsubishi-electric.jpg" alt="mitsubishi-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products">
      <StaticImage filename="midea-logo.jpg" alt="midea-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products">
      <StaticImage filename="samsung.jpg" alt="samsung-logo" />
    </Link>
  </div>
  <div className="image-button col col-md-3 col-6" style={{maxWidth: 100}}>
    <Link to="/products">
      <StaticImage filename="toshiba.jpg" alt="toshiba-logo" />
    </Link>
  </div>
</div>

    )
}

export default BrandsImages

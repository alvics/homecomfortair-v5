// Display the list of products
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
// import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
import DaikinSplitSystems from "../components/Products/DaikinSplitSytems"
import BrandsImages from "../components/BrandsBtn"
 import Cta from "../components/CTA"
// import BrandBtn from "../components/BrandBtn"

const ProductsPage = () => {
  return (
    <Layout>

      <div className="container  body-wrapper pt-4">
        <div className="pt-2 split-systems-avatar heading-box-color rounded ">
          <h1 className="h1 cam text-center text-white fw-600 p-3">
            <span>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            About us
          </h1>
          <p className="text-white text-center fsz-18">*Residential Air Conditioning Specialists</p>
          <Cta />
          <div className="pb-3">
            
          </div>
        </div>
        <div className="row about-us">
          <div className="col-lg-8 pt-3">
            <div className="wrapper-about-img">
              <StaticImage
                filename="splits-add-11-pow.png"
                alt="home comfort air image"
              />
            </div>
            <div className="mt-3">
              <h2 className="h5 cap fw-600">Our Service</h2>
            </div>

            <p className="lead-20">
              We've been installing domestic air conditioners for family's and
              major builders around Brisbane, Gold Coast and Tweed Heads area's
              for over a decade. Everything from{" "}
              <Link to="/split-systems">high wall split</Link> and{" "}
              <Link to="/multi-head-systems">multi head systems</Link> with
              major brands, <Link to='/products/daikin-split-system-air-conditioning/'> Daikin</Link>, <Link to='/products/haier-split-system-air-conditioning/'>Haier</Link>, Kelvinator, <Link to='/products/toshiba-split-system-air-conditioning/'>Toshiba</Link>, Acrton, Braemar,
              <Link to='/products/carrier-split-system-air-conditioning/'> Carrier</Link>, <Link to='/products/midea-split-system-air-conditioning/'>Midea</Link>, LG, <Link to='/products/mitsubishi-split-system-air-conditioning/'> Mitsubishi</Link> and <Link to='/products/samsung-split-system-air-conditioning/'>Samsung</Link> as well as{" "}
              <Link to="/ducted-systems">ducted residential</Link> and
              commercial systems with Daikin and Actron air conditioners.
              Furthermore, experienced working in Queensland schools installing
              air conditioning systems.{" "}
            </p>

            <p className="lead-20 mt-3">
              HOME COMFORT AIR services South East Queensland installing all
              major brand air conditioners, if you can see your location on the
              maps in our service area, we'll come to you. Our staff are
              licensed experts when it comes to installations or repairs, and we
              offer a <Link to="/installation-warranty">5-year warranty</Link> on all new installations of split systems.
              Furthermore, we pride ourselves on 100% customer satisfaction and
              quality workmanship. HOME COMFORT AIR operates 6 days a week and
              can be contacted between the hours of 8am and 5pm.{" "}
            </p>

            <p className="lead-20 mt-3">
            We stand behind our work and our commitment to providing the best service possible. Our team of highly trained and experienced technicians are dedicated to ensuring that every installation is completed correctly and to the highest standards. And with our <Link to="/installation-warranty">5-year warranty</Link>, customers can rest assured that they are protected in the event of any issues.
            </p>
            <p className="lead-20">
              If your looking for air conditioning with professional and quality
              workmanship, give HOME COMFORT AIR a call on{" "}
              <a href="tel:0404602657">0404 602 657</a> for residential air
              conditioning solutions. Your satisfaction, is our guarantee!{" "}
            </p>
            <div className="img-wrapper-e">
              <StaticImage
                filename="install-450.png"
                alt="home comfort air image"
              />
            </div>

            <div className="mt-2 mb-3">
             <DaikinSplitSystems />
            </div>
          </div>
          <div className="col-lg-4 pt-3 pl-4">
            <div className="mb-2">
              <div>
                <h3 className="h5 cap fw-600">Servicing Area's</h3>
              </div>
              <div>Gold Coast and surrounding area's</div>
              <div className="mb-1">
                <StaticImage
                  filename="map-gold-coast.png"
                  alt="map-gold-coast"
                  className="img-fluid"
                />
              </div>
              <div>Brisbane and surrounding area's</div>
              <StaticImage
                filename="map-brisbane-distances-3.png"
                alt="map-brisbane-distances"
              />
            </div>
            
          </div>
        </div>
        <section>
      <div className="lg mb-5">
      <h5>View all our brands</h5>
      <Link className="btn-- btn-primary--" to="/products" >SHOP</Link>
      </div>
      </section>
     <div>
     <BrandsImages />
     </div>

      </div>
    </Layout>
  )
}

export default ProductsPage

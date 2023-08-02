// Display the list of products
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
// import SEO from "../../components/seo"
import StaticImage from "../components/StaticQueryImages"
import SamsungProducts from "../components/Products/SamsungSplitSystems"
import MideaProducts from "../components/Products/MideaSplitsSystems"
// import Tabs from "../components/pages/Multi-Systems/MyTabs"
import BrandBtn from "../components/BrandsBtn"

const ServiceArea = () => {
  return (
    <Layout>
     {/*  <SEO
        title="Home Comfort Air | Split System Air Conditioning"
        description={`Discover how we've been servicing south east Queensland for over 10 years installing split system air conditioning throughout Ipswich, Brisbane and the Gold Coast area's.`}
        keywords={[
          `Gold,Coast,Air,Conditioning,
Split,systems,Ipswich,Brisbane,service`,
        ]}
      />  */}

      <div className="container  body-wrapper">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Service Area's</h1>

          <p className="font-italic">
            *Residential Air Conditioning Specialists
          </p>
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
              <h1 className="h5 cap fw-600">Service Area's</h1>
            </div>

            <p className="lead-20">
              Servicing Gold Coast / Ipswich / Brisbane
            </p>

            <p className="lead-20 mt-3">
              At HOME COMFORT AIR, we are dedicated to providing first-rate air conditioning services to South East Queensland. We specialize in installing all major brand air conditioners and offer a 5-year warranty on all new split system installations.
            </p>
            <p className="lead-20 mt-3">
              Our team of licensed experts are equipped to handle all of your installation and service needs, ensuring 100% customer satisfaction and quality workmanship. We cover a wide service area and will come to you if your location is within our maps.
            </p>
              <p className="lead-20 mt-3">
               We are open 6 days a week and available for contact between 8am and 5pm. Our goal is to provide exceptional service and keep your home comfortable all year round. Contact us today to schedule an appointment or for any inquiries.
            </p>
            <p className="lead-20">
              If your looking for air conditioning with professional and quality
              workmanship, give HOME COMFORT AIR a call on{" "}
              <a href="tel:0404602657">0404 602 657</a> for residential air
              conditioning solutions. Your satisfaction, is our guarantee!{" "}
            </p>
<div className="m-3">
    {/* List of service area's  */}

</div>
          
            <div className="img-wrapper-e">
              <StaticImage
                filename="splits-add.png"
                alt="split systems from home comfort air"
              />
            </div>

            <div className="mt-2">
              <MideaProducts />
               <button className="mt-2 btn-- btn-orange--">
          <Link to="/products" style={{color:'white', fontSize:'14px'}}>View all split systems ></Link>
        </button>
            </div>
          </div>
          <div className="col-lg-4 pt-3 px-4">
            <div className="">
              <div>
                <h3 className="h5 cap fw-600">Servicing Area's</h3>
              </div>
              <div>Gold Coast and surrounding area's</div>
              <div className="mb-1">
                <StaticImage
                  filename="map-gold-coast.png"
                  alt="map-gold-coast"
                />
              </div>
              <div>Brisbane and surrounding area's</div>
              <StaticImage
                filename="map-brisbane-distances-3.png"
                alt="map-brisbane-distances"
              />
            </div>

            <div className="mt-3">
             <SamsungProducts />
            </div>
            
          </div>
        </div>
       
        <div>
         <BrandBtn />
        </div>
      </div>
    </Layout>
  )
}

export default ServiceArea

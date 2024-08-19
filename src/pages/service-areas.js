// Display the list of products
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Cta from "../components/CTA"
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

      <div className="body-wrapper px-lg-5 px-md-1 pt-4">
          <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h2 cap text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            Service Area's
          </h1>
          <div className="pb-3">
           <p className="text-white text-center fsz-18">*Residential Air Conditioning Specialists</p>
          <Cta />
          
          </div>
        </div>
        <div className="row about-us">
          <div className="col-lg-8 pt-3">
            <div className="wrapper-about-img px-2">
              <StaticImage
                filename="splits-add-11-pow.png"
                alt="home comfort air image"
              />
            </div>
            <div className="px-3">
            <div className="mt-3">
              <h1 className="h5 cap fw-600">Service Area's</h1>
            </div>

            <p className="lead-20">
              Servicing Gold Coast / Ipswich / Brisbane
            </p>

            <p className="lead-20 mt-3">
              At HOME COMFORT AIR, we are dedicated to providing first-rate air conditioning services to South East Queensland. We specialise in installing all major brand air conditioners and offer a 5-year warranty on all new split system installations.
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
    <ul>
    <li><Link to='/service-areas/advancetown'>Advancetown</Link></li>
    <li><Link to='/service-areas/ashmore'>Ashmore</Link></li>
    </ul>

    
    
</div>
</div>
          
            <div className="img-wrapper-e px-2">
              <StaticImage
                filename="splits-add.png"
                alt="split systems from home comfort air"
              />
            </div>

            <div className="mt-2">
              <MideaProducts />
              <div className="px-2">
               <button className="mt-2 btn-- btn-primary--">
          <Link to="/products" style={{color:'white', fontSize:'14px'}}>View all split systems ></Link>
        </button>
        </div>
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
       
        <div className="px-3 mt-3">
        <div className="mb-3 mt-4">
        <h5 className="h3 text-center">View more brands</h5>
        </div>
         <BrandBtn />
        </div>
      </div>
    </Layout>
  )
}

export default ServiceArea

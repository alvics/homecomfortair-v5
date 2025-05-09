// Contact-Us Page!
import React, { Fragment } from "react"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import Layout from "../components/Layouts/layout"
// import Background from "../components/Background"
import StaticImage from "../components/StaticQueryImages"
// import Form from "../components/ContactForm"
import BackgroundImage from "../components/ContactPageBackgroundImage"


export const Head = () => (

  <Fragment>
       <title>Connect With Us | Contact Home Comfort Air </title>,
       <meta name= "description" content="Contact HOME COMFORT AIR we are based in Labrador, Queensland. Residential Air Conditioning Specialist,new installations,replacement systems,preventative maintenance."/>
       <Seo />
       <Schema />
  </Fragment>
)

const Contact = () => (
  <Layout>
    <div className="job-order-wrapper body-wrapper py-3 contact">
      
     <section className="mb-3 px-2">
       <div className="pt-2 split-systems-avatar heading-box-color rounded ">
          <h1 className="h1 cam text-center text-white fw-600 p-3">
            <span>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            Connect with us
          </h1>
          <p className="text-white text-center fsz-18">Give us a few details and we’ll offer the best solution. Connect by phone, chat or email.</p>
          <div className="pb-3">
            
          </div>
        </div>

       
        </section>
     

      <div id="contact-form" className="grid-300 px-2">
      <BackgroundImage />
     </div>


       <div className="text-dark mt-4 text-center p-3" style={{ fontSize: 12 }}>
          <small>
            *Please note when submitting our form we do not share your details
            with any third party, and we'll not spam your inbox.
          </small>
        </div>
      <div
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
        style={{ backgroundColor: `#5096dc2b` }}
        className="py-3 px-2 text-center mt-5 contact-details"
      >
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="https://www.google.com/maps/place/22+Beitz+Ave,+Labrador+QLD+4215/@-27.9403803,153.396257,17z/data=!3m1!4b1!4m5!3m4!1s0x6b910fd0d0af69d3:0x9dd8867748231113!8m2!3d-27.9403803!4d153.3984457"
        >
          <span style={{ fontSize: 32 }} className="fa-solid fa-location-dot pr-2">
           
          </span>

          <span
            style={{ color: `#333`, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Location: <span itemprop="streetAddress">22 Beitz Ave, </span>{" "}
            <span itemprop="addressLocality"> Labrador</span>,{" "}
            <span itemprop="addressRegion"> Queensland</span>{" "}
            <span itemprop="postalCode" style={{ paddingLeft: 4 }}>
              4215
            </span>
          </span>
        </a>

        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="mailto:homecomfortair.gc@gmail.com"
        >
          <span style={{ fontSize: 32 }} className="fa-solid fa-envelope pr-2">
          
          </span>

          <span
            style={{ color: `#333`, marginLeft: 5, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Email: homecomfortair.gc@gmail.com
          </span>
        </a>
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="tel:0404602657"
        >
          <span style={{ fontSize: 32 }} className="fa-solid fa-phone pr-2">
            
          </span>

          <span
            style={{ color: `#333`, marginLeft: 5, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Phone: <span itemprop="telephone">0404 602 657</span>
          </span>
        </a>
        <a
          className="d-flex justify-content-start text-shadow-1 py-2"
          href="tel:0404602657"
        >
          <span
            style={{ fontSize: 32, marginLeft: 5 }}
            className="fa-regular fa-clock d-flex pr-2"
          >
            
          </span>

          <span
            style={{ color: `#333`, fontSize: 14 }}
            className="d-flex align-items-center"
          >
            Hours: 8.00am to 5.00pm
          </span>
        </a>
      </div>
    </div>
  </Layout>
)

export default Contact

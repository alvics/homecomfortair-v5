import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/Layouts/layout"
// import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import CarrierProducts from '../../components/Products/CarrierSplitSystems'
import CarrierPDF from "../../images/Carrier.pdf"


const CarrierProductsPage = () => {
  
    return (
    <Layout>
     {/* <SEO
      title="Carrier Split Systems | Air Conditioning Installations"
      description={ `Carrier air conditioning from HOME COMFORT AIR. We supply and fully install Carrier split systems from $1090 throughout Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[ `gold,coast,price,carrier,split,systems,replacement,best,specials`, ]} /> */}  

     <div className="body-wrapper ducted-systems carrier-air-con-page p-3">

        <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h2 cap text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            Carrier Split System Air Conditioning
          </h1>
          <div className="pb-3">
             <Cta /> 
          </div>
        </div>
        </section>

        <section>
         <div className="ducted-systems-avatar-2 mt-3 pl-2 ml-5" style={{textAlign: `center`}}> 
              <StaticImage
                filename="carrier.png"
                alt="carrier air conditioning logo"
                
              />
        </div>
        <h2 className="h5 cap fw-600 mt-3">Carrier Air Conditioner</h2>
        <p className="lead-20 mt-3">
        Carrier is a well-known and respected brand in the air conditioning industry, known for producing high-performance and energy-efficient systems. Their split systems are an excellent choice for anyone looking to keep their home or office comfortable all year round.
        </p>
        </section>

        <section>
        <p className="lead-20">
        Carrier is an American company that was founded in 1915 by Willis Carrier, who is considered the inventor of modern air conditioning. He invented the first air conditioning system in 1902 for a printing plant in Brooklyn, New York. The company was first established as the Carrier Engineering Corporation and it has grown to become one of the leading manufacturers of heating, ventilation, air conditioning and refrigeration (HVAC) systems worldwide.
        </p>
        </section>

       
        <section>
        <div className="row">
        <div className="col-lg"> <p className="lead-20 ">
        Carrier split system air conditioners come in a variety of styles and models, including wall-mounted units, cassette models, and ducted systems. This makes it easy to find the perfect solution for any space, whether it's a single room or an entire home or office. And because of the brand's reputation for quality, you can trust that your Carrier air conditioner will be built to last.
        </p>
         <p className="lead-20 ">
         At Home Comfort Air, we have been installing Carrier air conditioners for many years, and we have the expertise and experience to ensure that your installation is completed quickly and efficiently. We are dedicated to providing our customers with the best service and workmanship, and we stand behind our installations with a <Link to="/installation-warranty">5-year warranty</Link> on the workmanship.
        </p>

        <p className="lead-20 mt-3">
        Quality and durability: Carrier is a well-established brand known for producing high-quality and durable products. round.
        </p>

          <p className="lead-20 ">
        In addition to installation, we also offer ongoing maintenance service to ensure that your air conditioner continues to function at its best. With our expert technicians and top-of-the-line equipment, we are able to quickly diagnose any issues that may arise.
        </p>

        </div>


        <div className="col-lg">
         <div className="carrier ducted-air mt-2 img-fluid p-4">
            <StaticImage className="carrierStaticImg" filename="carrier-1.jpg" alt="carrier split system hero image" />
          </div>
        </div>
        </div>
       
        </section>

        <section>
           <div
                style={{ backgroundColor: `#004178` }}
                className="my-3 text-center rounded"
                id="carrier"
              >
                <h3
                  className="h5 text-white fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supplied and Installed Carrier
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>

              <div className="mb-2">
                <CarrierProducts />
              </div>
       
         <div className='mt-4 d-flex'>
                <p className='p-2 '>
                    Carrier brochure </p>
                  <a href={CarrierPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="pr-2 d-flex border rounded-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
        </div>

        </section>

        <section>
         <div className="heading-box-color grid-col-2 heading-avatar rounded my-3 mx-0">
          <div className="p-3">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>

          <div className="text-center">
            <h3 className="h2 fw-600">Receive A free Quote</h3>
          </div>
        </div>

        <div className="grid-col-2 pb-3">
          <div>
            <h5 className=" px-20 cap fw-600">Split System Quote</h5>
            <p className="px-20">
              For new construction or existing homes.
              Need a replacement unit or a new installation? Submit your details, and we'll contact you
              back shortly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>
          <Form />
        </div>
        </section>

         <section>
            <p className="px-20 mt-4">
             <small>At Home Comfort Air, our goal is to provide our customers with the best air conditioning systems and services available. We are committed to providing the Gold Coast, Brisbane, Ipswich and Tweed Heads areas with top-quality air conditioning solutions that are both energy-efficient and reliable. Contact us today to schedule your installation or for any further information.</small>
          </p>
        </section>

    </div>
</Layout>

   
    )
  }

     
 export default CarrierProductsPage
import React from 'react'
// import { Link } from "gatsby"

import Layout from "../../components/Layouts/layout"
// import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import HaierProducts from '../../components/Products/HaierSplitSystems'
import HaierPDF from "../../images/haier-tempo.pdf"

const HaierProductsPage = () => {
  
    return (
    <Layout>
      

     <div className="body-wrapper ducted-systems p-3">

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
            Haier Split System Air Conditioning
          </h1>
          <div className="pb-3">
           <Cta />
          </div>
        </div>
        </section>

        <section>
         <div className="ducted-systems-avatar-2 ml-4" style={{textAlign: `center`}}> 
              <StaticImage
                filename="haier.jpg"
                alt="haier air conditioning logo"
                
              />
        </div>
        <div style={{marginTop:`-20px`}}>
        <h2 className="h5 cam fw-600 mt-3" >Haier Tempo Air Conditioning Supplied and Installed</h2>
        </div>
        
        <p className="lead-20 mt-3">
 At Home Comfort Air, we have been installing Haier air conditioners for over a decade, and we have the expertise and experience to ensure that your installation is completed quickly and efficiently. We are dedicated to providing our customers with the best service and workmanship, and we stand behind our installations with a 5-year warranty on the workmanship.


        
        </p>
        </section>

        <section>
        <p className="lead-20 mt-3">When it comes to air conditioning, Haier is a brand that should not be overlooked. Known for their innovative technology and energy-efficient systems, Haier Tempo air conditioning split systems are an excellent choice for anyone looking to keep their home or office comfortable all year round.</p>
        </section>

        <section>
        <p className="lead-20">
        One of the standout features of Haier air conditioners is their advanced inverter technology. This technology allows the unit to automatically adjust its cooling or heating output to match the room's temperature, resulting in more efficient operation and lower energy bills. Additionally, Haier air conditioners are designed with noise reduction in mind, ensuring that the unit runs quietly, so it won't disturb your daily routine.
        </p>
        </section>


        <section>
        <div className="row">
         <div className="col-lg">
         <p className="lead-20 ">
        We understand that every customer has different needs and requirements, which is why we offer a wide range of Haier air conditioners to suit any budget and space. From wall-mounted units to cassette models and ducted systems, we have the perfect solution for every home or office.
        </p>

      
         <p className="lead-20 ">
       If you're looking for a high-quality, energy-efficient air conditioning system, Haier is an excellent choice. And if you're looking for a trusted and experienced installer, look no further than Home Comfort Air. Contact us today to schedule your consultation today.
        </p>

        <div>
        <h2 className='h5 fw-600 '>Benefits Of Haier Tempo Split System</h2>
        <ul>
        <li>Wi-Fi Control</li>
        <li>Energy Efficient</li>
        <li>Quiet Operation</li>
        <li>Turbo Cooling</li>
        <li>Self Cleaning</li>
        <li>Far-reaching</li>
        <li>5 Year Manufacturer Warranty</li>
        </ul>
        </div>
         </div>

         <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="haier-main2.webp" alt="haier air conditioning split system hero image" />
          </div>
         </div>
        </div>
        </section>

        <section>
       <div className="mb-2 mt-2" id="haier">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#005AAB` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supplied and Installed Haier
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>
          <HaierProducts />
          <div className='mt-4 d-flex'>
              <p className='p-2'>
                    Haier brochure{" "}</p>
                  <a href={HaierPDF} target="_blank" rel="noreferrer">
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
              Looking to replace a system or  new installation? Submit your details, and we'll contact you
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
             <small> At Home Comfort Air, we specialise in the installation of Haier air conditioning systems throughout the Gold Coast, Brisbane, Ipswich, and Tweed Heads areas. Our team of professionals is highly trained and experienced in the installation of Haier air conditioners, and we pride ourselves on providing our customers with exceptional service and workmanship, ensuring that every installation is completed on time and to the highest standards.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default HaierProductsPage
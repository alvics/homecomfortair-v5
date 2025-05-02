import React, {Fragment} from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2'
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import HitachiProducts from '../../components/Products/HitachiSplitSystems'
import HitachiPDF from "../../images/hitachi.pdf"

export const Head = () => (

  <Fragment>
       <title>Supplied and Installed Hitachi Split System Air Conditioners</title>,
       <meta name= "description" content="Discover Hitachi airHome 400 split system air conditioning for your home or space. Supplied & installed from $1499 inc GST" />
       <Seo />
       <Schema />
</Fragment>

)

const HitachiProductsPage = () => {
  
    return (
    <Layout>
      <div className="body-wrapper ducted-systems p-3">

        <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h2 text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            <span className='h5 text-white fw-600'>Supplied & Installed</span>
            Hitachi Split System Air Conditioning
            
          </h1>
          <div className="pb-3">
          <Cta /> 
          </div>
           <div> <span className="text-white text-center h3 pb-3" style={{ fontFamily: `'Caveat', cursive` }}>*Precision Cooling, Japanese Engineering</span></div>
        </div>
        </section>
        

        <section>
        <div className="ducted-systems-avatar-2 ml-4 p-3" style={{textAlign: `center`}}> 
              <StaticImage
                filename="Hitachi-logo"
                alt="hitachi air conditioning logo"
                
              />
        </div>
        <section>
         <p className="lead-20">
          Hitachi, are dedicated to enhancing well-being through innovative cooling and heating technologies. With over 90 years of expertise in HVAC, they offer reliable, high-quality solutions that improve air quality and ensure energy efficiency.
        </p>
        </section>
       
         
        <h2 className="h5 fw-600 mt-2">Hitachi Split System Air Conditioner</h2>


           <section>
       <div className="mt-2">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#c3002f` }}
                >
                  <h3
                    className="h5 fw-600 mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supplied and Installed Hitachi
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>

             
             
        
        <HitachiProducts />
        <div className='mt-4 d-flex'>
                <p className='p-2 '>
                    Hitachi brochure{" "} </p>
                  <a href={HitachiPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="pr-2 d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
        </div>

        </section>
      
        </section>

        <section>
        <p className="lead-20">
A Home air conditioner that’s easy to use, makes daily life more convenient, and comes with integrated self-maintenance technology that help to improves the long-term performance of the unit. It is the ideal air conditioner for people who don’t want to think about AC. 
        </p>
        </section>

        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
        Hitachi’s wall mounted AC units are made for homeowners looking for low maintenance solutions. Our wall mounted ACs are quick and easy for a professional to install and come with self-cleaning technologies that maintain airflow performance for years, helping to reduce performance degradation and maintain energy efficiency.
         </p>
          <p className="lead-20 mt-3">
        The airHome wall mounted range comes with a comprehensive 6 year warranty on parts and labour, so you can be assured of the reliability and quality of your airHome system.
        </p>
         <p className="lead-20 ">
        With inverter technology, an air conditioner cools with maximum capacity at start-up, then automatically slows down and operates at a minimal capacity to maintain the room temperature comfortably.

        6x On/Off time and temperature settings for each day of the week (using airCloud Go). Set a specific time interval for power off, up to 12 hours 
        </p>
        </div>

        <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="hitachi-hero-6.jpg" alt="hitachi split system air conditioner indoor unit" />
          </div>
        </div>

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
            <h5 className=" px-20 h5 fw-600">Split System Quote</h5>
            <p className="px-20">
              From new construction to existing homes, whether you need a replacement unit or a fresh installation, simply share your details, and we'll be in touch shortly.
            </p>
            <p className="px-20 fw-lighter">
              "Your satisfaction is our priority."
            </p>
          </div>
           <Form /> 
        </div>
        </section>
         
        <section>
            <p className="px-20 mt-4">
             <small>At Home Comfort Air, we specialize in the installation of Midea air conditioning systems throughout the Gold Coast, Brisbane, Ipswich, and Tweed Heads areas. We are dedicated to providing our customers with top-of-the-line air conditioning systems that are both energy-efficient and reliable.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default HitachiProductsPage
import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/Layouts/layout"
// import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import ToshibaProducts from '../../components/Products/ToshibaSplitSystems'
import ToshibaPDF from "../../images/Toshiba.pdf"

const ToshibaProductsPage = () => {
  
    return (
    <Layout>
       {/* <SEO
      title="Toshiba Split Systems | Air Conditioning Toshiba"
      description={ `Toshiba air conditioning from HOME COMFORT AIR. We supply and fully install Toshiba split systems from $1249 throughout Brisbane and Gold Coast area's.`}
      keywords={[ `gold,coast,price,toshiba,split,systems,,brisbane,specials`, ]} /> */}

     <div className="body-wrapper ducted-systems p-3">

        <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h1 cam text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            Toshiba Split System Air Conditioning Supplied & Installed
          </h1>
          <div className="pb-3">
            <Cta />
          </div>
        </div>
        </section>

        <section>
         <div className="ducted-systems-avatar-2 ml-4" style={{textAlign: `center`}}> 
              <StaticImage
                filename="toshiba.jpg"
                alt="toshiba air conditioning logo"
                
              />
        </div>
        <div className='pt-1' style={{marginTop:`-20px`}}>
         <h2 className="h5 cap fw-600 mt-3">Toshiba SEIYA Classic Series Air Conditioner</h2>
        </div>
       
        <p className="lead-20 mt-3">
        Toshiba is a well-known and respected brand in the air conditioning industry, known for producing high-performance and energy-efficient systems. The company is particularly renowned for offering some of the longest warranties in the market, with many of its split system air conditioners coming with a 7-year warranty. This speaks to the confidence that Toshiba has in the durability and reliability of its air conditioning systems.
        </p>
        </section>

        <section>
        <p className="lead-20">
        One of the standout features of Toshiba's split system air conditioners is their advanced inverter technology. This technology allows the units to automatically adjust their cooling and heating output to match the ambient temperature, resulting in more efficient performance and lower energy consumption. Additionally, Toshiba's units come with compressor inverter technology which optimizes the energy consumption and performance.
        </p>
        </section>


        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
        Toshiba's <Link to="/split-systems">split system</Link> air conditioners also feature advanced air filtration technology that helps to keep the air inside your home or office clean and fresh. They use multiple filters, including a high-efficiency particulate air (HEPA) filter, to remove harmful particles such as dust, pollen, and pet dander from the air. This makes them ideal for people with allergies or asthma.
        </p>
        <p className="lead-20 mt-3">
        Another advantage of Toshiba's split system air conditioners is the variety of options available. They come in a range of sizes, from <Link to="/multi-head-systems">small units</Link> that are suitable for a single room to <Link to="/ducted-systems">larger systems</Link> that can cool an entire house or commercial building. Additionally, Toshiba offers both cooling-only and heating and cooling models, providing customers with versatile options that can be used all year round.
        </p>
         <p className="lead-20 mt-4">
        In terms of design, Toshiba's split system air conditioners feature a sleek and modern look that can be easily integrated into any home or office décor. The units are built to withstand the rigors of regular use, and they come with long-term warranties to ensure your peace of mind.
        </p>
          <p className="lead-20 mt-4">
        In conclusion, Toshiba's split system air conditioners are an excellent choice for anyone looking for high-performance, energy-efficient and quiet cooling solution. With advanced inverter technology, advanced air filtration, and a wide range of options, Toshiba air conditioners are an ideal choice for keeping your home or office comfortable all year round
        </p>
        </div>

        <div className="col-lg">
         <div className="ducted-air mt-2">
            <StaticImage filename="Toshiba-main.jpg" alt="toshiba air conditioning split system hero image" />
          </div>
        </div>
        </div>
        </section>

       

        

            <section className='mt-4'>
      
        </section>

        <section>
      <div
                style={{ backgroundColor: `#D01C22` }}
                className="my-3 text-center rounded"
                id="toshiba"
              >
                <h3
                  className="h5 text-white fw-600 cap mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supplied and Installed Toshiba
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>
        <ToshibaProducts />
              <div className='mt-4 d-flex'>
                <p className='p-2 '>
                    Toshiba brochure{" "} </p>
                  <a href={ToshibaPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="pr-2 d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
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
             <small>At Home Comfort Air, we are experts in the field of installing Toshiba air conditioning systems across the Gold Coast, Brisbane, Ipswich, and Tweed Heads regions. Our commitment to our customers is to deliver only the best in air conditioning systems, ones that are both energy-efficient and dependable.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default ToshibaProductsPage
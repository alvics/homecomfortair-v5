import React, {Fragment} from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2' 
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
// import CarrierProducts from '../../components/Products/CarrierSplitSystems'

import Schema from '../../components/Schema-2'

export const Head = () => (

  <Fragment>
       <title>Supplied and installed Split System Air Conditioning Specials</title>,
       <meta name= "description" content="Find out how our Specials for supplied and installed split system air conditioning can suit your home or space."/>
       <Seo />
      <Schema />
</Fragment>

)


const SpecialsProductsPage = () => {
  
    return (
    <Layout>
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
            <span className='h5 text-white fw-600'>This Months Specials</span>
             Split System Air Conditioning
          </h1>
          <div className="pb-3">
             <Cta /> 
          </div>
        </div>
        </section>

   <section>
   <div>
   <p>Coming soon ...</p>
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

     
 export default SpecialsProductsPage
import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/Layouts/layout"
// import SEO from "../../components/seo"
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import DaikinProducts from '../../components/Products/DaikinSplitSytems'
import DaikinPDF from "../../images/daikin.pdf"


const DaikinProductsPage = () => {
  
    return (
    <Layout>
      {/* <SEO
      title="Daikin Split Systems | Air Conditioning Installations"
      description={ `Daikin air conditioning from HOME COMFORT AIR. We supply and fully install Daikin split systems from $1299 throughout Ipswich, Brisbane and the Gold Coast area's.`}
      keywords={[ `gold,coast,price,daikin,split,systems,replacement,best,specials`, ]} /> */} 

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
            Daikin Split System Air Conditioning
          </h1>
          <div className="pb-3">
             <Cta />  
          </div>
        </div>
        </section>

        <section>
        <h2 className="h5 cap fw-600 mt-3">Daikin Air Conditioner</h2>
        <p className="lead-20 mt-3">
        Daikin is a well-established and respected brand in the world of air conditioning. Known for their high-performance and energy-efficient systems, Daikin's split system air conditioners are a popular choice for homes and businesses looking to maintain a comfortable indoor environment year-round.
        </p>
        </section>

        <section>
        <p className="lead-20">
        One of the key features that sets Daikin air conditioners apart is their advanced inverter technology. This technology allows the units to automatically adjust their cooling and heating output to match the ambient temperature, resulting in more efficient performance and lower energy consumption. Additionally, Daikin's Inverter units are known for their quiet operation, making it possible to have a good night sleep or work in peace, without disturbance from the air conditioning unit.
        </p>
        </section>

        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
        Daikin's <Link to="/split-systems">split system</Link> air conditioners also feature advanced air filtration technology that helps to keep the air inside your home or office <Link to="/service">clean and fresh</Link>. They use multiple filters, including a high-efficiency particulate air (HEPA) filter, to remove harmful particles such as dust, pollen, and pet dander from the air. This makes them ideal for people with allergies or asthma.
        </p>
         <p className="lead-20 mt-3">
        Another advantage of Daikin's split system air conditioners is their variety of options available. They come in a range of sizes, from small units that are suitable for a single room to <Link to="/ducted-systems">larger systems</Link>  that can cool an entire house or commercial building. Additionally, Daikin offers both cooling-only and heating and cooling models, providing customers with versatile options that can be used all year round.
        </p>
        </div>

        <div className="col-lg">
        <div className="ducted-air mt-2">
            <StaticImage filename="Daikin-Split-Family9.jpg" alt="daikin split system image" />
          </div>
        </div>

        </div>
        
        </section>
        
        <section>
        <p className="lead-20 mt-3">
        Daikin also provides Wi-Fi control options, which allows customers to control their units remotely, and also gives them access to features such as schedule, energy saving and voice control via smartphone or smart speaker.
        </p>
        </section>

            <section>
        <p className="lead-20 ">
        Daikin air conditioners also feature a sleek and modern design that can be easily integrated into any home or office décor. They are built to withstand the rigors of regular use, and they come with long-term warranties to ensure your peace of mind.
        </p>
        </section>

            <section>
        <p className="lead-20 ">
        In conclusion, Daikin's split system air conditioners are an excellent choice for anyone looking for high-performance, energy-efficient and quiet cooling solution. With advanced inverter technology, advanced air filtration, smart controls, and a wide range of options, Daikin air conditioners are an ideal choice for keeping your home or office comfortable all year round.
        </p>
        </section>

        <section>
        <div>
        <h3 className='h5 fw-600'>Daikin Cora Split System Air Conditioning </h3>
        </div>
        <DaikinProducts />
           <p className='mt-4'>
                    Daikin brochure{" "}
                  <a href={DaikinPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="material-icons">picture_as_pdf</span> here
                  </a>
                </p>
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

     
 export default DaikinProductsPage
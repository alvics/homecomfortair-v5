import React, {Fragment} from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2' 
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import SamsungProducts from "../../components/Products/SamsungSplitSystems"
import SamsungPDF from "../../images/bedarra.pdf"

export const Head = () => (

  <Fragment>
       <title>Supplied and Installed Samsung Split System Air Conditioner</title>,
       <meta name= "description" content="Learn about Samsung split system air conditioning for your home or space. Supplied & installed from $1399 inc GST" />
       <Seo />
       <Schema />
</Fragment>

)

const SamsungSplitSystem = () => {
  
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
            Samsung Split System Air Conditioning 
          </h1>
          <div className="pb-3">
           <Cta /> 
          </div>
           <div> <span className="text-white text-center h3 pb-3" style={{ fontFamily: `'Caveat', cursive` }}>*Cooler Air, Smarter Living – Samsung</span></div>
        </div>
        </section>

        <section>
         <div className="ducted-systems-avatar-2 ml-4" style={{textAlign: `center`}}> 
              <StaticImage
                filename="samsung.jpg"
                alt="samsung air conditioning logo"
                
              />
        </div>
        <h2 className="h5 fw-600 mt-3">Samsung Air Conditioner</h2>
        <p className="lead-20 mt-3">
        Samsung is a well-known and respected brand in the world of electronics, and their air conditioning systems are no exception. Samsung's <Link to="/products/split-system-air-conditioning">split system</Link> air conditioners are known for their high performance and energy efficiency, making them a popular choice for homes and businesses.
        </p>
        </section>

 <section>
       <div  className="text-center bg-dark my-3 text-center rounded" id="samsung">
                <h3
                  className="text-white h5 fw-600 mt-2 px-3"
                  style={{ padding: `1.3rem 0` }}
                >
                  Supplied and Installed Samsung
                  <br />{" "}
                  <span className="lead cam text-white">
                    <small>Air Conditioning Systems</small>
                  </span>
                </h3>
              </div>
        <SamsungProducts />
         <div className='mt-4 d-flex'>
                <p className='p-2 '>
                    Samsung brochure </p>
                  <a href={SamsungPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="pr-2 d-flex border rounded-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
        </div>
        </section>

        <section>
        <p className="lead-20">
        In addition to high energy efficiency, Samsung's split system air conditioners also feature advanced <Link to="/service">air filtration</Link> technology that helps to keep the air inside your home or office clean and fresh. The units use multiple filters, including a high-efficiency particulate air (HEPA) filter, to remove harmful particles such as dust, pollen, and pet dander from the air. This makes them ideal for people with allergies or asthma.
        </p>
        </section>

        <section>
        <div className="row">

        <div className="col-lg">
         <p className="lead-20 ">
        Another standout feature of Samsung’s split system air conditioners is the built-in Wi-Fi, allowing you to control your system anytime, anywhere. Simply use the Samsung SmartThings App to manage your home’s comfort from your phone.
        </p>
        <p className="lead-20 mt-3">
       Samsung’s split system air conditioners are celebrated for their sleek, modern design that blends seamlessly into any home or office décor. Built for durability and everyday use, these units not only look great but are also made to last—backed by warranties ranging from 5 to 10 years for added peace of mind.
        </p>
        </div>


        <div className="col-lg">
        <div className="ducted-air mt-2 p-3">
            <StaticImage filename="samsung-main.jpg" alt="samsung air hero images" />
          </div>
        </div>
        </div>
        </section>

       <section>
        <p className="lead-20 mt-2">
        In conclusion, Samsung's split system air conditioners are an excellent choice for anyone looking for a high-performance, energy-efficient and smart cooling solution. With advanced inverter technology, advanced air filtration, and an array of smart features, Samsung air conditioners are an excellent way to ensure that your home or office is comfortable all year round.
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
            <h5 className="h5 px-20 fw-600">Split System Quote</h5>
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
             <small>At Home Comfort Air, we aim to exceed our customer's expectations by offering the finest air conditioning systems and services. Our dedication to providing top-notch, energy-efficient, and dependable solutions extends to the Gold Coast, Brisbane, Ipswich and Tweed Heads regions. Reach out to us today to schedule an installation or to learn more about our offerings.</small>
          </p>
        </section> 

    </div>
</Layout>

   
    )
  }

     
 export default SamsungSplitSystem
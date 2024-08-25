import React, {Fragment} from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2'
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import MideaProducts from '../../components/Products/MideaSplitsSystems'
import MideaPDF from "../../images/Midea.pdf"

export const Head = () => (

  <Fragment>
       <title>Supplied and Installed Midea Split System Air Conditioners</title>,
       <meta name= "description" content="Discover Midea Xtreme split system air conditioning for your home or space. Supplied & installed from $1199 inc GST" />
       <Seo />
       <Schema />
</Fragment>

)

const MideaProductsPage = () => {
  
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
            <span className='h5 text-white fw-600'>Supplied & Installed</span>
            Midea Split System Air Conditioning
            
          </h1>
          <div className="pb-3">
          <Cta /> 
          </div>
        </div>
        </section>
        

        <section>
        <div className="ducted-systems-avatar-2 ml-4 p-3" style={{textAlign: `center`}}> 
              <StaticImage
                filename="midea_logo-blue.png"
                alt="midea air conditioning logo"
                
              />
        </div>
        <section>
         <p className="lead-20">
        Midea is a global leader in the air conditioning industry, with a reputation for producing some of the most innovative and energy-efficient air conditioners available today. The company, which was founded in 1968 in China, has grown to become one of the world's largest manufacturers of air conditioning units and appliances.
        </p>
        </section>
       
         
        <h2 className="h5 cap fw-600 mt-2">Midea Split System Air Conditioner</h2>


           <section>
       <div className="mt-2">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#7DCDFF` }}
                >
                  <h3
                    className="h5 fw-600 cap mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supplied and Installed Midea
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>

             
             
        
        <MideaProducts />
        <div className='mt-4 d-flex'>
                <p className='p-2 '>
                    Midea brochure{" "} </p>
                  <a href={MideaPDF} target="_blank" rel="noreferrer">
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
        One of the key features that sets Midea air conditioners apart from the competition is their high energy efficiency. Midea <Link to="/split-systems-air-conditioning">air conditioners</Link> are designed with advanced inverter technology, which allows them to conserve energy and reduce running costs. This means that, not only you are enjoying a comfortable environment but also saving on your energy bill.
        </p>
        </section>

        <section>
        <div className="row">
        <div className="col-lg">
        <p className="lead-20 ">
         In addition to energy efficiency, Midea air conditioners are also known for their quiet operation. This makes them the perfect choice for <Link to="/split-systems-air-conditioning">bedrooms</Link>, home offices, and other spaces where you want to create a peaceful environment. They also feature a variety of convenient features, such as remote control, programmable timers, and sleep mode, to make it easy for you to control your indoor climate.
         </p>
          <p className="lead-20 mt-3">
        Finally, Midea air conditioners are built to last, featuring high-quality materials and construction techniques that ensure they can withstand the rigors of regular use. They also come with long-term warranties, so you can purchase with confidence, knowing that your investment is protected.
        </p>
         <p className="lead-20 ">
        In conclusion, Midea air conditioners are an excellent choice for anyone looking for a high-quality and energy-efficient cooling solution. With a wide range of options available and advanced features that make them easy to use and maintain, Midea's air conditioners are an ideal choice for keeping your home or office comfortable all year round.
        </p>
        </div>

        <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="midea-main.jpg" alt="midea split system on lounge wall" />
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
            <h5 className=" px-20 cap fw-600">Split System Quote</h5>
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

     
 export default MideaProductsPage
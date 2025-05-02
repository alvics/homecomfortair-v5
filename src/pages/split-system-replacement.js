import React, {Fragment} from 'react'
import Layout from "../components/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import Cta from "../components/CTA"
import Form from "../components/QuoteForm"
import SamsungProducts from "../components/Products/SamsungSplitSystems"
import { Link } from 'gatsby'
import MitsubishiSplits from "../components/Products/MitsubishiElectricSplits"
import Seo from '../components/SEO-2'
import Schema from '../components/Schema-2'

export const Head = () => (

  <Fragment>
       <title>Split System Replacement | Choose A New Air Conditioner</title>,
       <meta name= "description" content="If you are considering replacing your split system air conditioner, our team at Home Comfort Air can help."/>
       <Seo />
      <Schema />
  </Fragment>

)

export default function SplitSystemReplacement() {
   
  return (
      <Layout>
    <div className="body-wrapper multi-systems pt-3">
     <section>
       <div className="pt-2 multi-systems-avatar heading-box-color rounded">
          <h1 className="h2 text-center text-white fw-600 p-3">
            <span style={{ maxHeight: 305 }}>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            Split System Replacement
          </h1>
           <div> <span className="text-white text-center h3" style={{ fontFamily: `'Caveat', cursive` }}>*Out with the Old, In with the Efficient</span></div>
          <div className="pb-3">
            <Cta />
          </div>
        </div>
     
     </section>

       <div className="row">
       <div className="col-md-9">
       <section>
   
    <div>
    <h2 className='h5 fw-600 px-20 cam mt-5'>How to Replace Your Split System Air Conditioner</h2>
    <p className="lead-20 px-20 lh-base">
      A split system air conditioner can provide comfort and cooling for your home for many years. However, with time and wear, it may need to be replaced. If you are considering replacing your split system air conditioner, our team at Home Comfort Air can help. We install all major brands including <Link to="/products/#daikin">Daikin</Link>, <Link to="/products/#mitsubishi">Mitsubishi</Link>, <Link to="/products/#samsung">Samsung</Link>, <Link to="/products/#haier">Haier</Link>, <Link to="/products/#toshiba">Toshiba</Link>, <Link to="/products/#carrier">Carrier</Link>, <Link to="/products/#midea">Midea</Link> and can guide you through the process from start to finish.
    </p>
    </div>
    </section>
    <section>
    <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 1: Choose a New Air Conditioner</h3>
    <p className="lead-20 px-20 lh-base">
    The first step in replacing your split system air conditioner is to choose a new one. Our team can help you select the right air conditioner for your needs, taking into account the size of your room and your budget. We offer a wide range of air conditioners from all major brands, so you can find the one that best fits your requirements.
    </p>
    </div>
    <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 2: Turn Off the Power</h3>
    <p className="lead-20 px-20 lh-base">
     Before we begin the installation process, it is important to turn off the power to your existing air conditioner. This can be done by switching off the circuit breaker or unplugging it.
    </p>
    </div>

    <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 3: Remove the Old Unit</h3>
    <p className="lead-20 px-20 lh-base">
     Our team will then remove the old unit, disconnecting the refrigerant lines and removing the mounting bracket. We will carefully remove the old air conditioner from the wall, ensuring that it is disposed of properly.
    </p>
    </div>

    <div>
     <h3 className='h5 fw-600 px-20 cam mt-3'>Step 4: Install the New Indoor Unit</h3>
     <p className="lead-20 px-20 lh-base">
      We will attach the new indoor unit to the wall bracket, securing it in place with screws. Our team will then connect the refrigerant lines to the new unit, ensuring a tight and secure connection.
     </p>
    </div>

    <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 5: Install the New Outdoor Unit</h3>
     <p className="lead-20 px-20 lh-base">
      We will mount the new outdoor unit on a level surface and secure it in place. Our team will then connect the refrigerant lines between the indoor and outdoor units, ensuring that they are properly sealed.
     </p>
    </div>

     <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 6: Install the Electrical Wiring</h3>
     <p className="lead-20 px-20 lh-base">
      Our team will connect the electrical wiring between the indoor and outdoor units, following the manufacturer’s instructions to ensure a safe and effective installation.
     </p>
    </div>

     <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 7: Vacuum Down and Charge Refrigerant</h3>
     <p className="lead-20 px-20 lh-base">
      We will vacuum down the system to remove any contaminants and then open the refrigerant lines to charge the system with the correct amount of refrigerant, as specified by the manufacturer.
     </p>
    </div>

     <div>
    <h3 className='h5 fw-600 px-20 cam mt-3'>Step 8: Test the New System</h3>
     <p className="lead-20 px-20 lh-base">
      Finally, we will turn on the power to the new air conditioner and test it to make sure it is working properly. If everything is working as it should, you can enjoy your newly installed air conditioner!
     </p>
    </div>
    
    </section>
    <section>
    <div>
     <p className="lead-20 px-20 lh-base">
      In conclusion, replacing your split system air conditioner can be a hassle-free process with the help of our team at Home Comfort Air. We install all major brands and can guide you through the process from start to finish, ensuring that your new air conditioner is properly installed and working effectively. Contact us today to schedule a consultation.
     </p>
<div className="row">
     <div className="col-6">
     <span className='rounded mb-2'>  <StaticImage
              filename="currumbin.JPG"
              alt="mitsubishi split-replacement"
            /></span>
   

            <span className='mb-4 rounded' style={{ maxHeight: 395 }}>
            <StaticImage
              filename="carrara2.jpg"
              alt="mitsubishi split-replacement"
              
            />

            </span>
     </div>

   <div className="col-6">
     <StaticImage
              filename="advancetown.JPG"
              alt="mitsubishi split-replacement"
            />
            <StaticImage
              filename="ahmore.JPG"
              alt="mitsubishi split-replacement"
            />
     </div>
   <div className=''>
   <h5 className='h6 fw-600 px-20  mt-3'>Our Mitsubishi Electric MSZ-AP Split System Range</h5>
   <div>
   <MitsubishiSplits />
   </div>
   </div>
</div>  

    </div>
    </section>
     </div>
     <div className="col" style={{padding:55}}>
     <h5 className='h6 fw-600 px-20  mt-3'>Samsung Bedarra</h5>
     <SamsungProducts />
     
     </div>
     
     </div>


  <section>
        <div className="heading-box-color grid-col-2 heading-avatar rounded py-2 my-3 mx-0">
          <div className="">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>

          <div className="text-center">
            <h3 className="h5 fw-600 mt-2 text-white">Receive A free Quote</h3>
          </div>
        </div>
        <div className="grid-col-2">
          <div className="multi-head-quotes-text">
            <h4 className="h5 px-20 cam fw-600 mb-3">
              Air Conditioning Replacement Quotes
            </h4>
            <p className="px-20 lead-400">
              Need a replacement unit or a new installation? Submit your details, and we'll contact you
              back shortly.
            </p>
            <p className="font-italic px-20">
              <small>"You could also leave the best suited time to call you back".</small>
            </p>
          </div>
          <Form />
        </div>
      </section>
   
    
    </div>
    </Layout>
  )
}
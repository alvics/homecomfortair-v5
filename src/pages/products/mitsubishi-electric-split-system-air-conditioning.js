import React, {Fragment} from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2'
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import MitsubishiProducts from '../../components/Products/MitsubishiElectricSplits'
import MitsubishiPDF from "../../images/mitsubishi.pdf"

export const Head = () => (

  <Fragment>
       <title>Supplied and Installed Mitsubishi Electric Split System Air Conditioner </title>,
       <meta name= "description" content="Discover Mitsubishi Electric MSZ-AP series split system air conditioning for your home or space. Supplied & installed from $1599 inc GST" />
       <Seo />
       <Schema />
</Fragment>

)

const MitsubishiProductsPage = () => {
  
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
            Mitsubishi Electric Split System Air Conditioner 
            
          </h1>
          <div className="pb-3">
           <Cta /> 
          </div>
          <div> <span className="text-white text-center h3 pb-3" style={{ fontFamily: `'Caveat', cursive` }}>*The Ultimate Solution to Stay Cool</span></div>
        </div>
        </section>

        <section>
         <div className="ducted-systems-avatar-2 ml-4" style={{textAlign: `center`}}> 
              <StaticImage
                filename="mitsubishi-electric.jpg"
                alt="mitsubishi-electric air conditioning logo"
                
              />
        </div>
        <div className='pt-1' style={{marginTop:`-30px`}}> <h2 className="h5  fw-600 mt-4">Mitsubishi MSZ-AP Series Air Conditioner</h2></div>
       
        <p className="lead-20 mt-3">
        <Link to="/products/#mitsubishi">Mitsubishi</Link> Electric is a well-known and reputable brand in the air conditioning industry, offering a wide range of high-quality split system air conditioners for both residential and commercial use. These systems are designed to provide optimal comfort and energy efficiency, making them a great choice for any home or office.
        </p>
 <section>
         <div className="mb-2" id="mitsubishi">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#ff0000` }}
                >
                  <h3
                    className="h5 fw-600  mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supplied and Installed Mitsubishi Electric
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>
        <div>
        
        <MitsubishiProducts />
        </div>
        
            <div className='mt-4 d-flex'>
                <p className='p-2 '>
                    Mitsubishi Electric brochure{" "} </p>
                  <a href={MitsubishiPDF} target="_blank" rel="noreferrer">
                    {" "}
                    <span class="pr-2 d-flex border rounded-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
        </div>
        </section>

        <p className="lead-20">
        One of the key features of Mitsubishi Electric air conditioning <Link to="/products/split-system-air-conditioning/">split systems</Link> is their advanced technology and advanced features. The air conditioners are equipped with the latest energy-saving technology which helps to reduce energy consumption, and the units are also equipped with advanced features like energy-saving modes, and sleep modes which help to improve comfort and efficiency. Additionally, the systems are known for their quiet operation, making them ideal for use in bedrooms and other quiet spaces.
        </p>

        <p className="lead-20">
         Another great aspect of Mitsubishi Electric air conditioning split systems is their durability and longevity. The systems are built with high-quality materials and are designed to withstand the test of time, ensuring that they will provide reliable performance for years to come. Furthermore, the systems are designed to be easy to maintain, with <Link to="/service">easy-to-clean</Link> filters and other features that make it easy to keep the units running at their best.
        </p>
        <p className="lead-20">
        In addition, Mitsubishi Electric air conditioning split systems are also known for their smart features and connectivity options. With a optional Wi-Fi adapter, you can connect your air conditioning system to your smartphone, tablet or online account, giving you the freedom to fully control each unit on-the-go via an internet connection from anywhere in the world. This innovative technology allows you to adjust temperature settings, change modes, and more with just a few taps.
        </p>
        </section>

        <section>
        <h3 className="h5 fw-600 mt-5">Why Mitsubishi Split System Air Conditioners are the Best Choice:</h3>
        <ol className="list-group list-group-numbered mt-3">
        <li className='list-group-item'><strong>Leading Brand:</strong> Mitsubishi is a well-known and respected brand in the air conditioning industry. Known for its quality, efficiency, and durability, you can trust Mitsubishi to provide you with a top-performing air conditioner</li>
        <li className='list-group-item'><strong>Energy Efficiency:</strong> Mitsubishi split system air conditioners are designed to be energy-efficient, helping you save money on your electricity bill. The latest models come with inverter technology and eco-friendly refrigerant, making them even more efficient.</li>
        <li className='list-group-item'><strong>Easy Installation:</strong> Split system air conditioners are relatively easy to install, and can be set up without any major renovations or changes to your home or office. You can have a professional install the unit, or do it yourself if you have the skills.</li>
        <li className='list-group-item'><strong>Excellent Temperature Control:</strong> With features such as programmable timers and remote controls, you can easily regulate the temperature in your room. The units also come with multiple fan speeds, allowing you to adjust the airflow according to your needs.</li>
        <li className='list-group-item'><strong>Easy Maintenance:</strong> Cleaning and maintaining Mitsubishi split system air conditioners is easy. The units come with a built-in air filter that can be easily replaced, and the exterior can be wiped down with a damp cloth to keep it looking like new. Regular maintenance will ensure that your unit continues to operate smoothly for years to come.</li>
        </ol>
        
        </section>


        <section>
        <div className="row">
        <div className="col-lg mt-3">
       <h3 className="h5 fw-600 mt-3">Is Mitsubishi a good split system?</h3>
        <p className="lead-20 mt-3">
        Yes, Mitsubishi is a good split system brand. Known for its quality, efficiency, and durability, you can trust Mitsubishi to provide you with a top-performing air conditioner that will last for years to come.
        </p>

        <h3 className="h5 fw-600 mt-3">Is Mitsubishi AC better than Daikin?</h3>
        <p className="lead-20 mt-3">Both Mitsubishi and <Link to="/products/daikin-split-system-air-conditioning/">Daikin</Link> are well-respected brands in the air conditioning industry, and both offer high-quality, efficient, and durable air conditioners. It's a matter of personal preference as to which brand is better, and it ultimately depends on your specific needs and budget.</p>
        </div>

        <div className="col-lg mt-3">
         <div className="ducted-air mt-2">
            <StaticImage filename="mitsubishi-energy-save-47" alt="mitsubishi air conditioning energy saving split system hero image" />
          </div>
        </div>
        </div>
        </section>

       

        <section>
        <h3 className="h5  fw-600 mt-3">How long do Mitsubishi splits last? </h3>
        <p className="lead-20">
        With proper maintenance and regular servicing, a Mitsubishi split system air conditioner can last for 10-15 years.
        </p>
        <h3 className="h5  fw-600 mt-3">What are the best split system to buy in Australia?</h3>
        <p className="lead-20">The best split system to buy in Australia ultimately depends on your specific needs and budget. Some of the top brands in Australia include Mitsubishi, Daikin, Fujitsu, and <Link to="/products/toshiba-split-system-air-conditioning/">Toshiba</Link>.
        </p>

        <h3 className="h5 fw-600 mt-3">How much does it cost to install a split unit?</h3>
        <p className="lead-20">The cost of installing a split unit can vary depending on the type of unit you choose, the complexity of the installation, and the location of the unit. On average, the cost can range from $650 to $3000.</p>
        </section>

        <section>
        <p className="lead-20">
        Lastly, Mitsubishi Electric air conditioning split systems also come with a 5 year warranty manufacturer warranty and with our <Link to="/installation-warranty">5 year workmanship warranty</Link> of new installation. This provides customers with peace of mind and reassurance that their investment is protected.
        </p>
        </section>

            <section>
        <p className="lead-20 ">
       In conclusion, if you're looking for a cost-effective, convenient, and efficient solution to stay cool this summer, a Mitsubishi split system air conditioner is the perfect choice. With a range of models and features available, you can find the perfect unit to meet your needs. So, invest in a Mitsubishi split system air conditioner today and enjoy a comfortable and cool summer season!
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
            <h5 className="h5 px-20 fw-600">Mitsubishi Split System Quote</h5>
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
             <small>At Home Comfort Air, we are experts in the field of installing Mitsubishi air conditioning systems across the Gold Coast, Brisbane, Ipswich, and Tweed Heads regions. Our commitment to our customers is to deliver only the best in air conditioning systems, ones that are both energy-efficient and dependable.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default MitsubishiProductsPage
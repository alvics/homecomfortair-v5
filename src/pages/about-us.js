// Display the list of products
import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import StaticImage from "../components/StaticQueryImages"
import MideaSplitSystems from "../components/Products/MideaSplitsSystems"
import BrandsImages from "../components/BrandsBtn"
 import Cta from "../components/CTA"
// import BrandBtn from "../components/BrandBtn"

export const Head = () => (
  <Fragment>
       <title>About Home Comfort Air | Gold Coast Split System Air Conditioning</title>,
       <meta name= "description" content="Find out how Home Comfort Air has been installing new residential split system air conditioners throughout Ipswich, Brisbane and the Gold Coast area's."/>
       <Seo />
       <Schema />
  </Fragment>
)

const ProductsPage = () => {
  return (
    <Layout>

      <div className="body-wrapper px-lg-5 px-md-1 pt-3">
          <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h2 text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            <span className='h5 text-white fw-600 cap'>Home Comfort Air</span>
            About Us
            
          </h1>
          <div className="pb-3">
           <Cta /> 
          </div>
          <div> <span className="text-white text-center h3 pb-3" style={{ fontFamily: `'Caveat', cursive` }}>*Your Comfort, Our Expertise</span></div>
        </div>
        <div className="row about-us px-3">
          <div className="col-lg-8 pt-3">
            <div className="wrapper-about-img p-1">
              <StaticImage
                filename="splits-add-11-pow.png"
                alt="home comfort air image"
              />
            </div>
            <div className="px-3">
            <div className="mt-3">
              <h2 className="h5 fw-600">Our Service</h2>
            </div>

            <p className="lead-20 lead-mobile">
              We've been installing domestic air conditioners for family's and
              major builders around <Link to="/brisbane-air-conditioning/">Brisbane</Link>, <Link to="/gold-coast-air-conditioning/">Gold Coast</Link>, <Link to="/ipswich-air-conditioning/">Ipswich</Link> and <Link to="/tweed-heads-air-conditioning/">Tweed Heads</Link> area's
              for over a decade. Everything from{" "}
              <Link to="products/split-system-air-conditioning">high wall split</Link> and{" "}
              <Link to="/multi-head-systems">multi head systems</Link> with
              major brands, <Link to='/products/daikin-split-system-air-conditioning/'> Daikin</Link>, <Link to='/products/haier-split-system-air-conditioning/'>Haier</Link>, Kelvinator, <Link to='/products/toshiba-split-system-air-conditioning/'>Toshiba</Link>, Acrton, Braemar,
              <Link to='/products/carrier-split-system-air-conditioning/'> Carrier</Link>, <Link to='/products/midea-split-system-air-conditioning/'>Midea</Link>, LG, <Link to='/products/mitsubishi-split-system-air-conditioning/'> Mitsubishi</Link> and <Link to='/products/samsung-split-system-air-conditioning/'>Samsung</Link> as well as{" "}
              <Link to="/ducted-systems">ducted residential</Link> and
              commercial systems with Daikin and Actron air conditioners.
              Furthermore, experienced working in Queensland schools installing
              air conditioning systems.{" "}
            </p>

            <p className="lead-20 lead-mobile mt-3">
              HOME COMFORT AIR services South East Queensland installing all
              major brand air conditioners, if you can see your location on the
              maps in our service area, we'll come to you. Our staff are
              licensed experts when it comes to installations or repairs, and we
              offer a <Link to="/installation-warranty">5-year warranty</Link> on all new installations of split systems.
              Furthermore, we pride ourselves on 100% customer satisfaction and
              quality workmanship. HOME COMFORT AIR operates 6 days a week and
              can be contacted between the hours of 8am and 5pm.{" "}
            </p>

            <p className="lead-20 lead-mobile mt-3">
            We stand behind our work and our commitment to providing the best service possible. Our team of highly trained and experienced technicians are dedicated to ensuring that every installation is completed correctly and to the highest standards. And with our <Link to="/installation-warranty">5-year warranty</Link>, customers can rest assured that they are protected in the event of any issues.
            </p>
            <p className="lead-20 lead-mobile">
              If your looking for air conditioning with professional and quality
              workmanship, give HOME COMFORT AIR a call on{" "}
              <a href="tel:0404602657">0404 602 657</a> for residential air
              conditioning solutions. Your satisfaction, is our guarantee!{" "}
            </p>

            </div>
           
          </div>
          <div className="col-lg-4 pt-3 pl-4">
            <div className="mb-2">
              <div>
                <h3 className="h5 cap fw-600">Servicing Area's</h3>
              </div>
              <div>Gold Coast and surrounding area's</div>
              <div className="mb-1 w-50">
                <StaticImage
                  filename="map-gold-coast.png"
                  alt="map-gold-coast"
                  className="img-fluid"
                />
              </div>
              <div>Brisbane and surrounding area's</div>
              <div className="w-50">  <StaticImage
                filename="map-brisbane-distances-3.png"
                alt="map-brisbane-distances"
              /></div>
            
            </div>
            
          </div>
        </div>
<div className="pl-2 pt-3"><h4>Here's a look at some of our work.</h4></div>
        <div className="grid-200">
        <div className=""><StaticImage
                filename="serviceArea/heritage-park.jpeg"
                alt="heritage-park-air conditioning"
              /></div>
        <div className=" ">
        <StaticImage
                filename="serviceArea/coombabah.jpeg"
                alt="map-brisbane-distances"
              />
        </div>
        <div className="">
        <StaticImage
                filename="serviceArea/nerang.jpeg"
                alt="map-brisbane-distances"
              /></div>
               <div className=""><StaticImage
                filename="serviceArea/hope-island.jpeg"
                alt="map-brisbane-distances"
              /></div>
        </div>

           <div className="grid-200">
            <div className=""><StaticImage
                filename="serviceArea/newport.jpeg"
                alt="map-brisbane-distances"
              /></div>
        <div className=""><StaticImage
                filename="serviceArea/redbank-plains.jpeg"
                alt="map-brisbane-distances"
              /></div>
        <div className=" ">
        <StaticImage
                filename="underwood.jpeg"
                alt="map-brisbane-distances"
              />
        </div>
        <div className="">
        <StaticImage
                filename="serviceArea/ashmore.jpeg"
                alt="map-brisbane-distances"
              /></div>
        </div>






         <div className="grid-200">
            <div className=""><StaticImage
                filename="serviceArea/upper-coomera.jpeg"
                alt="map-brisbane-distances"
              /></div>
        <div className=""><StaticImage
                filename="serviceArea/upper-coomera-midea.jpeg"
                alt="map-brisbane-distances"
              /></div>
        <div className=" ">
        <StaticImage
                filename="mermaid-waters.jpeg"
                alt="map-brisbane-distances"
              />
        </div>
        <div className="">
        <StaticImage
                filename="serviceArea/runawaybay.jpeg"
                alt="map-brisbane-distances"
              /></div>
        </div>




         <div className="grid-200">
            <div className=""><StaticImage
                filename="serviceArea/coombabah-daikin.jpeg"
                alt="map-brisbane-distances"
              /></div>
        <div className=""><StaticImage
                filename="serviceArea/elenora.jpeg"
                alt="map-brisbane-distances"
              /></div>
        <div className=" ">
        <StaticImage
                filename="robina.jpeg"
                alt="map-brisbane-distances"
              />
        </div>
        <div className="">
        <StaticImage
                filename="serviceArea/oxenford.jpeg"
                alt="map-brisbane-distances"
              /></div>
        </div>

<div className="mt-3">
         <div className="img-wrapper-e p-1 w-75">
              <StaticImage
                filename="midea-xtreme.png"
                alt="home comfort air image"
              />
            </div>

            <div className="mt-2 mb-3 about-us-daikin-products">
             <MideaSplitSystems />
            </div>
        <section>
      <div className="lg mb-5">
      
      <Link className="btn-- btn-primary--" to="/products" >SHOP</Link>
      </div>
      </section>
     <div>
     <h5 className="p-2">View by brands</h5>
     <BrandsImages />
     </div>
</div>
      </div>
    </Layout>
  )
}

export default ProductsPage

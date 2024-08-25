import React from "react";
import { Link } from "gatsby"
//import { graphql, useStaticQuery } from "gatsby"
// import Image from "gatsby-image"
import MyForm from "../../components/QuoteForm"
import StaticImage from "../../components/StaticQueryImages"
import BrandsBtn from "../../components/BrandsBtn"
// import CardHome from "../Sections/CardHome";
import GoogleReviewsCarousel from "../Sections/GoogleReviewsCarousel"
import MideaSplitSystems from "../Products/MideaSplitsSystems"
import MitsubishiSplitSystems from "../Products/MitsubishiElectricSplits"
import DaikinSplitSystems from "../Products/DaikinSplitSytems"

const Home = () => {

 return (
   <div id="section-ac-solutions" className="">
     <div className="body-wrapper pt-1">
       
          <section className="section-1">
            <div className="heading-box-color heading-avatar heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4 m-auto">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 cap">
                  Air Conditioning Solutions 
                </h3>
              </div>
            </div>
            <div className="grid-300 mb-2 p-2">
              <div className="card">
                <Link to="/products/split-system-air-conditioning">
                  <div className="card-top">
                    <StaticImage
                      filename="ac-hero-1.jpg"
                      alt="ducted air image"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">Split Systems A/C</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Cool or heat a single room or space, with split systems
                      air conditioning...
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>

              <div className="card">
                <Link to="/ducted-systems">
                  <div className="card-top">
                    <StaticImage
                      filename="cas.jpg"
                      alt="ducted air image"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">Ducted Systems A/C</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Cool or heat your entire home, with ducted air
                      conditioning...
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>

              <div className="card">
                <Link to="/multi-head-systems">
                  <div className="card-top">
                    <StaticImage
                      filename="ac-2.jpg"
                      alt="multi head air con systems"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">Multi Systems A/C</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Cool or heat multiple rooms with a single outdoor unit...
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>

              <div className="card">
                <Link to="/service">
                  <div className="card-top">
                    <StaticImage
                      filename="ducted-2.jpg"
                      alt="ducted air image"
                    />
                  </div>
                  <div className="card-heading">
                    <h3 className="fw-600 text-dark">A/C Service</h3>
                  </div>
                  <div className="card-body--">
                    <p className="card-text lead">
                      Fast professional service and maintenance for split
                      systems air...
                    </p>
                  </div>
                  <div className="text-blue text-shadow-2 mt-2">
                    Learn more >>
                  </div>
                </Link>
              </div>
            </div>

            <div className="mt-5 mb-3">
            <div className="px-2"><h3 className="h6 cam my-3 fw-600">Recommended leading brands</h3></div>
            
             <BrandsBtn />
            </div>
            
          </section>

          <section className="section-2 split-system-cta">
            <div className="heading-box-color heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 cap">
                  Split System Air Conditioning
                </h3>
              </div>
          </div>

             <MideaSplitSystems />
             <div className="px-2">
            <p>*Prices inc GST</p>
            <div>
            <Link to="/products" className="btn-- btn-primary-- text-white">
            View Deals
          </Link>
          </div>
            </div>

           
             
            
            <div className="grid-2">
              <div className="span-col-3">
                <h4 className="text-dark fw-400">
                  Home Comfort Air <br /><small>Air Conditioning Solutions</small>
                </h4>
                <div className="img-fluid rounded-2">
                  <StaticImage
                      filename="ac-hero-1.jpg"
                      alt="ducted air image"
                      data-pin-nopin="true"
                    />
                </div>
               
               
                <p className="cap text-dark">Beat the heat</p>


                <p className="mt-20 lead">
                  <Link to="/split-systems-air-conditioning">Split system</Link> air conditioners  have come a long way in terms of technology and design, making them the most popular choice for homeowners and businesses looking for a cost-effective cooling and heating solution. With their sleek look and user-friendly features, they are perfect for single rooms or spaces, and are ideal for keeping you cool in the summer and warm in the winter.
                </p>
                <p className="mt-20 lead">
                  At Home Comfort Air, we understand that choosing the right air conditioning system can be overwhelming. That's why we're here to help. With our expertise and experience, we can guide you through the process and help you find the perfect unit for your home or office space. Whether you're looking for a single room solution or a system for your entire home, we've got you covered.
                </p>
                
                 <p className="mt-20 lead">
                  We offer a range of services to help you make an informed decision. We are happy to assist you over the phone, by <a href="mailto:homecomfortair.gc@gmail.com"> email</a>, and even with a free in-home consultation. Our team of experts has over 10 years of experience, and we can provide cost comparisons to help you determine the best option for your needs and budget
                </p>

                 <p className="mt-20 lead">
                  Don't hesitate to reach out to us at Home Comfort Air or call us at <a href="tel:0404602657">0404 602 657</a> to learn more about all the options available to you and to schedule your consultation today.
                </p>
                <h4 className="mt-3">Mitsubishi Electric MSZ-AP-Series Split System Air Conditioning</h4>
                <MitsubishiSplitSystems />

    <div className="px-2">
            <p>*Prices include GST</p>
            <div>
            <Link to="/products" className="btn-- btn-primary-- text-white">
            More Deals
          </Link>
          </div>
            </div>
              </div>
              <div className="form-quote home-page mt-5">
                <h5 className="h6 text-center text-white fw-600 heading-box-color p-20 rounded cap">
                  Free in home appraisal
                </h5>
                <i></i>

                <MyForm />
              </div>
            </div>
          </section>

         <section>
          <div className="heading-box-color heading-avatar rounded row d-flex align-items-center my-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                   Brisbane, Ipswich, Gold Coast Air Conditioning
                </h3>
              </div>
            </div>
            <div className="row px-3">
<div className="col-md-4">
<h3 className="h5 pl-3 mt-3">Ipswich Air Conditioning</h3>
<p className="lead mt-3 px-3">Are you looking for a reliable and experienced air conditioning service in the Ipswich, Queensland area? Look no further! Our team at Home Comfort Air is here to help with all of your air conditioning needs, including split system installations with top brands like Daikin, Haier, Hisense, and Midea. Read more about our air conditioning service in Ipswich <a href="/ipswich-air-conditioning">here...</a></p></div>

<div className="col-md-4">
<h3 className="h5 pl-3 mt-3">Brisbane Air Conditioning</h3>
<p className="lead mt-3 px-3">Are you in search of a reputable air conditioning service in the Brisbane, Queensland area? Look no further than Home Comfort Air! Our team of skilled technicians is here to assist with all of your air conditioning needs, including the installation of split system units from top brands like Daikin, Haier, Hisense, and Midea. Read more about our air conditioning service in Brisbane <a href="/brisbane-air-conditioning">here...</a></p></div>

<div className="col-md-4">
<h3 className="h5 pl-3 mt-3">Gold Coast Air Conditioning</h3>
<p className="lead mt-3 px-3">Are you looking for a new split system air conditioner to be installed in your home or space? Do you have an old worn out system that needs replacing? Here at Home Comfort Air we install wall hung and ducted split system air conditioning for Gold Coast homes here in sunny Queensland Australia. You can all benefit on our split system installations monthly specials. Read more about our air conditioning service in Gold Coast <a href="/gold-coast-air-conditioning">here...</a></p></div>
</div>
         </section>

           <section>
           
           
          <GoogleReviewsCarousel />

           </section>

          <section className="section-3">
            <div className="heading-box-color  heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2 ">
                    Personalised comfort solutions, from trusted professionals.
                </h3>
              </div>
            </div>

           

            <div className="row">
              <div className="col-lg-7">
                <div className="mt-2 px-3">
                  <h4 className="h5 text-dark fw-400">
                    Local Air Conditioning Experts
                  </h4>
                </div>
                <div>

                   <p className="lead mt-3 px-3">
                   At HOME COMFORT AIR, we have been providing high-quality air conditioning installation services to families and major builders in the Brisbane, Ipswich, <Link to="/gold-coast-air-conditioning">Gold Coast</Link>, and <Link to="tweed-heads-air-conditioning">Tweed Heads</Link> regions for over a decade. We offer a wide range of options for high wall and <Link to="/multi-head-systems">multi head </Link> <Link to="/split-systems-air-conditioning">split systems</Link>, including popular brands such as Kelvinator, Acrton, <Link to="/products/daikin-air-conditioning"> Daikin</Link>, Braemar, LG, Haier, Mitsubishi, and <Link to="/products/samsung-air-conditioning">Samsung</Link>, as well as ducted residential and commercial systems with Daikin and Actron air conditioners. Additionally, our team is experienced in installing cassette units and wall-mounted split systems in Queensland schools.
                   </p>


                   <p className="lead mt-3 px-3">
                   We are proud to service the Gold Coast, <Link to="/ipswich-air-conditioning"> Ipswich</Link>, and <Link to="/brisbane-conditioning">Brisbane</Link> areas and our staff are licensed experts in air conditioning. We stand behind our work and offer a <Link to="/installation-warranty">5-year warranty</Link> on all new installations. Customer satisfaction is our top priority, so you can trust that you are in good hands when choosing air conditioning for your home. We are available 6 days a week and can be reached between the hours of 8am and 5pm. Contact us today to schedule an installation or for more information.
                   </p>






                 {/* <p className="lead mt-3 px-3">
                    We've been installing domestic air conditioners for family's
                    and major builders around Brisbane, Ipswich, <Link to="/gold-coast-air-conditioning">Gold Coast</Link> and
                    Tweed Heads area's for over a decade. Everything from high
                    wall and <Link to="/multi-head-systems">multi head </Link>
                    split systems including major brands, Kelvinator, Acrton,
                    <Link to="/products/daikin-air-conditioning"> Daikin</Link>, Braemar, LG, <Link to="/products/haier-air-conditioning">Haier</Link>, Mitsubishi and <Link to="/products/samsung-air-conditioning">Samsung</Link> as well
                    as <Link to="/ducted-systems">ducted</Link> residential and
                    commercial systems with Daikin and Actron air conditioners.
                    Furthermore, we're experienced working in Queensland schools
                    installing cassette units and wall mounted{" "}
                    <Link to="/split-systems">split systems</Link> air
                    conditioners.
                  </p>
                  <p className="mt-20 lead px-3">
                    We <Link to="/service">service</Link> the Gold Coast,
                    <Link to="/ipswich-air-conditioning"> Ipswich</Link> and <Link to="/brisbane-conditioning">Brisbane</Link> areas. Our staff are licensed experts in air conditioning, and we offer a 5 year warranty on the
                    workmanship of new installation. HOME COMFORT AIR prides
                    itself on 100% customer satisfaction, so you know you're in
                    the right hands when choosing air conditioning for your
                    home. Furthermore, we operate 6 days a week and can be
                    contacted between the hours of 8am and 5pm.
                  </p>
                  */} 
                </div>
              </div>
              <div className="col-lg-5 p-2">
                <div className="home-comfort-air-img mt-3">
                  {" "}
                  <StaticImage
                    filename="homecomfort.jpg"
                    alt="home comfort air image"
                  />
                </div>
                HOME COMFORT AIR
                <span
                  style={{ fontFamily: `'Caveat', cursive`, marginLeft: `6px` }}
                >
                  The smart choice in air conditioning
                </span>
              </div>
            </div>
            <div className="my-4">
              {" "}
              <div className="mt-20 h5 text-center px-3">
                <span>Need air conditioning done right?</span>{" "}
                <div className="my-2">
                  <a className="btn btn-green--" href="tel:0404602657">
                    Call 0404 602 657
                  </a>{" "}
                </div>
                <span>your satisfaction, is our guarantee!</span>
              </div>
            </div>

            <section>
            <p className="px-20 mt-4">
             <small>At Home Comfort Air, we aim to exceed our customer's expectations by offering the finest air conditioning systems and services. Our dedication to providing top-notch, energy-efficient, and dependable solutions extends to the Gold Coast, Brisbane, Ipswich and <Link to="tweed-heads-air-conditioning">Tweed Heads</Link> regions. Reach out to us today to schedule an installation or to learn more about our offerings.</small>
          </p>
        </section> 

            <div className="why-us">
              <ul className="bg-light p-20 mr-4 mb-3">
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Experienced in Commercial &
                  Residential Installations{" "}
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Quality workmanship
                  guaranteed
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Experts and licensed to
                  Install Air Conditioners
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> Professional fast and
                  efficient service
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> 5 to 7 Year Manufacturer
                  Warranty
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> 5 Year Installation Warranty
                </li>
                <li className="text-blue fw-600 text-shadow-2">
                  <span className="green">✓</span> We'll beat any written quote!
                </li>
              </ul>

                
            </div>

   <div className="heading-box-color heading-avatar rounded row d-flex align-items-center my-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col container-fluid">
                <h3 className="h5 fw-600 mt-2 cam text-white">
                  Quality workmanship backed by our 5 Year Installation Warranty*
                </h3>
              </div>
          </div>

<div className="p-2">
 <h4 className="mt-3">Daikin Cora Split System Air Conditioning</h4>
            <DaikinSplitSystems />
            <p>*Prices include GST</p>
</div>
           
          </section>
          <div
            style={{
              maxWidth: `640px`,
              marginBottom: `1.45rem`,
              border: `none`,
              overflow: `hidden`,
            }}
          >
            {" "}
            <StaticImage
              filename="split-systems-add.png"
              alt="home comfort air image"
            />
          </div>

          <Link to="/products" className="btn-- btn-primary-- text-white">
            View All Our Deals
          </Link>
          <br />

 <script async src="https://www.googletagmanager.com/gtag/js?id=G-XF1GKXN75R"></script> 

      <script> {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XF1GKXN75R');`} </script>
        </div>

     
   </div>
      

  
  );
};

export default Home;

import React, {Fragment} from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import { Tabs, Tab, Panel } from "@bumaga/tabs"
import Form from "../components/QuoteForm"
// import SEO from "../components/seo"


// import SamsungProducts from "../components/Products/SamsungProducts"
import DaikinProducts from "../components/Products/DaikinSplitSytems"
import MideaProducts from "../components/Products/MideaSplitsSystems"
import ToshibaProducts from "../components/Products/ToshibaSplitSystems"
import HaierProducts from "../components/Products/HaierSplitSystems"
import MideaPDF from "../images/Midea.pdf"
import ToshibaPDF from "../images/Toshiba.pdf"
import DaikinPDF from "../images/daikin.pdf"
import HaierPDF from "../images/haier-tempo.pdf"
import Cta from "../components/CTA"
// import GoogleReviews from "../components/GoogleReviews"
import BrandsBtn from "../components/BrandsBtn"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"

export const Head = () => (
  <Fragment>
       <title>Split System Air Conditioning</title>,
       <meta name= "description" content="Find out how flexible and reliable split system air conditioning is for a single room solution."/>
      <Seo />
      <Schema />
</Fragment>
)

const SplitPage = ({ data: { allStrapiProduct: title } }) => (
  <Layout>

    <div className="body-wrapper px-lg-5 px-md-2 pt-4">
      <section >
        <div className="pt-2 split-systems-avatar heading-box-color rounded ">
          <h1 className="h2 cap text-center text-white fw-600 p-3">
            <span>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </span>
            Split systems air conditioning
          </h1>
          <div className="pb-3">
            <Cta />
          </div>
        </div>

        <div className="grid-col-2 split-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-3">Single Room Solutions</h3>
            <p className="lead-20 px-20">
              The split system air conditioner is a reliable and flexible
              comfort solution ideal for living areas, apartments and single
              rooms. Keeping you warm and cosy in winter and cool and fresh in
              summer. It also gives your room a stylish, sleek and sophisticated
              look, with advanced performance and technology its the perfect
              solution to take comfort all year round.
            </p>
            <p className="lead-20 px-20">
              We supply and install split systems from 2.5kW for small bedrooms,
              7kW units for your average lounge room, to the big 10kW units that
              cool larger open style living, lounge and dinning rooms. Most
              split systems are reverse cycle, meaning that you can switch
              between heating and cooling modes for setting your desired
              temperature.
            </p>
          </div>
          <div className="px-3 mt-4 img-fluid">
            <StaticImage
              filename="hero-3.jpg"
              alt="split system air image"
              
            />
          </div>
        </div>
      </section>

      <section className="px-3">
        <div className="heading-box-color  heading-avatar rounded row d-flex align-items-center my-2 mx-0 py-2">
          <div className="col-sm-3 col-lg-2 mt-1 px-2-lg">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>
          <div className="col">
            <h2 className="h2 fw-600 mt-2 ">Brands We Recommend</h2>
          </div>
        </div>
        
        

        <Tabs>
          <div className="grid-300">

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="samsung-main.jpg"
                    alt="ducted air image"
                  />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 card-text-dark">Daikin Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Daikin delivers industry leading energy efficiency and superior 
                    ...
                  </p>
                </div>

                <div className="card-text-dark text-shadow-2 text-left p-0 mt-3">
                  Learn more >
                </div>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="Toshiba-main.jpg"
                    alt="ducted air image"
                  />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Toshiba Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Toshiba prides themselves as being the first company to
                    release ...
                  </p>
                </div>

                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >
                </div>
              </div>
            </Tab>

            

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="ac-2.jpg"
                    alt="multi head air con systems"
                  />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Haier Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Whether it’s consistent heating and cooling for the home ...
                  </p>
                </div>
                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >
                </div>
              </div>
            </Tab>

            <Tab>
              <div className="card">
                <div className="card-top">
                  <StaticImage
                    filename="midea-main.jpg"
                    alt="ducted air image"
                  />
                </div>
                <div className="card-heading">
                  <h3 className="fw-600 text-dark">Midea Systems</h3>
                </div>
                <div className="card-body--">
                  <p className="card-text lead">
                    Powerful and an affordable solution for air conditioners for
                    every type ...
                  </p>
                </div>
                <div className="text-blue text-shadow-2 text-left p-0 mt-3">
                  Learn more >
                </div>
              </div>
            </Tab>
          </div>
         

          
          <Panel>
            <h5 className="fw-600 cam mt-3 pb-2 ml-2 pl-3">Daikin Split Systems</h5>
            <div className="px-3-lg">
              <DaikinProducts />
            </div>
           
          

            <div className="grid-col-2 col-panel pt-20">
              
              <div className="p-20">
              <div className="pb-3">
                <h5 className="fw-600 h5 cam">Daikin air conditioning</h5>
                </div>
                <p className="lead">
                  Daikin Air Conditioning is one of our top choices, it's
                  reputation for technology and innovations is one of the best
                  in the air conditioning world. Daikin Split Systems are ideal for air conditioning one room or a specific area of a home. A wide variety of models are offered to suit your requirements and are available in either wall mounted or floor standing type.
                </p>

  <div className='mt-4 d-flex'>
           <p className='p-2'>
                    Daikin brochure {" "} </p>
                   <a href={DaikinPDF} target="_blank" rel="noreferrer">
                    {" "}
                     <span class="pr-2 d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
                </div>
              </div>
              
                
                <div className="pr-3 text-center img-fluid video-frame">
                  <iframe
                    title="Daikin Cora air conditioning systems"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6qWzED8rpmA"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  </div>
              </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Toshiba Split Systems</h5>
            <ToshibaProducts />

            <div className="grid-col-2 pt-20">
              <div className="p-20">
                <h5 className="fw-600 cap">Toshiba air conditioning</h5>
                <p className="lead">
                  Toshiba prides themselves as being the first company to
                  release the inverter technology to air conditioners back in
                  1981 and have respectfully maintained the technical advantage
                  above the rest. Designed for durability and simplicity, the
                  Toshiba is a superior made air conditioner to withstand the
                  harsh Australian summers, and the cold winter's month. With
                  their extended 7-year warranty with parts and labour and our
                  5-year installation warranty, it’s definitely the smart choice
                  when it comes to choosing a new system for your home or
                  office.
                </p>
                <p className="lead">
                  From the 1st of May 2020, all residential installations across
                  the entire Toshiba range of Hi-Wall, Multi Split and Light
                  Commercial equipment including the coveted SMMS VRF suite of
                  products will come with a 7-year warranty.{" "}
                </p>
                  <div className='mt-4 d-flex'>
           <p className='p-2'>
                    Toshiba brochure {" "} </p>
                   <a href={ToshibaPDF} target="_blank" rel="noreferrer">
                    {" "}
                     <span class="pr-2 d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
                </div>
              </div>
              <div className="tabs-img">
                <StaticImage
                  className="rounded"
                  filename="toshiba-mainlg.jpg"
                  alt="ducted air image"
                />
              </div>
            </div>
          </Panel>


          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2 pl-3">Haier Split Systems</h5>
            <div className="px-3">
              <HaierProducts />
            </div>

            <div className="grid-col-2 col-panel pt-20">
              <div className="p-20">
                <h5 className="fw-600 cap">Haier air conditioning</h5>
                <p className="lead">
                 When it comes to reliable and efficient air conditioning solutions, the Haier Tempo Split System is a true standout. With its cutting-edge technology and innovative features, this air conditioning unit promises to keep your home comfortable all year round.
                 </p>
<p className="lead">The Haier Tempo Split System is designed to deliver powerful cooling during the scorching summer months and efficient heating during chilly winters. Its advanced inverter technology ensures precise temperature control, allowing you to enjoy consistent comfort while saving on energy costs.</p>

<p className="lead">
One of the key features of the Haier Tempo is its smart Wi-Fi connectivity. With the Haier Air app, you can conveniently control and monitor your air conditioner from anywhere using your smartphone or tablet. Whether you're at work, on vacation, or simply relaxing on the couch, you have full control over your indoor climate at your fingertips.
                </p>
                  <div className='mt-4 d-flex'>
           <p className='p-2'>
                    Haier brochure {" "} </p>
                   <a href={HaierPDF} target="_blank" rel="noreferrer">
                    {" "}
                     <span class="pr-2 d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
                </div>
            
              </div>
              <div className="tabs-img">
                <StaticImage filename="haier-main2.webp" alt="haier split system aircon hero image" />
              </div>
            </div>
          </Panel>

          <Panel>
            <h5 className="fw-600 cap mt-3 pb-2 ml-2">Midea Split Systems</h5>

            <MideaProducts />
            <div className="grid-col-2 pt-20">
              <div className="tabs-img">
                <StaticImage
                  filename="midea-main.jpg"
                  alt="midea split system air image"
                />
              </div>
              <div className="p-20">
                <h5 className="fw-600 cap">Midea air conditioning</h5>
                <p className="lead">
                  Midea have come a long way over the past 50 years with its
                  manufacturing of air conditioners at affordable prices. The
                  Aurora range is known for its pure comfort, clean, filtered
                  air, quiet operations and smart mobile connect technology. It
                  has a powerful and fast cooling system that uses an efficient
                  and effective compressor that allows strong air flow for
                  immediate comfort. Tested and built to last, the outdoor unit
                  will withstand the Australian harsh conditions, and the whole
                  Aurora series is backed by a 5-year warranty.
                </p>
               <div className='mt-4 d-flex'>
           <p className='p-2'>
                    Midea brochure {" "} </p>
                   <a href={MideaPDF} target="_blank" rel="noreferrer">
                    {" "}
                     <span class="pr-2 d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
                </div>
              </div>
            </div>
          </Panel>
        </Tabs>
      </section>

      <section className="pl-4">
      <div className="lg mb-5 pl-4">
      <h5>View all our brands</h5>
      <Link className="btn-- btn-primary--" to="/products" >SHOP</Link>
      </div>
       <div className="mt-3 mb-3 px-3">
           <BrandsBtn />
        </div>
      </section>

      <section className="px-3-lg">
        <div className="heading-box-color heading-avatar rounded row d-flex align-items-center my-2 mx-0 py-2">
          <div className="col-sm-3 col-lg-2 mt-1 px-2-lg">
          <div className="pl-3">  <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            /></div>
          
          </div>
          <div className="col">
            <h3 className="h2 fw-600 mt-2 cap">
               Air Conditioning Solutions
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className=" col-lg-6 pt-3 mb-4">
          <div className="pb-3">
            <h4 className="h1 px-20 cam fw-600">
              Split System Installation Service
            </h4>
            </div>
            <p className="px-20 lead">
              HOME COMFORT AIR offers comprehensive split system air conditioning services for both homes and offices. Whether you're a builder in need of our "rough in" and "fit off" services for new construction or a homeowner looking for a full installation, we have the perfect solution for your needs. If you've already purchased a split system and require only installation, our "installation only service" is available to assist you as well.
            </p>
            <div>
             <h5 className="h2 px-20 cam fw-600 mt-4 pb-3 pt-4">
              Replacement Split System Air Conditioning Service
            </h5>
            </div>
           
            <p className="px-20 lead">
              Our <Link to="/split-system-replacement">replacement</Link> service is a top choice for property managers and homeowners across South East Queensland. We handle everything from decommissioning and disposing of your old system to installing, commissioning, and testing your new split system. Once your new unit is up and running, we'll guide you through using the remote controller to ensure you can operate your air conditioning system with ease. HOME COMFORT AIR—your residential air conditioning specialists. <br />
              HOME COMFORT AIR, residential air conditioning specialists.
            </p>
          </div>
          <div className="col-lg-6 ">
            <div className="mt-2 split-systems-bottom px-3">
              <StaticImage
                filename="install-450.png"
                alt="air conditioning installation from $450 by Home Comfort Air"
              />
              <div className="mt-3 px-1">
                <StaticImage
                  filename="hero-4.jpg"
                  alt="split system air conditioning by Home Comfort Air"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3">
        <div className="heading-box-color grid-col-2 heading-avatar rounded my-3 mx-0 pr-2 py-2">
          <div className="px-3">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>

          <div className="text-center">
            <h3 className="h2 fw-600 mt-2 cap">Receive a Free Quote</h3>
          </div>
        </div>
        <div className="grid-col-2">
          <div className="split-quotes-text">
            <h5 className="h2 px-20 cam fw-600">
              Split System Installation Quotes
            </h5>
            <p className="px-20 lead-400">
              For new builds or existing homes, whether you need a replacement unit or a fresh installation, simply submit your details, and we'll get in touch with you promptly.
            </p>
            <p className="font-italic px-20">"You could also leave the best suited time to call you back".</p>
          </div>
          <Form />
        </div>
       
      </section>

      {/*<section className="mt-5">
      <hr />
       <GoogleReviews />
    </section> */}

      <section>
            <p className="px-20 mt-4">
             <small>At Home Comfort Air, we aim to exceed our customer's expectations by offering the finest air conditioning systems and services. Our dedication to providing top-notch, energy-efficient, and dependable solutions extends to the Gold Coast, Brisbane, Ipswich and Tweed Heads regions. Reach out to us today to schedule an installation or to learn more about our offerings.</small>
          </p>
        </section> 
        <div>
        <MideaProducts />
        </div>

    </div>
  </Layout>
)

export const query = graphql`
  {
    allStrapiProduct {
      nodes {
        title
      }
    }
  }
`

export default SplitPage
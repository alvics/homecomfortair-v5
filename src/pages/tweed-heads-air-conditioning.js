// Display the list of products
import React, {Fragment}  from "react"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import HaierProducts from "../components/Products/HaierSplitSystems"
import StaticImage from "../components/StaticQueryImages"
import CTA from "../components/CTA"
import Form from "../components/QuoteForm"

export const Head = () => (

  <Fragment>
       <title>Tweed Heads Split System Air Conditioning | Home Comfort Air </title>,
       <meta name= "description" content=" Here at Home Comfort Air we offer to our local customers great deals on home air conditioning split systems. We can supply and install you a new system anywhere on the Gold Coast."/>
       <Seo />
       <Schema />
</Fragment>

)

const Gold_Coast = () => {
  return (
    <Layout>
      

      <div className="pt-2 split-systems-avatar heading-box-color rounded ">
        <h1 className="h1 cam text-center text-white fw-600 p-3">
          <span>
            {" "}
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </span>
          Tweed Heads Split system air conditioning
        </h1>
        <div className="pb-3">
          <CTA />
        </div>
      </div>

      <div className="container-fluid body-wrapper">
        <div className="row">
          <div className="col-lg-8 gcair">
            <div className="p-3">
              <div className="wrapper-gcair-img">
                <StaticImage
                  filename="splits-add-11-pow.png"
                  alt="home comfort air image"
                />
              </div>
               
              <div>
                <h2 className="h5 mt-3">Air Conditioning Tweed Heads</h2>
               </div>

              <p className="mt-3 lead-20">
              
Are you in need of a new split system air conditioner for your home or space? Or perhaps it’s time to replace an old, worn-out system? At Home Comfort Air, we specialise in installing wall-hung and ducted split system air conditioning for homes across Tweed Heads, right here in sunny Northern New South Wales. Take advantage of our monthly specials on split system installations! We’re proud to offer fantastic deals on home air conditioning systems to our local community. Whether you need supply and installation anywhere in Tweed Heads, we’ve got you covered. Visit our website today to book or enquire about your new air conditioning system! 
              </p>

              <p className="lead-20">
               We’ve been working around the Tweed Heads suburbs for over 10 years, installing split system air conditioning for family homes, property managers, and builders. These areas include Banora Point, Bilambil Heights, Kingscliff, Casuarina, Bogangar, Pottsville, Terranora, Fingal Head, and Coolangatta for Tweed Heads split system air conditioning.
              </p>

              <p className="lead-20">
              Wall-hung split system air conditioning is the most practical and affordable home comfort solution for a single room or space, while ducted split systems can cool and heat every room in your home. We install air conditioners with the latest inverter technology, which helps save on your electricity bill. This technology works by only consuming the power needed to maintain the desired set temperature. Split system air conditioners have advanced significantly over the years. To learn more, don’t hesitate to shoot us an <a href="mailto:homecomfortair.gc@gmail.com">email</a> or call us at <a href="tel:0404602657">0404 602 657</a>, and we’ll help you determine the right size air conditioning system for your home or space. We specialise in air conditioning solutions for Tweed Heads homes.
                
              </p>

              <div className="my-2 gcair">
                <StaticImage filename="toshiba-ducted" alt="map-gold-coast" />
                HOME COMFORT AIR
                <span
                  style={{ fontFamily: `'Caveat', cursive`, marginLeft: `6px` }}
                >
                  The smart choice in air conditioning
                </span>
              </div>

              <section className="mt-3">
                <div className="heading-box-color grid-col-2 heading-avatar-gcair rounded  my-3 mx-0 px-2">
                  <div className="pt-xs-2 quote-img-hca">
                    <StaticImage
                      filename="HCA-avatar-WHITE-1400.png"
                      alt="home comfort air image"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="h4 fw-600 mt-2 text-white ">
                      Receive A free Quote
                    </h3>
                  </div>
                </div>
                <div className="grid-col-2">
                  <div className="split-quotes-text">
                    <h5 className=" px-20 cap fw-600">
                      Gold Coast Split System Installation Quotes
                    </h5>
                    <p className="px-20">
                      We install all brands of split system air conditioners for
                      new construction and existing homes. If your are looking for a
              replacement unit or a new installation? Submit your details, and we'll contact you
              back shortly.
                    </p>
                    <p className="font-italic px-20">
                      "You could also leave the best suited time to call you
                      back".
                    </p>
                  </div>
                  <Form />
                </div>
              </section>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-3 mb-2 gcair">
              <StaticImage filename="map-gold-coast.png" alt="map-gold-coast" />
              <div>
                <small>Gold Coast and surrounding area's</small>
              </div>
            </div>
            <div className="fw-600">
              <article>Haier Tempo Air</article>
            </div>
            <div className="product-grid">
              <HaierProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gold_Coast

// Display the Brisbane service page 
import React, {Fragment}  from "react"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import MideaProducts from "../components/Products/MideaSplitsSystems"
import StaticImage from "../components/StaticQueryImages"
import CTA from "../components/CTA"
import Form from "../components/QuoteForm"

export const Head = () => (

  <Fragment>
       <title>Brisbane System Air Conditioning | Home Comfort Air </title>,
       <meta name= "description" content="If you're in the Brisbane, Queensland area and in need of professional air conditioning services, don't hesitate to give us a call at 0404 602 657."/>
       <Seo />
       <Schema />
</Fragment>

)

const Gold_Coast = () => {
  return (
    <Layout>

      <div className="pt-3 split-systems-avatar heading-box-color rounded ">
        <h1 className="h1 cam text-center text-white fw-600 p-3">
          <span>
            {" "}
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </span>
          Brisbane Split system air conditioning
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
                <h2 className="h5 mt-3">Air Conditioning Brisbane</h2>
               </div>

              <p className="mt-3 lead-20">
               Are you in search of a reputable air conditioning service in the Brisbane, Queensland area? Look no further than Home Comfort Air! Our team of skilled technicians is here to assist with all of your air conditioning needs, including the installation of split system units from top brands like <a href="/products">Daikin, Haier, Hisense, and Midea</a>.
              </p>

              <p className="lead-20">
                Split system air conditioning units have become a popular choice for many homeowners in the Brisbane area due to their efficiency, ease of installation, and versatility. These units consist of an indoor unit and an outdoor unit that work together to effectively cool and circulate air throughout your home.
              </p>

              <p className="lead-20">
              At Home Comfort Air, we offer a wide selection of split system air conditioning units from some of the most trusted brands in the industry. <a href="/products">Daikin, Haier, Hisense, and Midea</a> are known for their high-quality products and cutting-edge technology, ensuring that you get the best performance and value for your investment.
              </p>

              <p className="lead-20">
              Our team of technicians is fully trained and certified to install and service split system units of all makes and models. We take pride in providing fast, reliable service and customer satisfaction is our top priority. In addition to installation and repair services, we also offer regular maintenance packages to keep your air conditioning unit running at its best and extend its lifespan.
              </p>

              <p className="lead-20">
                If you're in the Brisbane, Queensland area and in need of professional air conditioning services, don't hesitate to give us a call at <a href="tel:0404602657">0404 602 657</a>. Our team would be happy to discuss your options and help you find the perfect split system unit for your home.
              </p>

              <div className="my-2 gcair">
                <StaticImage filename="midea-main" alt="brisbane-air-conditioning" />
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
                      Brisbane Split System Installation Quotes
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
              <StaticImage filename="map-brisbane-distances-3.png" alt="map-brisbane-service-area" />
              <div>
                <small>Brisbane and surrounding area's</small>
              </div>
            </div>
            <div className="fw-600">
              <article>Midea Air</article>
            </div>
            <div className="product-grid">
              <MideaProducts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gold_Coast

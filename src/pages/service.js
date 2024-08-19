import React from "react"
import { Link } from "gatsby"

 import Layout from "../components/Layouts/layout"
// import SEO from "../components/seo"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import CTA from "../components/CTA"
import ServiceSection from "../components/ServiceSection"

const ServicePage = () => (
  <Layout>

    <div className="body-wrapper ducted-systems">
      <section>
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color ">
          <h1 className="h2 cam text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air favicon logo image"
              />
            </div>
            Service, Maintenance and Replacement
          </h1>
          <div className="pb-3">
            <CTA />
          </div>
        </div>

        <div className="grid-col-2 ducted-systems-top-col">
          <div class="ducted-col">
            <h3 className="h5 fw-600 px-20 cap">Split System Maintenance</h3>
            <p className="lead-20 px-20">
              HOME COMFORT AIR operates their service throughout Brisbane, Ipswich, Gold Coast and Tweed Head's region. Our team of experts are dedicated to the complete
              service, maintenance and{" "}
              <Link to="spit-systems"> replacements </Link>
              of residential air conditioning systems.
            </p>
            <p className="lead-20 px-20">
              Split System Maintenance includes, system checks, filter cleans +
              removal of mould, pressure wash evaporator coil and fan scroll,
              flush out drain, anti-bacterial-mould spray, check refrigerant
              levels, test function and temperature test, detailed information down below.
            </p>
          </div>
          <div className="ducted-air mt-2">
            <StaticImage filename="service11.png" alt="service air image" />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 split-systems-top-col">
          <div className="ducted-air-2">
            <StaticImage
              filename="samsung-main.jpg"
              alt="split system air conditioner image"
            />
          </div>
          <div>
            <h3 className="h5 fw-600 px-20 cap">Why Service Split Systems?</h3>
            <p className="lead-20 px-20">
              With electricity prices always on the rise, servicing your split
              systems is an important topic. Maintaining your system regularly
              (every winter/summer) will help keep your air conditioner running
              more effectively and efficiently, while keeping your operating
              costs down. We see a lot of block filters and low refrigerant
              levels in systems, which result in over working and using more
              power than necessary.
            </p>
          </div>
        </div>
      </section>

      <ServiceSection />

      <section>
        <div className="heading-box-color grid-col-2 heading-avatar rounded my-3 mx-0">
          <div className="">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>

          <div className="text-center">
            <h3 className="h2 fw-600 mt-2 ">Receive A free Quote</h3>
          </div>
        </div>

        <div className="grid-col-2 pb-3">
          <div>
            <h5 className=" px-20 cap fw-600">Split System Service Quote</h5>
            <p className="px-20 lead-400">
              We service and clean your air conditioning system.
              Simply submit your details, and we'll contact you back shortly.
            </p>
            <p className="font-italic px-20 ">
              "You could also leave the best suited time to call you back".
            </p>
          </div>
          <Form />
        </div>


      </section>
    </div>
  </Layout>
)

export default ServicePage
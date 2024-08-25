import React, {Fragment} from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import Cta from "../components/CTA"

export const Head = () => (

  <Fragment>
       <title>Ducted Air Conditioning | Entire Home Solutions</title>,
       <meta name= "description" content="Explore how ducted air conditioning systems can benefit your comfort in your home this summer."/>
       <Seo />
      <Schema />
  </Fragment>

)

const DuctedPage = () => (
  <Layout>
    <div className="body-wrapper ducted-systems pt-3">
      <section className="px-3">
        <div className="pt-2 ducted-systems-avatar rounded heading-box-color mx-0 ">
          <h1 className="h2 cap text-center text-white fw-600  p-3">
            <div>
              {" "}
              <StaticImage
                filename="HCA-avatar-WHITE-1400.png"
                alt="home comfort air image"
              />
            </div>
            Ducted air conditioning 
          </h1>
          <div className="pb-3">
            <Cta />
          </div>
        </div>

        <div className="grid-col-2 ducted-systems-top-col">
          <div class="ducted-col mt-3">
            <h3 className="h5 fw-600 px-20 cam">Entire Home Solutions</h3>
            <p className="lead-20 px-20 lh-base">
              Ducted air conditioning system provides discreet comfort all year
              round, with reverse cycle heating and cooling technology. Designed
              for new and existing homes to manage and maintain temperatures
              throughout the entire home, with optional climate zone controls
              for each room. Ducted systems consists of an indoor unit (in the
              roof), an outdoor unit, discharge grills (in all rooms) and a
              return air grill (usually in the hallway).
            </p>
            <p className="lead-20 px-20 lh-base">
              We supply and install ducted systems from 5.5kW which can be used for small
              zoned rooms, 14kW for the average 4 bedroom, 2 living area's home,
              to the big 25kW unit that can handle larger homes.Talk to us to
              find the best option to suit your home and needs.
            </p>
          </div>
          <div className="ducted-air mt-2 px-3">
            <StaticImage filename="DUCTED-1400.jpg" alt="ducted air image" />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 split-systems-top-col">
          <div className="ducted-air-2">
            <StaticImage filename="multi-1.jpg" alt="ducted air image" />
          </div>
          <div>
            <h3 className="h5 fw-600 px-20 cam">Why Ducted Air?</h3>
            <p className="lead-20 px-20 lh-base">
              Ducted systems can be customised to suit your requirements. If
              you're looking to control the temperature of the entire home, then
              a ducted air conditioning system will be the most effective and
              efficient way. It's more effective in cooling or heating your home
              by maintaining a consistent temperature throughout multiple rooms
              in a discreet and quiet way. However, if you're only looking to
              cool or heat one or two rooms in your home, a wall mounted
              <Link to="spit-systems"> split system air conditioning</Link>{" "}
              would be more suitable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="grid-col-2 ducted-systems-top-col">
          <div>
            <h3 className="h5 fw-600 px-20 mt-5 cam">
              Cost of running a ducted system
            </h3>
            <p className="lead-20 px-20">
              There are a number of factors to consider on how much your running
              costs will be:
            </p>
            <ul className="p-3 lh-base">
              <li className="fsz-18">*Size and type of system</li>
              <li className="fsz-18">*Operating time length</li>
              <li className="fsz-18">*Is your home insulated</li>
              <li className="fsz-18">*Home layout and windows sizes</li>
              <li className="fsz-18">*The temperature set</li>
            </ul>
            <p className="lead-20 px-20 lh-base">
              Ducted air conditioning is a significant investment in your home, and selecting the right system involves careful consideration. The right choice requires thoughtful factors like your home’s layout, climate, and your personal comfort preferences. We install only the top brands because they offer energy efficiency, longevity, durability, cutting-edge technology, and reliable support. Contact us when you're ready to discuss ducted air conditioning for your home. <span className="italic">Home Comfort Air, your residential air conditioning specialists.</span>
            </p>
          </div>
          <div className="ducted-air px-3">
            <StaticImage filename="DUCRED-2-1400.jpg" alt="ducted air image" />
          </div>
        </div>
      </section>

      <section className="px-3">
        <div className="heading-box-color grid-col-2 heading-avatar rounded  my-3 mx-0">
          <div className="p-3">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>

          <div className="text-center">
            <h3 className="h5 fw-600 mt-2 cap text-white">Receive a Free Quote</h3>
          </div>
        </div>
        <div className="grid-col-2">
          <div>
          <div className="pb-3">
            <h5 className="h5 px-20 cap fw-600">
              Ducted System Installation Quotes
            </h5>
            </div>
            <p className="px-20 lead-400">
              We install ducted air conditioning systems for
              new construction and existing homes.
             Whether you're looking to replace an old unit or install a new one, simply provide us with your details, and we'll get in touch with you promptly.
            </p>
            <p className="font-italic px-20">
              "You could also leave the best suited time to call you back".
            </p>
          </div>

          <Form />
        </div>
      </section>
    </div>
  </Layout>
)

export default DuctedPage
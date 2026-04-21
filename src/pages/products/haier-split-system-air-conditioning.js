import React, {Fragment} from 'react'
// import { Link } from "gatsby"

import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2' 
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import Cta from "../../components/CTA"
import HaierProducts from '../../components/Products/HaierSplitSystems'
import HaierPDF from "../../images/haier-tempo.pdf"
import FeatureBubble from "../../components/FeatureBubble"
import BrandPageNav from "../../components/BrandPageNav"
import BrandFeatures from "../../components/BrandFeatures"


export const Head = () => (
  <Fragment>
       <title>Supplied and installed Haier Split System Air Conditioners</title>,
       <meta name= "description" content="Check out our supplied and installed Haier split system air conditioning, Haier cooling and heating options available."/>
       <Seo />
       <Schema />
</Fragment>
)


const haierFeatures = [
  { title: "Inverter Technology", desc: "Smart inverter for efficient, consistent comfort.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Quiet Operation", desc: "Low-noise operation for peaceful living spaces.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> },
  { title: "Wi-Fi Control", desc: "Control via the Haier app from anywhere.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M10.54 16a6 6 0 0 1 2.92 0"/><circle cx="12" cy="20" r="1"/></svg> },
  { title: "Heating & Cooling", desc: "Year-round reverse cycle performance.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg> },
  { title: "High Energy Rating", desc: "Strong energy star ratings for cost savings.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { title: "5yr Warranty", desc: "Haier manufacturer warranty for peace of mind.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
]

const HaierProductsPage = () => {
  
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
            Haier Split System Air Conditioners
          </h1>
          <div className="pb-3">
           <Cta />
          </div>
           <div> <span className="text-white text-center h3 pb-3" style={{ fontFamily: `'Caveat', cursive` }}>*Reliable Air, Exceptional Value – Haier</span></div>
        </div>
        </section>
        <BrandPageNav currentBrand="Haier" />
        <BrandFeatures features={haierFeatures} heading="Key Features of Haier Split Systems" />


        <section>
         <div className="ducted-systems-avatar-2 ml-4" style={{textAlign: `center`}}> 
              <StaticImage
                filename="haier.jpg"
                alt="haier air conditioning logo"
                
              />
        </div>
        <div style={{marginTop:`-20px`}}>
        <h2 className="h5 cam fw-600 mt-3" >Haier Tempo Split System Air Conditioning</h2>
        </div>
        
        <p className="lead-20 mt-3">
 At Home Comfort Air, we have been installing Haier air conditioners for over a decade, and we have the expertise and experience to ensure that your installation is completed quickly and efficiently. We are dedicated to providing our customers with the best service and workmanship, and we stand behind our installations with a 5-year warranty on the workmanship.


        
        </p>
        </section>

         <section>
       <div className="mb-2 mt-2" id="haier">
                <div
                  className="text-center border rounded"
                  style={{ backgroundColor: `#005AAB` }}
                >
                  <h3
                    className="h5 fw-60 mt-2 px-3  text-white "
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supplied and Installed Haier
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
              </div>
          <HaierProducts />
          <div className='mt-4 d-flex'>
              <p className='p-2'>
                    Haier brochure{" "}</p>
                  <a href={HaierPDF} target="_blank" rel="noreferrer">
                    {" "}
                           <span class="pr-2 d-flex border rounded-3 p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg> <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span></span>
                  </a>
               
          </div>
               
        </section>

        <section>
        <p className="lead-20 mt-3">When it comes to air conditioning, Haier is a brand that should not be overlooked. Known for their innovative technology and energy-efficient systems, Haier Tempo air conditioning split systems are an excellent choice for anyone looking to keep their home or office comfortable all year round.</p>
        </section>

        <section>
        <p className="lead-20">
        One of the standout features of Haier air conditioners is their advanced inverter technology. This technology allows the unit to automatically adjust its cooling or heating output to match the room's temperature, resulting in more efficient operation and lower energy bills. Additionally, Haier air conditioners are designed with noise reduction in mind, ensuring that the unit runs quietly, so it won't disturb your daily routine.
        </p>
        </section>


        <section>
        <div className="row">
         <div className="col-lg">
         <p className="lead-20 ">
        We understand that every customer has different needs and requirements, which is why we offer a wide range of Haier air conditioners to suit any budget and space. From wall-mounted units to cassette models and ducted systems, we have the perfect solution for every home or office.
        </p>

      
         <p className="lead-20 ">
       If you're looking for a high-quality, energy-efficient air conditioning system, Haier is an excellent choice. And if you're looking for a trusted and experienced installer, look no further than Home Comfort Air. Contact us today to schedule your consultation today.
        </p>

        <div>
        <h2 className='h5 fw-600 '>Benefits Of Haier Tempo Split System</h2>
        <ul>
        <li>Wi-Fi Control</li>
        <li>Energy Efficient</li>
        <li>Quiet Operation</li>
        <li>Turbo Cooling</li>
        <li>Self Cleaning</li>
        <li>Far-reaching</li>
        <li>5 Year Manufacturer Warranty</li>
        </ul>
        </div>
         </div>

         <div className="col-lg">
          <div className="ducted-air mt-2">
            <StaticImage filename="haier-main2.webp" alt="haier air conditioning split system hero image" />
          </div>
         </div>
        </div>
        </section>

       

                <section style={{ marginTop: 48, marginBottom: 48 }}>
          <div style={{
            background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
            borderRadius: 20,
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
          }}>
            <FeatureBubble />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>Get A Quote</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                  Haier Split System Quote
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 20 }}>
                  For new construction or existing homes. Need a replacement unit or a new installation? Submit your details and we'll get back to you shortly.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, marginTop: 8 }}>
                  {[
                    { icon: "✓", text: "Licensed & insured installer" },
                    { icon: "✓", text: "No-obligation free quote" },
                    { icon: "✓", text: "Same-day response" },
                  ].map((t, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.15)", color: "#fff", fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{t.icon}</span>
                      <span style={{ fontSize: 15, color: "rgba(255,255,255,0.9)" }}>{t.text}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:0404602657" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.75)", fontSize: 14, textDecoration: "none", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 16 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="rgba(255,255,255,0.75)"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  Prefer to call? <strong style={{ color: "#fff" }}>0404 602 657</strong>
                </a>
              </div>
              <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", boxShadow: "0 16px 40px rgba(0,0,0,0.2)", maxWidth: 520, marginLeft: "auto" }}>
                <style>{`.haier_split_system_air_conditioning .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
                <div className="haier_split_system_air_conditioning"><Form hideTitle /></div>
              </div>
            </div>
          </div>
        </section>

        <section>
            <p className="px-20 mt-4">
             <small> At Home Comfort Air, we specialise in the installation of Haier air conditioning systems throughout the Gold Coast, Brisbane, Ipswich, and Tweed Heads areas. Our team of professionals is highly trained and experienced in the installation of Haier air conditioners, and we pride ourselves on providing our customers with exceptional service and workmanship, ensuring that every installation is completed on time and to the highest standards.</small>
          </p>
        </section>

         

    </div>
</Layout>

   
    )
  }

     
 export default HaierProductsPage
import React, { Fragment } from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2'
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import FeatureBubble from "../../components/FeatureBubble"
import BrandFeatures from "../../components/BrandFeatures"
import DaikinDuctedProducts from '../../components/Products/DaikinDuctedSystems'

export const Head = () => (
  <Fragment>
    <title>Supplied and Installed Daikin Ducted Air Conditioning | Home Comfort Air</title>
    <meta name="description" content="Explore our supplied and installed Daikin ducted air conditioning systems. Whole-home comfort with Daikin's premium inverter ducted range." />
    <Seo />
    <Schema />
  </Fragment>
)

const daikinDuctedFeatures = [
  { title: "Inverter Technology", desc: "Automatically adjusts output for maximum efficiency and consistent comfort.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Whole-Home Comfort", desc: "Ducted systems deliver conditioned air to every room simultaneously.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { title: "Zone Control", desc: "Heat or cool only the rooms you need, reducing energy waste.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg> },
  { title: "Wi-Fi Control", desc: "Manage your ducted system remotely via smartphone or voice assistant.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M10.54 16a6 6 0 0 1 2.92 0"/><circle cx="12" cy="20" r="1"/></svg> },
  { title: "Quiet Operation", desc: "Concealed indoor unit keeps noise to an absolute minimum.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> },
  { title: "5yr Warranty", desc: "Backed by Daikin's manufacturer warranty for peace of mind.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
]

const DaikinDuctedPage = () => {
  return (
    <Layout>

      <section className="full-bleed" style={{
        background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
        padding: "64px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <FeatureBubble />
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 48,
          alignItems: "center",
          position: "relative",
        }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
              Supplied & Installed
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Daikin Ducted Air Conditioning
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Whole-Home Comfort, Invisible Design
            </p>
            <Link to="/contact" style={{
              display: "inline-block",
              background: "#00c4b3",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: "2em",
              textDecoration: "none",
            }}>
              Get A Free Quote →
            </Link>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
            <StaticImage filename="brands/Hero/daikin-summer-hero__1.png" alt="Daikin ducted air conditioning system" />
          </div>
        </div>
      </section>

      <div className="body-wrapper ducted-systems p-3">

        <section>
          <div className="ducted-systems-avatar-2 ml-4" style={{ textAlign: "center" }}>
            <StaticImage filename="daikin-logo2.png" alt="Daikin air conditioning logo" />
          </div>
          <h2 className="h5 fw-600 mt-3">Daikin Ducted Air Conditioning</h2>
          <p className="lead-20 mt-3">
            Daikin's ducted air conditioning systems deliver discreet, whole-home comfort through a network of ceiling vents — no wall units in sight. Renowned for their premium inverter technology and energy efficiency, Daikin ducted systems are the go-to choice for new builds and large homes on the Gold Coast and Brisbane.
          </p>
        </section>

        <section id="daikin-ducted">
          <div
            className="text-center border rounded mb-2"
            style={{ backgroundColor: "#0075C9" }}
          >
            <h3 className="h5 fw-600 mt-2 px-3 text-white" style={{ padding: "1.3rem 0" }}>
              Supplied and Installed Daikin Ducted Systems
              <br />
              <span className="lead cam text-white"><small>Premium Inverter Ducted Range</small></span>
            </h3>
          </div>
          <DaikinDuctedProducts />
        </section>

        <BrandFeatures features={daikinDuctedFeatures} heading="Key Features of Daikin Ducted Systems" />

        <section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "start" }}>
            <div>
              <p className="lead-20">
                Daikin's ducted range features advanced inverter technology that continuously adjusts the compressor speed to maintain your desired temperature with minimal energy use. Unlike fixed-speed systems, the inverter avoids the energy spikes that come with constant on/off cycling — keeping your power bills down year-round.
              </p>
              <p className="lead-20 mt-3">
                With intelligent zone control, you can independently manage the temperature in separate areas of your home, cooling the living room while leaving unoccupied bedrooms off. Daikin's <Link to="/products/daikin-split-system-air-conditioning">split system range</Link> is also available for targeted single-room comfort.
              </p>
              <p className="lead-20 mt-3">
                All units support Wi-Fi connectivity, giving you full control from anywhere via the Daikin app or voice assistants like Google Home and Amazon Alexa. For larger homes and <Link to="/ducted-systems">whole-home solutions</Link>, a ducted system is the cleanest, most seamless option available.
              </p>
            </div>
            <div className="ducted-air mt-2">
              <StaticImage filename="Daikin-Split-Family9.jpg" alt="Daikin ducted system indoor unit" />
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
                  Daikin Ducted System Quote
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
                <style>{`.daikin_ducted_air_conditioning .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
                <div className="daikin_ducted_air_conditioning"><Form hideTitle /></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="px-20 mt-4">
            <small>At Home Comfort Air, we supply and install Daikin ducted air conditioning systems across the Gold Coast, Brisbane, Ipswich, and Tweed Heads. Contact us today to schedule a consultation or for further information about our ducted range.</small>
          </p>
        </section>

      </div>
    </Layout>
  )
}

export default DaikinDuctedPage

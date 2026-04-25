import React, { Fragment } from "react"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import FeatureBubble from "../components/FeatureBubble"
import ContactForm from "../components/ContactForm"

export const Head = () => (
  <Fragment>
    <title>Contact Home Comfort Air | Get A Free Quote</title>
    <meta name="description" content="Contact Home Comfort Air — residential air conditioning specialists across Gold Coast, Brisbane and Ipswich. Call, email or submit a quote request." />
    <Seo />
    <Schema />
  </Fragment>
)

const contactDetails = [
  {
    label: "Phone",
    value: "0404 602 657",
    href: "tel:0404602657",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" fill="#0075C9">
        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "homecomfortair.gc@gmail.com",
    href: "mailto:homecomfortair.gc@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Address",
    value: "22 Beitz Ave, Labrador QLD 4215",
    href: "https://www.google.com/maps/place/22+Beitz+Ave,+Labrador+QLD+4215",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Sat, 8:00am – 5:00pm",
    href: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

const serviceAreas = [
  "Gold Coast", "Brisbane", "Ipswich", "Tweed Heads",
]

const Contact = () => (
  <Layout>
    <style>{`
      #contact-form-card .grid-300 {
        grid-template-columns: 1fr !important;
      }
      #contact-form-card input,
      #contact-form-card textarea {
        width: 100%;
        box-sizing: border-box;
        min-width: 0;
      }
    `}</style>

    {/* ── Hero ── */}
    <section className="full-bleed" style={{
      background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
      padding: "64px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <FeatureBubble />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", textAlign: "center" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
          Gold Coast · Brisbane · Ipswich · Tweed Heads
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
          Get In Touch
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.85)", marginBottom: 0, lineHeight: 1.5, fontFamily: "'Caveat', cursive", maxWidth: 480, margin: "0 auto" }}>
          Give us a few details and we'll offer the best solution.
        </p>
      </div>
    </section>

    {/* ── Highlights strip ── */}
    <div style={{ borderBottom: "1px solid #e8eef5" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
        {[
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512" fill="#0075C9"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>, value: "0404 602 657", label: "Call Us Direct" },
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, value: "6 Days", label: "Mon – Sat" },
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, value: "Fast", label: "Response Time" },
          { icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, value: "Free", label: "No-Obligation Quote" },
        ].map((h, i, arr) => (
          <div key={i} style={{ textAlign: "center", padding: "28px 16px", borderRight: i < arr.length - 1 ? "1px solid #e8eef5" : "none" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{h.icon}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#0075C9", lineHeight: 1 }}>{h.value}</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>{h.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* ── Body ── */}
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px", background: "#fff" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56, alignItems: "start" }}>

        {/* Left — contact info */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Contact Details
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            We'd Love to Hear From You
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
            {contactDetails.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#f0f8ff",
                  border: "1px solid #dbeafe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {d.icon}
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{d.label}</p>
                  {d.href ? (
                    <a href={d.href} style={{ fontSize: 15, fontWeight: 600, color: "#1f2937", textDecoration: "none" }}>{d.value}</a>
                  ) : (
                    <p style={{ fontSize: 15, fontWeight: 600, color: "#1f2937", margin: 0 }}>{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Service areas */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 16 }}>
            Areas We Service
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {serviceAreas.map((area, i) => (
              <span key={i} style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#0075C9",
                background: "#f0f8ff",
                border: "1px solid #dbeafe",
                padding: "10px 22px",
                borderRadius: 50,
              }}>
                {area}
              </span>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.7, marginTop: 32 }}>
            * We do not share your details with any third party and we'll never spam your inbox.
          </p>
        </div>

        {/* Right — form card */}
        <div style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20,
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}>
          <FeatureBubble />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
              Free Quote
            </p>
            <h2 style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.3 }}>
              Send Us A Message
            </h2>
            <div id="contact-form-card" style={{ background: "#fff", borderRadius: 16, padding: "28px 20px", boxShadow: "0 16px 40px rgba(0,0,0,0.2)", boxSizing: "border-box", width: "100%", overflow: "hidden" }}>
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default Contact

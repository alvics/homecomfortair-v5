import React, { Fragment } from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import MideaProducts from "../components/Products/MideaSplitsSystems"
import BrandBtn from "../components/BrandsBtn"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import FeatureBubble from "../components/FeatureBubble"
import Form from "../components/QuoteForm"

export const Head = () => (
  <Fragment>
    <title>Service Areas | South East Queensland | Home Comfort Air</title>
    <meta name="description" content="Home Comfort Air services the Gold Coast, Brisbane, Ipswich and Tweed Heads areas. Licensed air conditioning installation specialists covering all of South East Queensland." />
    <Seo />
    <Schema />
  </Fragment>
)

const highlights = [
  {
    value: "SEQ", label: "Wide Coverage Area",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>,
  },
  {
    value: "6 Days", label: "A Week, 8am–5pm",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    value: "5 Year", label: "Installation Warranty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    value: "100%", label: "Customer Satisfaction",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  },
]

const ServiceAreasPage = ({ data }) => {
  const serviceAreas = data.allStrapiServiceArea.nodes

  return (
    <Layout>

      {/* ── Hero ── */}
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
              Gold Coast · Brisbane · Ipswich · Tweed Heads
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Our Service Areas
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Residential air conditioning specialists, coming to you.
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
            <StaticImage filename="service-helesvale.jpeg" alt="Air conditioning installation on the Gold Coast by Home Comfort Air" />
          </div>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <div style={{ borderBottom: "1px solid #e8eef5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
          {highlights.map((h, i) => (
            <div key={i} style={{
              textAlign: "center",
              padding: "28px 16px",
              borderRight: i < highlights.length - 1 ? "1px solid #e8eef5" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{h.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0075C9", lineHeight: 1 }}>{h.value}</div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>

        {/* Intro + maps */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
                Covering South East Queensland
              </p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
                We Come to You
              </h2>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                At Home Comfort Air, we're dedicated to providing first-rate air conditioning services across South East Queensland. We specialise in installing all major brands and offer a{" "}
                <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year workmanship warranty</Link> on every new split system installation.
              </p>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                Our team of licensed experts handle all installation and service needs — ensuring 100% customer satisfaction and quality workmanship. We're open 6 days a week, 8am–5pm.
              </p>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85 }}>
                Call us on{" "}
                <a href="tel:0404602657" style={{ color: "#0075C9", fontWeight: 600 }}>0404 602 657</a> or{" "}
                <Link to="/contact" style={{ color: "#0075C9", fontWeight: 600 }}>submit an enquiry</Link> — your satisfaction is our guarantee.
              </p>
            </div>

            {/* Maps */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", marginBottom: 10 }}>Gold Coast Area</p>
                <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <StaticImage filename="map-gold-coast.png" alt="Gold Coast service area map" />
                </div>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", marginBottom: 10 }}>Brisbane Area</p>
                <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <StaticImage filename="map-brisbane-distances-3.png" alt="Brisbane service area map" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service areas grid */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Locations We Service
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Service Areas
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {serviceAreas?.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 16px",
                  background: "#f8fafc",
                  border: "1px solid #e8eef5",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1f2937",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <span style={{ color: "#0075C9", fontSize: 16 }}>→</span>
                {area.Heading}
              </Link>
            ))}
          </div>
        </section>

        {/* Midea products */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Available Packages
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Midea Split System Packages
          </h2>
          <MideaProducts />
          <div style={{ marginTop: 24 }}>
            <Link to="/products" style={{
              display: "inline-block",
              background: "#0075C9",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: "2em",
              textDecoration: "none",
            }}>
              View All Split Systems →
            </Link>
          </div>
        </section>


        {/* CTA / Quote */}
        <section style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
          marginBottom: 72,
        }}>
          <FeatureBubble />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
                Get Started Today
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                Book Your Service
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                Servicing Gold Coast, Brisbane, Ipswich and Tweed Heads. Submit your details and we'll get back to you shortly with the best options for your home.
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "'Caveat', cursive", marginBottom: 20 }}>
                "Feel free to leave the best time to call you back."
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
              <Form title="Get In Touch" />
            </div>
          </div>
        </section>

        {/* Brand buttons */}
        <section style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12, textAlign: "center" }}>
            Browse by Brand
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3, display: "block", textAlign: "center" }}>
            All Brands We Install
          </h2>
          <BrandBtn />
        </section>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetServiceAreas {
    allStrapiServiceArea {
      nodes {
        Heading
        slug
      }
    }
  }
`

export default ServiceAreasPage

import React, { Fragment } from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from '../components/Schema-2'
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import FeatureBubble from "../components/FeatureBubble"

export const Head = () => (
  <Fragment>
    <title>Our 5-Year Installation Warranty | Home Comfort Air</title>
    <meta name="description" content="Why our 5-Year Installation Warranty sets us apart. Ensuring quality workmanship for every split system air conditioning installation in South East Queensland." />
    <Seo />
    <Schema />
  </Fragment>
)

const warrantyItems = [
  {
    title: "Refrigerant Leaks",
    desc: "Faulty joints or connections from installation are covered in full.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    title: "Incorrect Wiring",
    desc: "Any electrical faults traced to our installation work are rectified at no cost.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: "Improper Refrigerant Charging",
    desc: "If the system was under or over-charged at install, we'll fix it free of charge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: "Drainage & Condensate Issues",
    desc: "Blocked or incorrectly pitched drain lines resulting from our work are covered.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Mounting & Bracket Defects",
    desc: "Indoor or outdoor unit mounting defects caused by our team are rectified.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    title: "Workmanship Defects",
    desc: "Any defect caused by how the installation was carried out — full stop.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
]

const highlights = [
  {
    value: "5 Years", label: "Installation Warranty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    value: "18+", label: "Years Experience",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    value: "Licensed", label: "& Insured Technicians",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  },
  {
    value: "$0", label: "Call-Out on Warranty Jobs",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
]

const InstallationWarrantyPage = () => {
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
              Quality You Can Count On
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Our 5-Year Installation Warranty
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Your comfort, our commitment — backed for five years.
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
            <StaticImage filename="mitsubishi-coombabah.jpeg" alt="Finished split system air conditioning installation by Home Comfort Air" />
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
              <div style={{ fontSize: 22, fontWeight: 800, color: "#0075C9", lineHeight: 1 }}>{h.value}</div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>

        {/* Intro */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
                Why It Matters
              </p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
                What Sets Our Warranty Apart
              </h2>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                When choosing an air conditioning installer, a strong warranty is your best indicator of confidence in the work. At Home Comfort Air, we back every new split system installation with a full <strong>5-year workmanship warranty</strong> — because we know the job is done right the first time.
              </p>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                Our warranty covers any defect or issue arising directly from the installation itself. If a problem occurs within the 5-year period, we return, repair, or replace — at <strong>no additional cost to you</strong>.
              </p>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85 }}>
                Our team of licensed and experienced technicians complete every job to the highest standard, ensuring your system performs reliably for years to come. This warranty is our promise — not just a piece of paper.
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #f0f8ff 0%, #e6f4ff 100%)",
              borderRadius: 16,
              padding: "36px 32px",
              border: "1px solid #dbeafe",
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 16 }}>
                Also Included
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "All new split system installations",
                  "Multi-head system installations",
                  "Repair or replacement at no charge",
                  "Ongoing maintenance service available",
                  "Fast response across SEQ",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16, fontSize: 16, color: "#1f2937" }}>
                    <span style={{ color: "#00c4b3", fontWeight: 800, marginTop: 2, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #dbeafe" }}>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7 }}>
                  In addition to our warranty, we offer ongoing maintenance plans to keep your system running at peak performance. Ask us about the{" "}
                  <Link to="/home-comfort-club" style={{ color: "#0075C9", fontWeight: 600 }}>Home Comfort Club</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Covered grid */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Coverage Details
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 40, lineHeight: 1.3 }}>
            What's Covered Under the Warranty
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {warrantyItems.map((item, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #e8eef5",
                borderRadius: 12,
                padding: "24px 20px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#1f2937", marginBottom: 6 }}>{item.title}</p>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / Quote section */}
        <section style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
        }}>
          <FeatureBubble />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
                Get Started Today
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                Book Your Installation
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                For new construction or existing homes — whether you need a replacement unit or a brand-new installation, submit your details and we'll get back to you shortly.
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
              <Form hideTitle />
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.8, marginTop: 48, textAlign: "center" }}>
          Home Comfort Air services the Gold Coast, Brisbane, Ipswich and Tweed Heads areas with top-quality, energy-efficient air conditioning solutions. Our goal is to provide the best systems and service available — the 5-year warranty is our commitment to that promise.{" "}
          <Link to="/contact" style={{ color: "#0075C9" }}>Contact us</Link> for further information.
        </p>

      </div>
    </Layout>
  )
}

export default InstallationWarrantyPage

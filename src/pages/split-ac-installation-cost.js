import React, { Fragment, useState } from 'react'
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Seo from '../components/SEO-2'
import Schema from '../components/Schema-2'
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import FeatureBubble from "../components/FeatureBubble"
import SamsungProducts from "../components/Products/SamsungSplitSystems"
import MideaProducts from "../components/Products/MideaSplitsSystems"

export const Head = () => (
  <Fragment>
    <title>Split System Air Conditioning Installation Cost | Home Comfort Air</title>
    <meta name="description" content="Discover what affects split system AC installation costs in South East Queensland. Supplied & installed prices from $1,099. Get a free quote today." />
    <Seo />
    <Schema />
  </Fragment>
)

const costFactors = [
  {
    title: "Unit Size & Capacity",
    desc: "Larger capacity units require more work to install and typically cost more than smaller units.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: "System Type",
    desc: "High wall split, multi-head, or inverter systems each have different installation requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Installation Complexity",
    desc: "Long pipe runs, difficult access, brick walls, or tight roof spaces add to the labour time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    title: "Labour",
    desc: "Larger or complex jobs may require two technicians, affecting the overall labour cost.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

const faqs = [
  {
    q: "How much does a split system cost supplied & installed?",
    a: "On average, you can expect to pay anywhere from $1,299 to $4,000 for a split AC system including installation. The price varies by brand, capacity, and installation complexity.",
  },
  {
    q: "How much does installation labour cost?",
    a: "Installation labour typically ranges from $450 to $1,250 for a standard single-head split system. More complex jobs with long pipe runs or difficult access will cost more.",
  },
  {
    q: "Is a split system easy to install?",
    a: "Split systems are easier to install than ducted systems, but still require a licensed HVAC professional. Incorrect installation can void warranties and cause long-term issues — it's not a DIY job.",
  },
  {
    q: "How long does installation take?",
    a: "A standard single-head split system installation typically takes 2–4 hours. Multi-head or complex installations may take longer.",
  },
  {
    q: "Are split systems cheaper to run?",
    a: "Yes — inverter split systems are generally more energy-efficient than ducted systems. Running costs depend on unit size, usage habits, and the energy rating of the model.",
  },
  {
    q: "What's included in the installation price?",
    a: "Our supplied & installed price includes the air conditioning unit, refrigerant pipe run (up to standard 3m length), electrical connection, commissioning, and our 5-year installation warranty.",
  },
]

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderBottom: "1px solid #e8eef5",
      padding: "20px 0",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          padding: 0,
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 700, color: "#1f2937" }}>{q}</span>
        <span style={{ color: "#0075C9", fontSize: 22, flexShrink: 0, fontWeight: 300 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.75, marginTop: 12, marginBottom: 0 }}>{a}</p>
      )}
    </div>
  )
}

const highlights = [
  {
    value: "From $1,299", label: "Supplied & Installed",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    value: "2–4 hrs", label: "Typical Install Time",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    value: "5 Year", label: "Workmanship Warranty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    value: "Licensed", label: "& Insured Technicians",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  },
]

export default function SplitAcInstallationCost() {
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
              Supplied &amp; Installed · South East Queensland
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Split System AC Installation Cost
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Affordable comfort, expertly installed.
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
            <StaticImage filename="ac-hero-1.jpg" alt="Split system air conditioning installation" />
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

        {/* Intro + factors */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
                What You Need to Know
              </p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
                Understanding Split AC Installation Costs
              </h2>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
                A split system air conditioner is one of the most cost-effective and efficient ways to cool and heat your home. Before purchasing, it's important to understand what drives the total cost — so there are no surprises on the day.
              </p>
              <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85 }}>
                Our <Link to="/products/split-system-air-conditioning" style={{ color: "#0075C9" }}>supplied &amp; installed packages</Link> include everything — the unit, installation, commissioning, and our{" "}
                <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year workmanship warranty</Link>. No hidden extras.
              </p>
            </div>

            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 16 }}>
                Cost Factors
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {costFactors.map((f, i) => (
                  <div key={i} style={{
                    background: "#f8fafc",
                    border: "1px solid #e8eef5",
                    borderRadius: 12,
                    padding: "20px 16px",
                  }}>
                    <div style={{ marginBottom: 10 }}>{f.icon}</div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1f2937", marginBottom: 6 }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Common Questions
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Split System Installation FAQs
          </h2>
          <div style={{ maxWidth: 780 }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* Samsung products */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Current Packages
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Samsung Split System Packages
          </h2>
          <SamsungProducts />
        </section>

        {/* Midea products */}
        <section style={{ marginBottom: 72 }}>
          <MideaProducts />
        </section>

        {/* CTA / Quote */}
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
                Get a Free Quote
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                New construction or existing home — need a replacement unit or a brand-new installation? Submit your details and we'll get back to you shortly.
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

        <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.8, marginTop: 48, textAlign: "center" }}>
          Home Comfort Air services the Gold Coast, Brisbane, Ipswich and Tweed Heads areas. We're committed to delivering energy-efficient, reliable air conditioning solutions at competitive prices.{" "}
          <Link to="/contact" style={{ color: "#0075C9" }}>Contact us</Link> for further information.
        </p>

      </div>
    </Layout>
  )
}

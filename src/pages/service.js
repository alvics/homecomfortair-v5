import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import FeatureBubble from "../components/FeatureBubble"

export const Head = () => (
  <Fragment>
    <title>Air Conditioning Service & Maintenance | Home Comfort Air</title>
    <meta name="description" content="Professional split system air conditioning servicing across Gold Coast, Brisbane and Ipswich. One-off service or join the Home Comfort Club for ongoing maintenance." />
    <Seo />
    <Schema />
  </Fragment>
)

const highlights = [
  {
    value: "15-Point", label: "Service Checklist",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  },
  {
    value: "6 Days", label: "A Week, 8am–5pm",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    value: "SEQ", label: "Wide Coverage Area",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>,
  },
  {
    value: "Licensed", label: "& Insured Technicians",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  },
]

const benefits = [
  {
    title: "Lower Running Costs",
    desc: "Blocked filters and low refrigerant force your system to work harder, using more power. A clean system runs efficiently and keeps your bills down.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    title: "Healthier Air Quality",
    desc: "Mould, dust and bacteria build up inside the unit over time. Regular servicing removes contaminants so the air your family breathes is clean.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  },
  {
    title: "Extend System Life",
    desc: "A well-maintained system lasts years longer. Catching small issues early prevents costly breakdowns and premature replacement.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
]

const ServicePage = () => (
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
            Gold Coast · Brisbane · Ipswich
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Service & Maintenance
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            Keep your system running clean, efficient and healthy.
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
            Book A Service →
          </Link>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
          <StaticImage filename="maintenance-cornubia.jpeg" alt="Air conditioning service and maintenance by Home Comfort Air" />
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

      {/* Intro */}
      <section style={{ marginBottom: 64 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
              What's Included
            </p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
              Split System Maintenance
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
              Home Comfort Air operates servicing throughout Brisbane, Ipswich, Gold Coast and Tweed Heads. Our team of licensed technicians handle complete service, maintenance and{" "}
              <Link to="/split-system-replacement" style={{ color: "#0075C9" }}>replacements</Link> of residential air conditioning systems.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85 }}>
              A full service includes filter deep clean, evaporator coil pressure wash, condensate drain flush, anti-bacterial spray, refrigerant level check, and a complete function and temperature test — all 15 points covered every time.
            </p>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
            <StaticImage filename="clean-a-c.jpeg" alt="Air conditioning maintenance checklist" />
          </div>
        </div>
      </section>

      {/* Why service */}
      <section style={{ marginBottom: 72 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
          Why It Matters
        </p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 40, lineHeight: 1.3 }}>
          Why Service Your Split System?
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid #e8eef5",
              borderRadius: 12,
              padding: "28px 24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <div style={{ color: "#0075C9", marginBottom: 16 }}>{b.icon}</div>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#1f2937", marginBottom: 8 }}>{b.title}</p>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Home Comfort Club promo banner */}
      <section style={{ marginBottom: 72 }}>
        <div style={{
          background: "linear-gradient(135deg, #00c4b3 0%, #009e90 100%)",
          borderRadius: 16,
          padding: "40px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>
              Ongoing Maintenance
            </p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.7rem)", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
              Join the Home Comfort Club
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", lineHeight: 1.7, marginBottom: 0 }}>
              Want scheduled reminders, priority booking and discounts on repairs? Our membership plans start from just $15/mo and take the hassle out of keeping your system healthy year-round.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <Link to="/home-comfort-club" style={{
              display: "inline-block",
              background: "#fff",
              color: "#00c4b3",
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 32px",
              borderRadius: "2em",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}>
              View Membership Plans →
            </Link>
          </div>
        </div>
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
              Book A Service
            </p>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
              Get A Service Quote
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
              We service and clean your air conditioning system across Gold Coast, Brisbane, Ipswich and Tweed Heads. Submit your details and we'll get back to you shortly.
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
            <Form title="Book A Service" hideTitle />
          </div>
        </div>
      </section>

      <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.8, marginTop: 48, textAlign: "center" }}>
        Home Comfort Air services the Gold Coast, Brisbane, Ipswich and Tweed Heads areas. Our goal is to keep your home comfortable and your system running at peak performance all year round.{" "}
        <Link to="/contact" style={{ color: "#0075C9" }}>Contact us</Link> for further information.
      </p>

    </div>
  </Layout>
)

export default ServicePage

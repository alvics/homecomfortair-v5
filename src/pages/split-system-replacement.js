import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layouts/layout"
import Seo from '../components/SEO-2'
import Schema from '../components/Schema-2'
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import FeatureBubble from "../components/FeatureBubble"
import SamsungProducts from "../components/Products/SamsungSplitSystems"
import MitsubishiSplits from "../components/Products/MitsubishiElectricSplits"

export const Head = () => (
  <Fragment>
    <title>Split System Replacement | Choose A New Air Conditioner | Home Comfort Air</title>
    <meta name="description" content="Replacing your split system air conditioner? Home Comfort Air installs all major brands across Gold Coast, Brisbane and Ipswich. Get a free quote today." />
    <Seo />
    <Schema />
  </Fragment>
)

const highlights = [
  {
    value: "All Major", label: "Brands Installed",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  },
  {
    value: "5 Year", label: "Workmanship Warranty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    value: "Licensed", label: "& Insured Technicians",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  },
  {
    value: "Fast", label: "Quote Turnaround",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
]

const steps = [
  { num: 1, title: "Choose Your New Unit", desc: "We help you select the right capacity and brand for your room size and budget — Daikin, Mitsubishi, Samsung, Haier, Toshiba, Carrier, or Midea." },
  { num: 2, title: "Turn Off the Power", desc: "Before work begins, we switch off the circuit breaker and make the existing system safe to disconnect." },
  { num: 3, title: "Remove the Old Unit", desc: "We disconnect the refrigerant lines, remove the mounting bracket, and safely dispose of the old unit." },
  { num: 4, title: "Install New Indoor Unit", desc: "The new indoor unit is fitted to the wall bracket and refrigerant lines connected with a tight, secure seal." },
  { num: 5, title: "Install New Outdoor Unit", desc: "The outdoor unit is mounted on a level surface and refrigerant lines are connected and properly sealed." },
  { num: 6, title: "Connect Electrical Wiring", desc: "All wiring between indoor and outdoor units is connected to manufacturer specifications for a safe installation." },
  { num: 7, title: "Vacuum Down & Charge", desc: "We vacuum the system to remove contaminants, then charge with the correct refrigerant amount as specified." },
  { num: 8, title: "Test & Commission", desc: "Power on, full system test, and sign-off. Your new air conditioner is ready to go — backed by our 5-year warranty." },
]

export default function SplitSystemReplacement() {
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
              Gold Coast · Brisbane · Ipswich
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Split System Replacement
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Out with the old, in with the efficient.
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
            <StaticImage filename="midea-Ahmore.jpeg" alt="Split system air conditioning replacement by Home Comfort Air" />
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
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Time for an Upgrade
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
            How We Replace Your Split System
          </h2>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, maxWidth: 740, marginBottom: 20 }}>
            A split system provides years of reliable comfort — but over time, age and wear mean replacement is the smarter choice over repair. At Home Comfort Air, we make the process simple. We install all major brands including{" "}
            <Link to="/products/daikin-split-system-air-conditioning" style={{ color: "#0075C9" }}>Daikin</Link>,{" "}
            <Link to="/products/mitsubishi-electric-split-system-air-conditioning" style={{ color: "#0075C9" }}>Mitsubishi Electric</Link>,{" "}
            <Link to="/products/samsung-split-system-air-conditioning" style={{ color: "#0075C9" }}>Samsung</Link>,{" "}
            <Link to="/products/haier-split-system-air-conditioning" style={{ color: "#0075C9" }}>Haier</Link>,{" "}
            <Link to="/products/toshiba-split-system-air-conditioning" style={{ color: "#0075C9" }}>Toshiba</Link>,{" "}
            <Link to="/products/carrier-split-system-air-conditioning" style={{ color: "#0075C9" }}>Carrier</Link> and{" "}
            <Link to="/products/midea-split-system-air-conditioning" style={{ color: "#0075C9" }}>Midea</Link>.
          </p>
          <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, maxWidth: 740 }}>
            Every replacement is backed by our{" "}
            <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year workmanship warranty</Link>, giving you complete confidence in the result.
          </p>
        </section>

        {/* 8-step process */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Our Process
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 40, lineHeight: 1.3 }}>
            8 Steps to a Perfect Replacement
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {steps.map((s) => (
              <div key={s.num} style={{
                background: "#fff",
                border: "1px solid #e8eef5",
                borderRadius: 12,
                padding: "24px 20px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0075C9, #00c4b3)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {s.num}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#1f2937", marginBottom: 6 }}>{s.title}</p>
                  <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo gallery */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Our Work
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Recent Replacement Jobs
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { file: "currumbin.JPG", label: "Currumbin" },
              { file: "carrara2.jpg", label: "Carrara" },
              { file: "advancetown.JPG", label: "Advancetown" },
              { file: "ahmore.JPG", label: "Ashmore" },
            ].map((p, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <StaticImage filename={p.file} alt={`Split system replacement ${p.label}`} />
                <div style={{ padding: "10px 14px", background: "#f8fafc", fontSize: 13, fontWeight: 600, color: "#6b7280" }}>
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mitsubishi products */}
        <section style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Popular Choice
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Mitsubishi Electric MSZ-AP Range
          </h2>
          <MitsubishiSplits />
        </section>

        {/* Samsung products */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
            Also Available
          </p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
            Samsung Aero Packages
          </h2>
          <SamsungProducts />
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
                Ready to Upgrade?
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                Air Conditioning Replacement Quote
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                Need a replacement unit or a new installation? Submit your details and we'll get back to you shortly with the best options for your home.
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
          Home Comfort Air services the Gold Coast, Brisbane, Ipswich and Tweed Heads areas. We're dedicated to providing reliable, energy-efficient air conditioning solutions.{" "}
          <Link to="/contact" style={{ color: "#0075C9" }}>Contact us</Link> to schedule a consultation.
        </p>

      </div>
    </Layout>
  )
}

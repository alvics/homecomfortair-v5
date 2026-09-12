import React, { Fragment } from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2'
import Schema from '../../components/Schema-2'
import Form from "../../components/QuoteForm"
import FeatureBubble from "../../components/FeatureBubble"
import BrandPageNav from "../../components/BrandPageNav"
import BrandFeatures from "../../components/BrandFeatures"
import WhyHCA from "../../components/WhyHCA"
import PanasonicProducts from '../../components/Products/PanasonicSplitSystems'
import panasonicLogo from "../../images/Panasonic/logo-cropped.png"
import panasonicHeroImg from "../../images/Panasonic/hero.jpg"
import PanasonicPDF from "../../images/Panasonic/PANASONIC_RZ-SERIES.pdf"
import panasonicInstallImg from "../../images/Panasonic/panasonic_install_home_comfort_air.jpeg"

export const Head = () => (
  <Fragment>
    <title>Supplied and Installed Panasonic Split System Air Conditioning</title>
    <meta name="description" content="Explore our supplied and installed Panasonic RZ Series split system air conditioning, cool and heat your home with Panasonic air conditioner." />
    <Seo />
    <Schema />
  </Fragment>
)

const panasonicSplitFeatures = [
  { title: "Inverter Technology", desc: "R32 inverter compressor adjusts output for efficient, steady comfort.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Multi-Protection Filter", desc: "Anti-bacterial, anti-virus, anti-allergen and anti-mould filtration.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "AEROWINGS Airflow", desc: "Dual-flap design projects air further across the room.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M10.54 16a6 6 0 0 1 2.92 0"/><circle cx="12" cy="20" r="1"/></svg> },
  { title: "Smart App Control", desc: "Comfort Cloud App control via optional network adaptor.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg> },
  { title: "ECO Mode with A.I.", desc: "Learns your room and saves up to 20% more energy.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { title: "Built for Coastal Air", desc: "Blue Fin condenser and corrosion-resistant outdoor coating.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
]

const PanasonicProductsPage = () => (
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
        maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 48, alignItems: "center", position: "relative",
      }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
            Supplied &amp; Installed
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Panasonic Split Systems
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            Comfort Cooling &amp; Heating, All Year Round
          </p>
          <Link to="/contact" style={{
            display: "inline-block", background: "#00c4b3", color: "#fff",
            fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: "2em", textDecoration: "none",
          }}>
            Get A Free Quote →
          </Link>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
          <img src={panasonicHeroImg} alt="Panasonic RZ Series split system air conditioner" style={{ width: "100%", display: "block" }} />
        </div>
      </div>
    </section>

    <BrandPageNav currentBrand="Panasonic" />

    <div className="body-wrapper ducted-systems p-3">

      {/* ── Logo + Intro ── */}
      <section style={{ paddingTop: 40, paddingBottom: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ maxWidth: 220, marginBottom: 20 }}>
              <img src={panasonicLogo} alt="Panasonic logo" style={{ width: "100%", display: "block" }} />
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 16, lineHeight: 1.3 }}>
              Panasonic RZ Series Split Systems
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Panasonic's RZ Series brings dependable, efficient cooling and heating to any room, backed by a multi-protection air filter and a design built to handle Australian conditions — from coastal salt air to peak summer heat.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              Every system is backed by Panasonic's manufacturer warranty, and our <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year installation warranty</Link> for complete peace of mind.
            </p>
          </div>
          <WhyHCA />
        </div>
      </section>

      {/* ── Products ── */}
      <section style={{ borderTop: "1px solid #e8eef5", paddingTop: 40, paddingBottom: 8 }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ background: "#0075C9", borderRadius: 10, padding: "18px 24px", marginBottom: 12 }}>
            <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>
              Panasonic RZ Series — Supplied &amp; Installed
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 20, maxWidth: 760 }}>
            One reliable reverse-cycle range spanning 2.5kW to 9.5kW — from single bedrooms through to large open-plan living areas.
          </p>
          <PanasonicProducts />
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
            <span style={{ fontSize: 14, color: "#6b7280" }}>Panasonic brochure</span>
            <a href={PanasonicPDF} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0075C9", textDecoration: "none", border: "1px solid #e8eef5", borderRadius: 8, padding: "5px 12px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0075C9" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5z"/></svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* ── Key Features ── */}
      <BrandFeatures features={panasonicSplitFeatures} heading="Key Features of Panasonic Split Systems" />

      {/* ── Why Choose Section ── */}
      <section style={{ paddingTop: 48, paddingBottom: 48, borderTop: "1px solid #e8eef5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Why Panasonic?</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
              Reliable comfort, engineered to last
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Panasonic pairs R32 inverter efficiency with a filtration system that keeps the air in your home cleaner — deactivating up to 99% of captured bacteria, allergens and viruses. The outdoor unit is built to shrug off heat, humidity and salt air for years of reliable performance.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              With optional Wi-Fi connectivity via the Comfort Cloud App, Panasonic systems are a smart long-term investment. Explore our <Link to="/ducted-systems" style={{ color: "#0075C9" }}>ducted systems</Link> or <Link to="/multi-head-systems" style={{ color: "#0075C9" }}>multi-head options</Link> for whole-home comfort.
            </p>
          </div>
          <div>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: 20, maxWidth: 320 }}>
              <img
                src={panasonicInstallImg}
                alt="Panasonic outdoor unit installed by Home Comfort Air in Paradise Point"
                style={{ width: "100%", display: "block" }}
              />
              <div style={{ padding: "10px 14px", background: "#f8fafc" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280" }}>
                  Paradise Point<span style={{ fontWeight: 500, color: "#9ca3af" }}> · Panasonic</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { q: "Is Panasonic a reliable air conditioner brand?", a: "Yes. Panasonic has decades of experience in inverter air conditioning and is known for dependable, long-lasting units backed by strong manufacturer support." },
                { q: "Does Panasonic have Wi-Fi control?", a: "Yes. With the optional network adaptor, you can control your system through the Panasonic Comfort Cloud App — including voice assistant integration." },
                { q: "What warranty does Panasonic offer?", a: "Panasonic split systems carry a manufacturer's warranty on parts and labour, plus our own 5-year installation warranty." },
              ].map((item, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 20px" }}>
                  <strong style={{ fontSize: 14, fontWeight: 700, color: "#1f2937", display: "block", marginBottom: 6 }}>{item.q}</strong>
                  <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section style={{ marginBottom: 48 }}>
        <div style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20, padding: "48px 40px", position: "relative", overflow: "hidden",
        }}>
          <FeatureBubble />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>Get A Quote</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                Panasonic Split System Quote
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 20 }}>
                New installation or replacement — submit your details and we'll get back to you shortly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
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
              <style>{`.panasonic_split_form .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
              <div className="panasonic_split_form"><Form hideTitle /></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Layout>
)

export default PanasonicProductsPage

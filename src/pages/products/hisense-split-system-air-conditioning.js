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
import HisenseProducts from "../../components/Products/HisenseSplitSystems"
import HisensePDF from "../../images/Hisense/J-Series-Air-Con-Brochure-19JAN2022_compressed.pdf"
import hisenseHeroImg from "../../images/Hisense/hisense j serie-hero.png"
import highEnergyImg from "../../images/Hisense/Key_Features/high-energy-1000.png"
import hisenseLogoImg from "../../images/Hisense/hisense.png"

export const Head = () => (
  <Fragment>
    <title>Supplied and Installed Hisense J Series Split System Air Conditioner</title>
    <meta name="description" content="Learn about the Hisense J Series split system air conditioning range for your home or space. Supplied & installed from $1,649 inc GST" />
    <Seo />
    <Schema />
  </Fragment>
)

const hisenseFeatures = [
  { title: "ConnectLife App Control", desc: "Control temperature, mode and airflow from anywhere over Wi-Fi.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg> },
  { title: "Smart Home Voice Control", desc: "Works with Google Assistant and Amazon Alexa for hands-free control.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> },
  { title: "360° Full DC Inverter", desc: "Efficient, steady heating and cooling that keeps running costs down.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Quiet Mode", desc: "Drops the indoor unit to its lowest fan speed for peaceful operation.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> },
  { title: "Silver Ion Filter & Self Cleaning", desc: "Captures airborne particles and keeps the heat exchanger dry between cycles.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg> },
  { title: "4D Auto-Swing", desc: "Vertical and horizontal auto-swing spreads airflow evenly around the room.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> },
  { title: "Anti-Corrosion Design", desc: "Outdoor unit built to handle harsh Australian conditions, including coastal air.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "R32 Refrigerant", desc: "A lower Global Warming Potential refrigerant, without compromising performance.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg> },
]

const HisenseSplitSystem = () => (
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
            Hisense J Series Split Systems
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            Smart Comfort, Built to Last
          </p>
          <Link to="/contact" style={{
            display: "inline-block", background: "#00c4b3", color: "#fff",
            fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: "2em", textDecoration: "none",
          }}>
            Get A Free Quote →
          </Link>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
          <img src={hisenseHeroImg} alt="Hisense J Series split system air conditioner installed in a living room" style={{ width: "100%", display: "block" }} />
        </div>
      </div>
    </section>

    <BrandPageNav currentBrand="Hisense" />

    <div className="body-wrapper ducted-systems p-3">

      {/* ── Logo + Intro ── */}
      <section style={{ paddingTop: 40, paddingBottom: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ maxWidth: 220, marginBottom: 20 }}>
              <img src={hisenseLogoImg} alt="Hisense logo" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 16, lineHeight: 1.3 }}>
              Hisense J Series
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Hisense has been developing consumer electronics for over five decades, with 12 R&amp;D centres worldwide. The J Series brings that engineering to a compact, easy-to-install reverse cycle split system — inverter driven, Wi-Fi connected, and built to handle Australian conditions, available in 2.5kW, 3.5kW, 5.3kW, 7.1kW and 8.0kW outputs.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              Every J Series unit is backed by Hisense's 5-year parts and labour warranty, plus our own <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year installation warranty</Link> for complete peace of mind.
            </p>
          </div>
          <WhyHCA />
        </div>
      </section>

      {/* ── Products ── */}
      <section style={{ borderTop: "1px solid #e8eef5", paddingTop: 40, paddingBottom: 8 }}>
        <div style={{ background: "#0075C9", borderRadius: 10, padding: "18px 24px", marginBottom: 24 }}>
          <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>
            Supplied &amp; Installed — Hisense J Series
          </h2>
        </div>
        <HisenseProducts />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
          <span style={{ fontSize: 14, color: "#6b7280" }}>Hisense J Series brochure</span>
          <a href={HisensePDF} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0075C9", textDecoration: "none", border: "1px solid #e8eef5", borderRadius: 8, padding: "5px 12px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0075C9" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5z"/></svg>
            Download PDF
          </a>
        </div>
      </section>

      {/* ── Key Features ── */}
      <BrandFeatures features={hisenseFeatures} heading="Key Features of the Hisense J Series" />

      {/* ── Why Choose Section ── */}
      <section style={{ paddingTop: 48, paddingBottom: 48, borderTop: "1px solid #e8eef5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Why Hisense?</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
              Dependable comfort, backed by a global manufacturer
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              The J Series pairs 360° full DC inverter efficiency with everyday conveniences — Wi-Fi and voice control through the ConnectLife app, I FEEL mode that reads the temperature near you rather than at the wall, and a silver ion filter with self-cleaning to keep the unit running fresh.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              The outdoor unit is built for harsh Australian conditions, including coastal environments. For whole-home comfort, explore our <Link to="/ducted-systems" style={{ color: "#0075C9" }}>ducted systems</Link> or <Link to="/multi-head-systems" style={{ color: "#0075C9" }}>multi-head options</Link>.
            </p>
          </div>
          <div>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: 20 }}>
              <img src={highEnergyImg} alt="Hisense J Series 360° Full DC Inverter high energy efficiency" style={{ width: "100%", display: "block" }} />
              <div style={{ padding: "10px 14px", background: "#f8fafc" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#6b7280" }}>
                  Hisense J Series<span style={{ fontWeight: 500, color: "#9ca3af" }}> · 360° Full DC Inverter</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { q: "What sizes does the J Series come in?", a: "The J Series is available in 2.5kW, 3.5kW, 5.3kW, 7.1kW and 8.0kW outputs, suiting anything from a single bedroom to a large open-plan living area." },
                { q: "Does the J Series have Wi-Fi control?", a: "Yes. J Series units connect via the Hisense ConnectLife app for remote control, and support Google Assistant and Amazon Alexa voice commands." },
                { q: "What warranty does Hisense offer?", a: "Hisense backs every J Series split system with a 5-year parts and labour warranty. We also include our own 5-year installation warranty." },
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
                Hisense J Series Quote
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
              <style>{`.hisense_form .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
              <div className="hisense_form"><Form hideTitle /></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Layout>
)

export default HisenseSplitSystem

import React, { Fragment } from 'react'
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Seo from '../../components/SEO-2'
import Schema from '../../components/Schema-2'
import StaticImage from "../../components/StaticQueryImages"
import Form from "../../components/QuoteForm"
import FeatureBubble from "../../components/FeatureBubble"
import BrandPageNav from "../../components/BrandPageNav"
import BrandFeatures from "../../components/BrandFeatures"
import WhyHCA from "../../components/WhyHCA"
import MideaProducts from '../../components/Products/MideaSplitsSystems'
import mideaLogo from "../../images/brands/midea-logo.png"
import MideaPDF from "../../images/Midea.pdf"

export const Head = () => (
  <Fragment>
    <title>Supplied and Installed Midea Split System Air Conditioners</title>
    <meta name="description" content="Discover Midea Athena split system air conditioning for your home or space. Supplied & installed from $1199 inc GST" />
    <Seo />
    <Schema />
  </Fragment>
)

const mideaFeatures = [
  { title: "Inverter Technology", desc: "Advanced efficiency for significantly lower energy bills.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Quiet Operation", desc: "Peaceful environment for bedrooms and home offices.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> },
  { title: "Wi-Fi Control", desc: "Smart controls with programmable timers and scheduling.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M10.54 16a6 6 0 0 1 2.92 0"/><circle cx="12" cy="20" r="1"/></svg> },
  { title: "Heating & Cooling", desc: "Year-round comfort for every season.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg> },
  { title: "High Energy Rating", desc: "Top star ratings for reduced day-to-day running costs.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { title: "10yr Warranty", desc: "Midea's industry-leading 10-year manufacturer warranty.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
]

const MideaProductsPage = () => (
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
            Midea Split Systems
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            Midea Comfort, Made Affordable
          </p>
          <Link to="/contact" style={{
            display: "inline-block", background: "#00c4b3", color: "#fff",
            fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: "2em", textDecoration: "none",
          }}>
            Get A Free Quote →
          </Link>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
          <StaticImage filename="brands/Hero/Midea-hero-1.png" alt="Midea split system air conditioner" />
        </div>
      </div>
    </section>

    <BrandPageNav currentBrand="Midea" />

    <div className="body-wrapper ducted-systems p-3">

      {/* ── Logo + Intro ── */}
      <section style={{ paddingTop: 40, paddingBottom: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <img src={mideaLogo} alt="Midea logo" style={{ maxWidth: 220, height: "auto", display: "block", marginBottom: 20 }} />
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 16, lineHeight: 1.3 }}>
              Midea Athena Series
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Midea is a global leader in air conditioning, trusted in over 200 countries. Their Athena series combines advanced inverter technology with an industry-leading 10-year warranty — making it one of the best value propositions in the Australian market for homeowners who want reliable, efficient comfort without the premium price tag.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              All systems include Wi-Fi control via the Midea app, and are backed by our <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year installation warranty</Link>.
            </p>
          </div>
          <WhyHCA />
        </div>
      </section>

      {/* ── Products ── */}
      <section style={{ borderTop: "1px solid #e8eef5", paddingTop: 40, paddingBottom: 8 }}>
        <div style={{ background: "#0075C9", borderRadius: 10, padding: "18px 24px", marginBottom: 24 }}>
          <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>
            Supplied &amp; Installed — Midea Systems
          </h2>
        </div>
        <MideaProducts />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
          <span style={{ fontSize: 14, color: "#6b7280" }}>Midea brochure</span>
          <a href={MideaPDF} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#0075C9", textDecoration: "none", border: "1px solid #e8eef5", borderRadius: 8, padding: "5px 12px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0075C9" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5z"/></svg>
            Download PDF
          </a>
        </div>
      </section>

      {/* ── Key Features ── */}
      <BrandFeatures features={mideaFeatures} heading="Key Features of Midea Split Systems" />

      {/* ── Why Choose Section ── */}
      <section style={{ paddingTop: 48, paddingBottom: 48, borderTop: "1px solid #e8eef5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Why Midea?</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
              Premium performance, unbeatable value
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Midea's inverter technology continuously adjusts output to match the room's needs — saving energy without sacrificing comfort. Their quiet operation makes them an ideal fit for bedrooms, home offices, and living rooms.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              With a 10-year manufacturer warranty and competitive pricing, Midea delivers exceptional long-term value. Need to cool multiple rooms? See our <Link to="/multi-head-systems" style={{ color: "#0075C9" }}>multi-head systems</Link> or <Link to="/ducted-systems" style={{ color: "#0075C9" }}>ducted options</Link>.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "Is Midea a good brand?", a: "Yes. Midea is the world's largest home appliance manufacturer and one of Australia's fastest-growing AC brands, known for quality at an accessible price." },
              { q: "What warranty does Midea offer?", a: "Midea offers an industry-leading 10-year manufacturer warranty on their Athena series — longer than most competitors." },
              { q: "Does Midea have Wi-Fi control?", a: "Yes. All Midea Athena units include built-in Wi-Fi for control via the Midea app — schedule, monitor, and adjust from anywhere." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f8fafc", border: "1px solid #e8eef5", borderRadius: 12, padding: "16px 20px" }}>
                <strong style={{ fontSize: 14, fontWeight: 700, color: "#1f2937", display: "block", marginBottom: 6 }}>{item.q}</strong>
                <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{item.a}</span>
              </div>
            ))}
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
                Midea Split System Quote
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
              <style>{`.midea_form .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
              <div className="midea_form"><Form hideTitle /></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Layout>
)

export default MideaProductsPage

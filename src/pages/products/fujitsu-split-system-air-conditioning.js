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
import FujitsuProducts from '../../components/Products/FujitsuSplitSystems'
import fujitsuLogo from "../../images/products/Haier/fujistsu/logo-fujitsu.svg"
import fujitsuHero from "../../images/products/Haier/fujistsu/fujitsu-comfort-series-indoor-unit.webp"

export const Head = () => (
  <Fragment>
    <title>Supplied and Installed Fujitsu Split System Air Conditioners</title>
    <meta name="description" content="Check out our supplied and installed Fujitsu Comfort Series split system air conditioners, reliable Japanese engineering for heating and cooling." />
    <Seo
      title="Supplied and Installed Fujitsu Split System Air Conditioners | Home Comfort Air"
      description="Check out our supplied and installed Fujitsu Comfort Series split system air conditioners, reliable Japanese engineering for heating and cooling."
      url="https://homecomfortair.net.au/products/fujitsu-split-system-air-conditioning/"
    />
    <Schema />
  </Fragment>
)

const fujitsuFeatures = [
  { title: "Inverter Technology", desc: "Smart inverter for efficient, consistent comfort.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Quiet Operation", desc: "Low-noise operation for peaceful living spaces.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> },
  { title: "R32 Refrigerant", desc: "Lower environmental impact, high efficiency refrigerant.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/></svg> },
  { title: "Heating & Cooling", desc: "Year-round reverse cycle performance.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg> },
  { title: "Japanese Engineering", desc: "Decades of Fujitsu air conditioning expertise.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { title: "5yr Warranty", desc: "Fujitsu manufacturer warranty for peace of mind.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
]

const FujitsuProductsPage = () => (
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
            Fujitsu Split Systems
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            Trusted Comfort, Built to Last
          </p>
          <Link to="/contact" style={{
            display: "inline-block", background: "#00c4b3", color: "#fff",
            fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: "2em", textDecoration: "none",
          }}>
            Get A Free Quote →
          </Link>
        </div>
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)", background: "#fff" }}>
          <img src={fujitsuHero} alt="Fujitsu Comfort Series split system air conditioner" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>
    </section>

    <BrandPageNav currentBrand="Fujitsu" />

    <div className="body-wrapper ducted-systems p-3">

      {/* ── Logo + Intro ── */}
      <section style={{ paddingTop: 40, paddingBottom: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ maxWidth: 220, marginBottom: 20 }}>
              <img src={fujitsuLogo} alt="Fujitsu logo" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 16, lineHeight: 1.3 }}>
              Fujitsu Comfort Series
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Fujitsu General is a world leader in air conditioning, with decades of Japanese engineering behind every unit. The Comfort Series split systems deliver dependable inverter performance, quiet operation, and efficient R32 refrigerant technology at a price point built for everyday Australian homes.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              All systems are covered by a 5-year manufacturer warranty and our <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year installation warranty</Link>.
            </p>
          </div>
          <WhyHCA />
        </div>
      </section>

      {/* ── Products ── */}
      <section style={{ borderTop: "1px solid #e8eef5", paddingTop: 40, paddingBottom: 8 }}>
        <div style={{ background: "#0075C9", borderRadius: 10, padding: "18px 24px", marginBottom: 24 }}>
          <h2 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>
            Supplied &amp; Installed — Fujitsu Systems
          </h2>
        </div>
        <FujitsuProducts />
      </section>

      {/* ── Key Features ── */}
      <BrandFeatures features={fujitsuFeatures} heading="Key Features of Fujitsu Split Systems" />

      {/* ── Why Choose Section ── */}
      <section style={{ paddingTop: 48, paddingBottom: 48, borderTop: "1px solid #e8eef5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Why Fujitsu?</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
              Proven engineering at an honest price
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9, marginBottom: 16 }}>
              Fujitsu General has been manufacturing air conditioning since 1936, and that experience shows in the Comfort Series — a reliable, no-fuss range that our installers consistently rate for build quality and longevity. For homeowners who want a trusted brand without paying a premium, Fujitsu is a smart choice.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.9 }}>
              The Comfort Series covers everything from single bedrooms to large open-plan living areas. For multi-room solutions, explore our <Link to="/multi-head-systems" style={{ color: "#0075C9" }}>multi-head systems</Link> or <Link to="/ducted-systems" style={{ color: "#0075C9" }}>ducted options</Link>.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { q: "Is Fujitsu a reliable brand?", a: "Yes. Fujitsu General has been manufacturing air conditioning since 1936 and is one of the most trusted names in the industry. We've installed their systems for years and find them consistently reliable." },
              { q: "What warranty does Fujitsu offer?", a: "Fujitsu offers a 5-year parts and labour warranty on the Comfort Series, backed by our own 5-year installation warranty." },
              { q: "What refrigerant does the Comfort Series use?", a: "The Comfort Series uses R32 refrigerant, which has a lower environmental impact and delivers efficient heating and cooling performance." },
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
                Fujitsu Split System Quote
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
              <style>{`.fujitsu_form .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
              <div className="fujitsu_form"><Form hideTitle /></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </Layout>
)

export default FujitsuProductsPage

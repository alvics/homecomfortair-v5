import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import Form from "../components/QuoteForm"
import FeatureBubble from "../components/FeatureBubble"
import StaticImage from "../components/StaticQueryImages"
import BrandsBtn from "../components/BrandsBtn"
import AboutSection from "../components/AboutSection"
import GoogleReviewsCarousel from "../components/Sections/GoogleReviews"
// import HaierProducts from "../components/Products/HaierSplitSystems"
import MideaProducts from "../components/Products/MideaSplitsSystems"

const PAGE_TITLE = "Gold Coast Air Conditioning | Supply & Install | Home Comfort Air"
const PAGE_DESC = "Gold Coast air conditioning specialists. Supply, installation & servicing of split system, ducted & multi-head air conditioning from Pimpama to Currumbin. Licensed installers, 5-year warranty. 5.0 Stars · 37 Google Reviews."

export const Head = () => (
  <Fragment>
    <title>{PAGE_TITLE}</title>
    <meta name="description" content={PAGE_DESC} />
    <Seo
      title={PAGE_TITLE}
      description={PAGE_DESC}
      url="https://homecomfortair.net.au/gold-coast-air-conditioning/"
    />
    <Schema />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          },
        })),
      })}
    </script>
  </Fragment>
)

const suburbs = [
  "Pimpama", "Ormeau", "Upper Coomera", "Coomera", "Hope Island", "Sanctuary Cove",
  "Runaway Bay", "Paradise Point", "Helensvale", "Biggera Waters", "Labrador",
  "Pacific Pines", "Tamborine Mountain", "Mount Nathan", "Maudsland", "Southport",
  "Ashmore", "Nerang", "Merrimac", "Mermaid Waters", "Carrara", "Gilston", "Tallai",
  "Mudgeeraba", "Clear Island Waters", "Broadbeach", "Surfers Paradise",
  "Burleigh Heads", "Reedy Creek", "Robina", "Bonogin", "Palm Beach", "Elanora",
  "Tallebudgera", "Currumbin",
]

const highlights = [
  {
    value: "18+ Years", label: "Servicing the Gold Coast",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    value: "5 Year", label: "Installation Warranty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  {
    value: "Licensed", label: "ARCtick & Fully Insured",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>,
  },
  {
    value: "5.0 Stars", label: "37 Google Reviews",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
]

const FAQ_ITEMS = [
  {
    q: "Which Gold Coast suburbs do you service?",
    a: "We install and service air conditioning right across the Gold Coast — from Pimpama and Coomera in the north through Southport, Nerang and Robina, down to Burleigh Heads, Currumbin and the Tweed Heads border.",
  },
  {
    q: "How quickly can you install a split system?",
    a: "Most standard split system installations are completed in a single visit, usually 2–4 hours. We supply and install in the one appointment — no separate delivery and fitting visits.",
  },
  {
    q: "Do you supply and install all major brands?",
    a: "Yes — we supply and install Daikin, Mitsubishi Electric, Samsung, Haier, Midea, Toshiba, Hitachi and Mitsubishi Heavy Industries systems across the Gold Coast.",
  },
  {
    q: "What warranty comes with a new installation?",
    a: "Every installation is backed by our 5-year workmanship warranty, on top of the manufacturer's warranty (typically 5–10 years on parts, depending on the brand).",
  },
  {
    q: "Do you install ducted and multi-head systems too?",
    a: "Yes. Alongside wall-hung split systems, we supply and install ducted air conditioning and multi-head systems for larger homes and multi-room comfort.",
  },
  {
    q: "How do I get a price for my home?",
    a: "Submit your details through the quote form below with your suburb and a little about your space, and we'll get back to you with pricing — usually within a few hours.",
  },
]

const GoldCoastPage = () => (
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
            Supply &amp; Install
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Gold Coast Air Conditioning
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            The smart choice in air conditioning
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.7, maxWidth: 480 }}>
            We supply and install split system, ducted and multi-head air conditioning for Gold Coast homes — from Pimpama to Currumbin. Licensed installers, backed by a 5-year workmanship warranty.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to="/contact" style={{
              display: "inline-block", background: "#00c4b3", color: "#fff",
              fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: "2em", textDecoration: "none",
            }}>
              Get A Free Quote →
            </Link>
            <a href="#gc-quote" style={{
              display: "inline-block", background: "rgba(255,255,255,0.15)", color: "#fff",
              fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: "2em",
              textDecoration: "none", backdropFilter: "blur(4px)",
            }}>
              Request A Quote ↓
            </a>
          </div>
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
            textAlign: "center", padding: "28px 16px",
            borderRight: i < highlights.length - 1 ? "1px solid #e8eef5" : "none",
          }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{h.icon}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#0075C9", lineHeight: 1 }}>{h.value}</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>{h.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>

      {/* ── Intro + map ── */}
      <section style={{ marginBottom: 72 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
              Air Conditioning Gold Coast
            </p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
              Split System &amp; Ducted Specialists
            </h2>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85, marginBottom: 20 }}>
              Looking for a new split system air conditioner, or replacing an old, worn-out unit? We install{" "}
              <Link to="/split-systems" style={{ color: "#0075C9" }}>wall hung</Link> and{" "}
              <Link to="/ducted-systems" style={{ color: "#0075C9" }}>ducted</Link> air conditioning for Gold Coast homes throughout South East Queensland — supplied and installed in a single visit.
            </p>
            <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.85 }}>
              Wall hung split systems are the most practical and affordable comfort solution for a single room, while ducted air conditioning cools and heats every room in your home. All our systems use the latest inverter technology, which only draws the power needed to hold your set temperature — helping keep your electricity bill down.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", marginBottom: 10 }}>Gold Coast &amp; Surrounding Areas</p>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <StaticImage filename="map-gold-coast.png" alt="Gold Coast service area map" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="how-it-works-section" style={{ marginBottom: 72 }}>
        <div className="section-heading">
          <h2 className="section-title">How It Works</h2>
        </div>
        <div className="how-it-works-grid">
          <div className="how-step">
            <div className="how-step-number">1</div>
            <div className="how-step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="how-step-title">Get a Free Quote</h3>
            <p className="how-step-text">Tell us about your space and we'll recommend the right system for your Gold Coast home and budget — no obligation.</p>
          </div>
          <div className="how-step-connector" />
          <div className="how-step">
            <div className="how-step-number">2</div>
            <div className="how-step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h3 className="how-step-title">We Supply &amp; Install</h3>
            <p className="how-step-text">Our licensed technicians supply and install your system in one visit — on time, tidy, and no hidden extras.</p>
          </div>
          <div className="how-step-connector" />
          <div className="how-step">
            <div className="how-step-number">3</div>
            <div className="how-step-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M8 12l2.5 2.5L16 9"/>
              </svg>
            </div>
            <h3 className="how-step-title">Enjoy the Comfort</h3>
            <p className="how-step-text">Backed by up to 10 years manufacturer warranty plus our 5-year installation warranty.</p>
          </div>
        </div>
      </section>

      {/* ── Products + Quote form ── */}
      <section className="section-2" id="gc-quote" style={{ marginBottom: 72 }}>
        <div className="section-heading">
          <h2 className="section-title">Split System Air Conditioning</h2>
        </div>
        <div className="section-2-grid">
          <div className="section-2-products">
            <MideaProducts />
            <div className="mt-2 mb-2">
              <p className="fsz-12">*Prices inc GST</p>
              <Link to="/products" className="btn-- btn-primary--">View All Deals</Link>
            </div>
          </div>
          <div className="section-2-form">
            <Form title="Gold Coast Quote Request" />
          </div>
        </div>
      </section>

      {/* ── Browse Our Brands ── */}
      <section style={{
        background: "linear-gradient(135deg, #f0f6ff 0%, #f8faff 100%)",
        borderRadius: 20, border: "1px solid #e0ecfb",
        padding: "36px 32px", marginBottom: 72,
      }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h2 className="section-title" style={{ fontSize: 22, marginBottom: 6 }}>Brands We Install on the Gold Coast</h2>
          <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>
            We supply &amp; install all major brands — click to browse models &amp; pricing
          </p>
        </div>
        <BrandsBtn />
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" style={{ marginBottom: 40 }}>
        <GoogleReviewsCarousel />
      </section>

      {/* ── Local Experts + Why Choose Us ── */}
      <AboutSection />

      {/* ── Gold Coast Suburbs We Service ── */}
      <section style={{ marginTop: 72, marginBottom: 72 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
          Local &amp; Available
        </p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3 }}>
          Gold Coast Suburbs We Service
        </h2>
        <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8, marginBottom: 24, maxWidth: 720 }}>
          We've been installing split system air conditioning for Gold Coast family homes, property managers and builders for over 18 years, covering suburbs including:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {suburbs.map((suburb) => (
            <span key={suburb} style={{
              display: "inline-block", padding: "8px 16px",
              background: "#f8fafc", border: "1px solid #e8eef5", borderRadius: "2em",
              fontSize: 13, fontWeight: 600, color: "#374151",
            }}>
              {suburb}
            </span>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" style={{ marginBottom: 56 }}>
        <div className="section-heading">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          {FAQ_ITEMS.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary className="faq-question">{item.q}</summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section style={{ marginBottom: 56 }}>
        <div style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20, padding: "48px 40px", position: "relative", overflow: "hidden",
        }}>
          <FeatureBubble />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
                Get Started Today
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                Gold Coast Split System Installation Quotes
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                We install all brands of split system air conditioners for new construction and existing homes. Looking for a replacement unit or a new installation? Submit your details and we'll contact you back shortly.
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontFamily: "'Caveat', cursive", marginBottom: 20 }}>
                "You could also leave the best suited time to call you back."
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
        </div>
      </section>

      {/* ── CTA banner ── */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <div className="cta-banner-text">
            <h3 className="cta-banner-heading">Ready to get started?</h3>
            <p className="cta-banner-sub">Browse our full range of air conditioning deals.</p>
          </div>
          <Link to="/products" className="cta-banner-btn">View All Our Deals</Link>
        </div>
      </div>

    </div>

  </Layout>
)

export default GoldCoastPage

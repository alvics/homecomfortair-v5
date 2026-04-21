import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import StaticImage from "../components/StaticQueryImages"
import Form from "../components/QuoteForm"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import FeatureBubble from "../components/FeatureBubble"
import GoogleReviewsCarousel from "../components/Sections/GoogleReviews"

export const Head = () => (
  <Fragment>
    <title>Multi-head Split Systems | Home Comfort Air Gold Coast</title>
    <meta name="description" content="Discover how HOME COMFORT AIR Multi-head air conditioning system can connect up to five wall mounted indoor head units to one outdoor unit." />
    <Seo />
    <Schema />
  </Fragment>
)

const stats = [
  {
    value: "5",
    label: "Zones Per Unit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    value: "1",
    label: "Outdoor Unit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    value: "5–12kW",
    label: "System Range",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    value: "5yr",
    label: "Install Warranty",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
]

const MultiHeadSystemsPage = () => (
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
            Multi-Head Split Systems
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            One Outdoor Unit — Total Indoor Comfort across every room.
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
          <StaticImage filename="brands/Hero/multi-head-hero.jpg" alt="Multi-head split system air conditioning" />
        </div>
      </div>
    </section>

    {/* ── Body ── */}
    <div className="container-fluid px-lg-5 mt-3">
      <div className="body-wrapper pt-1">

        {/* Stats strip */}
        <section style={{ borderBottom: "1px solid #e8eef5", marginBottom: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                textAlign: "center",
                padding: "28px 16px",
                borderRight: i < stats.length - 1 ? "1px solid #e8eef5" : "none",
              }}>
                <div style={{ color: "#0075C9", marginBottom: 8, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#0075C9", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1 — Multiple Rooms Solution */}
        <section style={{ paddingBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Multiple Rooms Solution</p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
                Cool every room from a single outdoor unit
              </h2>
              <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 16 }}>
                A multi-head air conditioning system can connect up to five wall-mounted indoor units to a single outdoor unit. It looks and works just like a standard split system — the key difference is the outdoor unit's ability to handle multiple indoor heads simultaneously.
              </p>
              <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 24 }}>
                Home Comfort Air installs multi-head systems from 5.0kW units (2 indoor heads) up to 12kW units (5 indoor heads). Talk to us and we'll find the right configuration for your home.
              </p>
              <a href="tel:0404602657" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#0075C9", color: "#fff", fontWeight: 700, fontSize: 15,
                padding: "13px 28px", borderRadius: "2em", textDecoration: "none",
              }}>
                📞 0404 602 657
              </a>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}>
              <StaticImage filename="samsung-main.jpg" alt="Multi head split system indoor unit" />
            </div>
          </div>
        </section>

        {/* Section 2 — Why Multi-Head? */}
        <section style={{ paddingBottom: 64, borderTop: "1px solid #e8eef5", paddingTop: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", order: -1 }}>
              <StaticImage filename="multi-2.jpg" alt="Multi head air conditioning systems" />
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Why Multi-Head?</p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
                Independent comfort for every room
              </h2>
              <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 24 }}>
                If you want to cool individual rooms throughout your home without the footprint of multiple outdoor units, a multi-head system is the smart choice. Each indoor unit runs independently — different temperatures, different schedules, total control.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                {[
                  { title: "Space Saving", desc: "Only one outdoor unit needed, no matter how many rooms." },
                  { title: "Zone Control", desc: "Set different temperatures independently in each room." },
                  { title: "Flexible Sizing", desc: "Mix and match indoor unit sizes to suit each space." },
                  { title: "No Ducted Ceiling Space", desc: "Ideal where there's no room for a ducted system." },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: "#f8fafc", border: "1px solid #e8eef5", borderRadius: 12,
                    padding: "20px 16px",
                  }}>
                    <strong style={{ fontSize: 14, fontWeight: 700, color: "#1f2937", display: "block", marginBottom: 6 }}>{item.title}</strong>
                    <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Technology + Video */}
        <section style={{ paddingBottom: 64, borderTop: "1px solid #e8eef5", paddingTop: 56 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>The Technology</p>
              <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 20, lineHeight: 1.3 }}>
                Intelligent inverter technology
              </h2>
              <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 16 }}>
                Multi-head split systems use the same innovative inverter technology found in premium single-head units — elegant design, fresh filtered air, and smart energy management that only runs as hard as needed.
              </p>
              <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9 }}>
                The result is personalised comfort across multiple rooms with lower running costs and a quieter, more durable system.
              </p>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.1)", aspectRatio: "16/9", position: "relative" }}>
              <iframe
                title="Multi head air conditioning systems"
                width="100%"
                height="100%"
                style={{ display: "block", border: 0 }}
                src="https://www.youtube.com/embed/epBJsKWYkdk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

      </div>
    </div>

    {/* ── Reviews strip ── */}
    <section className="full-bleed" style={{ background: "#f8fafc", padding: "56px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <GoogleReviewsCarousel />
      </div>
    </section>

    <div className="container-fluid px-lg-5 mt-3">
      <div className="body-wrapper pt-1">

        {/* Section 4 — Quote Form */}
        <section style={{ paddingBottom: 64, paddingTop: 56 }}>
          <div style={{
            background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
            borderRadius: 20,
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
          }}>
            <FeatureBubble />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>Get A Quote</p>
                <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                  Multi-Head System Installation Quote
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                  We install multi-head systems in new constructions and existing homes across South East Queensland. Looking for a new installation or a replacement unit?
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
                <style>{`.multi-head-form .hca-wrapper { background: transparent; box-shadow: none; border: none !important; padding: 0; border-radius: 0 !important; max-width: 100%; }`}</style>
                <div className="multi-head-form"><Form hideTitle /></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

    {/* ── CTA Banner ── */}
    <section className="full-bleed" style={{
      background: "linear-gradient(135deg, #00c4b3 0%, #00a89a 100%)",
      padding: "56px 24px",
      textAlign: "center",
      marginBottom: "-32px",
    }}>
      <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
        Ready to cool every room in your home?
      </h2>
      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 16, marginBottom: 28 }}>
        Get a free in-home quote from our licensed team.
      </p>
      <Link to="/contact" style={{
        display: "inline-block",
        background: "#fff",
        color: "#0075C9",
        fontWeight: 700,
        fontSize: 15,
        padding: "13px 32px",
        borderRadius: "2em",
        textDecoration: "none",
      }}>
        Book a Quote →
      </Link>
    </section>

  </Layout>
)

export default MultiHeadSystemsPage

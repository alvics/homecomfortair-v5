import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layouts/layout"
import Form from "../../components/QuoteForm"
import Seo from "../../components/SEO-2"
import Schema from "../../components/Schema-2"
import BrandsBtn from "../../components/BrandsBtn"
import StickyBrandNav from "../../components/StickyBrandNav"
import RoomSizeCalculator from "../../components/RoomSizeCalculator"
import FeatureBubble from "../../components/FeatureBubble"

import AllFilteredProducts from "../../components/Products/AllFilteredProducts"
import MideaProducts      from "../../components/Products/MideaSplitsSystems"
import HitachiProducts    from "../../components/Products/HitachiSplitSystems"
import HaierProducts      from "../../components/Products/HaierSplitSystems"
import SamsungProducts    from "../../components/Products/SamsungSplitSystems"
import ToshibaProducts    from "../../components/Products/ToshibaSplitSystems"
import MHIProducts        from "../../components/Products/MHISplitSytems"
import MitsubishiProducts from "../../components/Products/MitsubishiElectricSplits"
import DaikinProducts     from "../../components/Products/DaikinSplitSytems"
import FujitsuProducts    from "../../components/Products/FujitsuSplitSystems"

import heroServiceImg from "../../images/hero-3.jpg"
import backToBackImg from "../../images/back_to_back_installation.png"
import upAndOverImg from "../../images/up_and_over_installation.png"

const BRANDS = [
  { id: "midea",      label: "Midea",              shortLabel: "Midea",      color: "#0099cc" },
  { id: "hitachi",    label: "Hitachi",             shortLabel: "Hitachi",    color: "#c3002f" },
  { id: "haier",      label: "Haier",               shortLabel: "Haier",      color: "#005AAB" },
  { id: "samsung",    label: "Samsung",             shortLabel: "Samsung",    color: "#1428A0" },
  { id: "toshiba",    label: "Toshiba",             shortLabel: "Toshiba",    color: "#D01C22" },
  { id: "mhi",        label: "Mitsubishi Heavy",    shortLabel: "MHI",        color: "#e31f26" },
  { id: "mitsubishi", label: "Mitsubishi Electric", shortLabel: "Mitsubishi", color: "#cc0000" },
  { id: "daikin",     label: "Daikin",              shortLabel: "Daikin",     color: "#00a1e5" },
  { id: "fujitsu",    label: "Fujitsu",             shortLabel: "Fujitsu",    color: "#EA0000" },
]

export const Head = () => (
  <Fragment>
    <title>Split System Air Conditioning — Supplied &amp; Installed | Home Comfort Air</title>
    <meta name="description" content="Browse split system air conditioners from Daikin, Mitsubishi, Samsung, Haier, Midea & more. Supplied and installed on the Gold Coast & Brisbane." />
    <Seo
      title="Split System Air Conditioning — Supplied & Installed | Home Comfort Air"
      description="Browse split system air conditioners from Daikin, Mitsubishi, Samsung, Haier, Midea & more. Supplied and installed on the Gold Coast & Brisbane."
      url="https://homecomfortair.net.au/products/split-system-air-conditioning/"
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

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)


const WhyChooseUs = () => (
  <div style={{
    border: "1px solid #e8eef5",
    borderRadius: 14,
    padding: "20px 24px",
    background: "#fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  }}>
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0075C9", marginBottom: 16 }}>
      Why Choose Us
    </p>

    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flexShrink: 0, marginTop: 2 }}>
          <GoogleIcon />
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#1f2937", margin: 0 }}>
            5.0 ★ Google Rating
          </p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>37 verified reviews</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flexShrink: 0, width: 20, marginTop: 2 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#1f2937", margin: 0 }}>5-Year Installation Warranty</p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>On all installs we complete</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flexShrink: 0, width: 20, marginTop: 2 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#1f2937", margin: 0 }}>Licensed &amp; Fully Insured</p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>ARCtick licensed/QBE Insured</p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flexShrink: 0, width: 20, marginTop: 2 }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#1f2937", margin: 0 }}>Same-Week Installs Available</p>
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>Gold Coast · Brisbane · Ipswich</p>
        </div>
      </div>

    </div>
  </div>
)

const BrandHeading = ({ label, color }) => (
  <div style={{ display: "flex", alignItems: "stretch", gap: 14, marginBottom: 20 }}>
    <div style={{ width: 4, borderRadius: 4, background: color, flexShrink: 0 }} />
    <div>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94a3b8", margin: "0 0 4px" }}>
        Supply &amp; Install
      </p>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#041521", margin: 0, lineHeight: 1.2 }}>
        {label} Air Conditioning
      </h2>
    </div>
  </div>
)

const FAQ_ITEMS = [
  {
    q: "What does supply and install include?",
    a: "Your price covers the indoor unit, outdoor unit, copper pipe, electrical connections, installation labour, system commissioning, and a 5-year installation warranty. No hidden extras.",
  },
  {
    q: "How long does installation take?",
    a: "Most standard split system installs are completed in 2–4 hours. Longer pipe runs or more complex setups may take a little longer — we'll advise you at quoting stage.",
  },
  {
    q: "Do I need council approval?",
    a: "In most cases, no. Residential split system installations are considered exempt development in Queensland. We'll let you know if your specific situation requires anything further.",
  },
  {
    q: "What warranty comes with my system?",
    a: "All units carry the manufacturer's warranty (typically 5-10 years on parts and labour). We also provide a separate 5-year installation warranty on all work we complete.",
  },
  {
    q: "What's the difference between back-to-back and up & over?",
    a: "Back-to-back means the indoor and outdoor units sit on either side of the same wall — minimal pipe run, quickest to install. Up & over routes copper pipes through ceiling space and down the outside wall, used when the outdoor unit needs to be placed further away.",
  },
  {
    q: "How much does a split system cost to run?",
    a: "Modern inverter systems are very efficient. A typical 3.5kW unit costs roughly $0.25–$0.40 per hour to run in Queensland, depending on your energy tariff and how hard the system works.",
  },
  {
    q: "Do you service the Gold Coast, Brisbane and Ipswich?",
    a: "Yes — we cover the Gold Coast, Brisbane, and Ipswich. Fill in the quote form with your address and we'll confirm availability in your area.",
  },
]

const FaqAccordion = ({ items = FAQ_ITEMS }) => {
  const [open, setOpen] = useState(null)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #e8eef5" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 16,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 14, color: "#1f2937" }}>{item.q}</span>
            <span style={{ flexShrink: 0, color: "#0075C9", fontSize: 20, fontWeight: 300, lineHeight: 1 }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          <p style={{
            fontSize: 13,
            color: "#4b5563",
            lineHeight: 1.75,
            marginTop: 0,
            maxHeight: open === i ? "500px" : 0,
            paddingBottom: open === i ? 16 : 0,
            overflow: "hidden",
            transition: "max-height 0.2s ease, padding-bottom 0.2s ease",
          }}>
            {item.a}
          </p>
        </div>
      ))}
    </div>
  )
}

const NAV_HEIGHT = 68

const ProductsPage = () => {
  const [filterKw, setFilterKw] = useState(null)
  const [calcKey, setCalcKey] = useState(0)
  const [calcOpen, setCalcOpen] = useState(false)
  const [installModal, setInstallModal] = useState(null)

  const handleBrandClick = (id) => {
    setFilterKw(null)
    setCalcKey(k => k + 1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 60
      window.scrollTo({ top: y, behavior: "smooth" })
    }, 50)
  }

  const handleCalcResult = (kw) => {
    setFilterKw(kw)
    if (kw && !calcOpen) setCalcOpen(true)
  }

  return (
    <Layout>
      <StickyBrandNav brands={BRANDS} onBrandClick={filterKw ? handleBrandClick : undefined} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
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
              Split System Air Conditioning
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.5 }}>
              Supplied &amp; Installed — from leading brands including Daikin, Mitsubishi, Samsung, Haier &amp; more.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
              <a href="#midea" style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: "2em",
                textDecoration: "none",
                backdropFilter: "blur(4px)",
              }}>
                Browse Products ↓
              </a>
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
            <img src={heroServiceImg} alt="Split system air conditioning" style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 340 }} />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "24px 16px 64px" }}>

        {/* ── Brand Grid + Why Choose Us ────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 300px",
          marginTop: 40,
          gap: 32,
          alignItems: "start",
          marginBottom: 32,
        }}
          className="brands-why-grid"
        >
          <div>
            <BrandsBtn />
          </div>
          <WhyChooseUs />
        </div>

        {/* ── Room Size Calculator (collapsible) ───────────────────── */}
        <div style={{ marginBottom: 40 }}>
          <button
            onClick={() => setCalcOpen(o => !o)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: calcOpen ? "#f0f7ff" : "#f8fafc",
              border: `1px solid ${calcOpen ? "#bfdbfe" : "#e8eef5"}`,
              borderRadius: calcOpen ? "12px 12px 0 0" : 12,
              padding: "14px 20px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={calcOpen ? "#0075C9" : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>
              </svg>
              <span style={{ fontWeight: 700, fontSize: 14, color: calcOpen ? "#0075C9" : "#374151" }}>
                Not sure what size you need?
              </span>
              <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 400 }}>
                — Use our room size calculator
              </span>
              {filterKw && (
                <span style={{
                  background: "#0075C9",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "2px 10px",
                  borderRadius: "2em",
                  letterSpacing: "0.05em",
                }}>
                  {filterKw}kW filtered
                </span>
              )}
            </div>
            <svg
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ transition: "transform 0.2s", transform: calcOpen ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {calcOpen && (
            <div style={{
              background: "#fff",
              border: "1px solid #bfdbfe",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              padding: "20px 20px 16px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20, marginTop: 0, maxWidth: 560 }}>
                Enter your room dimensions and we'll recommend the right kW size — and filter the products below to match.
              </p>
              <RoomSizeCalculator key={calcKey} onResult={handleCalcResult} />
              {filterKw && (
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 13, color: "#6b7280" }}>
                    Showing <strong style={{ color: "#0075C9" }}>{filterKw}kW</strong> products across all brands
                  </span>
                  <button
                    onClick={() => { setFilterKw(null); setCalcKey(k => k + 1) }}
                    style={{ fontSize: 12, color: "#6b7280", background: "none", border: "1px solid #e2e8f0", borderRadius: "2em", padding: "4px 12px", cursor: "pointer", fontWeight: 600 }}
                  >
                    Clear filter
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "0 0 40px" }} />

        {/* ── Products: filtered (merged) or by brand ───────────────── */}
        {filterKw ? (
          <section className="mb-12">
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 32,
            }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0075C9", margin: "0 0 6px" }}>
                  Filtered Results
                </p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#041521", margin: 0, lineHeight: 1.2 }}>
                  {filterKw}kW Split Systems — All Brands
                </h2>
              </div>
              <button
                onClick={() => { setFilterKw(null); setCalcKey(k => k + 1) }}
                style={{
                  background: "none",
                  border: "1px solid #e2e8f0",
                  borderRadius: "2em",
                  padding: "8px 18px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#6b7280",
                  whiteSpace: "nowrap",
                }}
              >
                ← Show all brands
              </button>
            </div>
            <AllFilteredProducts filterKw={filterKw} onClear={() => { setFilterKw(null); setCalcKey(k => k + 1) }} />
          </section>
        ) : (
          <>
            {/* ── Midea ───────────────────────────────────────────────── */}
            <section id="midea" className="mb-12">
              <BrandHeading label="Midea" color="#0099cc" />
              <MideaProducts />
            </section>

            {/* ── Hitachi ─────────────────────────────────────────────── */}
            <section id="hitachi" className="mb-12">
              <BrandHeading label="Hitachi" color="#c3002f" />
              <HitachiProducts />
            </section>

            {/* ── Haier ───────────────────────────────────────────────── */}
            <section id="haier" className="mb-12">
              <BrandHeading label="Haier" color="#005AAB" />
              <HaierProducts />
            </section>

            {/* ── Samsung ─────────────────────────────────────────────── */}
            <section id="samsung" className="mb-12">
              <BrandHeading label="Samsung" color="#1428A0" />
              <SamsungProducts />
            </section>

            {/* ── Toshiba ─────────────────────────────────────────────── */}
            <section id="toshiba" className="mb-12">
              <BrandHeading label="Toshiba" color="#D01C22" />
              <ToshibaProducts />
            </section>

            {/* ── MHI ─────────────────────────────────────────────────── */}
            <section id="mhi" className="mb-12">
              <BrandHeading label="Mitsubishi Heavy Industries" color="#e31f26" />
              <MHIProducts />
            </section>

            {/* ── Mitsubishi Electric ─────────────────────────────────── */}
            <section id="mitsubishi" className="mb-12">
              <BrandHeading label="Mitsubishi Electric" color="#cc0000" />
              <MitsubishiProducts />
            </section>

            {/* ── Daikin ──────────────────────────────────────────────── */}
            <section id="daikin" className="mb-12">
              <BrandHeading label="Daikin" color="#00a1e5" />
              <DaikinProducts />
            </section>

            {/* ── Fujitsu ─────────────────────────────────────────────── */}
            <section id="fujitsu" className="mb-12">
              <BrandHeading label="Fujitsu" color="#EA0000" />
              <FujitsuProducts />
            </section>
          </>
        )}

        <hr style={{ border: "none", borderTop: "1px solid #f1f5f9", margin: "0 0 48px" }} />

        {/* ── Book Installation ─────────────────────────────────────── */}
        <section style={{
          background: "#f8fafc",
          borderRadius: 20,
          padding: "40px 40px 36px",
          marginBottom: 48,
        }} className="install-section-wrap">

          {/* Section header */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0075C9", margin: "0 0 8px" }}>
              Professional Installation
            </p>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: "#041521", margin: 0, lineHeight: 1.2 }}>
              Book your split system installation online
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }} className="install-section-grid">

            {/* Left: text + install cards + CTAs */}
            <div>
              <p style={{ color: "#4b5563", lineHeight: 1.7, marginTop: 0, marginBottom: 24, fontSize: 14 }}>
                Fast, professional installation from a licensed ARCtick team. Whether it's a single bedroom or your whole home, we'll have you comfortable in days — not weeks.
              </p>

              {/* Install type cards with accent borders */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
                <div style={{
                  borderLeft: "3px solid #0075C9",
                  borderRadius: "0 10px 10px 0",
                  padding: "14px 16px",
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: "#1f2937", margin: "0 0 5px" }}>Back-to-Back</p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                    Units share a common wall — minimal pipe run, quickest install.
                  </p>
                </div>
                <div style={{
                  borderLeft: "3px solid #00c4b3",
                  borderRadius: "0 10px 10px 0",
                  padding: "14px 16px",
                  background: "#fff",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                  <p style={{ fontWeight: 700, fontSize: 13, color: "#1f2937", margin: "0 0 5px" }}>Up &amp; Over</p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                    Pipes routed through ceiling — outdoor unit placed wherever suits.
                  </p>
                </div>
              </div>

              {/* Trust row */}
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 28 }}>
                {[
                  { icon: "✓", text: "5-year install warranty" },
                  { icon: "✓", text: "Same-week availability" },
                  { icon: "✓", text: "ARCtick licensed" },
                ].map(item => (
                  <span key={item.text} style={{ fontSize: 13, color: "#374151", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#00c4b3", fontWeight: 700 }}>{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/contact" style={{
                  display: "inline-block",
                  background: "#0075C9",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "12px 26px",
                  borderRadius: "2em",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}>
                  Book A Service →
                </Link>
                <Link to="/contact" style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#0075C9",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "12px 26px",
                  borderRadius: "2em",
                  textDecoration: "none",
                  border: "2px solid #0075C9",
                  letterSpacing: "0.04em",
                }}>
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right: installation diagrams side by side, click to enlarge */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ padding: "8px 14px", background: "#0075C9" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    Back-to-Back
                  </p>
                </div>
                <button
                  onClick={() => setInstallModal({ src: backToBackImg, label: "Back-to-Back" })}
                  aria-label="View larger Back-to-Back installation diagram"
                  style={{ display: "block", width: "100%", padding: "12px 12px 8px", border: "none", background: "none", cursor: "zoom-in" }}
                >
                  <img src={backToBackImg} alt="Back-to-back split system installation diagram" style={{ width: "100%", height: "auto", display: "block" }} />
                </button>
              </div>

              <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ padding: "8px 14px", background: "#00c4b3" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    Up &amp; Over
                  </p>
                </div>
                <button
                  onClick={() => setInstallModal({ src: upAndOverImg, label: "Up & Over" })}
                  aria-label="View larger Up & Over installation diagram"
                  style={{ display: "block", width: "100%", padding: "12px 12px 8px", border: "none", background: "none", cursor: "zoom-in" }}
                >
                  <img src={upAndOverImg} alt="Up and over split system installation diagram" style={{ width: "100%", height: "auto", display: "block" }} />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section style={{
          background: "#f8fafc",
          borderRadius: 20,
          padding: "40px 40px 32px",
          marginBottom: 48,
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0075C9", margin: "0 0 8px" }}>
            FAQ
          </p>
          <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: "#041521", margin: "0 0 28px", lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "0 56px" }} className="faq-grid">
            <FaqAccordion items={FAQ_ITEMS.slice(0, 4)} />
            <FaqAccordion items={FAQ_ITEMS.slice(4)} />
          </div>
        </section>

        {/* ── Quote Form ────────────────────────────────────────────── */}
        <section style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20,
          padding: "40px",
          marginBottom: 48,
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr minmax(300px, 500px)",
            gap: 48,
            alignItems: "stretch",
          }} className="form-section-grid">

            {/* Left: CTA copy + trust signals */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", margin: "0 0 12px" }}>
                Free, no obligation
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
                Get a Free Quote
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.7, margin: "0 0 32px" }}>
                Tell us about your space and we'll get back to you with a tailored supply &amp; install price — usually within a few hours.
              </p>

              {/* Trust signals with SVG icons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <GoogleIcon />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", margin: 0 }}>5.0 Google Rating</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: 0 }}>37 verified reviews</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", margin: 0 }}>5-Year Install Warranty</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: 0 }}>On every job we complete</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", margin: 0 }}>Same-Week Installs</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: 0 }}>Gold Coast · Brisbane · Ipswich</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#fff", margin: 0 }}>Licensed &amp; Fully Insured</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: 0 }}>ARCtick licensed · QBE insured</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: form */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "24px 28px 28px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
              <Form hideTitle />
            </div>

          </div>
        </section>

      </div>

      {installModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${installModal.label} installation diagram — full size`}
          onClick={() => setInstallModal(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(4,21,33,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "64px 20px",
          }}
        >
          <button
            onClick={() => setInstallModal(null)}
            aria-label="Close"
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 20,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: "100%" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
              <img
                src={installModal.src}
                alt={`${installModal.label} split system installation diagram`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p style={{ color: "#fff", textAlign: "center", marginTop: 16, fontSize: 15, fontWeight: 600 }}>
              {installModal.label}
            </p>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default ProductsPage

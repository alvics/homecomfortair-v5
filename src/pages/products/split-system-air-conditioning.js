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

import heroServiceImg from "../../images/hero-3.jpg"

const BRANDS = [
  { id: "midea",      label: "Midea",              shortLabel: "Midea",      color: "#0099cc" },
  { id: "hitachi",    label: "Hitachi",             shortLabel: "Hitachi",    color: "#c3002f" },
  { id: "haier",      label: "Haier",               shortLabel: "Haier",      color: "#005AAB" },
  { id: "samsung",    label: "Samsung",             shortLabel: "Samsung",    color: "#1428A0" },
  { id: "toshiba",    label: "Toshiba",             shortLabel: "Toshiba",    color: "#D01C22" },
  { id: "mhi",        label: "Mitsubishi Heavy",    shortLabel: "MHI",        color: "#e31f26" },
  { id: "mitsubishi", label: "Mitsubishi Electric", shortLabel: "Mitsubishi", color: "#cc0000" },
  { id: "daikin",     label: "Daikin",              shortLabel: "Daikin",     color: "#00a1e5" },
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

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
          <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>36 verified reviews</p>
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

const FanIcon = ({ cx, cy, r }) => (
  <>
    <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2"/>
    <circle cx={cx} cy={cy} r={r * 0.6} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
    <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
    <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
    <line x1={cx - r * 0.7} y1={cy - r * 0.7} x2={cx + r * 0.7} y2={cy + r * 0.7} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
    <line x1={cx + r * 0.7} y1={cy - r * 0.7} x2={cx - r * 0.7} y2={cy + r * 0.7} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
    <circle cx={cx} cy={cy} r={r * 0.18} fill="rgba(255,255,255,0.32)"/>
  </>
)

const BackToBackSVG = () => (
  <svg viewBox="0 0 500 310" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
    {/* Ground */}
    <rect x="0" y="278" width="500" height="32" fill="#f1f5f9"/>
    <line x1="0" y1="278" x2="500" y2="278" stroke="#d1d5db" strokeWidth="1.5"/>

    {/* House interior (cross-section) */}
    <rect x="42" y="118" width="224" height="160" fill="#f8fafc" stroke="#d1d5db" strokeWidth="1.5"/>

    {/* Roof */}
    <polygon points="26,118 154,34 282,118" fill="#e2e8f0" stroke="#c8d0d8" strokeWidth="1.5"/>

    {/* Ceiling line */}
    <line x1="42" y1="118" x2="266" y2="118" stroke="#d1d5db" strokeWidth="1"/>

    {/* External wall — brick-textured, right side of house */}
    <rect x="266" y="118" width="52" height="160" fill="#c4cdd6"/>
    <line x1="266" y1="148" x2="318" y2="148" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="266" y1="178" x2="318" y2="178" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="266" y1="208" x2="318" y2="208" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="266" y1="238" x2="318" y2="238" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="292" y1="118" x2="292" y2="148" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="279" y1="148" x2="279" y2="178" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="305" y1="148" x2="305" y2="178" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="292" y1="178" x2="292" y2="208" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="279" y1="208" x2="279" y2="238" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="305" y1="208" x2="305" y2="238" stroke="#adb5bd" strokeWidth="0.9"/>
    <line x1="292" y1="238" x2="292" y2="278" stroke="#adb5bd" strokeWidth="0.9"/>

    {/* Indoor Unit — slim, mounted on interior side of external wall */}
    <rect x="58" y="150" width="5" height="40" fill="#b8cce0" rx="1"/>
    <rect x="63" y="148" width="188" height="38" fill="#0075C9" rx="6"/>
    <line x1="73"  y1="159" x2="243" y2="159" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <line x1="73"  y1="168" x2="243" y2="168" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <line x1="73"  y1="177" x2="243" y2="177" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <text x="154" y="172" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Nunito Sans, sans-serif">Indoor Unit</text>

    {/* Pipe route: through wall → down exterior wall → into outdoor unit */}
    {/* Horizontal through wall */}
    <rect x="251" y="160" width="67" height="8" fill="#00c4b3" opacity="0.9"/>
    {/* Down exterior wall */}
    <rect x="310" y="160" width="8" height="118" fill="#00c4b3" opacity="0.9"/>

    {/* "pipe run" label */}
    <text x="335" y="218" fill="#00c4b3" fontSize="9.5" fontWeight="700" fontFamily="Nunito Sans, sans-serif">pipe run</text>

    {/* Outdoor Unit — sits on the ground directly against the external wall */}
    <rect x="318" y="168" width="112" height="110" fill="#1e3a5f" rx="7"/>
    <line x1="318" y1="188" x2="430" y2="188" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <line x1="318" y1="208" x2="430" y2="208" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <FanIcon cx={374} cy={222} r={34}/>
    <text x="374" y="294" textAnchor="middle" fill="#94a3b8" fontSize="10.5" fontFamily="Nunito Sans, sans-serif">Outdoor Unit</text>
  </svg>
)

const UpOverSVG = () => (
  <svg viewBox="0 0 500 310" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
    {/* Ground */}
    <rect x="0" y="278" width="500" height="32" fill="#f1f5f9"/>
    <line x1="0" y1="278" x2="500" y2="278" stroke="#d1d5db" strokeWidth="1.5"/>

    {/* House walls (cross-section) */}
    <rect x="42" y="130" width="270" height="148" fill="#f8fafc" stroke="#d1d5db" strokeWidth="1.5"/>

    {/* Roof */}
    <polygon points="26,130 177,42 314,130" fill="#e2e8f0" stroke="#c8d0d8" strokeWidth="1.5"/>

    {/* Ceiling line */}
    <line x1="42" y1="130" x2="312" y2="130" stroke="#d1d5db" strokeWidth="1"/>

    {/* Indoor Unit — slim, high on the left interior wall */}
    {/* Wall bracket */}
    <rect x="55" y="162" width="158" height="5" fill="#b8cce0" rx="2"/>
    {/* Unit body — slim/realistic proportions */}
    <rect x="60" y="167" width="148" height="38" fill="#0075C9" rx="6"/>
    <line x1="70" y1="178" x2="200" y2="178" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <line x1="70" y1="187" x2="200" y2="187" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <line x1="70" y1="196" x2="200" y2="196" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
    <text x="134" y="191" textAnchor="middle" fill="white" fontSize="10.5" fontWeight="700" fontFamily="Nunito Sans, sans-serif">Indoor Unit</text>

    {/* Pipe route: UP → OVER ceiling space → DOWN outside */}
    {/* Segment 1: UP inside wall from unit to ceiling */}
    <line x1="208" y1="170" x2="208" y2="130" stroke="#00c4b3" strokeWidth="2.5" strokeDasharray="6,4" strokeLinecap="round"/>
    {/* Connect to horizontal above ceiling */}
    <line x1="208" y1="130" x2="208" y2="116" stroke="#00c4b3" strokeWidth="2.5" strokeDasharray="6,4" strokeLinecap="round"/>
    {/* Segment 2: ACROSS horizontally above ceiling (through attic/roof space) */}
    <line x1="208" y1="116" x2="374" y2="116" stroke="#00c4b3" strokeWidth="2.5" strokeDasharray="6,4" strokeLinecap="round"/>
    {/* Segment 3: DOWN outside the right wall to outdoor unit */}
    <line x1="374" y1="116" x2="374" y2="168" stroke="#00c4b3" strokeWidth="2.5" strokeDasharray="6,4" strokeLinecap="round"/>

    {/* "copper pipe run" label */}
    <text x="291" y="106" textAnchor="middle" fill="#00c4b3" fontSize="9.5" fontWeight="700" fontFamily="Nunito Sans, sans-serif">copper pipe run</text>

    {/* Direction arrows */}
    <polygon points="208,132 203,144 213,144" fill="#00c4b3" opacity="0.75"/>
    <polygon points="348,116 338,111 338,121" fill="#00c4b3" opacity="0.75"/>
    <polygon points="374,152 369,142 379,142" fill="#00c4b3" opacity="0.75"/>

    {/* Outdoor Unit — realistic squarish box on ground, outside right wall */}
    <rect x="326" y="168" width="110" height="110" fill="#1e3a5f" rx="7"/>
    <line x1="326" y1="190" x2="436" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <line x1="326" y1="210" x2="436" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    <FanIcon cx={381} cy={218} r={30}/>
    <text x="381" y="294" textAnchor="middle" fill="#94a3b8" fontSize="10.5" fontFamily="Nunito Sans, sans-serif">Outdoor Unit</text>
  </svg>
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
          {open === i && (
            <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.75, paddingBottom: 16, marginTop: 0 }}>
              {item.a}
            </p>
          )}
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

            {/* Right: SVG diagrams side by side */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ padding: "8px 14px", background: "#0075C9" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    Back-to-Back
                  </p>
                </div>
                <div style={{ padding: "12px 12px 8px" }}>
                  <BackToBackSVG />
                </div>
              </div>

              <div style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ padding: "8px 14px", background: "#00c4b3" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", margin: 0 }}>
                    Up &amp; Over
                  </p>
                </div>
                <div style={{ padding: "12px 12px 8px" }}>
                  <UpOverSVG />
                </div>
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
          maxWidth: 960,
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
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
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", margin: 0 }}>36 verified reviews</p>
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
    </Layout>
  )
}

export default ProductsPage

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
    <Seo />
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

const FaqAccordion = () => {
  const [open, setOpen] = useState(null)
  return (
    <div style={{ maxWidth: 720 }}>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #f1f5f9" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "18px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 16,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 15, color: "#1f2937" }}>{item.q}</span>
            <span style={{ flexShrink: 0, color: "#0075C9", fontSize: 22, fontWeight: 300, lineHeight: 1 }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.75, paddingBottom: 20, marginTop: 0 }}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

const ProductsPage = () => {
  const [filterKw, setFilterKw] = useState(null)

  return (
    <Layout>
      <StickyBrandNav brands={BRANDS} />

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

        {/* ── Room Size Calculator ──────────────────────────────────── */}
        <section style={{ marginBottom: 40 }}>
          <div className="section-heading">
            <h2 className="section-title">What Size Do I Need?</h2>
          </div>
          <p className="text-gray-500 mt-3 mb-8 text-sm leading-relaxed" style={{ maxWidth: 600 }}>
            Enter your room dimensions and we'll recommend the right kW size — and filter the products below to match.
          </p>
          <div style={{
            background: "#fff",
            border: "1px solid #e8eef5",
            borderRadius: 16,
            padding: "32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
          }}>
            <RoomSizeCalculator onResult={setFilterKw} />
          </div>
        </section>

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
                onClick={() => setFilterKw(null)}
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
            <AllFilteredProducts filterKw={filterKw} onClear={() => setFilterKw(null)} />
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
        <section className="mb-12">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "start",
          }} className="install-section-grid">

            {/* Left: text + cards + CTAs */}
            <div>
              <div className="section-heading">
                <h2 className="section-title">Book your split system installation online</h2>
              </div>
              <p style={{ color: "#4b5563", lineHeight: 1.7, marginTop: 16, marginBottom: 12, fontSize: 15 }}>
                At Home Comfort Air, we offer fast and professional installation services to get you up and
                running in no time. Whether you're looking for a split system for a single room or your entire
                house, we've got you covered.
              </p>
              <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
                Our team of experienced technicians can have your new air conditioning system installed in
                a matter of days. Don't wait any longer — get a free quote now.
              </p>

              {/* Install type cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                <div style={{ border: "1px solid #e8eef5", borderRadius: 10, padding: "14px 16px", background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <p style={{ fontWeight: 700, fontSize: 14, color: "#1f2937", margin: "0 0 6px" }}>Back-to-Back</p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                    Indoor and outdoor units installed through a common wall — ideal where space is limited.
                  </p>
                </div>
                <div style={{ border: "1px solid #e8eef5", borderRadius: 10, padding: "14px 16px", background: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <p style={{ fontWeight: 700, fontSize: 14, color: "#1f2937", margin: "0 0 6px" }}>Up &amp; Over</p>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                    Outdoor unit located away from indoors via copper pipes routed up and over — suits most homes.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link to="/contact" style={{
                  display: "inline-block",
                  background: "#00c4b3",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "12px 26px",
                  borderRadius: "2em",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                  Book A Service
                </Link>
                <Link to="/contact" style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#00c4b3",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "12px 26px",
                  borderRadius: "2em",
                  textDecoration: "none",
                  border: "2px solid #00c4b3",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>
                  Instant Quote
                </Link>
              </div>
            </div>

            {/* Right: SVG diagrams */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ border: "1px solid #e8eef5", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #e8eef5" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b", margin: 0 }}>
                    Back-to-Back Installation
                  </p>
                </div>
                <div style={{ padding: "20px 20px 12px" }}>
                  <BackToBackSVG />
                </div>
              </div>

              <div style={{ border: "1px solid #e8eef5", borderRadius: 12, overflow: "hidden", background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ padding: "10px 16px", background: "#f8fafc", borderBottom: "1px solid #e8eef5" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b", margin: 0 }}>
                    Up &amp; Over Installation
                  </p>
                </div>
                <div style={{ padding: "20px 20px 12px" }}>
                  <UpOverSVG />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="mb-12">
          <div className="section-heading">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <p className="text-gray-500 mt-3 mb-8 text-sm leading-relaxed" style={{ maxWidth: 600 }}>
            Everything you need to know about split system supply and installation.
          </p>
          <FaqAccordion />
        </section>

        {/* ── Quote Form ────────────────────────────────────────────── */}
        <section className="mb-12">
          <div className="section-heading">
            <h2 className="section-title">Get a Free Quote</h2>
          </div>
          <p className="text-gray-500 mt-3 mb-6 text-sm leading-relaxed" style={{ maxWidth: 600 }}>
            Fill in the form with as much detail as possible and our team will get back to you promptly.
          </p>
          <div style={{ background: "#fff", border: "1px solid #e8eef5", borderRadius: 16, padding: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.05)", maxWidth: 680 }}>
            <Form />
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default ProductsPage

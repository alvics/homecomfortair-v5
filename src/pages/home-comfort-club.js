import React, { Fragment, useState } from "react"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import CTA from "../components/CTA"
import Form from "../components/QuoteForm"

export const Head = () => (
  <Fragment>
    <title>Home Comfort Club | Service & Maintenance Plans | Home Comfort Air</title>
    <meta
      name="description"
      content="Join the Home Comfort Club — affordable air conditioning service plans for Queensland homes. Choose from One-Off, Basic Saver, or Family Comfort membership tiers."
    />
    <Seo />
    <Schema />
  </Fragment>
)

const plans = [
  {
    name: "One-Off Service",
    price: "$195",
    period: "+ GST",
    frequency: "As Needed",
    highlight: false,
    badge: null,
    color: "#e8f4fd",
    features: [
      { label: "Comprehensive Tune-up", included: true },
      { label: "Priority Scheduling", included: false },
      { label: "Repair Discount", value: "0%" },
      { label: "Call-Out Fees", value: "Standard" },
      { label: "Reminder Service", included: false },
      { label: "Annual Services", value: "1x (on demand)" },
    ],
    cta: "Book a Service",
  },
  {
    name: "Basic Saver",
    price: "$15",
    period: "/mo + GST",
    frequency: "1x Per Year",
    highlight: false,
    badge: null,
    color: "#e8f4fd",
    features: [
      { label: "Comprehensive Tune-up", included: true },
      { label: "Priority Scheduling", included: false },
      { label: "Repair Discount", value: "5% Off" },
      { label: "Call-Out Fees", value: "Standard" },
      { label: "Reminder Service", included: true },
      { label: "Annual Services", value: "1x Per Year" },
    ],
    cta: "Join Basic Saver",
  },
  {
    name: "Family Comfort",
    price: "$25",
    period: "/mo + GST",
    frequency: "2x Per Year",
    highlight: true,
    badge: "Most Popular",
    color: "#0075c9",
    features: [
      { label: "Comprehensive Tune-up", included: true },
      { label: "Priority Scheduling", value: "Front of Line ⚡" },
      { label: "Repair Discount", value: "10% Off" },
      { label: "Call-Out Fees", value: "$0 Call-Outs" },
      { label: "Reminder Service", included: true },
      { label: "Annual Services", value: "2x Per Year" },
    ],
    cta: "Join Family Comfort",
  },
]

const internalChecks = [
  { num: 1, title: "Filter Deep Clean", desc: "Remove, wash, and sanitize filters to ensure 100% airflow." },
  { num: 2, title: "Evaporator Coil Inspection", desc: "Check for dust/mould build-up that can block cooling." },
  { num: 3, title: "Condensate Drain Flush", desc: "Clear any algae or blockages to prevent indoor water leaks." },
  { num: 4, title: "Blower Fan Check", desc: "Inspect the fan blade for balance and dust accumulation." },
  { num: 5, title: "Sanitization Spray", desc: "Apply a hospital-grade antibacterial spray to the coils." },
  { num: 6, title: "Thermostat Calibration", desc: "Ensure your controls are accurately reading the room temp." },
  { num: 7, title: "Louvre & Housing Wipe", desc: 'Clean the exterior of the unit for a "like new" look.' },
]

const externalChecks = [
  { num: 8, title: "Condenser Coil Clean", desc: "Remove debris/leaves that make the unit work harder." },
  { num: 9, title: "Refrigerant Level Check", desc: "Monitor gas levels to ensure peak cooling efficiency." },
  { num: 10, title: "Electrical Terminal Tightening", desc: "Check for loose wires caused by vibrations." },
  { num: 11, title: "Compressor Amp Draw", desc: "Measure power usage to catch potential failures early." },
  { num: 12, title: "Fan Motor Lubrication", desc: "Check bearings and seals for smooth operation." },
  { num: 13, title: "Vibration Check", desc: "Ensure the unit is stable and not making excess noise." },
  { num: 14, title: "Corrosion & Rust Check", desc: "(Crucial for coastal areas!) Inspect the casing for salt-air damage." },
  { num: 15, title: "System Operation Cycle", desc: "A full test run to ensure the system reaches temperature quickly." },
]

const tcItems = [
  { title: "Membership Agreement", body: "This is a 12-month minimum commitment. Payments are processed monthly via secure direct debit." },
  { title: "Service Scheduling", body: "It is the member's responsibility to contact us to book their included service(s). We will send a reminder notification 30 days prior to the due date." },
  { title: "Priority Status", body: '"Priority Scheduling" means members are moved to the front of our dispatch list during high-demand periods (e.g., peak heatwaves).' },
  { title: "Repair Discounts", body: "Discounts apply to standard parts and labor rates. They cannot be combined with other promotional offers." },
  { title: "Call-Out Fees", body: 'For "Family Comfort" members, the $0 call-out fee applies to standard service hours (Mon–Fri, 7am–4pm).' },
  { title: "Cancellation", body: "Memberships can be cancelled after the initial 12-month term with 30 days' notice." },
]

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#0075c9" fillOpacity="0.15" />
    <path d="M6 10l3 3 5-5" stroke="#0075c9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIconWhite = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.25)" />
    <path d="M6 10l3 3 5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#f0f0f0" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
  </svg>
)
const TcAccordion = ({ title, body }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="hcc-tc-item">
      <button
        onClick={() => setOpen(!open)}
        className="hcc-tc-button"
        aria-expanded={open}
      >
        <span className="hcc-tc-title">{title}</span>
        <span 
          className="hcc-tc-chevron" 
          style={{ 
            display: "inline-block", 
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease" 
          }}
        >
          ▼
        </span>
      </button>
      {open && <p className="hcc-tc-body">{body}</p>}
    </div>
  )
}

const HomeComfortClubPage = () => (
  <Layout>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

      .hcc-page * {
        font-family: 'Nunito Sans', sans-serif;
        box-sizing: border-box;
      }

      .hcc-hero {
        background: linear-gradient(135deg, #0075c9 0%, #005fa3 60%, #003f70 100%);
        padding: 60px 20px 80px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .hcc-hero h1 {
        font-size: clamp(2rem, 5vw, 3.2rem);
        font-weight: 900;
        color: #ffffff;
        margin: 0 0 12px;
        letter-spacing: -0.5px;
      }

      .hcc-hero .hcc-tag {
        display: inline-block;
        background: rgba(255,255,255,0.18);
        color: #fff;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: 5px 16px;
        border-radius: 50px;
        margin-bottom: 18px;
      }

      .hcc-hero p {
        color: rgba(255,255,255,0.88);
        font-size: 1.1rem;
        max-width: 620px;
        margin: 0 auto 28px;
        line-height: 1.7;
        font-weight: 400;
      }

      .hcc-plans-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        max-width: 1100px;
        margin: -40px auto 0;
        padding: 0 20px 60px;
        position: relative;
        z-index: 2 !important;
      }

      @media (min-width: 768px) {
        .hcc-plans-grid {
          grid-template-columns: repeat(3, 1fr);
          align-items: start;
        }
      }

      .hcc-card {
        background: #fff;
        border-radius: 20px;
        padding: 36px 28px 32px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        border: 2px solid #eef4fb;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        position: relative;
      }

      .hcc-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.13);
      }

      .hcc-card-featured {
        background: linear-gradient(145deg, #0075c9, #005ba3);
        border-color: #0075c9;
        box-shadow: 0 8px 40px rgba(0,117,201,0.35);
        color: #fff;
        transform: translateY(-8px);
      }

      .hcc-card-featured:hover {
        transform: translateY(-14px);
        box-shadow: 0 20px 60px rgba(0,117,201,0.4);
      }

      .hcc-badge {
        position: absolute;
        top: -14px;
        left: 50%;
        transform: translateX(-50%);
        background: #ffc107;
        color: #1a1a1a;
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 5px 18px;
        border-radius: 50px;
        white-space: nowrap;
        box-shadow: 0 2px 12px rgba(255,193,7,0.4);
      }

      .hcc-card-name {
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #0075c9;
        margin: 0 0 10px;
      }

      .hcc-card-featured .hcc-card-name {
        color: rgba(255,255,255,0.75);
      }

      .hcc-card-price {
        font-size: 2.8rem;
        font-weight: 900;
        color: #1a1a1a;
        line-height: 1;
        margin-bottom: 4px;
      }

      .hcc-card-featured .hcc-card-price {
        color: #fff;
      }

      .hcc-card-period {
        font-size: 0.88rem;
        color: #777;
        margin-bottom: 6px;
        font-weight: 600;
      }

      .hcc-card-featured .hcc-card-period {
        color: rgba(255,255,255,0.7);
      }

      .hcc-card-freq {
        display: inline-block;
        background: #e8f4fd;
        color: #0075c9;
        font-size: 0.78rem;
        font-weight: 700;
        padding: 4px 12px;
        border-radius: 50px;
        margin-bottom: 24px;
      }

      .hcc-card-featured .hcc-card-freq {
        background: rgba(255,255,255,0.2);
        color: #fff;
      }

      .hcc-card-divider {
        border: none;
        border-top: 1px solid #eef0f3;
        margin-bottom: 20px;
      }

      .hcc-card-featured .hcc-card-divider {
        border-top-color: rgba(255,255,255,0.2);
      }

      .hcc-feature-list {
        list-style: none;
        padding: 0;
        margin: 0 0 28px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .hcc-feature-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.92rem;
        color: #444;
        font-weight: 600;
      }

      .hcc-feature-label {
        flex: 1;
        min-width: 0;
      }

      .hcc-card-featured .hcc-feature-item {
        color: rgba(255,255,255,0.92);
      }

      .hcc-feature-value {
        margin-left: auto;
        font-size: 0.82rem;
        font-weight: 700;
        color: #0075c9;
        background: #e8f4fd;
        padding: 3px 10px;
        border-radius: 50px;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .hcc-card-featured .hcc-feature-value {
        color: #0075c9;
        background: #fff;
      }

      .hcc-cta-btn {
        display: block;
        width: 100%;
        padding: 14px;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 800;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;
        font-family: 'Nunito Sans', sans-serif;
      }

      .hcc-cta-btn-outline {
        background: transparent;
        border: 2px solid #0075c9;
        color: #0075c9;
      }

      .hcc-cta-btn-outline:hover {
        background: #0075c9;
        color: #fff;
      }

      .hcc-cta-btn-solid {
        background: #ffc107;
        color: #1a1a1a;
        box-shadow: 0 4px 16px rgba(255,193,7,0.4);
      }

      .hcc-cta-btn-solid:hover {
        background: #ffca2c;
        transform: translateY(-1px);
        box-shadow: 0 6px 22px rgba(255,193,7,0.5);
      }

      .hcc-section {
        max-width: 1100px;
        margin: 0 auto;
        padding: 20px 20px 60px;
      }

      .hcc-section-title {
        font-size: clamp(1.5rem, 3vw, 2.2rem);
        font-weight: 900;
        color: #1a1a1a;
        text-align: center;
        margin-bottom: 8px;
      }

      .hcc-section-sub {
        text-align: center;
        color: #666;
        font-size: 1rem;
        margin-bottom: 40px;
      }

      .hcc-checks-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
      }

      @media (min-width: 768px) {
        .hcc-checks-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      .hcc-check-group {
        background: #f8fbff;
        border-radius: 16px;
        padding: 28px 24px;
        border: 1px solid #deedf9;
      }

      .hcc-check-group-title {
        font-size: 1rem;
        font-weight: 800;
        color: #0075c9;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .hcc-check-item {
        display: flex;
        gap: 14px;
        margin-bottom: 16px;
        align-items: flex-start;
      }

      .hcc-check-num {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #0075c9;
        color: #fff;
        font-size: 0.75rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .hcc-check-text h4 {
        font-size: 0.92rem;
        font-weight: 700;
        color: #1a1a1a;
        margin: 0 0 2px;
      }

      .hcc-check-text p {
        font-size: 0.83rem;
        color: #666;
        margin: 0;
        line-height: 1.5;
      }

      .hcc-tc-section {
        background: #f4f8fc;
        padding: 50px 20px;
      }

      .hcc-tc-inner {
        max-width: 800px;
        margin: 0 auto;
      }

      .hcc-tc-item {
        border-bottom: 1px solid #dde8f0;
      }

      .hcc-tc-button {
        width: 100%;
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 4px;
        cursor: pointer;
        font-family: 'Nunito Sans', sans-serif;
      }

      .hcc-tc-title {
        font-size: 0.95rem;
        font-weight: 700;
        color: #1a1a1a;
      }

      .hcc-tc-chevron {
        color: #0075c9;
        font-size: 0.75rem;
        transition: transform 0.25s ease;
      }

      .hcc-tc-body {
        font-size: 0.88rem;
        color: #555;
        line-height: 1.7;
        padding: 0 4px 18px;
        margin: 0;
      }

      .hcc-quote-section {
        max-width: 1100px;
        margin: 0 auto;
        padding: 50px 20px 70px;
      }

      .hcc-quote-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
      }

      @media (min-width: 768px) {
        .hcc-quote-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>

    <div className="hcc-page">

      {/* ── HERO ── */}
      <div className="hcc-hero">
        {/* Decorative bubbles */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -40, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "40%", left: "15%", width: 120, height: 120, borderRadius: "50%", background: "rgba(0,196,179,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "20%", width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <span className="hcc-tag">Home Comfort Club</span>
        <h1>Keep Cool. Stay Protected. 🌬️</h1>
        <p className="text-white">
          Keeping your home cool in the Queensland heat shouldn't be a gamble.
          Choose the plan that fits your lifestyle and enjoy total peace of mind all year round.
        </p>
        <CTA />
      </div>

      {/* ── PRICING CARDS ── */}
      <div className="hcc-plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`hcc-card${plan.highlight ? " hcc-card-featured" : ""}`}
          >
            {plan.badge && <span className="hcc-badge">⭐ {plan.badge}</span>}

            <p className="hcc-card-name">{plan.name}</p>
            <div className="hcc-card-price">{plan.price}</div>
            <div className="hcc-card-period">{plan.period}</div>
            <span className="hcc-card-freq">📅 {plan.frequency}</span>

            <hr className="hcc-card-divider" />

            <ul className="hcc-feature-list">
              {plan.features.map((f) => (
                <li key={f.label} className="hcc-feature-item">
                  {plan.highlight
                    ? f.included === false ? <CrossIcon /> : <CheckIconWhite />
                    : f.included === false ? <CrossIcon /> : <CheckIcon />
                  }
                  <span className="hcc-feature-label">{f.label}</span>
                  {f.value && (
                    <span className="hcc-feature-value">{f.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              className={`hcc-cta-btn${plan.highlight ? " hcc-cta-btn-solid" : " hcc-cta-btn-outline"}`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      {/* ── 15-POINT CHECK ── */}
      <div className="hcc-section">
        <h2 className="hcc-section-title">The 15-Point Performance Check 🛠️</h2>
        <p className="hcc-section-sub">
          Every service — regardless of plan — includes our thorough, professional inspection.
        </p>

        <div className="hcc-checks-grid">
          <div className="hcc-check-group">
            <div className="hcc-check-group-title">
              <span>🏠</span> Internal Unit — The Comfort Zone
            </div>
            {internalChecks.map((item) => (
              <div key={item.num} className="hcc-check-item">
                <div className="hcc-check-num">{item.num}</div>
                <div className="hcc-check-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hcc-check-group">
            <div className="hcc-check-group-title">
              <span>⚙️</span> External Unit — The Workhorse
            </div>
            {externalChecks.map((item) => (
              <div key={item.num} className="hcc-check-item">
                <div className="hcc-check-num">{item.num}</div>
                <div className="hcc-check-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TERMS & CONDITIONS ── */}
      <div className="hcc-tc-section">
        <div className="hcc-tc-inner">
          <h2 className="hcc-section-title" style={{ marginBottom: 8 }}>
            The Fine Print 📋
          </h2>
          <p className="hcc-section-sub">
            No surprises — here's everything you need to know about your membership.
          </p>
          {tcItems.map((tc) => (
            <TcAccordion key={tc.title} title={tc.title} body={tc.body} />
          ))}
        </div>
      </div>

      {/* ── QUOTE FORM ── */}
      <div id="quote" className="hcc-quote-section">
        <div style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          borderRadius: 20,
          padding: "48px 40px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -80, left: -40, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "40%", left: "15%", width: 120, height: 120, borderRadius: "50%", background: "rgba(0,196,179,0.12)", pointerEvents: "none" }} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
                Ready to Join?
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.3 }}>
                Join the Home Comfort Club
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 8 }}>
                Whether you're after a one-off clean or want ongoing membership, fill in the form and we'll contact you to confirm your booking and plan details.
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
              <Form title="Get In Touch" hideTitle />
            </div>
          </div>
        </div>
      </div>

    </div>
  </Layout>
)

export default HomeComfortClubPage
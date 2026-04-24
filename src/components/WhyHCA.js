import React from "react"

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    label: "5.0 Stars",
    sub: "36 Google Reviews",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    label: "5-Year Warranty",
    sub: "On all installations",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="12" y2="17"/>
      </svg>
    ),
    label: "Licensed & Insured",
    sub: "ARCtick licensed/QBE Insured",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Local & Available",
    sub: "Gold Coast · Brisbane · Ipswich",
  },
]

const WhyHCA = () => (
  <div style={{
    background: "#f8fafc",
    border: "1px solid #e8eef5",
    borderRadius: 16,
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  }}>
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 14 }}>
      Why Home Comfort Air?
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {pillars.map((p, i) => (
        <div key={i} style={{
          background: "#fff",
          border: "1px solid #e8eef5",
          borderRadius: 12,
          padding: "16px 14px",
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
        }}>
          <div style={{ flexShrink: 0, marginTop: 2 }}>{p.icon}</div>
          <div>
            <strong style={{ fontSize: 14, fontWeight: 700, color: "#1f2937", display: "block", lineHeight: 1.3 }}>{p.label}</strong>
            <span style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{p.sub}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default WhyHCA

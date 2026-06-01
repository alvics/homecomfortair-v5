import React from "react"

export const REVIEW_COUNT = 37
export const REVIEW_RATING = "5.0"

const GoogleIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" style={{ display: "block", flexShrink: 0 }}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

const StarSvg = ({ size = 13, color = "#FBBC05" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ display: "block", flexShrink: 0 }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const Stars = ({ count = 5, size = 13, gap = 1 }) => (
  <span style={{ display: "flex", gap }}>
    {[...Array(count)].map((_, i) => <StarSvg key={i} size={size} />)}
  </span>
)

// ── Variants ──────────────────────────────────────────────────────────────────

// Used in: StickyBrandNav, BrandPageNav
const PillLight = ({ style }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "#fff", borderRadius: "2em",
    border: "1.5px solid #e8eef5",
    padding: "6px 14px 6px 10px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    ...style,
  }}>
    <GoogleIcon size={16} />
    <Stars size={12} />
    <span style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_RATING}</span>
    <span style={{ fontSize: 11, color: "#6b7280", fontWeight: 500, whiteSpace: "nowrap", fontFamily: "Nunito Sans, sans-serif" }}>· {REVIEW_COUNT} Reviews</span>
  </div>
)

// Used in: Hero.js, cart.js, about-us.js
const PillDark = ({ style }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: 40,
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "8px 16px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
    ...style,
  }}>
    <GoogleIcon size={18} />
    <Stars size={13} />
    <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_RATING}</span>
    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap", fontFamily: "Nunito Sans, sans-serif" }}>· {REVIEW_COUNT} Reviews</span>
  </div>
)

// Used in: Footer.js
const TextDark = ({ style }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, ...style }}>
    <span style={{ color: "#facc15", fontSize: 18, letterSpacing: 2, lineHeight: 1 }}>★★★★★</span>
    <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14, fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_RATING}</span>
    <span style={{ color: "#94a3b8", fontSize: 13, fontFamily: "Nunito Sans, sans-serif" }}>· {REVIEW_COUNT} Google Reviews</span>
  </div>
)

// Used in: GoogleReviews.js
const Stacked = ({ starSize = 22, style }) => (
  <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 4, ...style }}>
    <GoogleIcon size={40} />
    <span style={{ display: "flex", gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: starSize, lineHeight: 1 }}>★</span>
      ))}
    </span>
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontWeight: 700, fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_RATING}</span>
      <span style={{ fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_COUNT} Google Reviews</span>
    </div>
  </div>
)

// Used in: Products.js
const StarsInline = ({ style }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 4, ...style }}>
    <Stars size={13} />
    <span style={{ fontSize: 13, fontWeight: 700, color: "#1f2937", fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_RATING}</span>
    <span style={{ fontSize: 12, color: "#6b7280", borderLeft: "1px solid #e8eef5", paddingLeft: 10, fontFamily: "Nunito Sans, sans-serif" }}>{REVIEW_COUNT} Google Reviews</span>
  </div>
)

// ── Main export ───────────────────────────────────────────────────────────────

const GoogleReviewBadge = ({ variant = "pill-light", style = {} }) => {
  switch (variant) {
    case "pill-light":   return <PillLight style={style} />
    case "pill-dark":    return <PillDark style={style} />
    case "text-dark":    return <TextDark style={style} />
    case "stacked":      return <Stacked style={style} />
    case "stacked-sm":   return <Stacked starSize={18} style={style} />
    case "stars-inline": return <StarsInline style={style} />
    default:             return <PillLight style={style} />
  }
}

export default GoogleReviewBadge

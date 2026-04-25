import React, { useState, useEffect, useRef } from "react"
import { navigate } from "gatsby"

const brands = [
  { label: "Haier",               to: "/products/haier-split-system-air-conditioning" },
  { label: "Daikin",              to: "/products/daikin-split-system-air-conditioning" },
  { label: "Mitsubishi Electric", to: "/products/mitsubishi-electric-split-system-air-conditioning" },
  { label: "Midea",               to: "/products/midea-split-system-air-conditioning" },
  { label: "Samsung",             to: "/products/samsung-split-system-air-conditioning" },
  { label: "Toshiba",             to: "/products/toshiba-split-system-air-conditioning" },
  { label: "Hitachi",             to: "/products/hitachi-split-system-air-conditioning" },
  { label: "Mitsubishi Heavy",    to: "/products/mhi-split-system-air-conditioning" },
]

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
)

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

const ChevronIcon = ({ open }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const NavBar = ({ currentBrand, isFixed }) => {
  const [open, setOpen] = useState(false)
  const others = brands.filter(b => b.label !== currentBrand)

  return (
    <div style={{
      background: "#fff",
      borderBottom: "1px solid #e8eef5",
      boxShadow: isFixed ? "0 4px 16px rgba(0,0,0,0.07)" : "none",
      padding: "10px 24px",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        minWidth: 0,
      }}>

        {/* Other Brands dropdown */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
          <span className="brand-nav-label" style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "#94a3b8", whiteSpace: "nowrap",
          }}>
            Other Brands
          </span>
          <div className="brand-nav-label" style={{ width: 1, height: 16, background: "#e8eef5" }} />
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              all: "unset",
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 14px",
              borderRadius: "2em",
              border: "1.5px solid #e8eef5",
              background: open ? "#f0f9ff" : "#fff",
              borderColor: open ? "#0075C9" : "#e8eef5",
              fontSize: 13, fontWeight: 600,
              color: "#1f2937", WebkitTextFillColor: "#1f2937",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
            }}
          >
            Browse all brands
            <ChevronIcon open={open} />
          </button>

          {open && (
            <div style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              background: "#fff",
              border: "1px solid #e8eef5",
              borderRadius: 12,
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              zIndex: 100,
              minWidth: 220,
              overflow: "hidden",
            }}>
              {others.map(b => (
                <button
                  key={b.to}
                  onClick={() => { setOpen(false); navigate(b.to) }}
                  style={{
                    all: "unset",
                    display: "block", width: "100%",
                    padding: "11px 18px",
                    fontSize: 14, fontWeight: 600,
                    color: "#1f2937", WebkitTextFillColor: "#1f2937",
                    cursor: "pointer",
                    borderBottom: "1px solid #f1f5f9",
                    transition: "background 0.15s",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#f0f9ff"
                    e.currentTarget.style.WebkitTextFillColor = "#0075C9"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent"
                    e.currentTarget.style.WebkitTextFillColor = "#1f2937"
                  }}
                >
                  {b.label}
                </button>
              ))}
              <button
                onClick={() => { setOpen(false); navigate("/products/split-system-air-conditioning") }}
                style={{
                  all: "unset",
                  display: "block", width: "100%",
                  padding: "11px 18px",
                  fontSize: 13, fontWeight: 700,
                  color: "#0075C9", WebkitTextFillColor: "#0075C9",
                  cursor: "pointer",
                  background: "#f0f9ff",
                  boxSizing: "border-box",
                }}
              >
                ← View all brands
              </button>
            </div>
          )}
        </div>

        {/* Google trust bar — hidden on mobile to keep single row */}
        <a
          href="https://www.google.com/search?q=home+comfort+air+gold+coast+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="brand-nav-google-pill"
          style={{
            flexShrink: 0,
            display: "inline-flex", alignItems: "center", gap: 7,
            textDecoration: "none",
            padding: "6px 14px",
            borderRadius: "2em",
            border: "1.5px solid #e8eef5",
            background: "#fff",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#4285F4"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#e8eef5"}
        >
          <GoogleIcon />
          <div className="brand-nav-stars" style={{ display: "flex", gap: 1 }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1f2937" }}>5.0</span>
          <span className="brand-nav-review-count" style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>· 36 Reviews</span>
        </a>

      </div>
    </div>
  )
}

const DESKTOP_TOP = 68
const MOBILE_TOP  = 113  // blue bar + search row; matches layout.css mobile margin-top

const getTop = () =>
  typeof window !== "undefined" && window.innerWidth < 992 ? MOBILE_TOP : DESKTOP_TOP

const BrandPageNav = ({ currentBrand }) => {
  const [sticky,  setSticky]  = useState(false)
  const [navTop,  setNavTop]  = useState(DESKTOP_TOP)
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const update = () => setNavTop(getTop())
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined" || !sentinelRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => setSticky(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* sentinel at natural position */}
      <div ref={sentinelRef} />

      {/* natural-position bar (hidden once sticky kicks in to avoid gap) */}
      <div style={{ visibility: sticky ? "hidden" : "visible" }}>
        <NavBar currentBrand={currentBrand} isFixed={false} />
      </div>

      {/* fixed bar */}
      <div style={{
        position: "fixed",
        top: navTop,
        left: 0,
        right: 0,
        zIndex: 40,
        transform: sticky ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: sticky ? "auto" : "none",
      }}>
        <NavBar currentBrand={currentBrand} isFixed />
      </div>
    </>
  )
}

export default BrandPageNav

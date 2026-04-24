import React, { useState, useEffect } from "react"

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
)

const NAV_HEIGHT = 68

const StickyBrandNav = ({ brands, onBrandClick }) => {
  const [visible, setVisible] = useState(false)
  const [active,  setActive]  = useState(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const firstSection = document.getElementById(brands[0].id)
    const lastSection  = document.getElementById(brands[brands.length - 1].id)
    if (!firstSection || !lastSection) return

    // Show bar once first brand section scrolls into view; hide once past the last
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px 0px 0px 0px", threshold: 0 }
    )
    visibilityObserver.observe(firstSection)

    // Track which brand section is currently dominant in the viewport
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: `-${NAV_HEIGHT + 60}px 0px -55% 0px`, threshold: 0 }
    )
    brands.forEach(b => {
      const el = document.getElementById(b.id)
      if (el) activeObserver.observe(el)
    })

    return () => {
      visibilityObserver.disconnect()
      activeObserver.disconnect()
    }
  }, [brands])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 60
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <div
      style={{
        position: "fixed",
        top: NAV_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 40,
        background: "#fff",
        borderBottom: "1px solid #e8eef5",
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* scrollable brand pills — takes remaining space */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flex: 1,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#94a3b8",
          flexShrink: 0,
          paddingRight: 4,
        }}>
          Brands
        </span>

        <div style={{ width: 1, height: 20, background: "#e8eef5", flexShrink: 0 }} />

        {brands.map(brand => {
          const isActive = active === brand.id
          // Darken very-light brand colours so they're readable as outlines
          const displayColor = brand.color === "#7DCDFF" ? "#0099cc" : brand.color
          const textColor    = isActive ? "#ffffff" : displayColor
          return (
            <button
              key={brand.id}
              onClick={() => onBrandClick ? onBrandClick(brand.id) : scrollTo(brand.id)}
              style={{
                all: "unset",
                flexShrink: 0,
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: "2em",
                border: `2px solid ${displayColor}`,
                background: isActive ? displayColor : "transparent",
                color: textColor,
                WebkitTextFillColor: textColor,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "background 0.2s ease, color 0.2s ease",
                whiteSpace: "nowrap",
                lineHeight: "1.4",
                boxSizing: "border-box",
              }}
            >
              {brand.shortLabel || brand.label}
            </button>
          )
        })}
        </div>

        {/* Google trust pill */}
        <div style={{ width: 1, height: 20, background: "#e8eef5", flexShrink: 0 }} />
        <a
          href="https://www.google.com/search?q=home+comfort+air+gold+coast+reviews"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            textDecoration: "none",
            padding: "5px 12px",
            borderRadius: "2em",
            border: "1.5px solid #e8eef5",
            background: "#fff",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#4285F4"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#e8eef5"}
        >
          <GoogleIcon />
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1f2937", WebkitTextFillColor: "#1f2937" }}>5.0</span>
          <span style={{ fontSize: 11, color: "#6b7280", WebkitTextFillColor: "#6b7280", fontWeight: 500, whiteSpace: "nowrap" }}>· 36 Reviews</span>
        </a>

      </div>
    </div>
  )
}

export default StickyBrandNav

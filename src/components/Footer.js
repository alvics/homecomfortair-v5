import React from "react"
import { Link } from "gatsby"
import logo from "../images/Home-Comfort-Air-WHITE-650.png"
import arctick from "../images/logo-arctick.png"

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer style={{ backgroundColor: "#0f172a", color: "#cbd5e1", fontFamily: "Nunito Sans, sans-serif" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 24px 40px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
          }}>

            {/* Column 1: Brand */}
            <div>
              <img src={logo} alt="Home Comfort Air" style={{ width: 160, marginBottom: 20 }} />
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#94a3b8", marginBottom: 20 }}>
                Queensland's trusted air conditioning specialists. 5-year workmanship warranty on all new installations.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
                <a href="tel:0731050421" style={{ color: "#00c4b3", textDecoration: "none", fontWeight: 600 }}>
                  📞 0404 602 657
                </a>
                <a href="mailto:homecomfortair.gc@gmail.com" style={{ color: "#94a3b8", textDecoration: "none" }}>
                  homecomfortair.gc@gmail.com
                </a>
              </div>
              {/* Social */}
              <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
                <a
                  href="https://www.facebook.com/Home-Comfort-Air-1713459065551004/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: "50%",
                    backgroundColor: "#1e293b", color: "#fff",
                    transition: "background 0.2s",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps/search/Home+Comfort+Air"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Reviews"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 36, height: 36, borderRadius: "50%",
                    backgroundColor: "#1e293b", color: "#fff",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 style={{ color: "#f1f5f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
                Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Split System Air Conditioning", to: "/split-systems-air-conditioning" },
                  { label: "Ducted Air Conditioning", to: "/ducted-systems" },
                  { label: "Multi-Head Systems", to: "/multi-head-systems" },
                  { label: "Service & Maintenance", to: "/service" },
                  { label: "Shop All Units", to: "/products" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#00c4b3"}
                      onMouseLeave={e => e.target.style.color = "#94a3b8"}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Service Areas */}
            <div>
              <h4 style={{ color: "#f1f5f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
                Service Areas
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Brisbane", to: "/brisbane-air-conditioning" },
                  { label: "Ipswich", to: "/ipswich-air-conditioning" },
                  { label: "Gold Coast", to: "/gold-coast-air-conditioning" },
                  { label: "Tweed Heads", to: "/tweed-heads-air-conditioning" },
                  { label: "All Service Areas", to: "/service-areas" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#00c4b3"}
                      onMouseLeave={e => e.target.style.color = "#94a3b8"}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Brands + Trust */}
            <div>
              <h4 style={{ color: "#f1f5f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
                Brands We Install
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { label: "Daikin", to: "/products/daikin-split-system-air-conditioning" },
                  { label: "Toshiba", to: "/products/toshiba-split-system-air-conditioning" },
                  { label: "Samsung", to: "/products/samsung-split-system-air-conditioning" },
                  { label: "Midea", to: "/products/midea-split-system-air-conditioning" },
                  { label: "Haier", to: "/products/haier-split-system-air-conditioning" },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = "#00c4b3"}
                      onMouseLeave={e => e.target.style.color = "#94a3b8"}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* ARC Tick + Trust badge */}
              <div style={{
                marginTop: 28, padding: "16px", borderRadius: 10,
                backgroundColor: "#1e293b", display: "flex", alignItems: "center", gap: 14,
              }}>
                <img src={arctick} alt="ARC Tick Certified" style={{ width: 52, flexShrink: 0 }} />
                <div>
                  <div style={{ color: "#f1f5f9", fontSize: 13, fontWeight: 700 }}>ARC Tick Certified</div>
                  <div style={{ color: "#94a3b8", fontSize: 12 }}>Licensed & insured installers</div>
                </div>
              </div>
            </div>

          </div>

          {/* Trust bar */}
          <div style={{
            marginTop: 48, paddingTop: 32,
            borderTop: "1px solid #1e293b",
            display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#facc15", fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
              <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: 14 }}>5.0</span>
              <span style={{ color: "#94a3b8", fontSize: 13 }}>· 36 Google Reviews</span>
            </div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["5-Year Workmanship Warranty", "Mon–Sat 8am–5pm", "Supply & Install"].map(item => (
                <span key={item} style={{ color: "#94a3b8", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#00c4b3" }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1e293b", backgroundColor: "#0a0f1a" }}>
          <div style={{
            maxWidth: 1440, margin: "0 auto", padding: "14px 24px",
            display: "flex", flexWrap: "wrap", gap: 12,
            alignItems: "center", justifyContent: "space-between",
          }}>
            <span style={{ color: "#475569", fontSize: 12 }}>
              © {new Date().getFullYear()} Home Comfort Air. All rights reserved.
            </span>
            <div style={{ display: "flex", gap: 20 }}>
              <Link to="/privacy-policy" style={{ color: "#475569", fontSize: 12, textDecoration: "none" }}>Privacy Policy</Link>
              <a href="https://ewebdesigns.com.au" style={{ color: "#475569", fontSize: 12, textDecoration: "none" }}>
                Built by eWebDesigns
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

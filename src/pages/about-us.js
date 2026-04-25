import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layouts/layout"
import Schema from "../components/Schema-2"
import StaticImage from "../components/StaticQueryImages"
import FeatureBubble from "../components/FeatureBubble"
import { WorkPhotos } from "../components/About/WorkPhotos"
import GoogleReviewsCarousel from "../components/Sections/GoogleReviews"

export const Head = () => (
  <Fragment>
    <title>About Us | Home Comfort Air | Gold Coast AC Installers</title>
    <meta name="description" content="Local, family-owned AC specialists with 18+ years experience. Licensed installers serving Gold Coast, Brisbane & Ipswich. 5-year installation warranty. Get a free quote." />
    <link rel="canonical" href="https://homecomfortair.net.au/about-us/" />
    <meta property="og:locale" content="en_AU" />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="About Us | Home Comfort Air | Gold Coast AC Installers" />
    <meta property="og:url" content="https://homecomfortair.net.au/about-us/" />
    <meta property="og:site_name" content="Home Comfort Air" />
    <meta property="og:description" content="Local, family-owned AC specialists with 18+ years experience. Licensed installers serving Gold Coast, Brisbane & Ipswich. 5-year installation warranty." />
    <meta property="og:image" content="https://res.cloudinary.com/ewebdesigns/image/upload/v1597993348/facebook-cover-3_rzv8bs.png" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="300" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Us | Home Comfort Air | Gold Coast AC Installers" />
    <meta name="twitter:url" content="https://homecomfortair.net.au/about-us/" />
    <meta name="twitter:description" content="Local, family-owned AC specialists with 18+ years experience. Licensed installers serving Gold Coast, Brisbane & Ipswich. 5-year installation warranty." />
    <meta name="twitter:image" content="https://res.cloudinary.com/ewebdesigns/image/upload/v1597993348/facebook-cover-3_rzv8bs.png" />
    <meta name="theme-color" content="#0075c9" />
    <Schema />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "About Us | Home Comfort Air",
      "url": "https://homecomfortair.net.au/about-us/",
      "description": "Local, family-owned AC specialists with 18+ years experience. Licensed installers serving Gold Coast, Brisbane & Ipswich. 5-year installation warranty.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homecomfortair.net.au/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://homecomfortair.net.au/about-us/" }
        ]
      }
    })}</script>
  </Fragment>
)

const stats = [
  {
    value: "18+", label: "Years Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "5yr", label: "Installation Warranty",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    value: "6", label: "Days a Week",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    value: "100%", label: "Customer Satisfaction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
]

const AboutPage = () => {
  return (
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
              Discover Home Comfort Air 
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Your Comfort, Our Expertise — proudly serving South East Queensland.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
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
              {/* Google rating pill */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "2em", padding: "8px 16px",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>5.0</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>★★★★★ · 36 Reviews</span>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
            <StaticImage filename="heros/about-us-hero-home-comfort-air.jpeg" alt="Home Comfort Air Team" />
          </div>
        </div>
      </section>

      {/* ── Body content ── */}
      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "24px 16px 64px", background: "#fff" }}>
        <div>

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

          {/* About content */}
          <section style={{ paddingBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>
              {/* Left: story text */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Our Story</p>
                <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#1f2937", marginBottom: 32, lineHeight: 1.3 }}>
                  Residential AC specialists you can trust
                </h2>
                <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 20 }}>
                  As a local, family-owned and operated business, we've been installing domestic air conditioners for families and major builders around{" "}
                  <Link to="/brisbane-air-conditioning/" style={{ color: "#0075C9" }}>Brisbane</Link>,{" "}
                  <Link to="/gold-coast-air-conditioning/" style={{ color: "#0075C9" }}>Gold Coast</Link>,{" "}
                  <Link to="/ipswich-air-conditioning/" style={{ color: "#0075C9" }}>Ipswich</Link> and{" "}
                  <Link to="/tweed-heads-air-conditioning/" style={{ color: "#0075C9" }}>Tweed Heads</Link> for over a decade.

                  Our family is dedicated to helping local families stay comfortable year-round with everything from
                    <Link to="/products/split-system-air-conditioning" style={{ color: "#0075C9" }}> high wall split</Link> and{" "}
                  <Link to="/multi-head-systems" style={{ color: "#0075C9" }}>multi head systems </Link> 
                  
                   to full residential and commercial ducted solutions.
</p>
                 <p> We partner with major brands—including
                  <Link to="/products/daikin-split-system-air-conditioning/" style={{ color: "#0075C9" }}> Daikin</Link>,{" "}
                  <Link to="/products/haier-split-system-air-conditioning/" style={{ color: "#0075C9" }}>Haier</Link>,{" "}
                  <Link to="/products/toshiba-split-system-air-conditioning/" style={{ color: "#0075C9" }}>Toshiba</Link>,{" "}
                  <Link to="/products/carrier-split-system-air-conditioning/" style={{ color: "#0075C9" }}>Carrier</Link>,{" "}
                  <Link to="/products/midea-split-system-air-conditioning/" style={{ color: "#0075C9" }}>Midea</Link>,{" "}
                  <Link to="/products/mitsubishi-electric-split-system-air-conditioning/" style={{ color: "#0075C9" }}>Mitsubishi</Link> and{" "}
                  <Link to="/products/samsung-split-system-air-conditioning/" style={{ color: "#0075C9" }}> Samsung </Link>to ensure you get the best technology backed by our personal touch.
                </p>
                <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 20 }}>
                  Our staff are licensed experts when it comes to installations and repairs, and we offer a{" "}
                  <Link to="/installation-warranty" style={{ color: "#0075C9" }}>5-year warranty</Link> on all new split system installations.
                  We pride ourselves on 100% customer satisfaction and quality workmanship, operating 6 days a week to serve our community.
                </p>
                <p style={{ fontSize: 17, color: "#1f2937", lineHeight: 1.9, marginBottom: 32 }}>
                  At Home Comfort Air, we aren't just technicians; we’re your neighbours. Our highly trained team is committed to ensuring every job is completed to the highest standards, because we believe every local home deserves the best.
                </p>
                <a href="tel:0404602657" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#0075C9", color: "#fff", fontWeight: 700, fontSize: 15,
                  padding: "13px 28px", borderRadius: "2em", textDecoration: "none",
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6.06 6.06l1.02-.93a2 2 0 0 1 2.12-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  0404 602 657
                </a>
              </div>

              {/* Right: why choose us 2×2 */}
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Why Choose Us</p>
                <h2 className="section-title" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#1f2937", marginBottom: 24, lineHeight: 1.3, paddingBottom: 12 }}>
                  The Home Comfort Air difference
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                  {[
                    {
                      title: "Licensed & Insured",
                      desc: "All technicians are fully licensed and ARCtick certified.",
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
                    },
                    {
                      title: "Family Owned",
                      desc: "Local Gold Coast business, not a franchise or call centre.",
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                    },
                    {
                      title: "Fast Turnaround",
                      desc: "Same-week bookings available across South East QLD.",
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    },
                    {
                      title: "5-Year Warranty",
                      desc: "Every install backed by our workmanship guarantee.",
                      icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
                    },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "#f8fafc", border: "1px solid #e8eef5", borderRadius: 12,
                      padding: "24px 20px", display: "flex", flexDirection: "column", gap: 10,
                    }}>
                      <div style={{ color: "#0075C9" }}>{item.icon}</div>
                      <strong style={{ fontSize: 15, fontWeight: 700, color: "#1f2937" }}>{item.title}</strong>
                      <span style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service area maps — full width, side by side */}
          <section style={{ paddingBottom: 56, borderTop: "1px solid #e8eef5", paddingTop: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Service Areas</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#1f2937", marginBottom: 28, paddingBottom: 12 }}>We service South East Queensland</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 380px))", gap: 24 }}>
              <div style={{ background: "#f8fafc", borderRadius: 12, border: "1px solid #e8eef5", padding: 20 }}>
                <p style={{ fontWeight: 700, color: "#1f2937", marginBottom: 10, fontSize: 14 }}>Gold Coast & surrounds</p>
                <StaticImage filename="map-gold-coast.png" alt="Gold Coast service area map" />
              </div>
              <div style={{ background: "#f8fafc", borderRadius: 12, border: "1px solid #e8eef5", padding: 20 }}>
                <p style={{ fontWeight: 700, color: "#1f2937", marginBottom: 10, fontSize: 14 }}>Brisbane & surrounds</p>
                <StaticImage filename="map-brisbane-distances-3.png" alt="Brisbane service area map" />
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section style={{ paddingBottom: 56 }}>
            <GoogleReviewsCarousel />
          </section>

          {/* Work photos */}
          <section style={{ paddingBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>Our Work</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#1f2937", lineHeight: 1.3, margin: 0, paddingBottom: 12 }}>
                A look at some of our recent installations
              </h2>
              <a
                href="https://www.facebook.com/Home-Comfort-Air-1713459065551004/?ref=bookmarks"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#1877f2",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "10px 20px",
                  borderRadius: "2em",
                  textDecoration: "none",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                Follow us on Facebook
              </a>
            </div>
            <WorkPhotos />
          </section>

        </div>
      </div>

      {/* ── CTA banner ── */}
      <section className="full-bleed" style={{
        background: "linear-gradient(135deg, #00c4b3 0%, #00a89a 100%)",
        padding: "56px 24px",
        textAlign: "center",
        marginBottom: "-32px",
      }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
          Ready for a new air conditioning system?
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
}

export default AboutPage

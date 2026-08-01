import React, { Fragment } from "react"
import Layout from "../components/Layouts/layout"
import Seo from "../components/SEO-2"
import Schema from "../components/Schema-2"
import FeatureBubble from "../components/FeatureBubble"
import GoogleReviewBadge from "../components/GoogleReviewBadge"
import { WorkPhotos, allWorkPhotos, photoDescription } from "../components/About/WorkPhotos"

const highlights = [
  {
    value: "All Major", label: "Brands Installed",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
  },
  {
    value: "5 Year", label: "Workmanship Warranty",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  },
  { custom: "google-reviews" },
  {
    value: "100%", label: "Customer Satisfaction",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  },
]

const DESCRIPTION = "Browse photos from recent split system air conditioning installations across the Gold Coast, Brisbane, Ipswich and Tweed Heads by Home Comfort Air."
const URL = "https://homecomfortair.net.au/gallery/"

export const Head = () => (
  <Fragment>
    <title>Installation Gallery | Home Comfort Air | Gold Coast AC Installers</title>
    <meta name="description" content={DESCRIPTION} />
    <Seo
      title="Installation Gallery | Home Comfort Air | Gold Coast AC Installers"
      description={DESCRIPTION}
      url={URL}
    />
    <Schema />
    <script type="application/ld+json">{JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Home Comfort Air Installation Gallery",
      "description": DESCRIPTION,
      "url": URL,
      "image": allWorkPhotos.map(p => ({
        "@type": "ImageObject",
        "name": photoDescription(p),
        "description": photoDescription(p),
      })),
    })}</script>
  </Fragment>
)

const GalleryPage = () => (
  <Layout>
    <section className="full-bleed" style={{
      background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
      padding: "64px 24px",
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
    }}>
      <FeatureBubble />
      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
          Our Work
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
          Installation Gallery
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
          {allWorkPhotos.length} split systems supplied &amp; installed by the real Home Comfort Air team across the Gold Coast, Brisbane, Ipswich and Tweed Heads. Click any photo for a closer look.
        </p>
      </div>
    </section>

    {/* ── Highlights strip ── */}
    <div style={{ borderBottom: "1px solid #e8eef5" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
        {highlights.map((h, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            textAlign: "center",
            padding: "28px 16px",
            borderRight: i < highlights.length - 1 ? "1px solid #e8eef5" : "none",
          }}>
            {h.custom === "google-reviews" ? (
              <GoogleReviewBadge variant="stacked-sm" />
            ) : (
              <div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{h.icon}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#0075C9", lineHeight: 1 }}>{h.value}</div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6, fontWeight: 600 }}>{h.label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div style={{ maxWidth: 1800, margin: "0 auto", padding: "48px 16px 64px" }}>
      <WorkPhotos />
    </div>
  </Layout>
)

export default GalleryPage

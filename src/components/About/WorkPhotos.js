import React, { useState, useEffect, useCallback } from "react"
import StaticImage from "../StaticQueryImages"
import GoogleReviewBadge from "../GoogleReviewBadge"

// Builds the SEO/AI-search-friendly description used for both the <img> alt
// text and the lightbox caption, e.g. "Supplied & installed a Midea split
// system air conditioner in Coombabah by Home Comfort Air". Falls back to a
// brand-less phrasing when the brand in a photo isn't known.
export const photoDescription = p =>
  p.brand
    ? `Supplied & installed a ${p.brand} split system air conditioner in ${p.label} by Home Comfort Air`
    : `Supplied & installed a split system air conditioner in ${p.label} by Home Comfort Air`

export const allWorkPhotos = [
  { file: "serviceArea/heritage-park.jpeg", label: "Heritage Park", brand: "Mitsubishi Electric" },
  { file: "serviceArea/coombabah.jpeg", label: "Coombabah", brand: "Midea" },
  { file: "serviceArea/nerang.jpeg", label: "Nerang", brand: "Midea" },
  { file: "serviceArea/hope-island.jpeg", label: "Hope Island", brand: "Midea" },
  { file: "serviceArea/newport.jpeg", label: "Newport", brand: "Haier" },
  { file: "serviceArea/redbank-plains.jpeg", label: "Redbank Plains", brand: "Daikin" },
  { file: "underwood.jpeg", label: "Underwood", brand: "Samsung" },
  { file: "serviceArea/ashmore.jpeg", label: "Ashmore", brand: "Midea" },
  { file: "serviceArea/upper-coomera.jpeg", label: "Upper Coomera", brand: "Midea" },
  { file: "serviceArea/upper-coomera-midea.jpeg", label: "Upper Coomera", brand: "Midea" },
  { file: "mermaid-waters.jpeg", label: "Mermaid Waters", brand: "Midea" },
  { file: "serviceArea/runawaybay.jpeg", label: "Runaway Bay", brand: "Samsung" },
  { file: "serviceArea/coombabah-daikin.jpeg", label: "Coombabah", brand: "Daikin" },
  { file: "serviceArea/elenora.jpeg", label: "Elanora", brand: "Mitsubishi Electric" },
  { file: "robina.jpeg", label: "Robina", brand: "Mitsubishi Electric" },
  { file: "serviceArea/oxenford.jpeg", label: "Oxenford", brand: "Haier" },
  { file: "serviceArea/arundel.jpeg", label: "Arundel", brand: "Samsung" },
  { file: "serviceArea/bahrs-scrub.jpeg", label: "Bahrs Scrub", brand: "Midea" },
  { file: "serviceArea/biggera-waters-head.jpeg", label: "Biggera Waters", brand: "Midea", cropPosition: "top" },
  { file: "serviceArea/newtown.jpeg", label: "Newtown", brand: "Midea" },
  { file: "serviceArea/redbank-plains-midea.jpeg", label: "Redbank Plains", brand: "Midea" },
  { file: "serviceArea/Redland_Bay.jpeg", label: "Redland Bay", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Bellmere.jpeg", label: "Bellmere", brand: "Midea" },
  { file: "serviceArea/Tweed_Heads_South.jpeg", label: "Tweed Heads South", brand: "Midea" },
  { file: "serviceArea/Goodna.jpeg", label: "Goodna", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Paradise_Point.jpeg", label: "Paradise Point", brand: "Midea" },
  // Added 2026-08-01
  { file: "serviceArea/Carseldine-1.jpeg", label: "Carseldine", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Coombabah-3.jpeg", label: "Coombabah", brand: "Midea" },
  { file: "serviceArea/Coombabah-4.jpeg", label: "Coombabah", brand: "Midea" },
  { file: "serviceArea/Coombabah_me.jpeg", label: "Coombabah", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Coomera.jpeg", label: "Coomera", brand: "Mitsubishi Heavy Industries" },
  { file: "serviceArea/Ellen Grove.jpeg", label: "Ellen Grove", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Fitzgibbon.jpeg", label: "Fitzgibbon", brand: "Midea" },
  { file: "serviceArea/Karalee.jpeg", label: "Karalee", brand: "Midea" },
  { file: "serviceArea/Labrador-2.jpeg", label: "Labrador", brand: "Midea" },
  { file: "serviceArea/Labrador-3.jpeg", label: "Labrador", brand: "Hitachi" },
  { file: "serviceArea/Labrador.jpeg", label: "Labrador", brand: "Midea" },
  { file: "serviceArea/Ormeau Hills.jpeg", label: "Ormeau Hills", brand: "Mitsubishi Heavy Industries" },
  { file: "serviceArea/Ormeau.jpeg", label: "Ormeau", brand: "Midea" },
  { file: "serviceArea/Pallara.jpeg", label: "Pallara", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Parkwood.jpeg", label: "Parkwood", brand: "Midea" },
  { file: "serviceArea/Regents Park.jpeg", label: "Regents Park", brand: "Mitsubishi Electric" },
  { file: "serviceArea/Sandstone Point.jpeg", label: "Sandstone Point", brand: "Haier" },
  { file: "serviceArea/Shailer Park.jpeg", label: "Shailer Park", brand: "Haier" },
  { file: "serviceArea/Southport.jpeg", label: "Southport", brand: "Haier" },
  { file: "serviceArea/Springfield Lakes.jpeg", label: "Springfield Lakes", brand: "Daikin" },
  { file: "serviceArea/Tallai.jpeg", label: "Tallai", brand: "Midea" },
  { file: "serviceArea/Tanah Merah.jpeg", label: "Tanah Merah", brand: "Daikin" },
  { file: "serviceArea/Wishart.jpeg", label: "Wishart", brand: "Midea" },
  { file: "serviceArea/upper coomera-1.jpeg", label: "Upper Coomera", brand: "Mitsubishi Electric" },
]

export const WorkPhotos = ({ photos = allWorkPhotos, className = "" } = {}) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    e => { e.stopPropagation(); setActiveIndex(i => (i - 1 + photos.length) % photos.length) },
    []
  )
  const showNext = useCallback(
    e => { e.stopPropagation(); setActiveIndex(i => (i + 1) % photos.length) },
    []
  )

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = e => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") setActiveIndex(i => (i - 1 + photos.length) % photos.length)
      if (e.key === "ArrowRight") setActiveIndex(i => (i + 1) % photos.length)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  return (
    <div className={className}>
      <style>{`
        .about-work-preview .grid-200 {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 700px) {
          .about-work-preview .grid-200 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .work-photo-thumb-img .gatsby-image-wrapper {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }
        .work-photo-thumb-img.crop-top .gatsby-image-wrapper img {
          object-position: center top !important;
        }
        /* Some source photos carry EXIF rotation whose aspect-ratio metadata
           doesn't match the actual (correctly rotated) generated image, which
           forces object-fit: cover to crop them wrong. The lightbox should
           always show the full photo, so it ignores the reserved aspect box
           and sizes from the real image instead. */
        .lightbox-photo-img .gatsby-image-wrapper > div[aria-hidden],
        .lightbox-photo-img .gatsby-image-wrapper > img {
          display: none !important;
        }
        .lightbox-photo-img .gatsby-image-wrapper {
          position: static !important;
          height: auto !important;
          display: flex !important;
          justify-content: center !important;
        }
        .lightbox-photo-img .gatsby-image-wrapper picture {
          display: block !important;
          line-height: 0 !important;
        }
        .lightbox-photo-img .gatsby-image-wrapper picture img {
          position: static !important;
          display: block !important;
          width: auto !important;
          height: auto !important;
          max-width: 100% !important;
          max-height: 76vh !important;
          object-fit: contain !important;
          opacity: 1 !important;
          margin: 0 auto !important;
        }
      `}</style>
      <div className="grid-200" style={{ alignItems: "start" }}>
        {photos.map((p, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`View larger photo — ${p.label}`}
            style={{
              display: "block",
              width: "100%",
              padding: 0,
              border: "none",
              background: "none",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div
              className={`work-photo-thumb-img${p.cropPosition === "top" ? " crop-top" : ""}`}
              style={{ position: "relative", width: "100%", paddingBottom: "75%", overflow: "hidden" }}
            >
              <StaticImage filename={p.file} alt={photoDescription(p)} />
            </div>
            <div style={{ padding: "10px 14px", background: "#f8fafc" }}>
              <div style={{
                fontSize: 13, fontWeight: 600, color: "#6b7280",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>
                {p.label}
                {p.brand && <span style={{ fontWeight: 500, color: "#9ca3af" }}> · {p.brand}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${photos[activeIndex].label} — full size photo`}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(4,21,33,0.92)",
            overflowY: "auto",
            padding: "64px 20px",
          }}
        >
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 20,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous photo"
            style={{
              position: "fixed",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: 900, width: "100%", margin: "0 auto" }}
          >
            <div className="lightbox-photo-img" style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
              <StaticImage
                filename={photos[activeIndex].file}
                alt={photoDescription(photos[activeIndex])}
              />
            </div>
            <p style={{ color: "#fff", textAlign: "center", marginTop: 16, fontSize: 15, fontWeight: 600 }}>
              {photos[activeIndex].brand ? `${photos[activeIndex].brand} — ${photos[activeIndex].label}` : photos[activeIndex].label}
              <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
                {" "}— {activeIndex + 1} / {photos.length}
              </span>
            </p>
          </div>

          <button
            onClick={showNext}
            aria-label="Next photo"
            style={{
              position: "fixed",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "none",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

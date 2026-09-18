// Create product template (archive cards)

import React from "react"
// import styles from "../../css/single-product.module.css"
// import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Long brand names overflow the pill badge on product cards — shorten them here.
const SHORT_BRAND_LABELS = {
  "mitsubishi heavy industries": "MHI",
}

const Product = ({ title, image, price, slug, isOnSpecial, id, brandLabel, brandColor }) => {
  const pillLabel = brandLabel && (SHORT_BRAND_LABELS[brandLabel.toLowerCase()] || brandLabel)
  return (
    <Link to={`/products/${slug}`} key={id}>
      <article className="product-card">

        <div className="product-card-badge-row">
          {pillLabel && (
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              background: brandColor || "#0075C9",
              color: "#fff",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 9px",
              borderRadius: "2em",
              textTransform: "capitalize",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>
              {pillLabel}
            </span>
          )}
          {/* Sale badge — disabled for now, re-enable when the sale is back on
          <span className="product-sale-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="9" height="9">
              <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            Sale
          </span>
          */}
        </div>

        <div className="product-card-img">
          <img src={image.url} alt={title} loading="lazy" height="180" width="180" />
        </div>

        <div className="product-card-body">
          <h3 className="product-card-title">{title}</h3>

          {price && isOnSpecial ? (
            <div className="product-card-pricing">
              <span className="product-card-price"><sup>$</sup>{isOnSpecial.toLocaleString()}</span>
              <span className="product-card-gst">Incl. GST</span>
              {/* SRP — disabled for now, re-enable when the sale is back on
              <span className="product-card-srp"><del>${(price + 100).toLocaleString()}</del></span>
              */}
            </div>
          ) : (
            <div className="product-card-pricing">
              <span className="product-card-price"><sup>$</sup>{price.toLocaleString()}</span>
              <span className="product-card-gst">Incl. GST</span>
              {/* SRP — disabled for now, re-enable when the sale is back on
              <span className="product-card-srp">SRP <del>${(price + 100).toLocaleString()}</del></span>
              */}
            </div>
          )}
          <p className="product-supplied-text">Supplied &amp; Installed</p>
          <div className="product-card-cta">View Details <span className="card-arrow">→</span></div>
        </div>
      </article>
    </Link>
  )
}

export default Product
import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layouts/layout"
import Search from "../components/Search"
import Product from "../components/Products/Product"
import FeatureBubble from "../components/FeatureBubble"

const quickLinks = [
  { label: "Split Systems", to: "/split-systems-air-conditioning" },
  { label: "Ducted Systems", to: "/ducted-systems" },
  { label: "Multi-Head Systems", to: "/multi-head-systems" },
  { label: "Shop All Products", to: "/products" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "Contact Us", to: "/contact" },
]

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundProducts {
      allStrapiProduct(
        filter: { sub_categories: { elemMatch: { title: { ne: "carrier" } } } }
        sort: { price: ASC }
        limit: 8
      ) {
        nodes {
          id
          title
          price
          slug
          image { url }
        }
      }
    }
  `)

  const products = data.allStrapiProduct.nodes

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="full-bleed" style={{
        background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
        padding: "72px 24px 56px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        <FeatureBubble />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
          <p style={{
            fontSize: "clamp(4rem, 14vw, 7rem)",
            fontWeight: 800,
            color: "#00c4b3",
            lineHeight: 1,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}>
            404
          </p>
          <h1 style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 14,
            lineHeight: 1.25,
          }}>
            Looks like this page got left out in the cold
          </h1>
          <p style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.85)",
            marginBottom: 32,
            lineHeight: 1.5,
          }}>
            The page you're looking for doesn't exist or has moved. Try searching for a product below, or head back home.
          </p>

          {/* Search */}
          <div className="notfound-search" style={{
            background: "#fff",
            borderRadius: 16,
            padding: "10px 14px",
            boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
            marginBottom: 28,
          }}>
            <Search />
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/" style={{
              display: "inline-block",
              background: "#00c4b3",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: "2em",
              textDecoration: "none",
            }}>
              ← Back To Home
            </Link>
            <Link to="/products" style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 28px",
              borderRadius: "2em",
              textDecoration: "none",
            }}>
              Shop Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 16px 0" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "#fff", border: "1px solid #e8eef5", borderRadius: 10,
          padding: "10px 14px",
        }}>
          <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {[1, 2, 3, 4, 5].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC05">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1f2937" }}>5.0</span>
          <span style={{ fontSize: 12, color: "#6b7280", borderLeft: "1px solid #e8eef5", paddingLeft: 10 }}>37 Google Reviews</span>
        </div>
      </div>

      {/* ── Quick links ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px 8px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {quickLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: "inline-block",
                background: "#f3f4f6",
                color: "#1f2937",
                fontWeight: 700,
                fontSize: 13,
                padding: "9px 18px",
                borderRadius: "2em",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Popular products ── */}
      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "40px 16px 64px" }}>
        <div className="section-heading" style={{ textAlign: "center" }}>
          <h2 className="section-title">Popular Products</h2>
        </div>
        <p style={{ textAlign: "center", color: "#6b7280", fontSize: 15, margin: "0 0 28px" }}>
          Supplied &amp; installed — here's what customers are shopping for right now.
        </p>
        <div className="product-grid">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <title>Page Not Found | Home Comfort Air</title>
    <meta name="robots" content="noindex, follow" />
  </>
)

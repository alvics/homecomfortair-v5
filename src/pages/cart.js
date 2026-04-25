// Cart Page (src/pages/cart.js)

import React, { useState, Fragment } from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layouts/layout';
import { useCart } from '../contexts/CartContext';
import FeatureBubble from '../components/FeatureBubble';

export const Head = () => (
  <Fragment>
    <title>Your Quote Cart | Home Comfort Air</title>
    <meta name="description" content="Review your selected air conditioning systems and request a personalised supply & install quote." />
  </Fragment>
)

// ── Quote Form (functional) ────────────────────────────────────────────────
const CartQuoteForm = ({ cartItems }) => {
  const [status, setStatus] = useState("");
  const productsOfInterest = cartItems.map(item => item.title).join(', ');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <section className="full-bleed" style={{
      background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
      marginTop: "3rem",
      padding: "64px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <FeatureBubble />
      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
        {/* Section header */}
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
          Next Step
        </p>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
          Request a Quote
        </h2>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.6, fontFamily: "'Caveat', cursive" }}>
          Fill in your details and we'll get back to you with a personalised supply &amp; install quote.
        </p>

        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 24px 48px rgba(0,0,0,0.2)", padding: "2rem" }}>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mleppppp" method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Products pre-filled */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Products of Interest
              </label>
              <input
                type="text"
                name="products_of_interest"
                value={productsOfInterest}
                readOnly
                style={{
                  width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb",
                  borderRadius: 8, fontSize: 14, fontWeight: 700, color: "#6b7280",
                  background: "#f9fafb", cursor: "not-allowed", boxSizing: "border-box"
                }}
              />
            </div>

            {/* Name + Email row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div>
                <input type="text" name="first_name" placeholder="Name" required
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontWeight: 600, boxSizing: "border-box" }} />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" required
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontWeight: 600, boxSizing: "border-box" }} />
              </div>
            </div>

            {/* Phone + Suburb row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div>
                <input type="text" name="phone" placeholder="Phone" required
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontWeight: 600, boxSizing: "border-box" }} />
              </div>
              <div>
                <input type="text" name="suburb" placeholder="Suburb" required
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontWeight: 600, boxSizing: "border-box" }} />
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea rows="4" name="message" placeholder="Message (optional)"
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: 14, fontWeight: 600, resize: "vertical", boxSizing: "border-box" }} />
            </div>

            {status === "SUCCESS" ? (
              <div style={{ background: "#d1fae5", color: "#065f46", padding: "14px 18px", borderRadius: 8, border: "1px solid #a7f3d0", fontWeight: 600 }}>
                Thank you! We'll be in touch shortly with your personalised quote.
              </div>
            ) : (
              <button type="submit" className="cart-submit-btn">
                Submit Quote Request →
              </button>
            )}

            {status === "ERROR" && (
              <div style={{ background: "#fee2e2", color: "#991b1b", padding: "14px 18px", borderRadius: 8, border: "1px solid #fecaca", fontWeight: 600 }}>
                Oops! Something went wrong. Please try again or call us on 0404 602 657.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// ── Cart Content ───────────────────────────────────────────────────────────
const CartContent = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  // ── Empty state ──────────────────────────────────────────────────────────
  if (cartItems.length === 0) {
    return (
      <>
        {/* Hero */}
        <section className="full-bleed" style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          padding: "64px 24px",
          position: "relative",
          overflow: "hidden",
        }}>
          <FeatureBubble />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
              Gold Coast · Brisbane · Ipswich
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
              Your Quote Cart
            </h1>
            <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 0, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
              Select systems from our range and request a supply &amp; install quote.
            </p>
          </div>
        </section>

        {/* Empty body */}
        <div style={{ maxWidth: 1800, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div style={{ fontSize: 64, marginBottom: 24 }}>🛒</div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1f2937", marginBottom: 12 }}>Your cart is empty</h2>
            <p style={{ fontSize: 16, color: "#6b7280", marginBottom: 32, lineHeight: 1.6 }}>
              Browse our split system air conditioning range and add products you're interested in to request a quote.
            </p>
            <Link to="/products" style={{
              display: "inline-block", background: "#0075C9", color: "#fff",
              fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: "2em", textDecoration: "none"
            }}>
              View Products →
            </Link>
          </div>
        </div>
      </>
    );
  }

  // ── Filled cart ──────────────────────────────────────────────────────────
  return (
    <>
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
          position: "relative",
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
            Gold Coast · Brisbane · Ipswich
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
            Your Quote Cart
          </h1>
          <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
            {getTotalItems()} {getTotalItems() === 1 ? "system" : "systems"} selected — request your supply &amp; install quote below.
          </p>
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
      </section>

      {/* ── Body ── */}
      <div style={{ maxWidth: 1800, margin: "0 auto", padding: "32px 16px 64px" }}>

        {/* Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8">
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1f2937", margin: 0 }}>
            Selected Systems ({getTotalItems()})
          </h2>
          <button
            onClick={clearCart}
            style={{
              background: "transparent", border: "1.5px solid #e5e7eb", color: "#6b7280",
              padding: "8px 18px", borderRadius: "2em", fontSize: 13, fontWeight: 600,
              cursor: "pointer", transition: "all 0.2s"
            }}
          >
            Clear Cart
          </button>
        </div>

        {/* Main layout: items list + summary sidebar */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 32,
        }} className="cart-layout">

          {/* ── Cart Item Rows ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {cartItems.map(item => (
              <div key={item.id} style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr auto",
                gap: 20,
                alignItems: "center",
                background: "#fff",
                border: "1px solid #e8eef5",
                borderRadius: 12,
                padding: "20px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }} className="cart-item-row">

                {/* Image */}
                <Link to={`/products/${item.slug}`} style={{ textDecoration: "none", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: 120, height: 120, objectFit: "contain" }}
                  />
                </Link>

                {/* Details */}
                <div>
                  {/* Brand badge */}
                  {item.brand && (
                    <span style={{
                      display: "inline-flex", alignItems: "center",
                      background: "#0075C9", color: "#fff",
                      fontSize: 10, fontWeight: 700,
                      padding: "2px 9px", borderRadius: "2em",
                      textTransform: "capitalize", letterSpacing: "0.04em",
                      marginBottom: 8,
                    }}>
                      {item.brand}
                    </span>
                  )}
                  <Link to={`/products/${item.slug}`} style={{ textDecoration: "none" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#041521", margin: "0 0 4px", lineHeight: 1.4 }}>
                      {item.title}
                    </h3>
                  </Link>
                  {item.model && (
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 10px", fontWeight: 500 }}>
                      Model: {item.model}
                    </p>
                  )}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#041521", fontFamily: "'Figtree', sans-serif" }}>
                      <sup style={{ fontSize: "0.65rem", verticalAlign: "middle" }}>$</sup>{item.price}
                    </span>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>Supplied &amp; Installed</span>
                  </div>
                </div>

                {/* Quantity + Remove */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      style={{
                        width: 32, height: 32, border: "1.5px solid #e5e7eb", borderRadius: 8,
                        background: item.quantity <= 1 ? "#f9fafb" : "#fff",
                        color: item.quantity <= 1 ? "#d1d5db" : "#374151",
                        fontWeight: 700, fontSize: 18, cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      −
                    </button>
                    <span style={{ minWidth: 28, textAlign: "center", fontWeight: 700, fontSize: 15, color: "#1f2937" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: 32, height: 32, border: "1.5px solid #e5e7eb", borderRadius: 8,
                        background: "#fff", color: "#374151",
                        fontWeight: 700, fontSize: 18, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "none", border: "1.5px solid #fca5a5",
                      color: "#ef4444", padding: "5px 14px", borderRadius: "2em",
                      fontSize: 12, fontWeight: 600, cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* ── Order Summary ── */}
          <div>
            <div style={{
              background: "#fff", borderRadius: 12, border: "1px solid #e8eef5",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)", padding: "1.5rem",
              position: "sticky", top: 90,
            }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1f2937", marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #e8eef5" }}>
                Quote Summary
              </h3>

              {cartItems.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14 }}>
                  <span style={{ color: "#374151", fontWeight: 600, maxWidth: "65%", lineHeight: 1.4 }}>{item.title}</span>
                  <span style={{ color: "#1f2937", fontWeight: 700, whiteSpace: "nowrap" }}>
                    ${(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}

              <div style={{ borderTop: "2px solid #e8eef5", marginTop: 16, paddingTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: "1.1rem", color: "#1f2937" }}>
                  <span>Estimated Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 6, lineHeight: 1.4 }}>
                  Final price confirmed after site inspection. Includes supply &amp; installation.
                </p>
              </div>

              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="#quote-form" style={{
                  display: "block", textAlign: "center",
                  background: "#0075C9", color: "#fff",
                  fontWeight: 700, fontSize: 14, padding: "13px 20px",
                  borderRadius: "2em", textDecoration: "none",
                }}>
                  Request Quote →
                </a>
                <Link to="/products" style={{
                  display: "block", textAlign: "center",
                  background: "transparent", color: "#0075C9",
                  fontWeight: 600, fontSize: 13, padding: "10px 20px",
                  borderRadius: "2em", textDecoration: "none",
                  border: "1.5px solid #0075C9",
                }}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Quote Form ── */}
        <div id="quote-form">
          <CartQuoteForm cartItems={cartItems} />
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .cart-layout {
            grid-template-columns: 1fr 320px !important;
          }
        }
        @media (max-width: 560px) {
          .cart-item-row {
            grid-template-columns: 90px 1fr !important;
          }
          .cart-item-row > :last-child {
            grid-column: 1 / -1;
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
        .cart-submit-btn {
          background: #00c4b3 !important;
          color: #fff !important;
          font-weight: 700 !important;
          font-size: 15px !important;
          padding: 14px 32px !important;
          border-radius: 2em !important;
          border: none !important;
          cursor: pointer !important;
          align-self: flex-start !important;
          transition: background 0.2s !important;
        }
        .cart-submit-btn:hover {
          background: #00b0a0 !important;
        }
      `}</style>
    </>
  );
};

// ── Page ───────────────────────────────────────────────────────────────────
const CartPage = () => (
  <Layout>
    <CartContent />
  </Layout>
);

export default CartPage;

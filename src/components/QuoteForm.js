import React from "react"

const inputStyle = {
  width: "100%",
  border: "1px solid #e2e8f0",
  borderRadius: 10,
  padding: "11px 14px",
  fontSize: 14,
  color: "#1f2937",
  background: "#f8fafc",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "Nunito Sans, sans-serif",
}

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = { status: "" }
  }

  render() {
    const { status } = this.state
    const { productTitle, compact } = this.props
    return (
      <div>
        {!this.props.hideTitle && (
          <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#041521", margin: "0 0 20px", textAlign: "center" }}>
            {this.props.title || "Get a Free Quote"}
          </h3>
        )}

        {status === "SUCCESS" ? (
          <div style={{
            textAlign: "center",
            padding: "40px 24px",
            background: "#f0fdf4",
            borderRadius: 12,
            border: "1px solid #bbf7d0",
          }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
            <p style={{ fontWeight: 700, fontSize: 16, color: "#15803d", margin: "0 0 6px" }}>Message sent!</p>
            <p style={{ fontSize: 14, color: "#4b5563", margin: 0 }}>We'll be in touch within a few hours.</p>
          </div>
        ) : (
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mleppppp"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {productTitle && (
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 5px" }}>
                  Enquiring about:
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "#f1f5f9", border: "1px solid #e2e8f0",
                  borderRadius: 10, padding: "10px 14px",
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{productTitle}</span>
                  <input type="hidden" name="product" value={productTitle} />
                </div>
              </div>
            )}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input
                style={inputStyle}
                type="text"
                name="first_name"
                placeholder="Name"
                required
                onFocus={e => { e.target.style.borderColor = "#0075C9"; e.target.style.background = "#fff" }}
                onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc" }}
              />
              <input
                style={inputStyle}
                type="text"
                name="phone"
                placeholder="Phone"
                onFocus={e => { e.target.style.borderColor = "#0075C9"; e.target.style.background = "#fff" }}
                onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input
                style={inputStyle}
                type="text"
                name="suburb"
                placeholder="Suburb"
                required
                onFocus={e => { e.target.style.borderColor = "#0075C9"; e.target.style.background = "#fff" }}
                onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc" }}
              />
              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="Email"
                required
                onFocus={e => { e.target.style.borderColor = "#0075C9"; e.target.style.background = "#fff" }}
                onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc" }}
              />
            </div>
            <textarea
              style={{ ...inputStyle, minHeight: 100, resize: "vertical" }}
              name="message"
              placeholder="Tell us about your space — room size, number of units, any access considerations..."
              required
              onFocus={e => { e.target.style.borderColor = "#0075C9"; e.target.style.background = "#fff" }}
              onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.background = "#f8fafc" }}
            />

            {status === "ERROR" && (
              <p style={{ fontSize: 13, color: "#dc2626", margin: 0 }}>Something went wrong — please try again.</p>
            )}

            <button
              type="submit"
              className="text-white"
              style={{
                marginTop: 8,
                background: "linear-gradient(135deg, #00c4b3 0%, #00a99a 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: compact ? 12 : 14,
                padding: compact ? "9px 20px" : "13px 24px",
                borderRadius: "2em",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.04em",
                width: compact ? "auto" : "100%",
                alignSelf: compact ? "flex-start" : "auto",
                fontFamily: "Nunito Sans, sans-serif",
              }}
              onMouseEnter={e => e.target.style.opacity = "0.9"}
              onMouseLeave={e => e.target.style.opacity = "1"}
            >
              Send My Quote Request →
            </button>

            <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", margin: 0 }}>
              No obligation · Usually replied within a few hours
            </p>
          </form>
        )}
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}

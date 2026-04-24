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
                fontSize: 14,
                padding: "13px 24px",
                borderRadius: "2em",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.04em",
                width: "100%",
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

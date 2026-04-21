import React from "react"

const BrandFeatures = ({ features, heading }) => (
  <section style={{ paddingTop: 40, paddingBottom: 48, borderBottom: "1px solid #e8eef5" }}>
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0075C9", marginBottom: 12 }}>
      What Sets It Apart
    </p>
    <h2 className="section-title" style={{ marginBottom: 32 }}>
      {heading}
    </h2>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 16,
      marginTop: 24,
    }}>
      {features.map((f, i) => (
        <div key={i} style={{
          background: "#f8fafc",
          border: "1px solid #e8eef5",
          borderRadius: 12,
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <div style={{ color: "#0075C9" }}>{f.icon}</div>
          <strong style={{ fontSize: 14, fontWeight: 700, color: "#1f2937" }}>{f.title}</strong>
          <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{f.desc}</span>
        </div>
      ))}
    </div>
  </section>
)

export default BrandFeatures

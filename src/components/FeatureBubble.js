import React from "react"

/**
 * Decorative bubble overlay for hero sections.
 * Parent must have `position: relative` and `overflow: hidden`.
 *
 * Usage:
 *   <section style={{ position: "relative", overflow: "hidden", ... }}>
 *     <FeatureBubble />
 *     ...content...
 *   </section>
 */
const FeatureBubble = () => (
  <>
    <div style={{ position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", bottom: -80, left: -40, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: "40%", left: "15%", width: 120, height: 120, borderRadius: "50%", background: "rgba(0,196,179,0.12)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", top: "20%", right: "20%", width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
  </>
)

export default FeatureBubble

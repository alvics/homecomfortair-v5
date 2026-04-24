import React, { useState, useMemo, useEffect } from "react"
import { Link } from "gatsby"

export const STANDARD_SIZES = [2.5, 3.5, 5.0, 6.0, 7.1, 8.0, 9.0, 10.0, 12.5]

const SunShaded = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 12H1"/><path d="M20.49 6.51A10 10 0 1 1 3.51 17.49"/>
  </svg>
)
const SunNormal = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)
const SunFull = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.15"/>
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)
const IconBed = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
  </svg>
)
const IconSofa = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5H6V11a2 2 0 0 0-4 0z"/><line x1="6" y1="18" x2="6" y2="22"/><line x1="18" y1="18" x2="18" y2="22"/>
  </svg>
)
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const IconOffice = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
)

const SUN_OPTIONS = [
  { value: "shaded",  label: "Shaded",   icon: <SunShaded />, desc: "Mostly shaded, south-facing",  factor: 0.90 },
  { value: "normal",  label: "Normal",   icon: <SunNormal />, desc: "Mixed light through the day",   factor: 1.00 },
  { value: "sunny",   label: "Full Sun", icon: <SunFull />,   desc: "Direct sun, north/west-facing", factor: 1.20 },
]

const ROOM_OPTIONS = [
  { value: "bedroom",  label: "Bedroom",     icon: <IconBed />,    factor: 0.90 },
  { value: "living",   label: "Living Room", icon: <IconSofa />,   factor: 1.05 },
  { value: "openplan", label: "Open Plan",   icon: <IconHome />,   factor: 1.20 },
  { value: "office",   label: "Office",      icon: <IconOffice />, factor: 1.00 },
]

const CEILING_OPTIONS = [
  { value: "standard", label: "Standard (2.4m)", factor: 1.00 },
  { value: "high",     label: "High (2.7m)",     factor: 1.10 },
  { value: "vhigh",    label: "Very High (3m+)", factor: 1.20 },
]

export function snapToStandard(kw) {
  return STANDARD_SIZES.reduce((prev, curr) =>
    Math.abs(curr - kw) < Math.abs(prev - kw) ? curr : prev
  )
}

function getBarWidth(kw) {
  const min = STANDARD_SIZES[0]
  const max = STANDARD_SIZES[STANDARD_SIZES.length - 1]
  return Math.min(100, Math.max(8, ((kw - min) / (max - min)) * 100))
}

const RoomSizeCalculator = ({ onResult }) => {
  const [length,  setLength]  = useState("")
  const [width,   setWidth]   = useState("")
  const [sun,     setSun]     = useState("normal")
  const [room,    setRoom]    = useState("living")
  const [ceiling, setCeiling] = useState("standard")

  const result = useMemo(() => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    if (!l || !w || l <= 0 || w <= 0) return null

    const area = l * w
    const sunFactor     = SUN_OPTIONS.find(o => o.value === sun)?.factor     ?? 1
    const roomFactor    = ROOM_OPTIONS.find(o => o.value === room)?.factor    ?? 1
    const ceilingFactor = CEILING_OPTIONS.find(o => o.value === ceiling)?.factor ?? 1

    const rawKw   = area * 0.15 * sunFactor * roomFactor * ceilingFactor
    const recommended = snapToStandard(rawKw)
    const barWidth     = getBarWidth(rawKw)

    return { area: area.toFixed(1), rawKw: rawKw.toFixed(2), recommended, barWidth }
  }, [length, width, sun, room, ceiling])

  useEffect(() => {
    onResult?.(result?.recommended ?? null)
  }, [result]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full">
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>

        {/* ── Inputs ── */}
        <div className="flex flex-col gap-4">

          {/* Dimensions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Room Dimensions
            </label>
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="0.1"
                  placeholder="Length"
                  value={length}
                  onChange={e => setLength(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-base font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent bg-gray-50"
                  style={{ focusRingColor: "#0075C9" }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">m</span>
              </div>
              <span className="text-gray-400 font-bold">×</span>
              <div className="flex-1 relative">
                <input
                  type="number"
                  min="1"
                  max="30"
                  step="0.1"
                  placeholder="Width"
                  value={width}
                  onChange={e => setWidth(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-base font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:border-transparent bg-gray-50"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">m</span>
              </div>
              {result && (
                <span className="text-xs text-gray-500 whitespace-nowrap">= <strong className="text-gray-700">{result.area} m²</strong></span>
              )}
            </div>
          </div>

          {/* Sun + Room type in one row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Sun Exposure
              </label>
              <div className="flex gap-1">
                {SUN_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setSun(opt.value)}
                    title={opt.desc}
                    className={`flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg border-2 text-xs font-semibold transition-all cursor-pointer ${
                      sun === opt.value
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <span>{opt.icon}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Room Type
              </label>
              <div className="grid grid-cols-2 gap-1">
                {ROOM_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setRoom(opt.value)}
                    className={`flex items-center gap-1.5 px-2 py-2 rounded-lg border-2 text-xs font-semibold transition-all cursor-pointer ${
                      room === opt.value
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <span>{opt.icon}</span>
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ceiling height — horizontal pills */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Ceiling Height
            </label>
            <div className="flex gap-2">
              {CEILING_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setCeiling(opt.value)}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border-2 text-xs font-semibold transition-all cursor-pointer ${
                    ceiling === opt.value
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {ceiling === opt.value && (
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Result ── */}
        <div className="flex flex-col justify-start">
          {!result ? (
            <div className="flex flex-col items-center justify-center h-full min-h-40 rounded-xl border-2 border-dashed border-gray-200 text-center p-5 gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-400">Enter your room dimensions to get a kW recommendation.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">

              {/* Main result card */}
              <div className="rounded-xl p-4 text-white" style={{ background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)" }}>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Recommended Size</p>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-black">{result.recommended}</span>
                  <span className="text-xl font-bold text-blue-200 mb-1">kW</span>
                  <span className="text-xs text-blue-200 mb-1.5 ml-1">{result.area} m²</span>
                </div>
                <div className="flex justify-between text-xs text-blue-300 mb-1">
                  <span>2.5kW</span>
                  <span>12.5kW</span>
                </div>
                <div className="w-full h-1.5 bg-blue-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${result.barWidth}%`, background: "#00c4b3" }}
                  />
                </div>
              </div>

              {/* Size chips */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div className="flex flex-wrap gap-1.5">
                  {STANDARD_SIZES.map(size => (
                    <span
                      key={size}
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        size === result.recommended
                          ? "text-white"
                          : "bg-white border border-gray-200 text-gray-400"
                      }`}
                      style={size === result.recommended ? { background: "#0075C9" } : {}}
                    >
                      {size}kW
                    </span>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 leading-relaxed">
                <strong>Guide only.</strong> Insulation, windows &amp; layout also affect sizing — our team can confirm before you buy.
              </p>

              <Link
                to="/contact"
                className="block text-center font-bold text-xs py-2.5 px-4 rounded-full text-white no-underline transition-opacity hover:opacity-90"
                style={{ background: "#00c4b3" }}
              >
                Get an expert recommendation →
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default RoomSizeCalculator

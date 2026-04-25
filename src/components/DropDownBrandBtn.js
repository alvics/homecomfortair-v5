import React, { useState } from "react"
import { Link } from "gatsby"

const DropdownBrandBtn = ({ onNavigate }) => {
  const [open, setOpen] = useState(false)

  const handleLink = () => {
    setOpen(false)
    if (onNavigate) onNavigate()
  }

  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'block',
          width: '100%',
          padding: '16px 24px',
          fontSize: '17px',
          fontWeight: 500,
          color: '#041521',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          borderBottom: open ? '1px solid #e8f0fe' : 'none',
        }}
        aria-expanded={open}
      >
        Brands
        <span style={{ float: 'right', transition: 'transform 200ms', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>▾</span>
      </button>

      {open && (
        <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 8px', background: '#f8fafc' }}>
          {[
            ["/products/midea-split-system-air-conditioning", "Midea Air Conditioning"],
            ["/products/haier-split-system-air-conditioning", "Haier Air Conditioning"],
            ["/products/hitachi-split-system-air-conditioning", "Hitachi Air Conditioning"],
            ["/products/samsung-split-system-air-conditioning", "Samsung Air Conditioning"],
            ["/products/toshiba-split-system-air-conditioning", "Toshiba Air Conditioning"],
            ["/products/daikin-split-system-air-conditioning", "Daikin Air Conditioning"],
            ["/products/mitsubishi-electric-split-system-air-conditioning/", "Mitsubishi Electric"],
            ["/products/mhi-split-system-air-conditioning", "Mitsubishi Heavy Industries"],
          ].map(([to, label]) => (
            <li key={to} style={{ borderBottom: '1px solid #f0f4f8' }}>
              <Link
                to={to}
                onClick={handleLink}
                style={{ display: 'block', padding: '13px 24px 13px 36px', fontSize: '15px', color: '#374151' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownBrandBtn

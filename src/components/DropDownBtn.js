import React, { useState } from "react"
import { Link } from "gatsby"

const DropdownBtn = ({ onNavigate }) => {
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
        Our Services
        <span style={{ float: 'right', transition: 'transform 200ms', display: 'inline-block', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>▾</span>
      </button>

      {open && (
        <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 8px', background: '#f8fafc' }}>
          {[
            ["/service-areas", "Service Areas"],
            ["/products/split-system-air-conditioning", "Split Systems"],
            ["/ducted-systems", "Ducted Systems"],
            ["/multi-head-systems", "Multi-Head Systems"],
            ["/installation-warranty", "Installation Warranty"],
            ["/split-ac-installation-cost", "Split A/C Installation Cost"],
            ["/split-system-replacement", "Split System Replacement"],
            ["/home-comfort-club", "⭐ Home Comfort Club"],
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

export default DropdownBtn

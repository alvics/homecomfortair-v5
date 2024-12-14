// Display the dropdown button in Mobile Nav Menu
import React from "react"
import { Link } from "gatsby"

const DropdownBtn = () => {
  return (
    <div className="dropdown">
      <a
        className="fw-400 px-0 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1 "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Our Services
      </a>
      <ul
        className="dropdown-menu px-3"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
       <li>
          <Link to="/service-areas">Service Area's</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/products/split-system-air-conditioning">Split Systems</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/ducted-systems">Ducted Systems</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/multi-head-systems">Multi-Head Systems </Link>
        </li>
        <div className="dropdown-divider"></div>
       <li>
        <Link to="/installation-warranty">Installation Warranty</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
        <Link to="/split-ac-installation-cost">Split A/C Installation Cost</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
        <Link to="/split-system-replacement">Split System Replacement</Link>
        </li>
      </ul>
    </div>
  )
}

export default DropdownBtn

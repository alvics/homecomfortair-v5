// Display the dropdown button in Mobile Nav Menu
import React from "react"
import { Link } from "gatsby"

const DropdownBrandBtn = () => {
  return (
    <div className="dropdown">
      <a
        className="fw-400 px-0 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1 "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Brands
      </a>
      <ul
        className="dropdown-menu px-3"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
       <li>
           <Link to="/products/midea-split-system-air-conditioning">Midea Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
           <Link to="/products/haier-split-system-air-conditioning">Haier Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/products/carrier-split-system-air-conditioning">Carrier Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
           <Link to="/products/samsung-split-system-air-conditioning" >Samsung Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
         <Link to="/products/toshiba-split-system-air-conditioning" >Toshiba Air Conditioning</Link>
        </li>
         <li>
         <Link to="/products/daikin-split-system-air-conditioning">Daikin Air Conditioning</Link>
        </li>
          <li>
         <Link to="/products/mitsubishi-split-system-electric-air-conditioning">Mitsubishi Electric Air Conditioning</Link>
        </li>
      </ul>
    </div>
  )
}

export default DropdownBrandBtn

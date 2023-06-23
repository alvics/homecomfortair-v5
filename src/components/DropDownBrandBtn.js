// Display the dropdown button in Mobile Nav Menu
import React from "react"
import { Link } from "gatsby"

const DropdownBrandBtn = () => {
  return (
    <div className="dropdown">
      <button
        style={{ fontFamily: `Open Sans, sans-serif`, fontSize: 24 }}
        className="fw-400 px-0 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1 "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Brands
      </button>
      <ul
        className="dropdown-menu px-3"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
       <li>
           <Link to="/products/midea-air-conditioning">Midea Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
           <Link to="/products/haier-air-conditioning">Haier Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/products/carrier-air-conditioning">Carrier Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
           <Link to="/products/samsung-air-conditioning" >Samsung Air Conditioning</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
         <Link to="/products/toshiba-air-conditioning" >Toshiba Air Conditioning</Link>
        </li>
         <li>
         <Link to="/products/daikin-air-conditioning">Daikin Air Conditioning</Link>
        </li>
      </ul>
    </div>
  )
}

export default DropdownBrandBtn

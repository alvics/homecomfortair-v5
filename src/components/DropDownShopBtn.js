// Display the dropdown button in Mobile Nav Menu
import React from "react"
import { Link } from "gatsby"

const DropdownShopBtn = () => {
  return (
    <div className="dropdown shop-mobile-menu">
      <button
        style={{ fontFamily: `Open Sans, sans-serif`, fontSize: 18 }}
        className="fw-400 px-0 dropdown-toggle"
        type="button"
        id="dropdownMenuButton1 "
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Shop
      </button>
      <ul
        className="dropdown-menu px-3 shop-mobile-menu-list"
        aria-labelledby="dropdownMenuButton"
        style={{ whiteSpace: `nowrap` }}
      >
        <li>
          <Link className='' to="/products/">Shop Split Systems</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/products/">Shop Multi head System</Link>
        </li>
        <div className="dropdown-divider"></div>
        <li>
          <Link to="/products/">Shop Ducted Systems</Link>
        </li>
        <div className="dropdown-divider"></div>
       
       
      </ul>
    </div>
  )
}

export default DropdownShopBtn

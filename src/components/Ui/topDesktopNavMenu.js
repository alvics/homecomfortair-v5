 
// import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Search from "../Search"
// import FacebookIcon from "@material-ui/icons/Facebook"


 

 const TopNavMenu = () => {

  return (
 
 
 <div
        style={{ zIndex: 999999 }}
        className="container-fluid fixed-top py-3"
      >
        <div className="container text-white">
          <div className="row">
            <div className="col d-flex-justify-content-start align-items-center service-area text-shadow-1 text-black d-none d-lg-block d-xl-block d-xxl-block">
              <span className="headerLink"><Link to="/ipswich-air-conditioning">Ipswich</Link></span> | <span className="headerLink"><Link  to="/brisbane-air-conditioning">Brisbane</Link></span> | <span className="headerLink"><Link  to="/gold-coast-air-conditioning">Gold Coast</Link></span>
              
            </div>
            <div className="col"><Search /></div>

            <div
              style={{ PaddingBottom: 5 }}
              className="col d-flex justify-content-end phone-nav"
            >
              <a
                style={{ fontSize: 14 }}
                className="call-icon d-flex align-items-center text-shadow-1 btn-- btn-green-- my-1 px-3 "
                href="tel:0404602657"
              >
                <span style={{ fontSize: 22 }} className="material-icons ">
                 <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 512 512">
  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="white" />
</svg>

                </span>{" "}
                <span
                  className="phone-num fw-600 ml-1"
                  style={{ whiteSpace: `nowrap` }}
                >
                  Call 0404 602 657
                </span>
              </a>
            </div>
          </div>
        </div>
    </div>
     )
}

export default TopNavMenu
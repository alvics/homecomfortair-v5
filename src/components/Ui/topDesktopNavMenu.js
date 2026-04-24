 
// import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Search from "../Search"
// import FacebookIcon from "@material-ui/icons/Facebook"


 

 const TopNavMenu = () => {

  return (
 
 
 <div
        style={{ zIndex: 1050, maxHeight: 50 }}
        className="container-fluid fixed-top py-3 bg-white Top-Nav-Desk-Top d-none d-lg-block"
      >
        <div className="container text-white">
          <div className="row">
            <div className="col-md-3 d-none d-lg-block d-xl-block d-xxl-block d-flex justify-content-between service-area text-shadow-1 text-black">
             <span className="headerLink"><Link  to="/gold-coast-air-conditioning">Gold Coast</Link></span> | <span className="headerLink"><Link  to="/brisbane-air-conditioning">Brisbane</Link></span> | 
               <span className="headerLink"><Link to="/ipswich-air-conditioning"> Ipswich</Link></span>
              
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 d-flex justify-content-between"><Search /></div>

          </div>
        </div>
    </div>
     )
}

export default TopNavMenu
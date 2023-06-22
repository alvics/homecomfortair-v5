//*************************************/
// OUR SERVICES MEGA MENU NAVIGATION
//************************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"



const Header = () => {

  return (

   
  <Fragment>
            <Link to="/split-systems">
              <span className="dropdown--">
                <span className="dropbtn d-flex">
                  <Link to="/products">Our Services</Link>
                  <span
                    style={{ fontSize: `inherit`, fontWeight: `bold` }}
                    class="material-icons"
                  >
                     <svg className='mt-1' style={{paddingLeft: '2px'}} xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                  </span>
                </span>
                <div className="dropdown-content">
                   <Link to="/service-areas">Service area's</Link>
                  <Link to="/split-systems">Split Systems</Link>
                  <Link to="/ducted-systems">Ducted Systems</Link>
                  <Link to="/multi-head-systems">Multi-Head Systems </Link>
                  <Link to="/installation-warranty">Installation Warranty</Link>
                  <Link to="/split-ac-installation-cost">Split A/C Installation Cost</Link>
                  <Link to="/split-system-replacement">Split System Replacement</Link>
                   
                </div>
              </span>
            </Link>
  </Fragment>
  )
}

export default Header

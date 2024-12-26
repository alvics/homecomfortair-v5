//*************************************/
// OUR SERVICES MEGA MENU NAVIGATION
//************************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"
import StaticImage from "../StaticQueryImages"


const Header = () => {

  return (

   
  <Fragment>
            <Link to="/service-areas">
              <span className="dropdown--">
                <span className="dropbtn d-flex">
                  <Link to="/service-areas">Our Services</Link>
                  <span>
                     <svg className='mt-1' style={{paddingLeft: '2px'}} xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                  </span>
                </span>
                <div className="dropdown-content">
                   <Link to="/service-areas" className='text-center'><div className="split-systems-avatar-2 "><StaticImage
                filename="map.png"
                alt="home comfort air map icon"
              /></div>Service area's</Link>

                  <Link to="/products/split-system-air-conditioning" className='text-center'> <div className="split-systems-avatar-2 "><StaticImage
                filename="air-conditioner.png"
                alt="home comfort air air conditioner icon"
              /></div>Split Systems</Link>

                  <Link to="/ducted-systems" className='text-center'><div className="split-systems-avatar-2"><StaticImage
                filename="ducted.png"
                alt="home comfort air ducted icon"
              /></div>Ducted Systems</Link>

                  <Link to="/multi-head-systems" className='text-center'><div className="split-systems-avatar-2"><StaticImage
                filename="smart-house-2.png"
                alt="home comfort air ducted icon"
              /></div>Multi-Head Systems </Link>

                  <Link to="/installation-warranty" className='text-center'><div className="split-systems-avatar-2"><StaticImage
                filename="warranty.png"
                alt="home comfort air ducted icon"
              /></div>Installation Warranty</Link>

                  <Link to="/split-ac-installation-cost"><div className="split-systems-avatar-2"><StaticImage
                filename="house-cost.png"
                alt="home comfort air ducted icon"
              /></div>Split A/C Installation Cost</Link>

                  <Link to="/split-system-replacement" className='text-center'><div className="split-systems-avatar-2"><StaticImage
                filename="maintenance.png"
                alt="home comfort air ducted icon"
              /></div>Split System Replacement</Link>
                   
                </div>
              </span>
            </Link>
  </Fragment>
  )
}

export default Header

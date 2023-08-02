//***************************/
// SHOP MEGA MENU NAVIGATION
//***************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"
// import StaticImage from "../StaticQueryImages"

const Header = () => {
 
  return (

   
  <Fragment>
  <Link to="/products/#midea">

             <span className="shopnav">
                  { /* <span className="dropbtn d-flex"> */} 
                 <Link to="/products">Shop</Link>
                  { /* <span
                   style={{ fontSize: `inherit`, fontWeight: `bold` }}
                   class="material-icons"
                 >
                   <svg className='mt-1' style={{paddingLeft: '2px'}} xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                 </span>
  </span> */}
               { /*
               <div className="dropdown-content shop-nav">
                 
                  <Link to="/products/specials"><div style={{maxWidth:200}} ><StaticImage filename="monthlt-specials.png"  
                alt="home comfort air image" /></div>Monthly Specials</Link>

                  <Link to="/multi-head-systems"><div style={{maxWidth:200,marginBottom:10}} ><StaticImage filename="multi-head-system.png"  
                alt="home comfort air image" /></div>Multi Head Systems</Link>

                  <Link  to="/products/#midea" ><div style={{maxWidth:200}} ><StaticImage filename="midea-split-system.png"  
                alt="home comfort air image" /></div>Midea Split Systems</Link>

                  <Link  to="/products/#carrier" ><div style={{maxWidth:200}} ><StaticImage filename="carrier-split-system-new.png"  
                alt="home comfort air image" /></div>Carrier Split Systems</Link>

                  <Link  to="/products/#haier" ><div style={{maxWidth:200, marginBottom:8}} ><StaticImage filename="haier-split-system-2.png"  
                alt="home comfort air image" /></div>Haier Split Systems</Link>

                  <Link  to="/products/#samsung" ><div style={{maxWidth:200, marginBottom:-10}} ><StaticImage filename="samsung-split-system-new.png"  
                alt="home comfort air image" /></div>Samsung Split Systems</Link>

                  <Link  to="/products/#toshiba" ><div style={{maxWidth:200, marginBottom:-10}} ><StaticImage filename="toshiba-split-system.png"  
                alt="home comfort air image" /></div>Toshiba Split Systems</Link>

                  <Link  to="/products/#daikin"><div style={{maxWidth:200, marginBottom:-2}} ><StaticImage filename="daikin-split-system-new.png"  
                alt="home comfort air image" /></div>Daikin Split Systems</Link>

                  <Link  to="/products/#mitsubishi"><div style={{maxWidth:200, marginBottom:-20}} ><StaticImage filename="mitsubishi-split-system-new.png"  
  alt="home comfort air image" /></div>Mitsubishi Split Systems</Link> 
                 </div> */}
             </span>
       </Link>
  </Fragment>
  )
}

export default Header

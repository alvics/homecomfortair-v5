//***************************/
// ABOUT MEGA MENU NAVIGATION
//***************************/

import React, { Fragment } from "react"
import { Link } from "gatsby"
import StaticImage from "../StaticQueryImages"


const BrandNavMenu = () => {
 const width = 0
 const height = 30
  return (

   
  <Fragment>
      <Link to="/products/split-system-air-conditioning/">
             <span className="dropdown-- ">
               <span className="dropbtn d-flex">
                 <Link to="/products/split-system-air-conditioning/">Brands</Link>
                 <span
                   style={{ fontSize: `inherit`, fontWeight: `bold` }}
                   className="material-icons"
                 >
                    <svg className='mt-1' style={{paddingLeft: '2px'}} xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                 </span>
               </span>
               <div className="dropdown-content brands-nav">
                  <Link className='border' to="/products/midea-split-system-air-conditioning"><div style={{maxWidth:100, border:0, textAlign:"center"}} ><StaticImage filename="midea-logo.jpg" width={width} height={height} 
                alt="home comfort air image" /></div>Midea Air Conditioning</Link>

                  <Link className='border' to="/products/haier-split-system-air-conditioning"><div style={{maxWidth:100, border:0, textAlign:"center"}} ><StaticImage filename="haier.jpg"
                alt="home comfort air image" /></div>Haier Air Conditioning</Link>

                    <Link className='border'to="/products/mitsubishi-electric-split-system-air-conditioning"><div style={{maxWidth:100, border:0}}><StaticImage filename="mitsubishi-electric.jpg"
                alt="home comfort air image" /></div>Mitsubishi Air Conditioning</Link>

                  <Link className='border' to="/products/samsung-split-system-air-conditioning" ><div style={{maxWidth:100, border:0}}><StaticImage filename="samsung.jpg"
                alt="home comfort air image" /></div>Samsung Air Conditioning</Link>
                  
                  <Link className='border' to="/products/toshiba-split-system-air-conditioning" ><div style={{maxWidth:100, border:0}}><StaticImage filename="toshiba.jpg"
                alt="home comfort air image" /></div>Toshiba Air Conditioning</Link>

                  <Link className='border' to="/products/daikin-split-system-air-conditioning"><div style={{maxWidth:100, border:0}}><StaticImage filename="daikin.jpg"
                alt="home comfort air image" /></div>Daikin Air Conditioning</Link>

              
                <Link className='border' to="/products/mhi-split-system-air-conditioning"><div style={{maxWidth:80, maxHeight: 100, border:0, marginBottom:5, marginTop:18}}><StaticImage filename="MHI-Logo.jpg"
                alt="home comfort air image" /></div>Mitsubishi Heavy Industries</Link>

                 <Link className='border' to="/products/hitachi-split-system-air-conditioning"><div style={{maxWidth:80, border:0, marginBottom:-15, marginTop:-15}}><StaticImage filename="Hitachi-logo"
                alt="home comfort air image" /></div>Hitachi Air Conditioning</Link>


                 </div>
             </span>


             <div class="container"></div>
      </Link>
  </Fragment>
  )
}

export default BrandNavMenu

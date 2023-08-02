
import React, { Fragment } from "react"
import "../Layouts/header.css"
import "../Layouts/layout.css"


 import DesktopNav from '../Ui/DesktopNav'
 import MobileNav from '../Ui/mobileNav'
 import Footer from "../Footer"

export default function Layout({ children }) {
  return (
  <Fragment>
    
    <DesktopNav />
     <MobileNav />
      <div
      className="layout-site"
        style={{
          margin: `110px auto 0 auto`,
          maxWidth: 1584,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
      </Fragment>
    
  )
}




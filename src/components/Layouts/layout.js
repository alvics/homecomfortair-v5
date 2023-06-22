
import React from "react"
import "../Layouts/header.css"
import "../Layouts/layout.css"


export default function Layout({ children }) {
  return (
  
     <div
        style={{
          margin: `110px auto 0 auto`,
          maxWidth: 1584,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    
  )
}




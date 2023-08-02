import React from 'react'

export default function DesktopSideNav() {
  return (
    <div>
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>


    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
  <ul>
  
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </ul>

    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
    
    </div>
  )
}

import React,{ Fragment } from "react";
import Layout from "../components/Layouts/layout";
import Home from "../components/Home/Home";
// import Navbar from "../components/Ui/DesktopNav"
// import MobileNav from '../components/Ui/mobileNav'
import HeroSection from "../components/Sections/Hero"
// import GoogleReviewsCarousel from "../components/Sections/GoogleReviewsCarousel";
import Seo from "../components/SEO-2";
import Schema from "../components/Schema-2";

export const Head = () => (

  <Fragment>
       <title>Gold Coast Air Conditioning | Supply &amp; Install | Home Comfort Air</title>
       <meta name="description" content="Gold Coast air conditioning specialists. Supply, installation &amp; servicing of split system, ducted &amp; multi-head air conditioning. Licensed installers with a 5-year warranty. Servicing Gold Coast, Brisbane &amp; Ipswich."/>
       <link rel="canonical" href="https://homecomfortair.net.au/" />
       <Seo />
       <Schema />
  </Fragment>

)

const TrustBar = () => (
  <div className="trust-bar">
    <div className="trust-bar-inner">

      <div className="trust-item">
        <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M7.5 4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .168.372l3 2.5a.5.5 0 1 0 .664-.744L7.5 8.246z"/>
        </svg>
        <div>
          <strong>18+ Years</strong>
          <span>Experience</span>
        </div>
      </div>

      <div className="trust-divider" />

      <div className="trust-item">
        <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" fillRule="evenodd">
          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.775 11.775 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0z"/>
          <path fillRule="nonzero" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        </svg>
        <div>
          <strong>5 Year</strong>
          <span>Installation Warranty</span>
        </div>
      </div>

      <div className="trust-divider" />

      <div className="trust-item">
        <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.378 6l.257 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.622 6l-.257-1.506 1.086-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
        </svg>
        <div>
          <strong>Licensed</strong>
          <span>Installers</span>
        </div>
      </div>

      <div className="trust-divider" />

      <div className="trust-item">
        <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        <div>
          <strong>Servicing</strong>
          <span>Gold Coast · Brisbane · Ipswich</span>
        </div>
      </div>

    </div>
  </div>
)

const HomePage = () => {

return (
  <div>
  <div><HeroSection /></div>
  <TrustBar />
      <Layout>
         <div className="container-fluid px-lg-5 px-md-1 mt-5">
            <Home />
         </div>
      </Layout>
  </div>
  );
};

export default HomePage;
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
       <title>Home Comfort Air Residential Air Conditioning Specialists"</title>,
       <meta name= "description" content="Residential air conditioning specialists, we supply and install all major brands throughout south east Queensland, from Ipswich, Brisbane and the Gold Coast."/>
       <Seo />
       <Schema />
  </Fragment>

)

const HomePage = () => {

return (
  <div>
 
  <div > <HeroSection /></div>
   
      <Layout>
         <div className="container-fluid px-lg-5 px-md-1 mt-5">
            <Home />
         </div>
      </Layout>
  </div>
  );
};

export default HomePage;
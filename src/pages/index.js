import React from "react";
import Layout from "../components/Layouts/layout";
import Home from "../components/Home/Home";
// import Navbar from "../components/Ui/DesktopNav"
// import MobileNav from '../components/Ui/mobileNav'
import HeroSection from "../components/Sections/Hero"
import GoogleReviewsCarousel from "../components/Sections/GoogleReviewsCarousel";



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
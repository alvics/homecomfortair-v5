import React,{ Fragment } from "react";
import Layout from "../components/Layouts/layout";
import Home from "../components/Home/Home";
// import Navbar from "../components/Ui/DesktopNav"
// import MobileNav from '../components/Ui/mobileNav'
import HeroSection from "../components/Sections/Hero"
import GoogleReviewsCarousel from "../components/Sections/GoogleReviewsCarousel";
// import SEO from "../components/SEO"

export const Head = () => (
  <Fragment>
       <title>Home Comfort Air Gold Coast Air Conditioning"</title>,
       <meta name= "description" content="Home Comfort Air specialises in affordable air conditioning solutions for Gold Coast residence. Find your new reverse cycle air conditioner browse our range."/>
       <meta name="keywords" content="Gold,Coast,Air,Conditioning,Split,systems,Ipswich,Brisbane,Specials" />
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
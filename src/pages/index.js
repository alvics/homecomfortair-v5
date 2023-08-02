import React from "react";
import Layout from "../components/Layouts/layout";
import Home from "../components/Home/Home";
// import Navbar from "../components/Ui/DesktopNav"
// import MobileNav from '../components/Ui/mobileNav'
import HeroSection from "../components/Sections/Hero"
import ProductsList from "../components/Products/Products";


const HomePage = () => {

return (
  <div>
  <div > <HeroSection /></div>
   
      <Layout>
        <div className="container-fluid px-5 mt-5">
        <Home />
        <ProductsList />
        </div>
      </Layout>
  </div>
  );
};

export default HomePage;
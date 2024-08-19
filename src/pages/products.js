import React from 'react';

import SplitSystems from '../components/Products/Products';
import { graphql } from 'gatsby';
import MobileNav from '../components/Ui/mobileNav';
import DesktopNav from '../components/Ui/DesktopNav';
import Footer from '../components/Footer';



const Products = ({ 
  data: {
    allStrapiProduct: {nodes: products},
  },
}) => {

  return (

    <div>
   <DesktopNav />
   <MobileNav />
   
     <SplitSystems products={products} />
     <div className='mt-3'></div>
    <Footer />
    </div>
  )
}

   export const query = graphql`
    {
      allStrapiProduct {
        nodes {
          id
          title
          price
          image{
            url
          }
          sub_categories{
            title
          }
          }
        }
      }
    
  `
  

  export default Products 
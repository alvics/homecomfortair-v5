import React from 'react';
import Layout from '../components/Layouts/layout';
import SplitSystems from '../components/Products/Products';
import { graphql } from 'gatsby';
// import MobileNav from '../components/Ui/mobileNav';
// import DesktopNav from '../components/Ui/DesktopNav';

const Products = ({ 
  data: {
    allStrapiProduct: {nodes: products},
  },
}) => {

  return (

    <Layout>
   
     <SplitSystems products={products} />
    </Layout>
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
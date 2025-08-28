//*********************** */
// SHOP PAGE!!!!!
//*********************** */

import React, {Fragment} from 'react';
import SplitSystems from '../components/Products/Products';
import { graphql } from 'gatsby';
import MobileNav from '../components/Ui/mobileNav';
import DesktopNav from '../components/Ui/DesktopNav';
import Footer from '../components/Footer';
import Seo from '../components/SEO-2';
import Schema from '../components/Schema-2';
import Layout from '../components/Layouts/layout';

export const Head = () => (

  <Fragment>
       <title>Split System Air Conditioning | Supplied & Installed from $1199</title>,
       <meta name= "description" content="Search our split system air conditioning supplied & installed range and discover your cooling and heating options."/>
       <Seo />
       <Schema />
  </Fragment>

)

const Products = ({ 
  data: {
    allStrapiProduct: {nodes: products},
  },
}) => {

  return (
<Layout>
    <Fragment>
       <DesktopNav />
       <MobileNav />
         
           <SplitSystems products={products} />
       <Footer />
    </Fragment>
</Layout>
  )
}

export const query = graphql`
 query GetProducts {
  allStrapiProduct(filter: { sub_categories: { elemMatch: { title: { ne: "carrier" } } } }) {
    nodes {
      id
      title
      price
      image {
        url
      }
      sub_categories {
        title
      }
    }
  }
}
    
  `
  
  export default Products 
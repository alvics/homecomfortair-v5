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

export const Head = () => (

  <Fragment>
       <title>Shop Split System Air Conditioning | Supplied & Installed Options</title>,
       <meta name= "description" content="Search our split system air conditioning supplied & installed range and discover cooling and heating options."/>
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

    <Fragment>
       <DesktopNav />
       <MobileNav />
         <SplitSystems products={products} />
           <div className='mt-3'></div>
       <Footer />
    </Fragment>

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
import React, {Fragment} from 'react';

import SplitSystems from '../components/Products/Products';
import { graphql } from 'gatsby';
import MobileNav from '../components/Ui/mobileNav';
import DesktopNav from '../components/Ui/DesktopNav';
import Footer from '../components/Footer';

export const Head = () => (
  <Fragment>
       <title>Shop Split System Air Conditioning | Home Comfort Air Gold Coast</title>,
       <meta name= "description" content="Search our split system air conditioning range and discover the options for cooling and heating your home or space."/>
      <meta name="keywords" content="Gold,Coast,Air,Conditioning,
                Split,systems,shop" />
</Fragment>
)


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
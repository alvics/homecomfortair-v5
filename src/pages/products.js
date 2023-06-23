import React from 'react'
// import MideaSplitSystems from '../../components/Products/MideaSplitsSystems'
// import HaierSplitSystems from '../../components/Products/HaierSplitsSystems'
import Layout from '../components/Layouts/layout'
import SplitSystems from '../components/Products/Products'
import { graphql } from 'gatsby';

import DesktopNav from '../components/Sections/DesktopNav';

const Products = ({ 
  data: {
    allStrapiProduct: {nodes: products},
  },
}) => {

  return (

    <Layout>
      <DesktopNav />
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
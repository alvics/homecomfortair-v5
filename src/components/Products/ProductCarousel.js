// import React from 'react'
// import { graphql } from 'gatsby'
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';

// const ProductCarousel = () => {

//      const query = graphql`
// query GetProducts($slug: String) {
//   strapiProduct(slug: {eq: $slug}) {
//     title
//     price
//     id
//       image {
//       url
//     }
//     description {
//       data {
//         description
//       }
//     }
  
//     image2 {
//       url
//     }
//   }
// }
// `
//   // const data = query.allStrapiProduct.image.url;

//     // Get the image url's
//     const  image  = query.strapiProduct.image.url
//     const  image2  = query.strapiProduct.image2.url

//     // Map through the url's
//     const images = [ image2, image].map((i) => ({
//           src: i 
//           }));
    
//     // Checking for data?
//     console.log( query,'from Carousel!!!');

//   return (
//     <div> 
//       <Carousel images={images} style={{ height: 500, width: 800 }} />
//     </div>
//   )
// }



// export default ProductCarousel
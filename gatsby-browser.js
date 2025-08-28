/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
 import React from "react";
 import { CartProvider } from './src/contexts/CartContext';




  import "bootstrap/dist/css/bootstrap.min.css"
  import './src/styles/global.css'
  import './src/styles/cart.css'

  // import "react/umd/react.production.min.js"
  // import "react-dom/umd/react-dom.production.min.js"
  import "react-bootstrap/dist/react-bootstrap.min.js"
  // import "@popperjs/core/dist/esm"
  // import "@popperjs/core"
  import "bootstrap/dist/js/bootstrap.min"
  
 import "@material-ui/icons"
 import '@fortawesome/fontawesome-free/css/all.min.css';
 import "react-responsive-carousel/lib/styles/carousel.min.css";

  export const wrapRootElement = ({ element }) => {
  return <CartProvider>{element}</CartProvider>;
};
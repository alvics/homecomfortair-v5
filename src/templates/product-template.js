// Single Product Page Template
// This component fetches and displays a single product page using a GraphQL query.
// It includes a product gallery, details, an accordion for specs and installation info,
// and a section for related products.

import React, { Fragment, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { useLocation } from '@reach/router';
import Modal from "../components/Modal";
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import GoldStars from '../components/Products/GoldStars';
import MitsubishiArticle from '../components/Mitsubishi-md-query';
import Layout from '../components/Layouts/layout';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import GoogleReviewsCarousel from '../components/Sections/GoogleReviewsCarousel';
import Form from "../components/QuoteForm";
import StaticImage from "../components/StaticQueryImages";
import MHIProducts from "../components/Products/MHISplitSytems";
import MideaPDF from "../images/Midea.pdf";
import HaierPDF from "../images/haier-tempo.pdf";
import SamsungPDF from "../images/bedarra.pdf";
import DaikinPDF from "../images/daikin.pdf";
import ToshibaPDF from "../images/Toshiba.pdf";
import CarrierPDF from "../images/Carrier.pdf";
import MitsubishiPDF from "../images/Mitsubishi-electric-Brochure-2025.pdf";
import HitachiPDF from "../images/hitachi.pdf";
import MhiPDF from "../images/MHI.pdf";
import MideaProducts from "../components/Products/MideaSplitsSystems";
import CarrierProducts from "../components/Products/CarrierSplitSystems";
import SamsungProducts from "../components/Products/SamsungSplitSystems";
import ToshibaProducts from "../components/Products/ToshibaSplitSystems";
import DaikinProducts from "../components/Products/DaikinSplitSytems";
import HaierProducts from "../components/Products/HaierSplitSystems";
import HitachiProducts from '../components/Products/HitachiSplitSystems';
import MitsubishiProducts from "../components/Products/MitsubishiElectricSplits";
import BrandsBtn from "../components/BrandsBtn";
import Schema from "../components/Schema-2";
import Seo from "../components/SEO-2";
import AddToCartButton from '../components/AddToCartButton';
import CartAddedCard from '../components/CartAddedCard';

// Using the Head API to dynamically set the title for SEO
export const Head = ({ data }) => {
  const { strapiProduct: product } = data;
  return (
    <Fragment>
      <title>{`Supplied & installed ${product.title}`} Air Conditioner</title>
      <meta name="description" content={`Supplied & installed ${product.title} for $${product.price} incl GST. Split System air conditioning by Home Comfort Air.`} />
        <Seo />
      <Schema />
    </Fragment>
  );
};


const SingleProduct = ({ data }) => {
 
  // Get the current URL pathname to determine the active product in the dropdown
  const location = useLocation();
  const { pathname } = location;

  // State to manage the active accordion item
  const [activeAccordion, setActiveAccordion] = useState('installation');
  
  // Function to toggle the accordion state
  const toggleAccordion = (eventKey, event) => {
    if (event) {
      event.stopPropagation();
    }
    setActiveAccordion(activeAccordion === eventKey ? null : eventKey);
  };

  // Add pop up view cart logic
  const [showCartCard, setShowCartCard] = useState(false);
  const [cardProduct, setCardProduct] = useState(null);

  const handleShowCartCard = (product) => {
  setCardProduct(product);
  setShowCartCard(true);
};

  const closeCartCard = () => {
  setShowCartCard(false);
  setCardProduct(null);
};


   // Destructure product data from the GraphQL query result
   const product = data.strapiProduct;
   const mainImage = product.gallery[0]?.url || ''; // Get the URL of the first gallery image
   const { description } = data.strapiProduct.description.data;
   const { title, price, heat_capacity, room_size, model, cool_capacity } = data.strapiProduct;
   const brand = data.strapiProduct.sub_categories[0]?.title || '';


    // Custom Accordion Toggle button
    function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        className='mt-3'
        style={{ backgroundColor: 'transparent', marginRight:'20px' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
 
    // Prepare images for the Carousel component
    const gallery = data.strapiProduct.gallery;
    const images = gallery.map((item) => ({
      src: item.url,
      alt: title,
    }));

  // Create a new product object to send to the cart
    const productForCart = {
        ...product,
        image: mainImage, // Add the image URL to the object
        slug: product.slug // Add the slug to the object
    };

 console.log(data, 'From Product-Template!!');


  return (
    <Fragment>
      <Layout>
        <div className='container-lg container-fluid-md container-fluid-sm pt-2'>
          <div className="row single-product-row">
            {/* Left Column: Product Gallery */}
            <div className="col-md-8 bg-white text-center p-4 scrollable-column">
                <div aria-label="breadcrumb" className='my-4 text-start'>
                    <div className="breadcrumb lh-1">
                        <p className="breadcrumb-item fsz-12 text-uppercase text-sm-start lh-1">
                            <Link to='/'>Home / </Link>
                            <span className="breadcrumb-item fsz-12 text-uppercase text-sm-start lh-1">
                                <Link to="/products">Products /</Link> Split-systems  /  {brand}-{model}
                            </span>
                        </p>
                    </div>
                </div>
                <div className='gallery-img-container'>
                    <Carousel images={images} index={2} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} hasCaption={true} showThumbs={false}  className='bg-white d-flex img-fluid gallery-img' /> 
                </div>
            </div>

            {/* Right Column: Product Details */}
            <div className="col-md-4 bg-white p-4 product-page-description">
                <div className='single-product-right-col'>
                    <div className="mt-5 text-wrap single-product-right-col-text">
                        <h1 className="fsz-18 fw-700 text-wrap shrink-text lh-sm">{title}</h1>
                        <Link to='#reviews'> <GoldStars /></Link>
                        <div className='pt-2'>
                            <div className='text-capitalize shrink-text fsz-16'><span className='fw-600 fsz-16'>Brand:</span> {brand}</div>
                            <div className='shrink-text fsz-16'><span className='fw-600 fsz-16'>Model:</span> {model}</div>
                        </div>
                    </div>
                
                    <div>
                        <div className="btn-group mt-1 shrink-text">
                            <button type="button" className="border border-light--- px-2 pt-1 pb-1 text-black fsz-16 gallery-btn dropdown-toggle-split d-flex justify-between fw-400" data-bs-toggle="dropdown" style={{ width: '220px' }}>
                                {cool_capacity} <span className='pt-1 pb-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" strokeWidth="1" />
                                    </svg>
                                </span>
                            </button>
                            {/* Related products dropdown */}
                            <ul className='dropdown-menu text-black fsz-16' style={{ width: '250px' }}>
                                {data.relatedProducts.nodes.map((product) => {
                                    if (product.sub_categories[0]?.title === brand) {
                                        const isActive = pathname.includes(product.slug) ? 'active' : '';

                                        return (
                                            <li
                                                key={product.id}
                                                className={`dropdown-item--- px-2 pb-0 text-black ${isActive}`}
                                            >
                                                <Link to={`/products/${product.slug}`} className={`text-black d-flex justify-between ${isActive}`} >
                                                    <span>{product.cool_capacity}</span> 
                                                    <span className='text-end' style={{ paddingLeft: '50px' }}>${product.price}</span>
                                                </Link>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className=''>Supplied & installed</p>
                        <span className="fsz-38 fw-700 shrink-text position-relative">
                            <span className='fsz-16 position-absolute top-0 start-0 fx-700' style={{marginTop: '5px'}}>$</span>
                            <span className='ml-2'>{price}</span> 
                            <span className='fsz-12 fw-400' data-bs-toggle="tooltip" data-bs-placement="top" title="This is the standard retail price at which this exclusive product is offered for sale by home comfort air.">
                                <del>SRP  ${price + 100}</del>
                            </span>
                        </span>
                        <div className='fw-bold fsz-16 d-flex flex-column my-3 shrink-text'>
                            <span>{cool_capacity} cooling capacity</span>
                            <span>{heat_capacity} heating capacity</span>
                        </div>
                        <p className='short-description fsz-16 single-product-right-col-text shrink-text lh-base'>
                            {title} will suit a room size of approximately {room_size}m². <br /> 
                            <span className='fsz-14'>*Price is based on a back to back installation (maximum pipe length 3 metres).</span>
                        </p>
                    </div>
   
                    <div className=" product-actions ">
                        <AddToCartButton 
                            product={productForCart} // Pass the new object here
                            className="mt-4 btn-- btn-primary--"
                            onCartAdd={handleShowCartCard}
                            
                        />
                    </div>
                    {/* Add this new component */}
<CartAddedCard
  product={cardProduct}
  isVisible={showCartCard}
  onClose={closeCartCard}
/>
                </div>
                <Modal />
            </div>
          </div>
   
          {/* Second row for additional content and reviews */}
          <div className="row single-product-row">
            <div className="col-md-8">
              <div className="bg-white p-3 header-nav pt-5" >
                <div className="d-flex flex-row" >
                  <div className='header-nav-item fw-bold'>
                    <Link to='#'>Gallery<span></span></Link>
                  </div>
                  <div className='header-nav-item fw-bold'>
                    <Link to='#description' variant="link" onClick={() => toggleAccordion('description')} >Description</Link>
                    <span></span>
                  </div>
                  <div className='header-nav-item fw-bold'>
                    <Link to='#reviews'>Reviews</Link>
                    <span></span>
                  </div>
                </div>
 
                {/* Accordion for Installation, Description, and Specifications */}
                <Accordion defaultActiveKey="0" activeKey={activeAccordion}>
                  {/* Installation Section */}
                  <Accordion.Item eventKey="installation" activeKey={activeAccordion}>
                    <Accordion.Header onClick={(event) => toggleAccordion('installation',event)}>Installation</Accordion.Header>
                    <Accordion.Body>
                      <div className="mb-3 single-product-add">
                        {/* Conditionally render promotional images based on the brand */}
                        {brand === "midea" && (
                          <div className="mb-2">
                            <StaticImage filename="xtreme-banner.png" alt="midea xtreme split system air conditioning by Home Comfort Air" />
                          </div>
                        )}
                        {brand === "aura" && (
                          <div className="single-side-products">
                            <StaticImage filename="carrier-add.png" alt="carrier air conditioning by Home Comfort Air" />
                          </div>
                        )}
                        {brand === "samsung" && (
                          <div className="single-side-products">
                            <StaticImage filename="samsung-add-11.png" alt="samsung air conditioning by Home Comfort Air" />
                          </div>
                        )}
                        {brand === "daikin" && (
                          <div className="single-side-products">
                            <StaticImage filename="daikin-cora.png" alt="daikin air conditioning by Home Comfort Air" />
                          </div>
                        )}
                        {brand === "mitsubishi electric" && (
                          <div className="single-side-products mitsubishi">
                            <StaticImage filename="mitsubishi-banner.png" alt="Best-air-conditioner-MSZ-AP-banner" />
                          </div>
                        )}
                        {brand === "toshiba" && (
                          <div className="single-side-products">
                            <StaticImage filename="toshiba-add-11.png" alt="toshiba air conditioning by Home Comfort Air" />
                          </div>
                        )}
                      </div>
                    
                      <h5 className='fsz-16'>What's included:</h5>
                      <p>Your new <span className='text-capitalize'>{ brand }</span> { cool_capacity + " " + model } air conditioning package includes:</p>
                      
                      <div>
                        <ul className="pl-3">
                          <li>* Licensed Installers.</li>
                          <li>* Back to back installation, up to 3 meters of pipework connecting indoor to outdoor unit for a single story home.</li>
                          {/* Conditionally render electrical cable info */}
                          {cool_capacity <= "5.4" ? ( 
                            <li>* Up to 20 meters of electrical cable run in the roof to an existing and available circuit.</li>
                          ) : ( 
                            <li>* New mounted weatherproof safety isolation switch to existing circuit. <small>(For replacement units only, does NOT include new electrical circuit added. Additional charges may apply).</small> </li> 
                          )}
                          <li>* PVC ducting to conceal pipe connection and electrical work.</li>
                          {/* Conditionally render warranty info */}
                          <li>  {brand === "Toshiba"  ? "* 7 year manufacturer warranty." : "* 5 year manufacturer warranty."}</li> 
                          <li>* 5 year Installation warranty.</li>
                        </ul>
                      </div>

                      {/* Accordion for Additional Charges */}
                      <Accordion className='custom-accordion'>
                        <Accordion.Item eventKey="add">
                          <Accordion.Header id="add-charges">
                            <CustomToggle className="custom-btn" onClick={(event) => toggleAccordion('add', event)}>Additional charges may apply <i className="fa-solid fa-chevron-down"></i></CustomToggle>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="mb-4">
                              <p>The requirements for installation may vary depending on the layout and structure of your house. As a result, some additional costs may apply.</p>
                              <p>The most common reasons for additional costs are:</p>
                              <ul className="pl-3">
                                <li>* Double storey properties.</li>
                                <li>* Non back to back installations.</li>
                                <li>* Extra labour & materials.</li>
                                <li>* Concrete slab Installation (if not already present).</li>
                                <li>* Brackets (e.g. wall or roof).</li>
                                <li>* Mounting blocks.</li>
                                <li>* Electrical work (e.g new circuit).</li>
                              </ul>
                              <small className="small-text">Note: your installer will explain the reasons and requirements for the additional charges (if there are any) before proceeding.</small>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Description Section */}
                  <Accordion.Item eventKey="description">
                    <Accordion.Header onClick={(event) => toggleAccordion('description',event)}>Description</Accordion.Header>
                    <Accordion.Body>
                      <div className='pt-3 description-container'>
                        <div id='description'></div>
                        {brand === "mitsubishi electric" ? <MitsubishiArticle />  : <ReactMarkdown>{description}</ReactMarkdown>}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Specifications and Brochures Section */}
                  <Accordion.Item eventKey="spec">
                    <Accordion.Header onClick={(event) => toggleAccordion('spec',event)}>Specifications</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        {/* Capacity Table */}
                        <div className="border capacity-table mb-3 pl-2" style={{ backgroundColor: `#f8f9fa`, border: `1px solid #ccc`, borderRadius: `8px`, }}>
                          <table className="table table-light" style={{ marginBottom: `0px`, }}>
                            <thead>
                              <tr>
                                <th scope="col">Brand</th>
                                <th scope="col">Cooling</th>
                                <th scope="col">Heating</th>
                                <th scope="col">Size Room</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">*{brand.toUpperCase()} </th>
                                <td>*{cool_capacity}</td>
                                <td>*{heat_capacity}</td>
                                <td>*{room_size}m²</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* PDF Brochures */}
                        {brand === "toshiba" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Toshiba brochure{" "}</p>
                            <a href={ToshibaPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "midea" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Midea brochure{" "}</p>
                            <a href={MideaPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "daikin" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Daikin brochure{" "}</p>
                            <a href={DaikinPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "samsung" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Samsung brochure{" "}</p>
                            <a href={SamsungPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "mitsubishi heavy industries" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>MHI brochure{" "}</p>
                            <a href={MhiPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "haier" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Haier brochure{" "}</p>
                            <a href={HaierPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "hitachi" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Hitachi brochure{" "}</p>
                            <a href={HitachiPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg> 
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                        {brand === "aura" && (
                          <div className='mt-4 d-flex'>
                            <p className='p-2 '>Carrier brochure{" "}</p>
                            <a href={CarrierPDF} target="_blank" rel="noreferrer">
                              <span className="pr-2 d-flex border rounded-3 p-1"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
                                </svg>
                                <span className='fsz-16 ml-2 mt-2' style={{color: "rgb(4, 21, 33)!important"}}><u>here</u></span>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div id='reviews' className='mt-5'>
                  <GoogleReviewsCarousel />
                </div>
              </div>
            </div>


            {/* Right Column: Contact and Brands */}
            <div className="col-md-4">
              <div className='p-1 bg-white mt-3'>
                 <div className="img-wrapper-e mt-5" style={{borderRadius:8}}>
                  <StaticImage
                filename="splits-add-11-pow-lg.png"
                alt="home comfort air image"
              />
            </div>
            <div className='mt-3 single-product-quote-form'>
            <h5 className='pt-1'>Request a quote</h5>
             <Form />
            </div>


                {/* Product Recommended List */}

      
            <h5 className="mt-5 h6" style={{ fontWeight: `600` }}>
              Also recommended for you
            </h5>

   {brand === "mitsubishi heavy industries"   ? (
              <div className="mb-2">
                <div className="mb-2">
                  <div
                    className="text-center border rounded"
                    style={{ backgroundColor: `#e31f26` }}
                  >
                    <h3
                      className="h6 fw-600 cap mt-2 text-white"
                      style={{ padding: `1.3rem 0` }}
                    >
                      Supply and Install MHI
                      <br />{" "}
                      <span className="lead cam text-white">
                        <small>Air Conditioning Systems</small>
                      </span>
                    </h3>
                  </div>
                </div>
                <MHIProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "midea" ? (
              <div className="mb-2">
                <div className="mb-2">
                  <div
                    className="text-center border rounded"
                    style={{ backgroundColor: `#7DCDFF` }}
                  >
                    <h3
                      className="h6 fw-600 cap mt-2 text-white"
                      style={{ padding: `1.3rem 0` }}
                    >
                      Supply and Install Midea
                      <br />{" "}
                      <span className="lead cam text-white">
                        <small>Air Conditioning Systems</small>
                      </span>
                    </h3>
                  </div>
                </div>
                <MideaProducts />
              </div>
            ) : (
              <div></div>
            )}
            {brand === "carrier" ? (
              <div className="single-side-products mb-2">
                <div
                  style={{ backgroundColor: `#004178` }}
                  className="my-2 text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Carrier
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <CarrierProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "samsung" ? (
              <div className="single-side-products mb-2">
                <div
                  s
                  className="text-center bg-dark my-2 rounded"
                >
                  <h3
                    className="text-white h6 fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Samsung
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <SamsungProducts />
              </div>
            ) : (
              <div></div>
            )}

                  {brand === "daikin" ? (
              <div className="single-side-products mb-2">
                <div
                  s
                  className="text-center my-2 rounded"
                  style={{backgroundColor: `#00a1e5`}}
                >
                  <h3
                    className="text-white h6 fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Daikin
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <DaikinProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "toshiba" ? (
              <div className="single-side-products">
                <div
                  style={{ backgroundColor: `#D01C22` }}
                  className="my-2  text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Toshiba
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <ToshibaProducts />
              </div>
            ) : (
              <div></div>
            )}

               {brand === "haier" ? (
              <div className="single-side-products">
                <div
                  style={{ backgroundColor: `rgb(0, 90, 171)` }}
                  className="my-2  text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Haier
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <HaierProducts />
              </div>
            ) : (
              <div></div>
            )}

            {brand === "hitachi" ? (
              <div className="single-side-products">
                <div
                  style={{ backgroundColor: `rgb(195, 0, 47)` }}
                  className="my-2  text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Hitachi
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <HitachiProducts />
              </div>
            ) : (
              <div></div>
            )}

              {brand === "mitsubishi electric" ? (
              <div className="single-side-products">
                <div
                  style={{ backgroundColor: `#ff0000` }}
                  className="my-2  text-center rounded"
                >
                  <h3
                    className="h6 text-white fw-600 cap mt-2"
                    style={{ padding: `1.3rem 0` }}
                  >
                    Supply and Install Mitsubishi
                    <br />{" "}
                    <span className="lead cam text-white">
                      <small>Air Conditioning Systems</small>
                    </span>
                  </h3>
                </div>
                <MitsubishiProducts />
              </div>
            ) : (
              <div></div>
            )}
            
           
     </div>
    
      {/* Product Related List */}


               
              </div>

 
            </div>
            <div className='pb-3 pt-3 mt-5
            '>
                  <BrandsBtn />
                </div>
          </div>
        
      </Layout>
    </Fragment>
  );
};

export default SingleProduct;


export const query = graphql`
query GetSingleProduct($slug: String) {
  strapiProduct(slug: { eq: $slug }) {
    id
    title
    price
    slug
    cool_capacity
    heat_capacity
    room_size
    model
    gallery {
      url
    }
    description {
      data {
        description
      }
    }
    sub_categories {
      title
    }
  }
  relatedProducts: allStrapiProduct(sort: {cool_capacity: ASC}) {
    nodes {
      id
      title
      price
      slug
      cool_capacity
      sub_categories {
        title
      }
    }
  }
}
`;

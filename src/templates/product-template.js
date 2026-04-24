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
import Ciara from "../images/Ciara.pdf"
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
   const mainImage = product.gallery[0]?.url || '';
   const description = data.strapiProduct.description?.data?.description || '';
   const { title, price, heat_capacity, room_size, model, cool_capacity } = data.strapiProduct;
   const brand = data.strapiProduct.sub_categories[0]?.title || '';
   const currentCategory = product.categories[0]?.title || '';


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
        {/* Breadcrumb — outside cards */}
        <div className='mb-3'>
          <p className="sp-breadcrumb">
            <Link to='/'>Home</Link> / <Link to="/products">Products</Link> / <Link to="/split-systems-air-conditioning">Split Systems</Link> / <span className="sp-breadcrumb-current text-capitalize">{brand} {model}</span>
          </p>
        </div>

        <div className='pt-0 sp-two-col'>
            {/* Left Card: Product Gallery */}
            <div className="sp-card-gallery">
                <div className='gallery-img-container'>
                    {images.length > 0 ? (
                      <Carousel images={images} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} hasCaption={false} className='bg-white d-flex img-fluid gallery-img' />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, background: '#f5f5f5', borderRadius: 8 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                      </div>
                    )}
                </div>
            </div>

            {/* Right Card: Product Details */}
            <div className="sp-card-details product-page-description">
                <div className='single-product-right-col'>

                    {/* Sale badge */}
                    <div className="sp-sale-badge">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="9" height="9">
                        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      </svg>
                      Sale
                    </div>

                    {/* Title */}
                    <h1 className="sp-title">{title}</h1>

                    {/* Brand + Stars row */}
                    <div className="sp-meta-row">
                        <span className="sp-brand text-capitalize">{brand}</span>
                        <Link to='#reviews' className="sp-stars-link"><GoldStars /></Link>
                    </div>

                    <hr className="sp-divider" />

                    {/* Price section */}
                    <p className="sp-supplied-label">Supplied &amp; installed</p>
                    <div className="sp-price-row">
                        <div className="sp-price-box">
                            <span className="sp-dollar">$</span>
                            <span className="sp-price">{price}</span>
                        </div>
                        <span className="sp-srp"><del>SRP ${price + 100}</del></span>
                    </div>

                    <hr className="sp-divider" />

                    {/* Spec badges */}
                    <div className="sp-spec-badges">
                        <span className="sp-spec-badge">❄ {cool_capacity} cooling</span>
                        <span className="sp-spec-badge">🔥 {heat_capacity} heating</span>
                        <span className="sp-spec-badge">📐 ~{room_size}m²</span>
                    </div>

                    <hr className="sp-divider" />

                    {/* Size selector pills */}
                    <p className="sp-size-label">Select size:</p>
                    <div className="sp-size-pills">
                        {data.relatedProducts.nodes
                            .filter(p =>
                                p.sub_categories[0]?.title === brand &&
                                p.categories[0]?.title === currentCategory
                            )
                            .map((p) => {
                                const isActive = pathname.includes(p.slug);
                                return (
                                    <Link
                                        key={p.id}
                                        to={`/products/${p.slug}`}
                                        className={`sp-size-pill ${isActive ? 'sp-size-pill--active' : ''}`}
                                    >
                                        <span className="sp-pill-kw">{p.cool_capacity}</span>
                                        <span className="sp-pill-price">${p.price}</span>
                                    </Link>
                                );
                            })
                        }
                    </div>

                    {/* Short description */}
                    <p className="sp-short-desc">
                        {title} will suit a room size of approximately {room_size}m².<br/>
                        <span className="sp-fine-print">*Price is based on a back to back installation (maximum pipe length 3 metres).</span>
                    </p>

                    {/* Add to Cart */}
                    <div className="product-actions">
                        <AddToCartButton
                            product={productForCart}
                            className="sp-add-to-cart"
                            onCartAdd={handleShowCartCard}
                        />
                    </div>

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
        <div className="sp-two-col mt-3">
            <div className="sp-card-info">
              {/* Tab nav */}
              <div className="sp-tab-nav">
                  <Link to='#' className="sp-tab-link">Gallery</Link>
                  <Link to='#description' className="sp-tab-link" onClick={() => toggleAccordion('description')}>Description</Link>
                  <Link to='#reviews' className="sp-tab-link">Reviews</Link>
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
                    
                      <h5 className='sp-section-heading'>What's included:</h5>
                      <p className='sp-section-intro'>Your new <span className='text-capitalize'>{ brand }</span> { cool_capacity + " " + model } air conditioning package includes:</p>

                      <ul className="sp-checklist">
                          <li>Licensed Installers.</li>
                          <li>Back to back installation, up to 3 meters of pipework connecting indoor to outdoor unit for a single story home.</li>
                          {cool_capacity <= "5.4" ? (
                            <li>Up to 20 meters of electrical cable run in the roof to an existing and available circuit.</li>
                          ) : (
                            <li>New mounted weatherproof safety isolation switch to existing circuit. <small>(For replacement units only, does NOT include new electrical circuit added. Additional charges may apply).</small></li>
                          )}
                          <li>PVC ducting to conceal pipe connection and electrical work.</li>
                          <li>{brand === "Toshiba" ? "7 year manufacturer warranty." : "5 year manufacturer warranty."}</li>
                          <li>5 year Installation warranty.</li>
                      </ul>

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
                              <ul className="sp-checklist">
                                <li>Double storey properties.</li>
                                <li>Non back to back installations.</li>
                                <li>Extra labour &amp; materials.</li>
                                <li>Concrete slab Installation (if not already present).</li>
                                <li>Brackets (e.g. wall or roof).</li>
                                <li>Mounting blocks.</li>
                                <li>Electrical work (e.g new circuit).</li>
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
    <p className='p-2'>MHI brochure{" "}</p>
    <a href={cool_capacity >= 2 && cool_capacity <= 7.1 ? Ciara : MhiPDF} target="_blank" rel="noreferrer">
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

            {/* Right sidebar card */}
            <div className="sp-card-sidebar">
                 <div className="img-wrapper-e mb-3" style={{borderRadius:8}}>
                  <StaticImage
                filename="splits-add-11-pow-lg.png"
                alt="home comfort air image"
              />
            </div>
            <div className='sp-quote-form'>
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

        </div>{/* end sp-two-col */}

        <div className='pb-3 pt-3 mt-4'>
              <BrandsBtn />
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
    categories {
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
      categories {
        title
      }
    }
  }
}
`;

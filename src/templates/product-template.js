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

  const [activeAccordion, setActiveAccordion] = useState('installation');
  const [clubSelected, setClubSelected] = useState(false);
  const [clubTier, setClubTier] = useState(null);
  const [hoveredTier, setHoveredTier] = useState(null);

  const CLUB_TIERS = [
    { id: 'upfront', label: '$195/yr', desc: 'Pay annually',   tooltip: '1 × annual service visit included' },
    { id: 'basic',   label: '$15/mo',  desc: 'Basic monthly',  tooltip: '1 × annual service visit included' },
    { id: 'plus',    label: '$25/mo',  desc: 'Plus monthly',   tooltip: '2 × annual service visits included' },
  ];
  
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
            <div className="sp-col-left">
              <div className="sp-card-gallery">
                <div className='gallery-img-container'>
                    {images.length > 0 ? (
                      <Carousel images={images} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} hasCaption={false} showThumbs={false} className='bg-white d-flex img-fluid gallery-img' />
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 300, background: '#f5f5f5', borderRadius: 8 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                      </div>
                    )}
                </div>
            </div>

            <div className="sp-card-info">
              <div className="sp-tab-nav">
                  <Link to='#' className="sp-tab-link">Gallery</Link>
                  <Link to='#description' className="sp-tab-link" onClick={() => toggleAccordion('description')}>Description</Link>
                  <Link to='#reviews' className="sp-tab-link">Reviews</Link>
              </div>
 
                <Accordion defaultActiveKey="0" activeKey={activeAccordion}>
                  <Accordion.Item eventKey="installation" activeKey={activeAccordion}>
                    <Accordion.Header onClick={(event) => toggleAccordion('installation',event)}>Installation</Accordion.Header>
                    <Accordion.Body>
                      <div className="mb-3 single-product-add">
                        {brand === "midea" && (
                          <div className="mb-2">
                            <StaticImage filename="xtreme-banner.png" alt="midea xtreme split system air conditioning by Home Comfort Air" />
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

                  <Accordion.Item eventKey="description">
                    <Accordion.Header onClick={(event) => toggleAccordion('description',event)}>Description</Accordion.Header>
                    <Accordion.Body>
                      <div className='pt-3 description-container'>
                        <div id='description'></div>
                        {brand === "mitsubishi electric" ? <MitsubishiArticle />  : <ReactMarkdown>{description}</ReactMarkdown>}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="spec">
                    <Accordion.Header onClick={(event) => toggleAccordion('spec',event)}>Specifications</Accordion.Header>
                    <Accordion.Body>
                      <div className="spec-tiles">
                        <div className="spec-tile"><span className="spec-tile-label">Brand</span><span className="spec-tile-value">{brand}</span></div>
                        <div className="spec-tile"><span className="spec-tile-label">Cooling</span><span className="spec-tile-value">{cool_capacity}</span></div>
                        <div className="spec-tile"><span className="spec-tile-label">Heating</span><span className="spec-tile-value">{heat_capacity}</span></div>
                        <div className="spec-tile"><span className="spec-tile-label">Room Size</span><span className="spec-tile-value">~{room_size}m²</span></div>
                      </div>

                      {/* PDF Brochures */}
                      {brand === "toshiba" && (
                        <a className="spec-brochure-btn" href={ToshibaPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Toshiba Brochure
                        </a>
                      )}
                      {brand === "midea" && (
                        <a className="spec-brochure-btn" href={MideaPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Midea Brochure
                        </a>
                      )}
                      {brand === "daikin" && (
                        <a className="spec-brochure-btn" href={DaikinPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Daikin Brochure
                        </a>
                      )}
                      {brand === "samsung" && (
                        <a className="spec-brochure-btn" href={SamsungPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Samsung Brochure
                        </a>
                      )}
                      {brand === "mitsubishi heavy industries" && (
                        <a className="spec-brochure-btn" href={cool_capacity >= 2 && cool_capacity <= 7.1 ? Ciara : MhiPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          MHI Brochure
                        </a>
                      )}
                      {brand === "haier" && (
                        <a className="spec-brochure-btn" href={HaierPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Haier Brochure
                        </a>
                      )}
                      {brand === "hitachi" && (
                        <a className="spec-brochure-btn" href={HitachiPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Hitachi Brochure
                        </a>
                      )}
                      {brand === "aura" && (
                        <a className="spec-brochure-btn" href={CarrierPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Carrier Brochure
                        </a>
                      )}
                      {brand === "mitsubishi electric" && (
                        <a className="spec-brochure-btn" href={MitsubishiPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Mitsubishi Brochure
                        </a>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div id='reviews' className='mt-5'><GoogleReviewsCarousel /></div>
            </div>
          </div>

          <div className="sp-col-right">
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
                            <span className="sp-price">{price.toLocaleString()}</span>
                        </div>
                        <span className="sp-srp"><del>SRP ${(price + 100).toLocaleString()}</del></span>
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
                                        <span className="sp-pill-price">${p.price.toLocaleString()}</span>
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

                    <div style={{ marginBottom: 16 }}>
                        <div
                            onClick={() => { setClubSelected(s => !s); if (clubSelected) setClubTier(null); }}
                            style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 12px', border: `1.5px solid ${clubSelected ? '#0075C9' : '#e0e0e0'}`, borderRadius: 8, cursor: 'pointer', background: clubSelected ? '#f0f7ff' : '#fff', transition: 'border-color 0.15s, background 0.15s', userSelect: 'none' }}
                        >
                            <div style={{ flexShrink: 0, width: 16, height: 16, marginTop: 2, borderRadius: '50%', border: `2px solid ${clubSelected ? '#0075C9' : '#aaa'}`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {clubSelected && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0075C9' }} />}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 700, fontSize: 13, color: '#1f2937' }}>Home Comfort Club</span>
                                    <span style={{ fontSize: 11, fontWeight: 600, color: '#0075C9', background: 'rgba(0,117,201,0.08)', borderRadius: 20, padding: '2px 8px' }}>Member</span>
                                </div>
                                <p style={{ fontSize: 11, color: '#6b7280', margin: '2px 0 0' }}>Priority callouts, annual service discounts &amp; member perks.</p>
                            </div>
                        </div>
                        {clubSelected && (
                            <div style={{ display: 'flex', gap: 8, marginTop: 8, paddingLeft: 2 }}>
                                {CLUB_TIERS.map(tier => (
                                    <button key={tier.id} type="button" onClick={() => setClubTier(tier.id)} className="sidebar-cat-btn" style={{ flex: 1, padding: '8px 4px', borderRadius: 8, border: `1.5px solid ${clubTier === tier.id ? '#0075C9' : '#e0e0e0'}`, background: clubTier === tier.id ? '#0075C9' : '#fff', cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s' }}>
                                        <div style={{ fontSize: 12, fontWeight: 700, color: clubTier === tier.id ? '#fff' : '#1f2937' }}>{tier.label}</div>
                                        <div style={{ fontSize: 10, opacity: 0.75, marginTop: 1, color: clubTier === tier.id ? '#fff' : '#6b7280' }}>{tier.desc}</div>
                                    </button>
                                ))}
                            </div>
                        )}
                        <Link
                        to="/home-comfort-club/"
                        style={{ fontSize: 11, color: '#0075C9', display: 'inline-block', marginTop: 6 }}
                      >
                        Learn more about the Home Comfort Club →
                      </Link>
                    </div>

                    <div className="product-actions"><AddToCartButton product={productForCart} className="sp-add-to-cart" onCartAdd={handleShowCartCard} /></div>
                    <CartAddedCard product={cardProduct} isVisible={showCartCard} onClose={closeCartCard} />
                </div>
                <Modal />
            </div>
            <div className="sp-card-sidebar">
              <div className="img-wrapper-e mb-3" style={{borderRadius:8}}><StaticImage filename="splits-add-11-pow-lg.png" alt="home comfort air image" /></div>
              <div className='sp-quote-form'><Form productTitle={title} compact /></div>
              <h5 className="mt-5 h6" style={{ fontWeight: `600` }}>Also recommended for you</h5>

              {brand === "mitsubishi heavy industries" && (
              <div className="mb-2">
                <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#e31f26` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install MHI<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                <MHIProducts />
              </div>
              )}

              {brand === "midea" && (
              <div className="mb-2">
                <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#7DCDFF` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Midea<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                <MideaProducts />
              </div>
              )}

              {brand === "daikin" && (
              <div className="mb-2">
                <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#00a1e5` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Daikin<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                <DaikinProducts />
              </div>
              )}

              {brand === "carrier" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#004178` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Carrier<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <CarrierProducts />
                </div>
              )}

              {brand === "samsung" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded bg-dark"><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Samsung<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <SamsungProducts />
                </div>
              )}

              {brand === "toshiba" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#D01C22` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Toshiba<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <ToshibaProducts />
                </div>
              )}

              {brand === "haier" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `rgb(0, 90, 171)` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Haier<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <HaierProducts />
                </div>
              )}

              {brand === "hitachi" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `rgb(195, 0, 47)` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Hitachi<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <HitachiProducts />
                </div>
              )}

              {brand === "mitsubishi electric" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#ff0000` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Mitsubishi<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <MitsubishiProducts />
                </div>
              )}

              {brand === "aura" && (
                <div className="mb-2">
                  <div className="mb-2"><div className="text-center border rounded" style={{ backgroundColor: `#004178` }}><h3 className="h6 fw-600 cap mt-2 text-white" style={{ padding: `1.3rem 0` }}>Supply and Install Carrier<br /><span className="lead cam text-white"><small>Split Systems</small></span></h3></div></div>
                  <CarrierProducts />
                </div>
              )}
            </div>
          </div>
        </div>

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

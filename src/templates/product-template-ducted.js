import React, { Fragment, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { useLocation } from '@reach/router';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import GoldStars from '../components/Products/GoldStars';
import Layout from '../components/Layouts/layout';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import GoogleReviewsCarousel from '../components/Sections/GoogleReviewsCarousel';
import Form from "../components/QuoteForm";
import StaticImage from "../components/StaticQueryImages";
import DaikinDuctedProducts from "../components/Products/DaikinDuctedSystems";
import MHIDuctedProducts from "../components/Products/MHIDuctedSystems";
import DaikinPDF from "../images/Daikin-Ducted.pdf";
import MhiPDF from "../images/MHI-Ducted.pdf";
import BrandsBtn from "../components/BrandsBtn";
import Schema from "../components/Schema-2";
import Seo from "../components/SEO-2";
import AddToCartButton from '../components/AddToCartButton';
import CartAddedCard from '../components/CartAddedCard';

const ADDONS = [
  {
    id: 'airtouch2',
    label: 'Air Touch 2+',
    desc: 'Smart zone controller — control up to 8 zones from your smartphone.',
    price: 850,
  },
  {
    id: 'airtouch5',
    label: 'Air Touch 5',
    desc: 'Premium zone controller — 16 zones, colour touchscreen, Apple HomeKit & Google Home.',
    price: 1350,
  },
];

const SENSOR_PRICE = 150;
const MAX_SENSORS = 8;

export const Head = ({ data }) => {
  const { strapiProduct: product } = data;
  return (
    <Fragment>
      <title>{`Supplied & Installed ${product.title}`}</title>
      <meta name="description" content={`Supplied & installed ${product.title}${product.price ? ` from $${product.price}` : ''} incl GST. Ducted air conditioning by Home Comfort Air.`} />
      <Seo />
      <Schema />
    </Fragment>
  );
};

const DuctedSingleProduct = ({ data }) => {
  const location = useLocation();
  const { pathname } = location;

  const [activeAccordion, setActiveAccordion] = useState('description');
  const toggleAccordion = (eventKey, event) => {
    if (event) event.stopPropagation();
    setActiveAccordion(activeAccordion === eventKey ? null : eventKey);
  };

  const [showCartCard, setShowCartCard] = useState(false);
  const [cardProduct, setCardProduct] = useState(null);
  const handleShowCartCard = (product) => { setCardProduct(product); setShowCartCard(true); };
  const closeCartCard = () => { setShowCartCard(false); setCardProduct(null); };

  // Add-ons state
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [sensorQty, setSensorQty] = useState(0);

  // Home Comfort Club state
  const [clubSelected, setClubSelected] = useState(false);
  const [clubTier, setClubTier] = useState(null);
  const CLUB_TIERS = [
    { id: 'upfront', label: '$265 one-off', desc: 'Single visit',    tooltip: 'One-time ducted service — filters, drain, zones & full performance check.' },
    { id: 'basic',   label: '$20/mo',       desc: '1x annual visit', tooltip: '1 annual service visit with priority scheduling & discounted call-outs.' },
    { id: 'plus',    label: '$35/mo',       desc: '2x annual visits', tooltip: '2 service visits per year — best value whole-home protection.' },
  ];

  const product = data.strapiProduct;
  const description = data.strapiProduct.description?.data?.description || '';
  const { title, price, heat_capacity, model, cool_capacity } = data.strapiProduct;
  const brand = data.strapiProduct.sub_categories[0]?.title || '';
  const currentCategory = product.categories[0]?.title || '';

  const gallery = data.strapiProduct.gallery;
  const images = gallery.map((item) => ({ src: item.url, alt: title }));

  const productForCart = { ...product, image: product.gallery[0]?.url || '', slug: product.slug };

  const addonPrice = selectedAddon ? ADDONS.find(a => a.id === selectedAddon)?.price || 0 : 0;
  const sensorPrice = sensorQty * SENSOR_PRICE;
  const optionsTotal = addonPrice + sensorPrice;
  const orderTotal = (price || 0) + optionsTotal;

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {});
    return (
      <button type="button" className='mt-3' style={{ backgroundColor: 'transparent', marginRight: '20px' }} onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }

  return (
    <Fragment>
      <Layout>
        {/* Breadcrumb */}
        <div className='mb-3'>
          <p className="sp-breadcrumb">
            <Link to='/'>Home</Link> / <Link to="/products">Products</Link> / <Link to="/ducted-systems">Ducted Systems</Link> / <span className="sp-breadcrumb-current text-capitalize">{brand} {model}</span>
          </p>
        </div>

        <div className='pt-0 sp-two-col'>
          <div className="sp-col-left">
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

            {/* Description card — separate, below gallery */}
            <div className="sp-card-info">
              <div className="sp-tab-nav">
                <Link to='#' className="sp-tab-link">Gallery</Link>
                <Link to='#description' className="sp-tab-link" onClick={() => toggleAccordion('description')}>Description</Link>
                <Link to='#reviews' className="sp-tab-link">Reviews</Link>
              </div>

              <Accordion defaultActiveKey="0" activeKey={activeAccordion}>

                {/* Installation — ducted-specific */}
                <Accordion.Item eventKey="installation">
                  <Accordion.Header onClick={(e) => toggleAccordion('installation', e)}>Installation</Accordion.Header>
                  <Accordion.Body>
                    <div className="mb-3 single-product-add">
                      {brand === "daikin" && (
                        <div className="single-side-products">
                          <StaticImage filename="daikin-cora.png" alt="Daikin ducted air conditioning by Home Comfort Air" />
                        </div>
                      )}
                    </div>
                    <h5 className='sp-section-heading'>What's included:</h5>
                    <p className='sp-section-intro'>Your new <span className='text-capitalize'>{brand}</span> {cool_capacity} {model} ducted air conditioning package includes:</p>
                    <ul className="sp-checklist">
                      <li>Licensed installers.</li>
                      <li>Supply and installation of indoor ceiling cassette unit in roof cavity.</li>
                      <li>Supply and installation of outdoor unit on concrete slab or wall brackets.</li>
                      <li>Duct network connection to nominated zones/outlets.</li>
                      <li>Wall controller — wired zone controller included as standard.</li>
                      <li>Up to 10 metres of refrigerant pipe connecting indoor to outdoor unit.</li>
                      <li>Electrical connection to existing dedicated circuit.</li>
                      <li>5 year manufacturer warranty.</li>
                      <li>5 year installation warranty.</li>
                    </ul>

                    <Accordion className='custom-accordion'>
                      <Accordion.Item eventKey="add">
                        <Accordion.Header>
                          <CustomToggle>Additional charges may apply <i className="fa-solid fa-chevron-down"></i></CustomToggle>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="mb-4">
                            <p>Installation requirements vary depending on the layout and construction of your home. Additional costs may apply for:</p>
                            <ul className="sp-checklist">
                              <li>Double storey properties.</li>
                              <li>Extended pipe runs beyond 10 metres.</li>
                              <li>Duct extension or re-routing beyond standard layout.</li>
                              <li>New electrical circuit installation.</li>
                              <li>Extra labour &amp; materials.</li>
                              <li>Crane or specialist access requirements.</li>
                            </ul>
                            <small className="small-text">Note: your installer will explain any additional requirements and charges before proceeding.</small>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Description */}
                <Accordion.Item eventKey="description">
                  <Accordion.Header onClick={(e) => toggleAccordion('description', e)}>Description</Accordion.Header>
                  <Accordion.Body>
                    <div className='pt-3 description-container'>
                      <div id='description'></div>
                      {description
                        ? <ReactMarkdown>{description}</ReactMarkdown>
                        : <p>Contact us for full product specifications.</p>
                      }
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Specifications */}
                <Accordion.Item eventKey="spec">
                  <Accordion.Header onClick={(e) => toggleAccordion('spec', e)}>Specifications</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      {/* Spec tiles */}
                      <div className="spec-tiles">
                        <div className="spec-tile">
                          <span className="spec-tile-label">Brand</span>
                          <span className="spec-tile-value">{brand}</span>
                        </div>
                        <div className="spec-tile">
                          <span className="spec-tile-label">Model</span>
                          <span className="spec-tile-value">{model}</span>
                        </div>
                        <div className="spec-tile">
                          <span className="spec-tile-label">Cooling</span>
                          <span className="spec-tile-value">{cool_capacity}</span>
                        </div>
                        <div className="spec-tile">
                          <span className="spec-tile-label">Heating</span>
                          <span className="spec-tile-value">{heat_capacity}</span>
                        </div>
                      </div>

                      {brand === "daikin" && (
                        <a className="spec-brochure-btn" href={DaikinPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          Daikin Brochure
                        </a>
                      )}
                      {brand === "mitsubishi heavy industries" && (
                        <a className="spec-brochure-btn" href={MhiPDF} target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/></svg>
                          MHI Brochure
                        </a>
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div id='reviews' className='mt-5'>
                <GoogleReviewsCarousel mode="ducted" />
              </div>
            </div>
          </div>{/* end sp-col-left */}

          <div className="sp-col-right">
          <div className="sp-card-details product-page-description">
            <div className='single-product-right-col'>

              <h1 className="sp-title">{title}</h1>

              <div className="sp-meta-row">
                <span className="sp-brand text-capitalize">{brand}</span>
                <Link to='#reviews' className="sp-stars-link"><GoldStars /></Link>
              </div>

              <hr className="sp-divider" />

              <p className="sp-supplied-label">Supplied &amp; Installed</p>
              <div className="sp-price-row">
                {price ? (
                  <>
                    <div className="sp-price-box">
                      <span className="sp-dollar">$</span>
                      <span className="sp-price">{price.toLocaleString()}</span>
                    </div>
                    <span className="sp-srp"><del>SRP ${(price + 500).toLocaleString()}</del></span>
                  </>
                ) : (
                  <span style={{ fontSize: 18, fontWeight: 700, color: '#0075C9' }}>POA — Contact us for pricing</span>
                )}
              </div>

              <hr className="sp-divider" />

              {/* Spec badges — no room size for ducted */}
              <div className="sp-spec-badges">
                <span className="sp-spec-badge">❄ {cool_capacity} cooling</span>
                <span className="sp-spec-badge">🔥 {heat_capacity} heating</span>
                <span className="sp-spec-badge">🔧 Model: {model}</span>
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
                  .sort((a, b) => parseFloat(a.cool_capacity) - parseFloat(b.cool_capacity))
                  .map((p) => {
                    const isActive = pathname.includes(p.slug);
                    return (
                      <Link
                        key={p.id}
                        to={`/products/${p.slug}`}
                        className={`sp-size-pill ${isActive ? 'sp-size-pill--active' : ''}`}
                      >
                        <span className="sp-pill-kw">{p.cool_capacity}</span>
                        {p.price && <span className="sp-pill-price">${p.price.toLocaleString()}</span>}
                      </Link>
                    );
                  })}
              </div>

              <hr className="sp-divider" />

              {/* Add-ons */}
              <p className="sp-size-label" style={{ marginBottom: 10 }}>Add ons:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddon === addon.id;
                  return (
                    <div
                      key={addon.id}
                      onClick={() => setSelectedAddon(isSelected ? null : addon.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        padding: '10px 12px',
                        border: `1.5px solid ${isSelected ? '#0075C9' : '#e0e0e0'}`,
                        borderRadius: 8,
                        cursor: 'pointer',
                        background: isSelected ? '#f0f7ff' : '#fff',
                        transition: 'border-color 0.15s, background 0.15s',
                        userSelect: 'none',
                      }}
                    >
                      {/* Custom radio circle — immune to global CSS */}
                      <div style={{
                        flexShrink: 0,
                        width: 16,
                        height: 16,
                        marginTop: 2,
                        borderRadius: '50%',
                        border: `2px solid ${isSelected ? '#0075C9' : '#aaa'}`,
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {isSelected && (
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0075C9' }} />
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontWeight: 700, fontSize: 14 }}>{addon.label}</span>
                          <span style={{ fontWeight: 700, fontSize: 14, color: '#0075C9' }}>+${addon.price.toLocaleString()}</span>
                        </div>
                        <p style={{ fontSize: 12, color: '#666', margin: 0, marginTop: 2 }}>{addon.desc}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Temperature sensors */}
                <div style={{
                  padding: '10px 12px',
                  border: `1.5px solid ${sensorQty > 0 ? '#0075C9' : '#e0e0e0'}`,
                  borderRadius: 8,
                  background: sensorQty > 0 ? '#f0f7ff' : '#fff',
                  transition: 'all 0.15s',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>Extra Temperature Sensors</span>
                    <span style={{ fontWeight: 700, fontSize: 14, color: '#0075C9' }}>+${SENSOR_PRICE} each</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#666', margin: '2px 0 8px' }}>Additional zone temperature sensors for more accurate room control.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <button
                      type="button"
                      onClick={() => setSensorQty(q => Math.max(0, q - 1))}
                      style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid #0075C9', background: '#fff', color: '#0075C9', fontWeight: 700, fontSize: 16, cursor: 'pointer', lineHeight: 1 }}
                    >−</button>
                    <span style={{ fontWeight: 700, fontSize: 15, minWidth: 20, textAlign: 'center' }}>{sensorQty}</span>
                    <button
                      type="button"
                      onClick={() => setSensorQty(q => Math.min(MAX_SENSORS, q + 1))}
                      style={{ width: 28, height: 28, borderRadius: '50%', border: '1.5px solid #0075C9', background: '#0075C9', color: '#fff', fontWeight: 700, fontSize: 16, cursor: 'pointer', lineHeight: 1 }}
                    >+</button>
                    {sensorQty > 0 && (
                      <span style={{ fontSize: 13, color: '#0075C9', fontWeight: 600 }}>= +${(sensorQty * SENSOR_PRICE).toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Home Comfort Club */}
              <div style={{ marginBottom: 16 }}>
                <div
                  onClick={() => { setClubSelected(s => !s); if (clubSelected) setClubTier(null); }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '10px 12px',
                    border: `1.5px solid ${clubSelected ? '#0075C9' : '#e0e0e0'}`,
                    borderRadius: 8, cursor: 'pointer',
                    background: clubSelected ? '#f0f7ff' : '#fff',
                    transition: 'border-color 0.15s, background 0.15s',
                    userSelect: 'none',
                  }}
                >
                  <div style={{
                    flexShrink: 0, width: 16, height: 16, marginTop: 2,
                    borderRadius: '50%',
                    border: `2px solid ${clubSelected ? '#0075C9' : '#aaa'}`,
                    background: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {clubSelected && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0075C9' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 13, color: '#1f2937' }}>Home Comfort Club</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#0075C9', background: 'rgba(0,117,201,0.08)', borderRadius: 20, padding: '2px 8px' }}>Member</span>
                    </div>
                    <p style={{ fontSize: 11, color: '#6b7280', margin: '2px 0 0' }}>Priority callouts, annual ducted servicing &amp; member perks.</p>
                  </div>
                  
                </div>
                {clubSelected && (
                  <div style={{ display: 'flex', gap: 8, marginTop: 8, paddingLeft: 2 }}>
                    {CLUB_TIERS.map(tier => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setClubTier(tier.id)}
                        data-active={clubTier === tier.id}
                        className="sidebar-cat-btn"
                        data-tip={tier.tooltip}
                        style={{
                          flex: 1, padding: '8px 4px', borderRadius: 8,
                          border: `1.5px solid ${clubTier === tier.id ? '#0075C9' : '#e0e0e0'}`,
                          background: clubTier === tier.id ? '#0075C9' : '#fff',
                          cursor: 'pointer', textAlign: 'center',
                          transition: 'all 0.15s',
                        }}
                      >
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

              {/* Order summary */}
              {price && (
                <div style={{ background: '#f8f9fa', borderRadius: 8, padding: '12px 14px', marginBottom: 16, fontSize: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ color: '#555' }}>Product price</span>
                    <span style={{ fontWeight: 600 }}>${price.toLocaleString()}.00 inc. GST</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ color: '#555' }}>Total options</span>
                    <span style={{ fontWeight: 600 }}>${optionsTotal.toLocaleString()}.00 inc. GST</span>
                  </div>
                  <hr style={{ margin: '8px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700 }}>Order total</span>
                    <span style={{ fontWeight: 700, color: '#0075C9', fontSize: 16 }}>${orderTotal.toLocaleString()}.00 inc. GST</span>
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <div className="product-actions">
                <AddToCartButton
                  product={productForCart}
                  className="sp-add-to-cart"
                  onCartAdd={handleShowCartCard}
                />
              </div>

              <CartAddedCard product={cardProduct} isVisible={showCartCard} onClose={closeCartCard} />
            </div>
          </div>{/* end sp-card-details */}

            {/* Sidebar card — separate from details */}
            <div className="sp-card-sidebar">
              <div className="img-wrapper-e mb-3" style={{ borderRadius: 8 }}>
                <StaticImage filename="splits-add-11-pow-lg.png" alt="Home Comfort Air ducted systems" />
              </div>
              <div className='sp-quote-form'>
                <Form productTitle={title} compact />
              </div>

              <h5 className="mt-5 h6" style={{ fontWeight: 600 }}>Also recommended for you</h5>

              {brand === "daikin" && (
                <div className="mb-2">
                  <div className="text-center border rounded" style={{ backgroundColor: '#00a1e5' }}>
                    <h3 className="h6 fw-600 mt-2 px-3 text-white" style={{ padding: '1.3rem 0' }}>
                      Daikin Ducted Range<br />
                      <span className="lead cam text-white"><small>All Sizes</small></span>
                    </h3>
                  </div>
                  <DaikinDuctedProducts />
                </div>
              )}

              {brand === "mitsubishi heavy industries" && (
                <div className="mb-2">
                  <div className="text-center border rounded" style={{ backgroundColor: '#e31f26' }}>
                    <h3 className="h6 fw-600 mt-2 px-3 text-white" style={{ padding: '1.3rem 0' }}>
                      MHI Ducted Range<br />
                      <span className="lead cam text-white"><small>All Sizes</small></span>
                    </h3>
                  </div>
                  <MHIDuctedProducts />
                </div>
              )}
            </div>{/* end sp-card-sidebar */}
          </div>{/* end sp-col-right */}
        </div>{/* end sp-two-col */}

        <div className='pb-3 pt-3 mt-4'>
          <BrandsBtn />
        </div>

      </Layout>
    </Fragment>
  );
};

export default DuctedSingleProduct;

export const query = graphql`
  query GetSingleDuctedProduct($slug: String) {
    strapiProduct(slug: { eq: $slug }) {
      id
      title
      price
      slug
      cool_capacity
      heat_capacity
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
    relatedProducts: allStrapiProduct(sort: { cool_capacity: ASC }) {
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

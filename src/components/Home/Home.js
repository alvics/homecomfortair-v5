import React from "react";
import { Link } from "gatsby"
import MyForm from "../../components/QuoteForm"
import StaticImage from "../../components/StaticQueryImages"
import BrandsBtn from "../../components/BrandsBtn"
import GoogleReviewsCarousel from "../Sections/GoogleReviews"
import HaierSplitSystems from "../Products/HaierSplitSystems"
import AboutSection from "../../components/AboutSection"

const Home = () => {

 return (
   <div id="section-ac-solutions" className="" style={{ paddingTop: '40px' }}>

          {/* ── Winter Sale Sticky Badge ── */}
          <Link
            to="/products"
            style={{
              position: "fixed",
              bottom: 32,
              right: 24,
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0075C9 0%, #00c4b3 100%)",
              boxShadow: "0 4px 24px rgba(0,117,201,0.40), 0 1px 4px rgba(0,0,0,0.12)",
              textDecoration: "none",
              animation: "salePulse 2.4s ease-in-out infinite",
              cursor: "pointer",
            }}
            className="winter-sale-badge"
            aria-label="Winter Sale — View deals"
          >
            <span style={{ fontSize: 22, lineHeight: 1, marginBottom: 2 }}>❄️</span>
            <span style={{
              color: "#fff",
              fontSize: 9,
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1.2,
              textAlign: "center",
            }}>Winter<br/>Sale</span>
            <span style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 8,
              fontWeight: 700,
              marginTop: 3,
              letterSpacing: "0.04em",
            }}>View Deals →</span>
          </Link>

          <style>{`
            @keyframes salePulse {
              0%, 100% { transform: scale(1); box-shadow: 0 4px 24px rgba(0,117,201,0.40); }
              50%       { transform: scale(1.07); box-shadow: 0 8px 32px rgba(0,117,201,0.55); }
            }
            @media (max-width: 991px) {
              .winter-sale-badge { bottom: 80px !important; right: 16px !important; }
            }
          `}</style>

     <div className="body-wrapper pt-1">

          {/* 1. Air Con Solutions */}
          <section className="section-1">
            <div className="section-heading">
              <h2 className="section-title">Air Conditioning Solutions</h2>
            </div>
            <div className="grid-300 mb-2 p-2">
              <div className="card-home">
                <Link to="/products/split-system-air-conditioning">
                  <div className="card-top">
                    <StaticImage
                      filename="ac-hero-1.jpg"
                      alt="Split system air conditioning"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading p-2">
                    <h3 className="fw-700 text-dark">Split Systems A/C</h3>
                  </div>
                  <div className="card-body-- p-2">
                    <p className="card-text">
                      Cool or heat a single room or space with a split system.
                    </p>
                  </div>
                  <div className="card-learn-more p-2">
                    Learn more <span className="card-arrow">→</span>
                  </div>
                </Link>
              </div>

              <div className="card-home">
                <Link to="/ducted-systems">
                  <div className="card-top">
                    <StaticImage
                      filename="cas.jpg"
                      alt="Ducted air conditioning"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading p-2">
                    <h3 className="fw-700 text-dark">Ducted Systems A/C</h3>
                  </div>
                  <div className="card-body-- p-2">
                    <p className="card-text">
                      Cool or heat your entire home with ducted air conditioning.
                    </p>
                  </div>
                  <div className="card-learn-more p-2">
                    Learn more <span className="card-arrow">→</span>
                  </div>
                </Link>
              </div>

              <div className="card-home">
                <Link to="/multi-head-systems">
                  <div className="card-top">
                    <StaticImage
                      filename="ac-2.jpg"
                      alt="Multi head air conditioning"
                      data-pin-nopin="true"
                    />
                  </div>
                  <div className="card-heading p-2">
                    <h3 className="fw-700 text-dark">Multi Systems A/C</h3>
                  </div>
                  <div className="card-body-- p-2">
                    <p className="card-text">
                      Cool or heat multiple rooms with a single outdoor unit.
                    </p>
                  </div>
                  <div className="card-learn-more p-2">
                    Learn more <span className="card-arrow">→</span>
                  </div>
                </Link>
              </div>

              <div className="card-home">
                <Link to="/service">
                  <div className="card-top">
                    <StaticImage
                      filename="ducted-2.jpg"
                      alt="Air conditioning service"
                    />
                  </div>
                  <div className="card-heading p-2">
                    <h3 className="fw-700 text-dark">A/C Service</h3>
                  </div>
                  <div className="card-body-- p-2">
                    <p className="card-text">
                      Fast professional service and maintenance for all split systems.
                    </p>
                  </div>
                  <div className="card-learn-more p-2">
                    Learn more <span className="card-arrow">→</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* 2. How It Works — answers "is this complicated?" before showing products */}
          <section className="how-it-works-section">
            <div className="section-heading">
              <h2 className="section-title">How It Works</h2>
            </div>
            <div className="how-it-works-grid">
              <div className="how-step">
                <div className="how-step-number">1</div>
                <div className="how-step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3 className="how-step-title">Get a Free Quote</h3>
                <p className="how-step-text">Contact us online or by phone. We'll recommend the right system for your space and budget — no obligation, no pressure.</p>
              </div>
              <div className="how-step-connector" />
              <div className="how-step">
                <div className="how-step-number">2</div>
                <div className="how-step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3 className="how-step-title">We Supply &amp; Install</h3>
                <p className="how-step-text">We supply the unit and our licensed technicians install it — all in one visit. We arrive on time, work cleanly and leave your home tidy.</p>
              </div>
              <div className="how-step-connector" />
              <div className="how-step">
                <div className="how-step-number">3</div>
                <div className="how-step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M8 12l2.5 2.5L16 9"/>
                  </svg>
                </div>
                <h3 className="how-step-title">Enjoy the Comfort</h3>
                <p className="how-step-text">Sit back and enjoy year-round comfort. Backed by up to 10 years manufacturer warranty plus our 5-year installation warranty.</p>
              </div>
            </div>
          </section>

          {/* 3. Split System Products — show pricing while intent is high */}
          <section className="section-2">
            <div className="section-heading">
              <h2 className="section-title">Split System Air Conditioning</h2>
            </div>

            <div className="section-2-grid">
              <div className="section-2-products">
                <HaierSplitSystems />
                <div className="mt-2 mb-2">
                  <p className="fsz-12">*Prices inc GST</p>
                  <Link to="/products" className="btn-- btn-primary--">View All Deals</Link>
                </div>
              </div>
              <div className="section-2-form">
                <MyForm />
              </div>
            </div>
          </section>

          {/* 4. Browse Our Brands — reinforces confidence after seeing products */}
          <section style={{
            background: "linear-gradient(135deg, #f0f6ff 0%, #f8faff 100%)",
            borderRadius: 20,
            border: "1px solid #e0ecfb",
            padding: "36px 32px",
            margin: "48px 0",
          }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <h2 className="section-title" style={{ fontSize: 22, marginBottom: 6 }}>Shop By Brand</h2>
              <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>
                We supply &amp; install all major brands — click to browse models &amp; pricing
              </p>
            </div>
            <BrandsBtn />
          </section>

          {/* 5. Reviews — social proof before trust/about sections */}
          <section id="reviews">
            <GoogleReviewsCarousel />
          </section>

          {/* 6. Local Experts + Why Choose Us */}
          <AboutSection />

          {/* 7. Service Areas — qualifying/SEO section */}
         <section>
            <div className="section-heading">
              <h2 className="section-title">Our Service Areas</h2>
            </div>
            <div className="location-grid">

              <div className="location-card">
                <div className="location-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <h3 className="location-card-title">Gold Coast</h3>
                <p className="location-card-text">Trusted air conditioning specialists serving the Gold Coast. Expert supply, installation and servicing of split system and ducted air conditioning for homes and businesses.</p>
                <a href="/gold-coast-air-conditioning" className="card-learn-more">Learn more <span className="card-arrow">→</span></a>
              </div>

              <div className="location-card">
                <div className="location-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <h3 className="location-card-title">Brisbane</h3>
                <p className="location-card-text">Professional air conditioning installation across Brisbane. Quality brands, honest advice and reliable workmanship backed by our 5 year installation warranty.</p>
                <a href="/brisbane-air-conditioning" className="card-learn-more">Learn more <span className="card-arrow">→</span></a>
              </div>

              <div className="location-card">
                <div className="location-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <h3 className="location-card-title">Ipswich</h3>
                <p className="location-card-text">Local air conditioning experts in Ipswich. Split system, ducted and multi-head installations from leading brands including Daikin, Midea and Mitsubishi Electric.</p>
                <a href="/ipswich-air-conditioning" className="card-learn-more">Learn more <span className="card-arrow">→</span></a>
              </div>

            </div>
         </section>

          <section className="faq-section">
            <div className="section-heading">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">

              <details className="faq-item">
                <summary className="faq-question">How much does air conditioning installation cost?</summary>
                <div className="faq-answer">
                  <p>Installation costs vary depending on the type and size of system and the complexity of the job. Split system installations typically start from around $350–$850 for a standard install. We provide free, no-obligation quotes so you know exactly what to expect before committing.</p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">How long does installation take?</summary>
                <div className="faq-answer">
                  <p>A standard split system installation usually takes 2–4 hours. Ducted systems and multi-head installations may take a full day or more depending on the size of the property. We'll give you a clear timeframe when we provide your quote.</p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">What size air conditioner do I need?</summary>
                <div className="faq-answer">
                  <p>The right size depends on the room dimensions, ceiling height, insulation and sun exposure. As a rough guide, a 2.5kW unit suits a small bedroom, 3.5kW for a medium room, and 5–7kW for an open-plan living area. We'll recommend the correct capacity when we assess your space. Use our <Link to='/products/split-system-air-conditioning/'> room size calculator</Link></p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">Do you offer a warranty on installation?</summary>
                <div className="faq-answer">
                  <p>Yes — we back all new installations with a 5-year workmanship warranty. In addition, most units carry a 5–10 year manufacturer warranty on parts, giving you complete peace of mind.</p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">What brands do you supply and install?</summary>
                <div className="faq-answer">
                  <p>We supply and install all major brands including Daikin, Mitsubishi Electric, Midea, Samsung, Haier, Hitachi, MHI and Toshiba. We'll help you choose the best brand and model for your needs and budget.</p>
                </div>
              </details>

              <details className="faq-item">
                <summary className="faq-question">Do you service existing air conditioners?</summary>
                <div className="faq-answer">
                  <p>Yes, we service and maintain all split system air conditioners. Regular servicing improves efficiency, extends the life of your unit and keeps it running at peak performance. Contact us to book a service.</p>
                </div>
              </details>

            </div>
          </section>

          <div className="cta-banner">
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <h3 className="cta-banner-heading">Ready to get started?</h3>
                <p className="cta-banner-sub">Browse our full range of air conditioning deals.</p>
              </div>
              <Link to="/products" className="cta-banner-btn">View All Our Deals</Link>
            </div>
          </div>

        </div>
   </div>
  );
};

export default Home;

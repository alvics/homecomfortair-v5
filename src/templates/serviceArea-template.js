import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import StaticImage from '../components/StaticQueryImages';
import ReactMarkdown from 'react-markdown';
import Form from '../components/QuoteForm';
import DesktopNav from '../components/Ui/DesktopNav';
import MobileNav from '../components/Ui/mobileNav';
import Footer from '../components/Footer';
import Faq from '../components/FaqServiceArea';
import MyForm from '../components/heroForm';

const ServiceArea = ({
  data: {
    strapiServiceArea: {
      Heading,
      image: {
        localFile: {
          childImageSharp: { gatsbyImageData },
        },
      },
      textMain: {
        data: { textMain },
      },
      textAbout: {
        data: { textAbout },
      },
    },
    heroImage: {
      childImageSharp: { gatsbyImageData: heroImageData },
    },
  },
}) => {
  const heroImage = getImage(heroImageData);
  const image = getImage(gatsbyImageData, { rotate: 180 });

  return (
    <section>
      <DesktopNav />
      <MobileNav />
      <div
        className="hero-service-area"
        style={{ height: '650px', position: 'relative' }}
      >
        <GatsbyImage
          image={heroImage}
          alt="Hero Image"
          style={{ height: '100%', objectPosition: 'top center' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        ></div>
        <div className="container">
          <div className="row hero-text-form">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="hero-box py-3 m-auto">
                <StaticImage
                  filename="HCA-2-avatar.png"
                  alt="home comfort air image"
                />
                <h2 className="text-center hero-heading">
                  <span className="hero-heading-primary cap" style={{ color: `rgb(35,31,32)` }}>
                    Home<span style={{ fontWeight: 600 }}>Comfort</span>Air
                  </span>
                </h2>
                <h1 className="hero-heading-h2-service-area">
                  <span
                    className="service-area-hero text-capitalize"
                    style={{ fontFamily: `'Caveat', cursive` }}
                  >
                    {Heading} Air Conditioning
                  </span>
                </h1>
                <p className="px-5">
                  Experts in air conditioning, we supply and install all major brands throughout{' '}
                  <span className="text-capitalize">{Heading}</span> & surrounding area's. Contact us at{' '}
                  <a href="tel:0404602657">0404 602 657</a> or fill out our online form.
                </p>
                <div className="pb-3">
                  <Link to="/products">
                    <button className="btn-- btn-green--">Shop A/C</button>
                  </Link>
                  <Link to="/split-systems">
                    <button className="btn-- btn-primary-- ml-2">Split Systems</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="form-overlay p-4">
                <span className="h3 fw-600 d-flex justify-content-center" style={{ color: `#2d3136` }}>
                  Request a quote
                </span>
                <i className="text-center text-blue">Air conditioning Installations</i>
                <div id="hero-form">
                  <MyForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-white body-wrapper split-systems" style={{ marginTop: '-40px' }}>
        <div>
          <div className="pt-3">
            <h2 class="h5 fw-600 mt-5 cap">
              <span className="h5 fw-600 mt-5 cap">{Heading}</span> Air Conditioning
            </h2>
          </div>
          <div className="reactMarkdown">
            <ReactMarkdown children={textMain} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h3 className="h5 fw-600 mt-5 cap">Air Conditioning repairs, maintenance and Installation {Heading}</h3>
            <p className="lead-20">Our complete range of service in the <span className="text-capitalize">{Heading}</span> area:</p>
            <ul className="lh-base">
              <ol class="list-group list-group-numbered">
                <li className="fsz-18 fw-600 list-group-item">Air Conditioning Installation</li>
                <li class="list-group-item">Split system air conditioners</li>
                <li class="list-group-item">Ducted system air conditioners</li>
                <li class="list-group-item">Multi head system air conditioners</li>
                <li className="fsz-18 fw-600 list-group-item">Builders service</li>
                <li class="list-group-item">Air Conditioning rough in / fit off</li>
                <li className="fsz-18 fw-600 list-group-item">Air Conditioning Repairs</li>
                <li className="fsz-18 fw-600 list-group-item">Air Conditioning Maintenance</li>
                <li className="fsz-18 fw-600 list-group-item">Air Conditioning Sales</li>
                <li className="fsz-18 fw-600 list-group-item">Air Conditioning Design</li>
              </ol>
            </ul>
          </div>
          <div className="col-md-6 image-container flex-row flex-column img-fluid mb-3" style={{ transform: 'rotate(90deg)' }}>
            <GatsbyImage image={image} alt={Heading} />
          </div>
        </div>

        <section>
          <p className="lead-20 mt-4 lh-base">
            At Home Comfort Air, our mission is to surpass our customers' expectations in <span className="text-capitalize">{Heading}</span> by delivering the finest air conditioning systems and services. Our commitment to excellence in providing top-notch, energy-efficient, and reliable solutions extends throughout the <span className="text-capitalize">{Heading}</span> region. Contact us today to schedule an installation or to explore more about our offerings. Your comfort is our priority, and we look forward to serving you with the utmost professionalism and care.
          </p>
          <p className="lead-20 bold">
            <u>Call us on <a href="tel:0404602657">0404 602 657</a> or fill out our online job form.</u>
          </p>
        </section>

        <div className="why-us pb-4">
          <ul className="bg-light p-20 mr-4">
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> Experienced in Commercial & Residential Installations
            </li>
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> Quality workmanship guaranteed
            </li>
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> Experts and licensed to Install Air Conditioners
            </li>
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> Professional fast and efficient service
            </li>
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> 5 to 7 Year Manufacture Warranty's
            </li>
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> 5 Year Installation Warranty
            </li>
            <li className="text-blue fw-600 text-shadow-2">
              <span className="green">✓</span> We'll beat any written quote!
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h3 className="cap">{Heading} Air Conditioning Installations</h3>
          <p className="lead-20 lh-base">
            At Home Comfort Air, we are proud to offer a wide range of high-quality air conditioning systems from top brands such as{' '}
            <Link to="/products/midea-split-system-air-conditioning">Midea</Link>, <Link to="/products/haier-split-system-air-conditioning">Haier</Link>,{' '}
            <Link to="/products/samsung-split-system-air-conditioning">Samsung</Link>, <Link to="/products/carrier-split-system-air-conditioning">Carrier</Link>,{' '}
            <Link to="/products/toshiba-split-system-air-conditioning">Toshiba</Link>, <Link to="/products/daikin-split-system-air-conditioning">Daikin</Link>, and{' '}
            <Link to="/products/mitsubishi-electric-split-system-air-conditioning">Mitsubishi Electric</Link>. Our expert team ensures professional installation and top-notch service for all these leading brands, delivering optimal comfort and efficiency for our valued customers.
          </p>
          <div className="row">
            <div className="col-md-3">
              <ul className="pr-3">
                <li><span className="green">✓</span> New Installations</li>
                <li><span className="green">✓</span> Replacements Systems</li>
                <li><span className="green">✓</span> Split Systems</li>
                <li><span className="green">✓</span> Ducted Systems</li>
                <li><span className="green">✓</span> Multi Head Systems</li>
              </ul>
            </div>
            <div className="col-md-9">
              <p className="lead-20 lh-base">
                Furthermore, we specialize in installing air conditioning systems in a wide range of settings, including houses, townhouses, units, high-rise buildings, farms, sheds, warehouses, shops, and more. No matter the location or complexity of the project, our expert team is equipped to deliver top-notch installations tailored to suit the unique needs of each space. Your comfort is our priority, and we take pride in providing reliable and efficient solutions for diverse environments.
              </p>
            </div>
          </div>
          <div>
            <h3 class="h5 fw-600 mt-5 cap">FAQ's</h3>
            <Faq />
          </div>
        </div>

        <div className="reactMarkdown">
          <h3 class="h5 fw-600 mt-5 cap">ABOUT <span class="h5 fw-600 mt-5 cap">{Heading}</span></h3>
          <ReactMarkdown children={textAbout} />
        </div>

        <div className="heading-box-color grid-col-2 heading-avatar rounded my-3 mx-0 pr-2 py-2">
          <div className="px-3">
            <StaticImage
              filename="HCA-avatar-WHITE-1400.png"
              alt="home comfort air image"
            />
          </div>
          <div className="text-center">
            <h3 className="h2 fw-600 mt-2 ">Receive A free Quote</h3>
          </div>
        </div>

        <div className="grid-col-2">
          <div className="split-quotes-text">
            <h5 className=" px-20 cap fw-600">
              <span className="text-uppercase">{Heading}</span> Air Conditioning Quotes
            </h5>
            <p className="px-20">
              For new construction and existing homes in <span className="text-capitalize">{Heading}</span>. Need a replacement unit or a new installation? Submit your details, and we'll contact you back shortly.
            </p>
            <p className="font-italic px-20">"You could also leave the best-suited time to call you back".</p>
          </div>
          <Form />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export const query = graphql`
  query GetServiceArea($slug: String) {
    strapiServiceArea(slug: { eq: $slug }) {
      Heading
      slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      textMain {
        data {
          textMain
        }
      }
      textAbout {
        data {
          textAbout
        }
      }
    }

    heroImage: file(relativePath: { eq: "homecomfort-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH placeholder: BLURRED formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export default ServiceArea;

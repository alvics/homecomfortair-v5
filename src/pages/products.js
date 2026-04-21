import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import SplitSystems from '../components/Products/Products';
import Seo from '../components/SEO-2';
import Schema from '../components/Schema-2';
import Layout from '../components/Layouts/layout';
import FeatureBubble from '../components/FeatureBubble';
import StaticImage from '../components/StaticQueryImages';

export const Head = () => (

  <Fragment>
       <title>Split System Air Conditioning | Supplied & Installed from $1199</title>,
       <meta name= "description" content="Search our split system air conditioning supplied & installed range and discover your cooling and heating options."/>
       <Seo />
       <Schema />
  </Fragment>

)

const Products = ({ 
  data: {
    allStrapiProduct: {nodes: products},
  },
}) => {

  return (
    <Layout>
      <Fragment>

        {/* ── Hero ── */}
        <section className="full-bleed" style={{
          background: "linear-gradient(135deg, #0075C9 0%, #005fa3 100%)",
          padding: "64px 24px",
          position: "relative",
          overflow: "hidden",
        }}>
          <FeatureBubble />
          <div style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 48,
            alignItems: "center",
            position: "relative",
          }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>
                Gold Coast · Brisbane · Ipswich
              </p>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
                Shop Split System Air Conditioning
              </h1>
              <p style={{ fontSize: 22, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.5, fontFamily: "'Caveat', cursive" }}>
                Supplied &amp; Installed — filter by brand, kW &amp; price.
              </p>
              <Link to="/contact" style={{
                display: "inline-block",
                background: "#00c4b3",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: "2em",
                textDecoration: "none",
              }}>
                Get A Free Quote →
              </Link>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.25)" }}>
              <StaticImage filename="hero-3.jpg" alt="Split system air conditioning" />
            </div>
          </div>
        </section>

        <SplitSystems products={products} />
      </Fragment>
    </Layout>
  )
}

export const query = graphql`
 query GetProducts {
  allStrapiProduct(filter: { sub_categories: { elemMatch: { title: { ne: "carrier" } } } }) {
    nodes {
      id
      title
      price
      image {
        url
      }
      sub_categories {
        title
      }
    }
  }
}
    
  `
  
  export default Products 
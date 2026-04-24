import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const MHIDuctedSystems = () => {
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query)

  if (!products.length) {
    return <p className="lead-20 mt-3">No ducted products available at the moment. Please check back soon.</p>
  }

  return (
    <section>
      <div className="product-grid midea">
        {products.map(product => (
          <Link to={`/products/${product.slug}`} key={product.id}>
            <article className="product-card">
              <div className="product-card-badge-row">
                {product.isOnSpecial && (
                  <span className="product-sale-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="9" height="9">
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                    Sale
                  </span>
                )}
              </div>
              <div className="product-card-img" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 180 }}>
                {product.image?.url ? (
                  <img src={product.image.url} alt={product.title} loading="lazy" height="180" width="180" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#0075C9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                )}
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">{product.title}</h3>
                <div style={{ fontSize: 13, color: "#555", marginBottom: 6 }}>
                  {product.cool_capacity && <span>Cool: {product.cool_capacity}</span>}
                  {product.heat_capacity && <span style={{ marginLeft: 8 }}>Heat: {product.heat_capacity}</span>}
                </div>
                {product.model && <div style={{ fontSize: 12, color: "#888", marginBottom: 6 }}>Model: {product.model}</div>}
                {product.price ? (
                  <div className="product-card-pricing">
                    <span className="product-card-price"><sup>$</sup>{product.price}</span>
                  </div>
                ) : (
                  <div className="product-card-pricing">
                    <span style={{ fontSize: 13, color: "#0075C9", fontWeight: 600 }}>POA — Get a Quote</span>
                  </div>
                )}
                <p className="product-supplied-text">Supplied &amp; Installed</p>
                <div className="product-card-cta">View Details <span className="card-arrow">→</span></div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allStrapiProduct(
      filter: {
        sub_categories: { elemMatch: { title: { eq: "mitsubishi heavy industries" } } }
        slug: { regex: "/ducted/" }
      }
      sort: { price: ASC }
    ) {
      nodes {
        id
        title
        slug
        price
        isOnSpecial
        cool_capacity
        heat_capacity
        model
        image {
          url
        }
      }
    }
  }
`

export default MHIDuctedSystems

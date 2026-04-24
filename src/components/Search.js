import React, { useState, useRef, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef(null);

  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct {
        edges {
          node {
            id
            title
            slug
            price
            cool_capacity
            image { url }
            sub_categories { title }
          }
        }
      }
    }
  `);

  const allProducts = data.allStrapiProduct.edges;

  const handleChange = e => {
    const val = e.target.value;
    setSearchTerm(val);
    setShowResults(val.length >= 2);
  };

  const handleClear = () => {
    setSearchTerm('');
    setShowResults(false);
  };

  // Close on outside click
  useEffect(() => {
    const handler = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filteredProducts = allProducts.filter(({ node }) => {
    const q = searchTerm.toLowerCase();
    return (
      node.title.toLowerCase().includes(q) ||
      node.sub_categories.some(s => s.title.toLowerCase().includes(q)) ||
      node.cool_capacity?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="search-container" ref={containerRef}>
      {/* Input row */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          className="input-search"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => searchTerm.length >= 2 && setShowResults(true)}
          placeholder="Search products..."
          autoComplete="off"
        />
        {/* Clear button — shown when typing */}
        {searchTerm && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute', right: 46, top: '50%', transform: 'translateY(-50%)',
              background: '#e8eef5', border: 'none', borderRadius: '50%',
              width: 20, height: 20, display: 'flex', alignItems: 'center',
              justifyContent: 'center', cursor: 'pointer', zIndex: 557,
            }}
          >
            <svg width="8" height="8" viewBox="0 0 10 10" fill="#6b7280">
              <path d="M1 1l8 8M9 1l-8 8" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        )}
        <button className="search-btn" type="submit">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" height="16" fill="#ffffff" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      {showResults && (
        <div className="ul-search">
          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 14px 8px', borderBottom: '1px solid #f1f5f9', marginBottom: 4,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', letterSpacing: '0.05em' }}>
              {filteredProducts.length > 0
                ? `${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} for "${searchTerm}"`
                : `No results for "${searchTerm}"`}
            </span>
          </div>

          {/* Results */}
          {filteredProducts.length === 0 ? (
            <div style={{ padding: '20px 14px', textAlign: 'center' }}>
              <p style={{ fontSize: 13, color: '#9ca3af', margin: 0 }}>Try a brand name or kW size</p>
            </div>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: 400, overflowY: 'auto' }}>
              {filteredProducts.map(({ node }) => (
                <li key={node.id} className="li-search">
                  <Link to={`/products/${node.slug}`} onClick={handleClear} style={{ textDecoration: 'none' }}>
                    <div className="search-result-row">
                      {/* Image */}
                      <div style={{
                        width: 52, height: 52, flexShrink: 0,
                        background: '#f8fafc', borderRadius: 8,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden',
                      }}>
                        <img
                          src={node.image.url}
                          alt={node.title}
                          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }}
                        />
                      </div>
                      {/* Text */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontSize: 13, fontWeight: 700, color: '#1f2937',
                          margin: '0 0 2px', whiteSpace: 'nowrap',
                          overflow: 'hidden', textOverflow: 'ellipsis', textTransform: 'capitalize',
                        }}>
                          {node.sub_categories[0]?.title} {node.cool_capacity}
                        </p>
                        <p style={{ fontSize: 11, color: '#6b7280', margin: 0, fontWeight: 500 }}>
                          Supplied &amp; Installed
                        </p>
                      </div>
                      {/* Price */}
                      <div style={{ flexShrink: 0, textAlign: 'right' }}>
                        <span style={{ fontSize: 14, fontWeight: 800, color: '#0075C9' }}>
                          ${node.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

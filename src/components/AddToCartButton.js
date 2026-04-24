// src/components/AddToCartButton.js

import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'gatsby';

const AddToCartButton = ({ product, className = '', onCartAdd }) => {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    // More comprehensive product data extraction
    const cartProduct = {
      id: product.id || product.slug || product.contentful_id,
      title: product.title || product.name,
      price: product.price,
      image: product.featuredImage?.url || product.image?.url || product.image,
      slug: product.slug || product.contentful_id || product.id,
      model: product.model,
      brand: product.brand,
    };

    addToCart(cartProduct);

    // Show success message
    setShowMessage(false);

     if (onCartAdd) {
      onCartAdd(product);
    }
  };

  // Auto-hide message after 4 seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="add-to-cart-container" style={{ position: 'relative' }}>
      <button onClick={handleAddToCart} className={`btn btn-cart fw-600 ${className}`}>
        <span className="sp-btn-text">Add to Cart</span>
        <span className="sp-btn-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
          </svg>
        </span>
      </button>

      {showMessage && (
        <Link
          to="/cart"
          className="success-message"
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            marginTop: '8px',
            padding: '12px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '6px',
            fontSize: '14px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease-out',
            fontWeight: '500',
            textDecoration: 'none',
            display: 'block',
            cursor: 'pointer',
          }}
        >
          ✓ {product.title} added to cart! Click to view cart →
        </Link>
      )}

      <style jsx>{`
        .success-message {
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AddToCartButton;
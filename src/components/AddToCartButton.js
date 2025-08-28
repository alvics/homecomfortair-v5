// src/components/AddToCartButton.js

import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'gatsby';

const AddToCartButton = ({ product, className = '' }) => {
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
    setShowMessage(true);
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
        Add to Cart
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
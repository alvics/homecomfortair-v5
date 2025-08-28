import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

const CartAddedCard = ({ product, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible || !product) return null;

  return (
    <div 
      className="position-fixed"
      style={{ 
        top: '20px', 
        right: '20px', 
        zIndex: 1060,
        maxWidth: '350px',
        width: '100%'
      }}
    >
      <div 
        className="bg-white border shadow-lg rounded-3 p-3"
        style={{ 
          animation: 'slideInRight 0.4s ease-out',
          borderColor: '#28a745'
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="mb-0 text-success fw-bold">
            <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            Item Added
          </h6>
          <button
            type="button"
            className="btn-close btn-sm"
            onClick={onClose}
          ></button>
        </div>

        <div className="d-flex align-items-start mb-3">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.title}
              className="me-3 rounded"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
          )}
          <div className="flex-grow-1">
            <h6 className="mb-1 fsz-14 fw-600">{product.title}</h6>
            <p className="mb-1 fsz-12 text-muted">
              {product.cool_capacity} • {product.model}
            </p>
            <p className="mb-0 fsz-14 fw-bold text-primary">
              ${product.price}
            </p>
          </div>
        </div>

        <div className="d-grid">
          <Link 
            to="/cart" 
            className="btn btn-success btn-sm text-decoration-none"
          >
            View Cart
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (max-width: 768px) {
          .position-fixed {
            top: 80px !important;
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CartAddedCard;
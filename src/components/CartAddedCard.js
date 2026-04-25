import React, { useEffect } from 'react';
import { Link } from 'gatsby';

const CartAddedCard = ({ product, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 8000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible || !product) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 90,
      right: 20,
      zIndex: 1060,
      maxWidth: 340,
      width: '100%',
      animation: 'slideInRight 0.35s ease-out',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 14,
        boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
        border: '1px solid #e8eef5',
        overflow: 'hidden',
      }}>

        {/* Header bar */}
        <div style={{
          background: 'linear-gradient(135deg, #0075C9 0%, #005fa3 100%)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.2)" />
              <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.01em' }}>
              Added to Quote Cart
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontSize: 14,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Product row */}
        <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          {product.image && (
            <div style={{
              width: 60, height: 60, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: '#f8fafc', borderRadius: 8, border: '1px solid #e8eef5',
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: 52, height: 52, objectFit: 'contain' }}
              />
            </div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              margin: '0 0 3px',
              fontSize: 13,
              fontWeight: 700,
              color: '#041521',
              lineHeight: 1.35,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}>
              {product.title}
            </p>
            {product.cool_capacity && (
              <p style={{ margin: '0 0 4px', fontSize: 11, color: '#9ca3af', fontWeight: 500 }}>
                {product.cool_capacity}{product.model ? ` · ${product.model}` : ''}
              </p>
            )}
            <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: '#0075C9', fontFamily: "'Figtree', sans-serif" }}>
              ${product.price}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '0 16px 16px' }}>
          <Link
            to="/cart"
            style={{
              display: 'block',
              textAlign: 'center',
              background: '#00c4b3',
              color: '#fff',
              fontWeight: 700,
              fontSize: 13,
              padding: '10px 0',
              borderRadius: '2em',
              textDecoration: 'none',
            }}
          >
            View Quote Cart →
          </Link>
        </div>

      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(110%); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 480px) {
          .cart-added-wrapper {
            top: 80px !important;
            right: 12px !important;
            left: 12px !important;
            max-width: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CartAddedCard;

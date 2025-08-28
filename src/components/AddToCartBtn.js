import React, { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext';

const AddToCartButton = ({ product, className = '' }) => {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id || product.slug,
      title: product.title,
      price: product.price,
      image: product.featuredImage?.url || product.image,
      slug: product.slug,
      model: product.model,
      brand: product.brand
    };
    
    addToCart(cartProduct);
    
    // Show success message
    setShowMessage(true);
  };

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="add-to-cart-container" style={{ position: 'relative' }}>
      <button 
        onClick={handleAddToCart}
        className={`btn btn-cart fw-600 ${className}`}
      >
        Add to Cart
      </button>
      
      {showMessage && (
        <div 
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
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease-out',
            fontWeight: '500'
          }}
        >
          ✓ {product.title} successfully added to cart!
        </div>
      )}
      
      <style jsx>{`
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
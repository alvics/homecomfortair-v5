// 2. Cart Icon Component (src/components/CartIcon.js)
import React from 'react';
import { Link } from 'gatsby';
import { useCart } from '../contexts/CartContext';

const CartIcon = ({ className = '' }) => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();

  return (
    <Link to="/cart" className={`cart-icon-wrapper ${className}`}>
      <div className="cart-icon">
        {/* Shopping Cart SVG Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cart-svg"
        >
          <path
            d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17A2 2 0 0119 19A2 2 0 0117 21A2 2 0 0115 19A2 2 0 0117 17M9 19A2 2 0 0111 21A2 2 0 019 23A2 2 0 017 21A2 2 0 019 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {itemCount > 0 && (
          <span className="cart-badge">{itemCount}</span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;

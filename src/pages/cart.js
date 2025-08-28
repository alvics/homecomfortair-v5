// Cart Page with Integrated Contact Form (src/pages/cart.js)

import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layouts/layout';
import { useCart } from '../contexts/CartContext';
import Hero from '../components/Sections/CartHero';


// Refactored Quote Form to a functional component with hooks
const CartQuoteForm = ({ cartItems }) => {
  const [status, setStatus] = useState('');
  const productsOfInterest = cartItems.map((item) => item.title).join(', ');

  const submitForm = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);

    try {
      // Use the modern Fetch API instead of XMLHttpRequest
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('ERROR');
    }
  };

  return (
    <Fragment>
    
    <div className="cart-quote-form">
      <div className="quote-form-card">
        <h2>Request a Quote</h2>
        <p>
          Please fill out the form below. We will get back to you with a
          personalized quote for the products in your cart.
        </p>

        <form className="quote-form" onSubmit={submitForm} action="https://formspree.io/f/mleppppp" method="POST">
          <div className="form-group">
            <label htmlFor="products_of_interest">Products of Interest</label>
            <input
              type="text"
              name="products_of_interest"
              value={productsOfInterest}
              readOnly
              className="form-control readonly-field"
              style={{ fontWeight: 'bold' }}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="first_name"
                placeholder="Name:"
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email:"
                required
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone:"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="suburb"
              placeholder="Suburb:"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <textarea
              rows="4"
              name="message"
              placeholder="Message:"
              required
              className="form-control"
            />
          </div>

          {status === 'SUCCESS' ? (
            <p className="form-success-message">
              Thank you, your form was successfully submitted, we'll get back to you shortly.
            </p>
          ) : (
            <button className="btn btn-primary btn-large submit-quote-btn" type="submit">
              Submit Quote Request
            </button>
          )}
          {status === 'ERROR' && (
            <p className="form-error-message">Ooops! There was an error.</p>
          )}
        </form>
      </div>
    </div>
    </Fragment>
  );
};

// Cart Content Component
const CartContent = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart-message">
            <h2>Your cart is empty</h2>
            <p>Browse our air conditioning systems to get started.</p>
            <Link to="/products" className="btn btn-primary">
              View Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Fragment>
    <div className='mt-3'><Hero /></div>
    
   
   
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart ({getTotalItems()} items)</h1>
          <button onClick={clearCart} className="btn btn-secondary text-white">
            Clear Cart
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="item-details">
                  <h3>
                    {item.slug ? (
                      <Link to={`/products`} className="product-title-link">
                        {item.title}
                      </Link>
                    ) : item.id ? (
                      <Link to={`/products`} className="product-title-link">
                        {item.title}
                      </Link>
                    ) : (
                      <span className="product-title-no-link" style={{ color: '#333' }}>
                        {item.title}
                      </span>
                    )}
                  </h3>
                  <p className="item-model">Model: {item.model}</p>
                  <p className="item-price">${item.price}</p>
                  <p className="debug-slug" style={{ fontSize: '12px', color: '#999' }}></p>
                </div>

                <div className="item-controls">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="remove-btn p-1 btn-sm">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Items ({getTotalItems()}):</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="cart-actions">
                <Link to="/products" className="btn btn-primary continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartQuoteForm cartItems={cartItems} />
    </div>
     </Fragment>
  );
};

// Main Cart Page Component
const CartPage = () => {
  return (
    <Layout>
      <CartContent />
      {/* Moved the style block here for correct syntax */}
      <style jsx>{`
        .cart-page {
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .cart-header h1 {
          font-size: 2rem;
          margin-bottom: 0;
        }

        .cart-content {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cart-items {
          flex: 1 1 65%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cart-item {
          display: flex;
          gap: 1.5rem;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #fff;
          align-items: center;
        }

        .item-image {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 4px;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-details {
          flex-grow: 1;
        }

        .item-details h3 {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.3;
        }

        .item-details p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
        }

        .item-controls {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantity-btn {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          color: #333;
          font-size: 1rem;
          width: 30px;
          height: 30px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .quantity-btn:hover {
          background-color: #e0e0e0;
        }

        .quantity {
          font-size: 1rem;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #dc3545;
          cursor: pointer;
          font-size: 0.8rem;
          padding: 0;
        }

        .cart-summary {
          flex: 1 1 30%;
        }

        .summary-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          position: sticky;
          top: 2rem;
        }

        .summary-total {
          font-weight: bold;
          font-size: 1.25rem;
          border-top: 1px dashed #ccc;
          padding-top: 1rem;
          margin-top: 1rem;
        }

        .cart-actions {
          margin-top: 1.5rem;
        }

        .empty-cart-message {
          text-align: center;
          padding: 3rem 0;
        }

        .empty-cart-message h2 {
          font-size: 1.5rem;
          color: #666;
        }

        .empty-cart-message p {
          color: #999;
        }

        .cart-quote-form {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e5e5;
        }
        .quote-form-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .quote-form-card h2 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        .quote-form-card p {
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        .form-success-message {
          background-color: #d4edda;
          color: #155724;
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          border: 1px solid #c3e6cb;
        }
        .form-error-message {
          background-color: #f8d7da;
          color: #721c24;
          padding: 12px 16px;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          border: 1px solid #f5c6cb;
        }
        .quote-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .form-control {
          padding: 12px 16px;
          border: 2px solid #e1e1e1;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        .product-title-link {
          color: rgb(0, 117, 201); !important;
          text-decoration: none !important;
          transition: color 0.3s ease !important;
          cursor: pointer !important;
          display: block !important;
        }
        .product-title-link:hover {
          color: #0056b3 !important;
          text-decoration: underline !important;
        }
        .product-title-link:visited {
          color: #6f42c1;
        }
        .form-control:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }
        .readonly-field {
          background-color: #f8f9fa;
          cursor: not-allowed;
          color: #6c757d;
        }
        .submit-quote-btn {
          margin-top: 1rem;
          padding: 16px 32px;
          font-size: 1.1rem;
          font-weight: 600;
          background-color: rgb(0, 117, 201);
          color: white !important;
        }

        .submit-quote-btn:hover  {
        background-color: rgb(0, 140, 255);
        transition: color 0.3s ease !important;
        }

        .continue-shopping {
        border: none;
        background-color: rgb(0, 117, 201);
        }

         .continue-shopping:hover {
        background-color: rgb(0, 140, 255);
        transition: color 0.3s ease !important;
        }

        @media (max-width: 768px) {
          .cart-content {
            flex-direction: column;
          }
          .cart-summary {
            order: -1;
            margin-bottom: 1.5rem;
            flex: 1 1 100%;
          }
          .summary-card {
            position: relative;
            top: auto;
          }
          .cart-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .item-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }
          .item-image img {
            border-radius: 8px;
          }
          .item-details {
            width: 100%;
            text-align: left;
          }
          .item-controls {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            align-items: center;
          }
          .cart-header h1 {
            font-size: 1.5rem;
          }
          .cart-header button {
            margin-top: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default CartPage;

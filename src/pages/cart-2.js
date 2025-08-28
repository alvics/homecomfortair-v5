// Cart Page with Integrated Contact Form (src/pages/cart.js)

import React, { Component } from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layouts/layout';
import { CartProvider, useCart } from '../contexts/CartContext';

// Quote Form Class Component for Formspree
class CartQuoteForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    const { cartItems } = this.props;
    const productsOfInterest = cartItems.map(item => item.title).join(', ');

    return (
      <div className="cart-quote-form">
        <div className="quote-form-card">
          <h2>Request a Quote</h2>
          <p>Please fill out the form below. We will get back to you with a personalized quote for the products in your cart.</p>

          <form
            className="quote-form"
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mleppppp"
            method="POST"
          >
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
                  style={{ fontWeight: 'bold' }}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email:"
                  required
                  className="form-control"
                  style={{ fontWeight: 'bold' }}
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
                style={{ fontWeight: 'bold' }}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="suburb"
                placeholder="Suburb:"
                required
                className="form-control"
                style={{ fontWeight: 'bold' }}
              />
            </div>

            <div className="form-group">
              <textarea
                rows="4"
                name="message"
                placeholder="Message:"
                required
                className="form-control"
                style={{ fontWeight: 'bold' }}
              />
            </div>

            {status === "SUCCESS" ? (
              <p className="form-success-message">
                Thank you, your form was successfully submitted, we'll get back to you shortly.
              </p>
            ) : (
              <button className="btn btn-primary btn-large submit-quote-btn" type="submit">
                Submit Quote Request
              </button>
            )}
            {status === "ERROR" && (
              <p className="form-error-message">Ooops! There was an error.</p>
            )}
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

// Main Cart Page Component
class CartPage extends Component {
  render() {
    return (
      <CartProvider>
        <Layout>
          <CartContent />
        </Layout>
      </CartProvider>
    );
  }
}

// Cart Content Component
const CartContent = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice,
    getTotalItems 
  } = useCart();

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
        <style jsx>{`
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
            color: #007bff;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .product-title-link:hover {
            color: #0056b3;
            text-decoration: underline;
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
          }
          @media (max-width: 768px) {
            .form-row {
              grid-template-columns: 1fr;
            }
            .quote-form-card {
              padding: 1.5rem;
              margin: 0 1rem;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className="cart-page">
        <div className="container">
          <div className="cart-header">
            <h1>Shopping Cart ({getTotalItems()} items)</h1>
            <button onClick={clearCart} className="btn btn-secondary">
              Clear Cart
            </button>
          </div>

          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  
                  <div className="item-details">
                    <h3>
                      <Link 
                        to={`/products/${item.slug}`}
                        className="product-title-link"
                        style={{ 
                          color: '#007bff',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          display: 'block'
                        }}
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="item-model">Model: {item.model}</p>
                    <p className="item-price">${item.price}</p>
                    <p className="debug-slug" style={{ fontSize: '12px', color: '#999' }}>
                      Debug: Slug = {item.slug} | Link = /products/{item.slug}
                    </p>
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
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                    >
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
                  <Link to="/products" className="btn btn-secondary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartQuoteForm cartItems={cartItems} />

      <style jsx>{`
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
          color: #007bff !important;
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
          color: #6f42c1 !important;
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
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .quote-form-card {
            padding: 1.5rem;
            margin: 0 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default CartPage;
// Cart Page with Integrated Contact Form (src/pages/cart.js)

import React, { Component } from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layouts/layout';
import { CartProvider, useCart } from '../contexts/CartContext';
import Hero from '../components/Sections/CartHero';

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
      </div>
    );
  }

  return (
    <>
      <div className='mt-3'><Hero /></div>
      <div className="cart-page">
        <div className="container py-4">

          {/* Header */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-2">
            <h1 className="h4 mb-0">Shopping Cart ({getTotalItems()} items)</h1>
            <button onClick={clearCart} className="btn btn-secondary text-white">
              Clear Cart
            </button>
          </div>

          {/* Cart content */}
          <div className="row g-4">

            {/* Cart Items */}
            <div className="col-12 col-lg-8">
              {cartItems.map(item => (
                <div key={item.id} className="d-flex flex-column flex-sm-row gap-3 rounded p-3 mb-3 bg-white shadow-sm">

                  {/* Image */}
                  <div className="flex-shrink-0 text-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Title, model, price */}
                  <div className="d-flex flex-column flex-grow-1 gap-2">
                    <div>
                      <h3 className="h6 mb-1">
                        <Link
                          to={`/products/${item.slug}`}
                          className="product-title-link"
                          style={{
                            color: '#333',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            display: 'block'
                          }}
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mb-0 text-muted small" >Model: {item.model}</p>
                      <p className="mb-0 fw-semibold">${item.price}</p>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-auto">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn btn btn-outline-secondary btn-sm"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn btn btn-outline-secondary btn-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-outline-danger remove-btn btn-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="col-12 col-lg-4 pl-4">
              <div className=" rounded p-4 bg-white shadow-sm">
                <h3 className="h5 mb-3">Order Summary</h3>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Items ({getTotalItems()}):</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="cart-actions">
                  <Link to="/products" className="btn btn-primary w-100 continue-shopping">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CartQuoteForm cartItems={cartItems} />

      <style>{`
        .continue-shopping {
          border: none;
          background-color: rgb(0, 117, 201);
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
          color: #333 !important;
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
          background-color: rgb(0, 117, 201);
          color: white !important;
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
import React, { useState } from 'react';

const useCart = () => {
  // Dummy data for demonstration purposes
  const DUMMY_CART_DATA = [
    { id: "dummy-product-1", title: "Product Title One" },
    { id: "dummy-product-2", title: "Product Title Two" },
  ];
  const [cartItems, setCartItems] = useState(car);
  const clearCart = () => setCartItems([]);
  return { cartItems, clearCart };
};

const CartForm = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  // Automatically populate the form with product titles from the cart
  const productsOfInterest = cartItems.map(item => item.title).join(', ');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request Submitted:', { ...formData, productsOfInterest });
    setMessage('Thank you for your request! We will be in touch shortly.');
    clearCart();
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mt-8 space-y-6">
      <h2 className="text-xl font-bold border-b pb-2">Request a Quote</h2>
      <p className="text-gray-600">Please fill out the form below. We will get back to you with a personalized quote for the products on your list.</p>

      {message && (
        <div className="bg-green-100 text-green-700 p-3 rounded-md text-sm">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="productsOfInterest" className="block text-sm font-semibold text-gray-700 mb-1">Products of Interest</label>
          <input
            id="productsOfInterest"
            name="productsOfInterest"
            type="text"
            value={productsOfInterest}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 cursor-not-allowed"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Additional Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={cartItems.length === 0}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
};

export default CartForm;

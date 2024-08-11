import React, { useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken.userId;
    } catch (error) {
      console.error('Invalid token format:', error);
      return null;
    }
  };

  const userId = getUserIdFromToken();

  const handleCheckout = () => {
    if (!userId) {
      console.error('User ID is not available');
      return;
    }

    if (!address || !number) {
      alert('Please enter both address and number.');
      return;
    }

    const orders = {
      address,
      number,
      cost: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: 'Pending',
      product: cartItems.map(item => ({
        productName: item.name,
        productcategory: item.description,
        productcost: item.price
      }))
    };

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is not available');
      return;
    }

    axios.post(`http://localhost:8080/order/register/${userId}`, orders, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Order placed successfully:', response.data);
        localStorage.removeItem('cart');
        setShowModal(false); // Close modal after successful order placement
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
          if (error.response.status === 403) {
            alert('You are not authorized to perform this action. Please check your permissions.');
          }
        } else if (error.request) {
          console.error('Error request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      });
  };

  return (
    <div className="pl-20 pt-5 flex flex-col gap-6">
      <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="h-96 w-80 border border-gray-200 shadow-md rounded-md p-4 flex flex-col">
              <img src={item.image} className="h-40 w-full object-cover rounded-md mb-4" alt={item.name} />
              <div className="flex flex-col flex-grow">
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mt-auto font-bold text-xl flex justify-between">
                  <span>Rs. {item.price}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-4">
        <button onClick={() => setShowModal(true)} className="bg-green-500 text-white py-2 px-4 rounded mt-4">Checkout</button>
        <button onClick={() => localStorage.removeItem('cart')} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Clear Cart</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Enter Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
            />
            <div className="flex gap-4 mt-4">
              <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-4 rounded">Submit</button>
              <button onClick={() => setShowModal(false)} className="bg-red-500 text-white py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from 'react';
import axios from 'axios';
import { authService } from '@/services/auth';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for page navigation

const Cart = () => {
  const defaultUsername = authService.getUserEmail();
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(defaultUsername);
  const [addressType, setAddressType] = useState('Home');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();  // Hook for navigating to the OrderList page

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

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (name, delta) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.name === name) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });

      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const handleRemoveItem = (name) => {
    const updatedItems = cartItems.filter(item => item.name !== name);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

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
      username,
      addressType,
      address,
      number,
      cost: totalCost,
      status: 'Order Placed',
      product: cartItems.map(item => ({
        productName: item.name,
        productcategory: item.description,
        productcost: item.price,
      })),
    };

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is not available');
      return;
    }

    axios
      .post(`http://localhost:8080/order/register/${userId}`, orders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log('Order placed successfully:', response.data);
        localStorage.removeItem('cart');
        setCartItems([]);  // Clear the cart
        setShowModal(false);  // Close the modal

        // Redirect to the OrderList page after successful order placement
        // This assumes '/orders' is the route for the OrderList page
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response.data);
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
            <div key={item.name} className="h-96 w-80 border border-gray-200 shadow-md rounded-md p-4 flex flex-col">
              <img src={item.image} className="h-40 w-full object-cover rounded-md mb-4" alt={item.name} />
              <div className="flex flex-col flex-grow">
                <p className="font-medium text-lg">{item.name}</p>
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => handleQuantityChange(item.name, -1)} 
                    className="bg-gray-300 text-black px-2 rounded"
                  >
                    -
                  </button>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => handleQuantityChange(item.name, 1)} 
                    className="bg-gray-300 text-black px-2 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="mt-auto font-bold text-xl flex justify-between">
                  <span>Rs. {item.price * item.quantity}</span>
                  <button
                    onClick={() => handleRemoveItem(item.name)} 
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <h2 className="text-xl font-bold">Total: Rs. {totalCost}</h2>
        <div className="flex gap-4">
          <button onClick={() => setShowModal(true)} className="bg-slate-500 text-white py-2 px-4 rounded">
            Checkout
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('cart');
              setCartItems([]);  // Clear the cart
            }}
            className="text-red-800 py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Modal for checkout details */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>
            <div className="mb-4">
              <label className="block mb-1 text-black" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-black" htmlFor="number">Mobile Number</label>
              <input
                id="number"
                type="text"
                placeholder="Enter Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-black">Address Type</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value="Home"
                    checked={addressType === 'Home'}
                    onChange={(e) => setAddressType(e.target.value)}
                    className="mr-2"
                  />
                  Home
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value="Office"
                    checked={addressType === 'Office'}
                    onChange={(e) => setAddressType(e.target.value)}
                    className="mr-2"
                  />
                  Office
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="addressType"
                    value="Other"
                    checked={addressType === 'Other'}
                    onChange={(e) => setAddressType(e.target.value)}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-black" htmlFor="address">Address</label>
              <textarea
                id="address"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-2 border rounded w-full h-24 resize-y"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick={handleCheckout} className="bg-slate-500 text-white py-2 px-4 rounded">
                Place Order
              </button>
              <button onClick={() => setShowModal(false)} className="text-black py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

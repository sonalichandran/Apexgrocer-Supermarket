import React from 'react';
import axios from 'axios';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to extract user ID from token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken.userId;
  };

  const userId = getUserIdFromToken(); // Extract user ID

  const handleCheckout = () => {
    if (!userId) {
      console.error('User ID is not available');
      return;
    }

    const orders = {
      address: 'Your Address Here', // Replace with actual address input
      number: 1234567890, // Replace with actual phone number input
      cost: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: 'Pending',
      product: cartItems.map(item => ({
        productName: item.name,
        productcategory: item.description,
        productcost: item.price
      }))
    };

    const token = localStorage.getItem('token');
    axios.post(`http://localhost:8080/order/register/${userId}`, orders, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Order placed successfully:', response.data);
        localStorage.removeItem('cart'); // Clear cart after successful order
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
          console.error('Error headers:', error.response.headers);
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
      <button onClick={handleCheckout} className="bg-green-500 text-white py-2 px-4 rounded mt-4">Checkout</button>
      <button onClick={() => localStorage.removeItem('cart')} className="bg-red-500 text-white py-2 px-4 rounded mt-4">Clear Cart</button>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const getUserIdFromToken = () => {
  const token = localStorage.getItem('token'); 
  if (!token) return null;
  
  const decodedToken = JSON.parse(atob(token.split('.')[1])); 
  return decodedToken.userId; 
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const userId = getUserIdFromToken(); 

  useEffect(() => {
    if (userId) {
    
      axios.get(`http://localhost:8080/order/getall/${userId}`)
        .then(response => {
          setOrders(response.data);
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
        });
    } else {
      console.error('User ID not found in token.');
    }
  }, [userId]);

  const handleCancelOrder = (orderId) => {
    axios.delete(`http://localhost:8080/order/deletebyId/${orderId}`)
      .then(() => {
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
      })
      .catch(error => {
        console.error('Error cancelling order:', error);
      });
  };

  return (
    <>
      <div className="flex flex-row left-10 pl-20 gap-96 pt-10">
        <h1 className="font-bold text-2xl text-gray-800">Orders</h1>
        <div className="pl-52">
          <button className="left-96 flex border border-black rounded-md p-2">Track Order</button>
        </div>
      </div>

      <div className="pl-20 pt-5 flex flex-col gap-6">
        {orders.map((order, index) => (
          <div key={index} className="flex flex-col mb-4">
            <p className="font-semibold text-gray-600">Order Number: <span className="text-gray-800">{order.number}</span></p>
            <p className="font-semibold text-gray-600">Address: <span className="text-gray-800">{order.address}</span></p>
            <p className="font-semibold text-gray-600">Status: <span className="text-gray-800">{order.status}</span></p>

            {order.product.map((product, idx) => (
              <div key={idx} className="h-32 w-4/6 border border-gray-300 shadow-lg rounded-md flex items-center p-4">
                <img src="https://via.placeholder.com/150" className="h-20 w-20 rounded" alt={product.productName} />
                <div className="flex flex-col pl-6">
                  <p className="font-medium text-gray-700">{product.productName}</p>
                  <p className="font-medium text-gray-600">Category: {product.productcategory}</p>
                  <p className="font-medium text-gray-600">Cost: Rs.{product.productcost}</p>
                </div>
              </div>
            ))}

          
            <button 
              onClick={() => handleCancelOrder(order.orderId)} 
              className="text-red-500 mt-2"
            >
              Cancel Order
            </button>
          </div>
        ))}

        <div className="flex font-bold text-lg text-gray-800 mt-4 flex-row gap-4">
          Total Cost: Rs.{orders.reduce((acc, order) => acc + order.cost, 0)}
          <button className="font-medium text-red-700">Get Invoice</button>
        </div>
      </div>
    </>
  );
}

export default OrderList;

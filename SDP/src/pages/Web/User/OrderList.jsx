import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authService } from '@/services/auth';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const userId = authService.getUserId(); 

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8080/order/getall/${userId}`)
        .then(response => {
          setOrders(response.data);
          setError(null); 
        })
        .catch(error => {
          setError('Error fetching orders.');
          console.error('Error fetching orders:', error);
        });
    } else {
      setError('User ID not found in token.');
    }
  }, [userId]);

  const handleCancelOrder = (orderId, productId) => {
    axios.delete(`http://localhost:8080/product/deleteById/${productId}`)
      .then(() => {
        setOrders(prevOrders => {
          return prevOrders
            .map(order => {
              if (order.orderId === orderId) {
                const updatedProducts = order.product.filter(product => product.productId !== productId);

                return updatedProducts.length > 0
                  ? { ...order, product: updatedProducts }
                  : null; 
              }
              return order;
            })
            .filter(order => order !== null); 
        });
      })
      .catch(error => {
        setError('Error cancelling product.');
        console.error('Error cancelling product:', error);
      });
  };

  const handleInvoice = (orderId) => {
    axios.get(`http://localhost:8080/order/download/${orderId}`, {
      responseType: 'blob'
    })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
    })
    .catch(error => {
      setError('Error downloading invoice.');
      console.error('Error downloading invoice:', error);
    });
  };

  const calculateTotalCost = () => {
    return orders.reduce((acc, order) => 
      acc + order.product.reduce((prodAcc, product) => 
        prodAcc + (product.productcost || 0), 0), 0
    );
  };

  return (
    <>
      <div className="flex flex-row left-10 pl-20 gap-96 pt-10">
        <h1 className="font-bold text-2xl text-gray-800">Orders</h1>
        <div className="pl-52">
          <button className="flex border border-black rounded-md p-2">Track Order</button>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center mt-4">{error}</div>
      )}

      <div className="pl-20 pt-5 flex flex-col gap-6">
        {orders.map((order, index) => (
          <div key={index} className="flex flex-col mb-4">
            <p className="font-semibold text-gray-600">Order Number: <span className="text-gray-800">{order.number}</span></p>
            <p className="font-semibold text-gray-600">Address: <span className="text-gray-800">{order.address}</span></p>
            <p className="font-semibold text-gray-600">Status: <span className="text-gray-800">{order.status}</span></p>

            {order.product.map((product, idx) => (
              <div key={idx} className="h-32 w-4/6 border border-gray-300 shadow-lg rounded-md flex items-center p-4">
                <img src={product.image} className="h-20 w-20 rounded" alt={product.productName} />
                <div className="flex flex-col pl-6">
                  <p className="font-medium text-gray-700">{product.productName}</p>
                  <p className="font-medium text-gray-600">Category: {product.productcategory}</p>
                  <p className="font-medium text-gray-600">Cost: Rs.{product.productcost}</p>
                </div>
                <button 
                  onClick={() => handleCancelOrder(order.orderId, product.productId)} 
                  className="text-red-500 mt-2 ml-auto"
                >
                  Cancel Product
                </button>
              </div>
            ))}
            
            <button 
              onClick={() => handleInvoice(order.orderId)} 
              className="text-blue-500 mt-2"
            >
              Get Invoice
            </button>
          </div>
        ))}
        <div className="flex font-bold text-lg text-gray-800 mt-4 flex-row gap-4">
          Total Cost: Rs.{calculateTotalCost()}
        </div>
      </div>
    </>
  );
}

export default OrderList;

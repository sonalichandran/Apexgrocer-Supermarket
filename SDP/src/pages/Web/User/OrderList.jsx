import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authService } from '@/services/auth';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTracking, setSelectedTracking] = useState(null); // State for selected order's tracking info
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
                // If no products are left in the order, exclude the order completely
                return updatedProducts.length > 0
                  ? { ...order, product: updatedProducts }
                  : null;
              }
              return order;
            })
            // Filter out the null orders (orders with no products left)
            .filter(order => order !== null);
        });
      })
      .catch(error => {
        setError('Error cancelling product.');
        console.error('Error cancelling product:', error);
      });
  };

  const handleInvoice = (orderId) => {
    axios.get(`http://localhost:8080/order/download/${orderId}`, { responseType: 'blob' })
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

  // Function to calculate the total cost of a single order based on its products
  const calculateOrderCost = (order) => {
    return order.product.reduce((acc, product) => acc + (product.productcost || 0), 0);
  };

  // Handle fetching the tracking details of a specific order
  const handleTrackOrder = (orderId) => {
    const order = orders.find(order => order.orderId === orderId);
    if (order) {
      // Assuming the order object contains tracking info (such as tracking number, delivery agent, etc.)
      const trackingInfo = {
        trackingNumber: order.number || "Not Available", // Replace with the actual field from your API
        status: order.status || "Not Available",                // Assuming the order has a status field
        deliveryAgent: order.deliveryAgent || "TwigoEx",  // Assuming the order has a deliveryAgent field
        expectedDeliveryDate: order.expectedDeliveryDate || "16-11-2024" // Replace with actual field
      };
      setSelectedTracking(trackingInfo);
    } else {
      setError('Order not found for tracking.');
    }
  };

  return (
    <>
      <div className="flex flex-row left-10 pl-20 gap-96 pt-10">
        <h1 className="font-bold text-2xl text-gray-800">Orders</h1>
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

            {/* Track Order Button */}
            <div className="flex mt-2 gap-4 pl-96 ml-60"> {/* Use flex container with gap between the buttons */}
              <button 
                onClick={() => handleTrackOrder(order.orderId)} 
                className="text-blue-500"
              >
                Track Order
              </button>

              <button 
                onClick={() => handleInvoice(order.orderId)} 
                className="text-blue-500"
              >
                Get Invoice
              </button>
            </div>

            {/* Show Total Cost for the specific order */}
            <div className="flex font-bold text-lg text-gray-800 mt-4">
              Total Cost: Rs.{calculateOrderCost(order)}
            </div>
          </div>
        ))}
      </div>

      {/* Tracking Information Modal */}
      {selectedTracking && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="font-bold text-xl text-gray-800">Order Tracking</h2>
            <p className="mt-2">Tracking Number: {selectedTracking.trackingNumber}</p>
            <p className="mt-2">Status: {selectedTracking.status}</p>
            <p className="mt-2">Delivery Agent: {selectedTracking.deliveryAgent}</p>
            <p className="mt-2">Expected Delivery: {selectedTracking.expectedDeliveryDate}</p>

            <div className="mt-4">
              <button 
                onClick={() => setSelectedTracking(null)} 
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderList;

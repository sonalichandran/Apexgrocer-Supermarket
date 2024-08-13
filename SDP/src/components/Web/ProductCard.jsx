import { authService } from '@/services/auth';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  const handleAddToCart = () => {
    if(authService.isLoggedIn())
    {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      id: product.id, 
      name: product.productName,
      quantity: 1,
      price: product.productcost, 
      description: product.productcategory, 
      image: product.imagePath
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }
  else{
    toast.error("Login to add items to Cart");
    setTimeout(() => {
      navigate('/login');
    }, 5000);
   
  }
  };

  return (
    <div className="w-80 h-96 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-56 object-cover" src={product.imagePath } alt={product.productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{product.productName}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {product.productcategory}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="font-bold text-xl text-gray-800 dark:text-white">Rs.{product.productcost}</span>
        <button
          className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      <Toaster 
        position="top-right" 
        toastOptions={{
          success: {
            duration: 4000, 
          },
          error: {
            duration: 4000, 
          },
        }} 
      />
    </div>
  );
};

export default ProductCard;

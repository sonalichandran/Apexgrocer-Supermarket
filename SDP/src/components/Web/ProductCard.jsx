import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
      id: product.id, // Use 'id' instead of 'productId'
      name: product.productName,
      quantity: 1,
      price: product.productcost, // Remove 'Rs.' as it's handled in Cart
      description: product.productcategory, 
      image: product.image || 'https://via.placeholder.com/150'
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="w-80 h-96 rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-56 object-cover" src={product.image || 'https://via.placeholder.com/150'} alt={product.productName} />
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
    </div>
  );
};

export default ProductCard;

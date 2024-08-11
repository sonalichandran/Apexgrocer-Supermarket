import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';

const products = [
  {
    id: 1,
    productName: 'Fresh Apple',
    productcategory: 'Crisp and delicious apples.',
    productcost: 260,
    image: 'https://via.placeholder.com/150' // Add a sample image URL
  },
  // Add more products if needed
];

const FruitList = () => {
  return (
    <div className="container mx-auto pt-48 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FruitList;
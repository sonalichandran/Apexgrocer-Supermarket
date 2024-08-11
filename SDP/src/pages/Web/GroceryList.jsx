import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: ' Organic Jaggery',
    description: '500g | Unrefined and Unadulterated',
    price: "Rs.260",
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81fl6FdQJxL.AC_SL240_.jpg',
  },
  {
    id: 2,
    title: 'Quaker Oats Multigrain ',
    description: ' High Protein & Fibre, Dalia Porridge',
    price: "Rs.200",
    image: 'https://images-eu.ssl-images-amazon.com/images/I/81twIv6P+kL.AC_SL240_.jpg',
  }

];

const GroceryList = () => {
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

export default GroceryList;

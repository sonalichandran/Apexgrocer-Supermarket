import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: 'Carrot',
    description: 'Health--',
    price: "Rs.20",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000382_10-fresho-carrot-red.jpg?tr=w-1920,q=80',
  },
  {
    id: 2,
    title: 'Tomato',
    description: 'Freshly...',
    price: "Rs.30",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40312601_2-fresho-tomato-local.jpg?tr=w-1920,q=80',
  },
  {
    id: 3,
    title: 'Ladysfinger',
    description: 'Grown organically',
    price: "Rs.34",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-1920,q=80',
  },
  {
    id: 4,
    title: 'Ginger',
    description: 'Underground nutrient',
    price: "Rs.90",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000510_4-fresho-ginger-organically-grown.jpg?tr=w-1920,q=80',
  },
  {
    id: 5,
    title: 'Parwal',
    description: '...',
    price: "Rs.122",
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000365_12-fresho-parwal.jpg?tr=w-1920,q=80',
  },
  {
    id: 6,
    title: 'Garlic',
    description: 'Organically grown',
    price: "Rs.170",
    image: 'https://www.bigbasket.com/media/uploads/p/m/50000508_4-fresho-garlic-organically-grown.jpg?tr=w-1920,q=80',
  },
  

];

const VegetableList = () => {
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

export default VegetableList;

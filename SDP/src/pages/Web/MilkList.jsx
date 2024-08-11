import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: 'Pure Ghee',
    description: 'Organic',
    price: "Rs.145",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40161682_4-fresho-pure-cow-desi-ghee.jpg?tr=w-1920,q=80',
  },
  {
    id: 2,
    title: 'Greek Yogurt',
    description: 'Natural, No Added Sugar',
    price: "Rs.260",
    image: 'https://www.bigbasket.com/media/uploads/p/m/1215361_2-epigamia-greek-yogurt-natural.jpg?tr=w-1920,q=80',
  },
  {
    id: 3,
    title: 'Mother Dairy Live ',
    description: ' Lite Low Fat Milk, 450 ml Pouch',
    price: "Rs.31",
    image: 'https://www.bigbasket.com/media/uploads/p/m/70000730_2-mother-dairy-milk-live-lite.jpg?tr=w-1920,q=80',
  },
  {
    id: 4,
    title: 'Amul Slim ',
    description: 'Trim Skimmed Milk, 1 L Tetra Pak',
    price: "Rs.250",
    image: 'https://www.bigbasket.com/media/uploads/p/m/104707_9-amul-homogenised-standardised-milk.jpg?tr=w-1920,q=80',
  },
  {
    id: 5,
    title: 'Amul',
    description: 'Amul Gold Homogenised Standardised Milk, 1 L',
    price: "Rs.200",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40012988_4-amul-slim-n-trim-skimmed-milk.jpg?tr=w-1920,q=80',
  }
  

];

const MilkList = () => {
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

export default MilkList;

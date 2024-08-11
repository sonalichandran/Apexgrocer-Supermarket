import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    productName: 'Tomato',
    productcategory: 'Fresh and juicy tomatoes.',
    productcost: 50,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40022638_10-fresho-tomato-local-organically-grown.jpg?tr=w-1920,q=80'
  },
  {
    id: 2,
    productName: 'Potato',
    productcategory: 'Organically grown potatoes.',
    productcost: 40,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40023476_6-fresho-potato-organically-grown.jpg?tr=w-1920,q=80'
  },
  {
    id: 3,
    productName: 'Carrot',
    productcategory: 'Crunchy and sweet carrots.',
    productcost: 60,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000272_17-fresho-carrot-ooty.jpg?tr=w-1920,q=80'
  },
  {
    id: 4,
    productName: 'Spinach',
    productcategory: 'Fresh and green spinach leaves.',
    productcost: 30,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40217496_2-fresho-spinach-hydroponically-grown.jpg?tr=w-1920,q=80'
  },
  {
    id: 5,
    productName: 'Cabbage',
    productcategory: 'Fresh and crisp cabbage.',
    productcost: 35,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000066_27-fresho-cabbage.jpg?tr=w-1920,q=80'
  },
  {
    id: 6,
    productName: 'Broccoli',
    productcategory: 'Freshly harvested broccoli.',
    productcost: 80,
    image: 'https://www.bigbasket.com/media/uploads/p/l/10000063_21-fresho-broccoli.jpg'
  },
  {
    id: 7,
    productName: 'Capsicum',
    productcategory: 'Fresh and crunchy capsicums.',
    productcost: 70,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000068_25-fresho-capsicum-green.jpg?tr=w-1920,q=80'
  }
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

import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    productName: 'Tomato',
    productcategory: 'Fresh and juicy tomatoes.',
    productcost: 50,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000141_27-fresho-tomato-hybrid.jpg?tr=w-1920,q=80'
  },
  {
    id: 2,
    productName: 'Potato',
    productcategory: 'Organically grown potatoes.',
    productcost: 40,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000159_23-fresho-potato.jpg?tr=w-1920,q=80'
  },
  {
    id: 3,
    productName: 'Carrot',
    productcategory: 'Crunchy and sweet carrots.',
    productcost: 60,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000125_14-fresho-carrot-organic.jpg?tr=w-1920,q=80'
  },
  {
    id: 4,
    productName: 'Spinach',
    productcategory: 'Fresh and green spinach leaves.',
    productcost: 30,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000131_27-fresho-spinach.jpg?tr=w-1920,q=80'
  },
  {
    id: 5,
    productName: 'Cabbage',
    productcategory: 'Fresh and crisp cabbage.',
    productcost: 35,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000071_23-fresho-cabbage.jpg?tr=w-1920,q=80'
  },
  {
    id: 6,
    productName: 'Broccoli',
    productcategory: 'Freshly harvested broccoli.',
    productcost: 80,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000067_28-fresho-broccoli.jpg?tr=w-1920,q=80'
  },
  {
    id: 7,
    productName: 'Capsicum',
    productcategory: 'Fresh and crunchy capsicums.',
    productcost: 70,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000138_24-fresho-capsicum-green-organic.jpg?tr=w-1920,q=80'
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

import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';

const products = [
  {
    id: 1,
    productName: 'Banana',
    productcategory: 'Fresh and ripe bananas.',
    productcost: 150,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000148_27-fresho-banana-yelakki-organically-grown.jpg?tr=w-1920,q=80' 
  },
  {
    id: 2,
    productName: 'Orange',
    productcategory: 'Juicy and tangy oranges.',
    productcost: 200,
    image: 'https://www.bigbasket.com/media/uploads/p/m/1200229_7-fresho-orange-kinnow.jpg?tr=w-1920,q=80' 
  },
  {
    id: 3,
    productName: 'Mango',
    productcategory: 'Sweet and succulent mangoes.',
    productcost: 300,
    image: 'https://www.bigbasket.com/media/uploads/p/m/1203101_1-fresho-mango-alphonso-premium.jpg?tr=w-1920,q=80' 
  },
  {
    id: 4,
    productName: 'Pineapple',
    productcategory: 'Tropical and tangy pineapples.',
    productcost: 180,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40023462_7-fresho-pineapple-regular.jpg?tr=w-1920,q=80' 
  },
  {
    id: 5,
    productName: 'Grapes',
    productcategory: 'Sweet and juicy grapes.',
    productcost: 220,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40014488_14-fresho-grapes-green.jpg?tr=w-1920,q=80' 
  }
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

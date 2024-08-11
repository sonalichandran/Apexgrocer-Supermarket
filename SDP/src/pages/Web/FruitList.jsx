import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';

const products = [
  {
    id: 1,
    productName: 'Banana',
    productcategory: 'Fresh and ripe bananas.',
    productcost: 150,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000027_31-fresho-banana-robusta.jpg?tr=w-1920,q=80' 
  },
  {
    id: 2,
    productName: 'Orange',
    productcategory: 'Juicy and tangy oranges.',
    productcost: 200,
    image: 'https://www.bigbasket.com/media/uploads/p/m/20000909_19-fresho-orange-imported.jpg?tr=w-1920,q=80' 
  },
  {
    id: 3,
    productName: 'Mango',
    productcategory: 'Sweet and succulent mangoes.',
    productcost: 300,
    image: 'https://www.bigbasket.com/media/uploads/p/m/30001057_6-fresho-langra-mango.jpg?tr=w-1920,q=80' 
  },
  {
    id: 4,
    productName: 'Pineapple',
    productcategory: 'Tropical and tangy pineapples.',
    productcost: 180,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000156_27-fresho-pineapple.jpg?tr=w-1920,q=80' 
  },
  {
    id: 5,
    productName: 'Blueberry',
    productcategory: 'Sweet and juicy Blueberry.',
    productcost: 220,
    image: 'https://www.bigbasket.com/media/uploads/p/m/30009286_10-fresho-blueberry.jpg?tr=w-1920,q=80' 
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

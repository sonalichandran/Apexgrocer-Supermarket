import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    productName: 'Chicken Breast',
    productcategory: 'Fresh, boneless chicken breast',
    productcost: 250,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000952_16-fresho-chicken-breast-boneless.jpg?tr=w-1920,q=80'
  },
  {
    id: 2,
    productName: 'Mutton Curry Cut',
    productcategory: 'Tender mutton pieces.',
    productcost: 500,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40055810_12-fresho-mutton-curry-cut.jpg?tr=w-1920,q=80'
  },
  {
    id: 3,
    productName: 'Prawns',
    productcategory: 'Fresh and juicy prawns.',
    productcost: 400,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40024377_5-fresho-prawns-medium.jpg?tr=w-1920,q=80'
  },
  {
    id: 4,
    productName: 'Fish (Rohu)',
    productcategory: 'Fresh Rohu fish.',
    productcost: 200,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000644_18-fresho-rohu-fish.jpg?tr=w-1920,q=80'
  },
  {
    id: 5,
    productName: 'Chicken Thighs',
    productcategory: 'Juicy chicken thighs.',
    productcost: 220,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000954_14-fresho-chicken-thighs.jpg?tr=w-1920,q=80'
  },
  {
    id: 6,
    productName: 'Mutton Mince',
    productcategory: 'Finely minced mutton.',
    productcost: 550,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40005013_7-fresho-mutton-mince-keema.jpg?tr=w-1920,q=80'
  },
  {
    id: 7,
    productName: 'Eggs',
    productcategory: 'Fresh eggs, versatile .',
    productcost: 60,
    image: 'https://www.bigbasket.com/media/uploads/p/m/1200018_8-fresho-farm-eggs-medium.jpg?tr=w-1920,q=80'
  }
];


const MeatList = () => {
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

export default MeatList;

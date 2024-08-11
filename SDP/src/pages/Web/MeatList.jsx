import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    productName: 'Chicken Breast',
    productcategory: 'Fresh, boneless chicken breast',
    productcost: 250,
    image: 'https://www.bigbasket.com/media/uploads/p/l/10001001_7-fresho-chicken-breast-boneless-antibiotic-residue-free.jpg'
  },
  {
    id: 2,
    productName: 'Mutton Curry Cut',
    productcategory: 'Tender mutton pieces.',
    productcost: 500,
    image: 'https://www.bigbasket.com/media/uploads/p/l/40048912_4-fresho-mutton-curry-cut-from-whole-carcass-antibiotic-residue-free-growth-hormone-free-8-10-pcs.jpg'
  },
  {
    id: 3,
    productName: 'Prawns',
    productcategory: 'Fresh and juicy prawns.',
    productcost: 400,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40186082_5-fresho-frozen-prawns-small.jpg?tr=w-1920,q=80'
  },
  {
    id: 4,
    productName: 'Fish (Rohu)',
    productcategory: 'Fresh Rohu fish.',
    productcost: 200,
    image: 'https://www.bigbasket.com/media/uploads/p/m/20003673_9-fresho-basa-fish-fillet-preservative-free.jpg?tr=w-1920,q=80'
  },
  {
    id: 5,
    productName: 'Chicken Thighs',
    productcategory: 'Juicy chicken thighs.',
    productcost: 220,
    image: 'https://www.bigbasket.com/media/uploads/p/l/40227606_1-fresho-chicken-thigh-boneless-without-skin.jpg'
  },
  
  {
    id: 6,
    productName: 'Eggs',
    productcategory: 'Fresh eggs, versatile .',
    productcost: 60,
    image: 'https://www.bigbasket.com/media/uploads/p/m/150502_6-fresho-farm-eggs-table-tray-medium-antibiotic-residue-free.jpg?tr=w-1920,q=80'
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

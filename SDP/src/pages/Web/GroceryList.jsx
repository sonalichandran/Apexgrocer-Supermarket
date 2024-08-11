import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    productName: 'Basmati Rice',
    productcategory: 'Premium long grain basmati rice.',
    productcost: 90,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000462_15-daawat-rozana-gold-basmati-rice.jpg?tr=w-1920,q=80'
  },
  {
    id: 2,
    productName: 'Whole Wheat Flour',
    productcategory: 'High-quality whole wheat flour.',
    productcost: 45,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000420_14-aashirvaad-atta-whole-wheat.jpg?tr=w-1920,q=80'
  },
  {
    id: 3,
    productName: 'Sugar',
    productcategory: 'Refined white sugar.',
    productcost: 40,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000467_22-bb-royal-sugar-refined.jpg?tr=w-1920,q=80'
  },
  {
    id: 4,
    productName: 'Salt',
    productcategory: 'Iodized salt, essential for cooking.',
    productcost: 20,
    image: 'https://www.bigbasket.com/media/uploads/p/m/1200030_14-tata-salt-iodized.jpg?tr=w-1920,q=80'
  },
  {
    id: 5,
    productName: 'Cooking Oil',
    productcategory: 'Refined sunflower oil for cooking.',
    productcost: 150,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40023393_11-fortune-sunflower-refined-oil.jpg?tr=w-1920,q=80'
  },
  {
    id: 6,
    productName: 'Turmeric Powder',
    productcategory: 'Turmeric powder for adding color.',
    productcost: 30,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000402_16-bb-royal-turmericpowder.jpg?tr=w-1920,q=80'
  },
  {
    id: 7,
    productName: 'Lentils (Dal)',
    productcategory: 'Protein-rich yellow lentils.',
    productcost: 70,
    image: 'https://www.bigbasket.com/media/uploads/p/m/10000572_18-bb-royal-toor-dal.jpg?tr=w-1920,q=80'
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

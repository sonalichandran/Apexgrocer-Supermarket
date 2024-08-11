import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    productName: 'Full Cream Milk',
    productcategory: 'Rich and creamy full cream milk.',
    productcost: 60,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40142405_6-amul-gold-full-cream-milk.jpg?tr=w-1920,q=80'
  },
  {
    id: 2,
    productName: 'Toned Milk',
    productcategory: 'Low-fat toned milk.',
    productcost: 50,
    image: 'https://www.bigbasket.com/media/uploads/p/m/1200168_1-amul-taaza-homogenised-toned-milk.jpg?tr=w-1920,q=80'
  },
  {
    id: 3,
    productName: 'Double Toned Milk',
    productcategory: 'Extra low-fat double toned milk.',
    productcost: 45,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40144682_1-nandini-slim-dairy-milk.jpg?tr=w-1920,q=80'
  },
  {
    id: 4,
    productName: 'Skimmed Milk',
    productcategory: 'Fat-free skimmed milk.',
    productcost: 40,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40139948_3-amul-slim-trim-milk.jpg?tr=w-1920,q=80'
  },
  {
    id: 5,
    productName: 'Organic Milk',
    productcategory: 'Pure and organic milk.',
    productcost: 70,
    image: 'https://www.bigbasket.com/media/uploads/p/m/1201703_3-akshayakalpa-certified-organic-milk.jpg?tr=w-1920,q=80'
  },
  {
    id: 6,
    productName: 'Almond Milk',
    productcategory: 'Dairy-free almond milk.',
    productcost: 120,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40085894_4-sofit-soyamilk-almond-flavour.jpg?tr=w-1920,q=80'
  },
  {
    id: 7,
    productName: 'Flavored Milk',
    productcategory: 'Delicious flavored milk.',
    productcost: 80,
    image: 'https://www.bigbasket.com/media/uploads/p/m/40126316_4-amul-tru-flavoured-milk-bottle-strawberry.jpg?tr=w-1920,q=80'
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

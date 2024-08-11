import ProductCard from '/src/components/Web/ProductCard';
import React from 'react';


const products = [
  {
    id: 1,
    title: 'Afghani Chicken Tikka',
    description: 'Creamy Afghani Chicken Tikka',
    price: "Rs.250",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40231680_3-fresho-creamy-afghani-chicken-tikka-juicy-fresh.jpg?tr=w-1920,q=80',
  },
  {
    id: 2,
    title: 'Hariyali Chicken Tikka',
    description: 'Lush Hariyali Chicken Tikka-',
    price: "Rs.120",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40231663_3-fresho-lush-hariyali-chicken-tikka-juicy-fresh.jpg?tr=w-1920,q=80',
  },
  {
    id: 3,
    title: 'Basa Fish Fillet',
    description: 'Basa Fish Fillet - Preservative Free',
    price: "Rs.299",
    image: 'https://www.bigbasket.com/media/uploads/p/m/20003673_9-fresho-basa-fish-fillet-preservative-free.jpg?tr=w-1920,q=80',
  },
  {
    id: 4,
    title: 'Rohu Fish',
    description: 'Rohu Fish Curry Cut/Bengali Cut',
    price: "Rs.250",
    image: 'https://www.bigbasket.com/media/uploads/p/m/20000963_3-fresho-rohu-fish-large-curry-cutbengali-cut-preservative-free.jpg?tr=w-1920,q=80',
  },
  {
    id: 5,
    title: 'Frozen Prawns',
    description: 'Frozen Prawns - Peeled, Deveined, No Preservatives',
    price: "Rs.200",
    image: 'https://www.bigbasket.com/media/uploads/p/m/40262091_1-total-frozen-prawns-peeled-deveined-no-preservatives.jpg?tr=w-1920,q=80',
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

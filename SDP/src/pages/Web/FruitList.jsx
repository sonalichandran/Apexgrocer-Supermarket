import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '/src/components/Web/ProductCard';


const getAuthToken = () => {
  
  return localStorage.getItem('authToken');
};

const FruitList = ({searchTerm}) => {
  const [products, setProducts] = useState([]);
 
  const [error, setError] = useState(null);
 console.log(searchTerm);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = getAuthToken();
        const headers = {
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get("http://localhost:8080/homeproduct/getbycategory/Fruits");
        console.log(response.data);
        setProducts(response.data);
        
      } catch (error) {
        setError(error);
      } 
    };
    

    fetchProducts();
  }, []);

  
  return (
    <div className="container mx-auto pt-48 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <div className="text-center py-10">No products available.</div>
        )}
      </div>
    </div>
  );
};

export default FruitList;
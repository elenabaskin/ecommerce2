import { useState, useEffect } from 'react';
// import React, { useEffect } from 'react';
// import axios from 'axios';
import Product from '../components/Product';
import Search from '../components/Search';

function ProductsScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('http://localhost:5000/products');
    const items = await data.json();

    console.log(items);
    setProducts(items.results);
  };

  return (
    <div>
      <section id="products" className="text-gray-600 body-font p-4">
        <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
          products
        </h1>
        <Search />
        <div className="container pt-2 px-6 py-20 pb-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/3 md:p-4 p-6 w-1/2">
              {products?.map((product) => {
                return <Product key={product.ProductID} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsScreen;

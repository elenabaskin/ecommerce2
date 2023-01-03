import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Search from '../components/Search';
import axios from 'axios';

function ProductsScreen() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('*');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios('http://localhost:8080/products');
    setProducts(res.data);

    // console.log(product);
    setProducts(res.data);
    setFiltered(res.data);
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
            products
          </h1>
          <Search
            products={products}
            setFiltered={setFiltered}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 pt-2">
            {filtered.map((product) => {
              return <Product key={product.productID} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsScreen;

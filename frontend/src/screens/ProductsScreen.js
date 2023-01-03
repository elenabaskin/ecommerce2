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
    <div>
      <section id="products" className="text-gray-600 body-font p-4">
        <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1">
          products
        </h1>
        <Search
          products={products}
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="container pt-2 px-6 py-20 pb-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/3 md:p-4 p-6 w-1/2">
              {filtered.map((product) => {
                return <Product key={product.productID} product={product} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsScreen;

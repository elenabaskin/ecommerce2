import React, { useEffect } from 'react';

function Search({ setActiveCategory, activeCategory, setFiltered, products }) {
  useEffect(() => {
    if (activeCategory === '*') {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((product) =>
      product.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);
  return (
    <div>
      <div className="flex content-center items-center mx-auto w-full">
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('*')}
            className="text-xs p-1 text-darkGreen border border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightGrey focus:ring-2 hover:bg-lightSage hover:underline active:bg-grayGreen active:font-extrabold"
          >
            all
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('tops')}
            className="text-xs p-1 text-darkGreen border border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightGrey focus:ring-2 hover:bg-lightSage hover:underline active:bg-grayGreen active:font-extrabold"
          >
            tops
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('pants')}
            className="text-xs p-1 text-darkGreen border border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightGrey focus:ring-2 hover:bg-lightSage hover:underline active:bg-grayGreen active:font-extrabold"
          >
            bottoms
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('outerwear')}
            className="text-xs p-1 text-darkGreen border border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightGrey focus:ring-2 hover:bg-lightSage hover:underline active:bg-grayGreen active:font-extrabold"
          >
            outerwear
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('decor')}
            className="text-xs p-1 text-darkGreen border border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightGrey focus:ring-2 hover:bg-lightSage hover:underline active:bg-grayGreen active:font-extrabold"
          >
            decor
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('lifestyle')}
            className="text-xs p-1 text-darkGreen border border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightGrey focus:ring-2 hover:bg-lightSage hover:underline active:bg-grayGreen active:font-extrabold"
          >
            lifestyle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
//   const navigate = useNavigate();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       navigate(`/search/${keyword}`);
//     } else {
//       navigate('/');
//     }
//   };
//   const [keyword, setKeyword] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get(
//         `http://localhost:5000/products/${keyword}`
//       );

//       fetchProducts(data);
//     };

//     fetchProducts();
//   }, [keyword]);

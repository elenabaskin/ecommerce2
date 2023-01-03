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
      <div className="flex content-center items-center mx-auto">
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('*')}
            className="p-1 text-darkGreen border-2 border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightSage focus:ring-2 hover:bg-lightSage hover:underline"
          >
            all
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('tops')}
            className="p-1 text-darkGreen border-2 border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightSage focus:ring-2 hover:bg-lightSage hover:underline"
          >
            tops
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('pants')}
            className="p-1 text-darkGreen border-2 border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightSage focus:ring-2 hover:bg-lightSage hover:underline"
          >
            bottoms
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('outerwear')}
            className="p-1 text-darkGreen border-2 border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightSage focus:ring-2 hover:bg-lightSage hover:underline"
          >
            outerwear
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('decor')}
            className="p-1 text-darkGreen border-2 border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightSage focus:ring-2 hover:bg-lightSage hover:underline"
          >
            decor
          </button>
        </div>
        <div className="flex mr-4">
          <button
            onClick={() => setActiveCategory('lifestyle')}
            className="p-1 text-darkGreen border-2 border-solid border-darkSage font-lato rounded border-darkSage focus:ring-lightSage focus:ring-2 hover:bg-lightSage hover:underline"
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

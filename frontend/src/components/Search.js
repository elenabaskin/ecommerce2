import React from 'react';

function Search() {
  return (
    <div>
      <div className="flex content-center">
        <div className="flex items-center mr-5">
          <input
            id="inline-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkSage bg-offWhite rounded border-darkSage focus:ring-lightSage focus:ring-2"
          />
          <label
            for="inline-checkbox"
            className="ml-2 text-sm font-bold font-lato text-darkSage"
          >
            tops
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkSage bg-offWhite rounded border-darkSage focus:ring-lightSage focus:ring-2"
          />
          <label
            for="inline-checkbox"
            className="ml-2 text-sm font-bold font-lato text-darkSage"
          >
            bottoms
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkSage bg-offWhite rounded border-darkSage focus:ring-lightSage focus:ring-2"
          />
          <label
            for="inline-checkbox"
            className="ml-2 text-sm font-bold font-lato text-darkSage"
          >
            outerwear
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkSage bg-offWhite rounded border-darkSage focus:ring-lightSage focus:ring-2"
          />
          <label
            for="inline-checkbox"
            className="ml-2 text-sm font-bold font-lato text-darkSage"
          >
            decor
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-darkSage bg-offWhite rounded border-darkSage focus:ring-lightSage focus:ring-2"
          />
          <label
            for="inline-checkbox"
            className="ml-2 text-sm font-bold font-lato text-darkSage"
          >
            lifestyle
          </label>
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

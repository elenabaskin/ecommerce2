// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Rating from '../components/Rating';
// import axios from 'axios';

// function ProductScreen() {
//   //   const { id } = useParams();
//   //   const product = Products.find((p) => String(p._id) === id);
//   const { id } = useParams();

//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data } = await axios.get(
//         `http://localhost:8080/products/${productID}`
//       );

//       setProduct(data);
//     };

//     fetchProduct();
//   }, [id]);
//   if (!product) return null;

//   return (
//     <>
//       <section className="text-gray-600 body-font overflow-hidden lg:bg-offWhite lg:bg-opacity-20">
//         <div className="container px-7 py-20 mx-auto">
//           <div className="w-4/5 mx-auto flex flex-wrap">
//             <span className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded md:scale-90 md:mx-auto">
//               <img src={product.image} alt={product.name} />
//             </span>
//             <div className="position-relative bg-white bg-opacity-90 border-solid border-lightGrey border-2 border-opacity-20 p-2 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <Link to="/products">
//                 <button className="px-6 py-2 text-xs font-lato border-solid border-2 border-lightSage tracking-wide text-darkGreen transition-colors duration-300 transform bg-lightSage rounded-lg hover:bg-lightGrey focus:outline-none focus:ring focus:ring-darkSage focus:ring-opacity-80 lg:bg-white">
//                   back
//                 </button>
//               </Link>
//               <h2 className="text-sm font-lato text-darkGreen tracking-widest">
//                 {product.brand}
//               </h2>
//               <h1 className="text-darkSage text-3xl font-lato mb-1 lg:text-darkGreen">
//                 {product.name}
//               </h1>
//               <div className="flex mb-4">
//                 <span className="flex items-center">
//                   <span className="text-darkSage text-xs font-lato ml-3 lg:text-darkGreen">
//                     <Rating
//                       value={product.rating}
//                       text={` (${product.rating} stars from ${product.numReviews} reviews)`}
//                     />
//                   </span>
//                 </span>
//               </div>
//               <h2 className="text-sm font-lato text-darkGreen tracking-widest">
//                 {product.countInStock > 0 ? 'in stock' : 'out of stock'}
//               </h2>
//               <p className="leading-relaxed font-lato text-darkGreen">
//                 {product.description}
//               </p>
//               <div className="flex mt-6 items-center pb-5 border-b-2 border-lightGrey mb-5">
//                 <div className="flex ml-6 items-center">
//                   <span className="mr-3 font-lato">size</span>
//                   <div className="relative">
//                     <select className="rounded border appearance-none bg-white border-lightGrey py-2 font-lato focus:outline-none focus:ring-2 focus:ring-lightSage focus:border-darkSage text-base pl-3 pr-10">
//                       <option>one size</option>
//                     </select>

//                     <span className="absolute right-0 top-0 h-full w-10 text-center text-lightGrey pointer-events-none flex items-center justify-center">
//                       <svg
//                         fill="none"
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         className="w-4 h-4"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M6 9l6 6 6-6"></path>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex pr-2">
//                 <span className="font-lato text-2xl text-darkSage lg:text-darkGreen">
//                   ${product.price}
//                 </span>
//                 <button
//                   className="flex ml-auto text-darkGreen bg-lightSage border-0 py-2 px-6 focus:outline-none hover:bg-lightGrey rounded lg:bg-white lg:border-solid lg:border-2 lg:border-lightSage"
//                   disabled={product.countInStock === 0}
//                 >
//                   add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ProductScreen;

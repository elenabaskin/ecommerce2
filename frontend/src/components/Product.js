import React from 'react';
// import { Link } from 'react-router-dom';
import Rating from './Rating';

// destructuring instead of passing in props
function Product({ product }) {
  return (
    <div id="products">
      {/* <Link
        className="block relative h-40 rounded overflow-hidden aspect-square md:h-48 lg:h-60"
        to={`/product/${product.productID}`}
      > */}
      <img src={product.image} alt={product.name} />
      {/* </Link> */}

      <div className="mt-2">
        <p className="text-xs font-lato text-darkGreen tracking-widest">
          {product.countInStock > 0 ? 'in stock' : 'out of stock'}
        </p>
        <h2 className="text-grayGreen title-font text-lg font-medium font-lato">
          {product.name}
        </h2>
        <p className="text-xs font-lato text-darkSage">{product.brand}</p>
        <p className="mt-1 font-lato text-darkGreen">${product.price}</p>
        <p className="text-xs font-lato text-darkGreen">
          <Rating
            value={product.rating}
            text={` (${product.rating} stars out of ${product.numReviews} reviews)`}
          />
        </p>
        <p className="text-xs font-lato text-darkGreen">
          {product.description}
        </p>
        <button
          className="flex text-darkGreen text-xs py-2 px-2 focus:outline-none bg-lightSage hover:bg-darkSage rounded-lg mt-2"
          disabled={product.countInStock === 0}
        >
          add to bag
        </button>
      </div>
    </div>
  );
}

export default Product;

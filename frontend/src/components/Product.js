import React from 'react';
// import { Link } from 'react-router-dom';
import Rating from './Rating';

// destructuring instead of passing in props
function Product({ product }) {
  return (
    <div id="products">
      {/* <Link
        className="block relative h-40 rounded overflow-hidden aspect-square md:h-48 lg:h-48"
        to={`/product/${product.id}`}
      > */}
      <img src={product.image} alt={product.name} />
      {/* </Link> */}

      <div className="mt-4">
        <h2 className="text-grayGreen title-font text-lg font-medium font-lato">
          {product.name}
        </h2>
        <p className="text-xs font-lato text-darkSage">{product.brand}</p>
        <p className="mt-1 font-lato text-darkGreen">${product.price}</p>
        <p className="text-xs font-lato text-darkGreen">
          <Rating
            value={product.rating}
            text={` (${product.numReviews} reviews)`}
          />
        </p>
        <p className="text-xs font-lato text-darkGreen">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default Product;

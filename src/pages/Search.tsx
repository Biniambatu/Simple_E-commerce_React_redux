import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Home";

const Search = () => {
  const params = useParams();
  const id = params.id;
  const product = products.find(
    (prod) => id?.toString() === prod.id.toString()
  );
  console.log("product:", product);

  return (
    <div>
      <div className="productCard">
        {/* <img className="productCard_image" src=`${product?.image}` alt="name" /> */}
        {/* <img
          className="productCard_image"
          src={`${product?.image}`}
          alt={product?.name || "Product image"}
        /> */}
        <img src={`/${product?.image}`} alt={product?.name} />
        <p className="name">{product?.name}</p>
        <div className="action">
          {/* <button onClick={() => dispatch(add_to_cart(user))}>
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Search;

import { useParams } from "react-router-dom";
import { products } from "../pages/Home";
import '../components/productDetail.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./ProductCard.css";
const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch()
  const product_id = params.id;
  const product = products.find((product) => product.id.toString() === product_id?.toString());
  const {  name, price, image, description,id }:any = product;
  const cartList = useSelector((state) => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);
  
  
  useEffect(() => {
    const productIsInCart = cartList.find((item) => item.id === id);
      if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [id, cartList]);

  return (
    <div className="productdetail">
      <img src={`/${image}`} alt={name} />
      <p className="name">{name}</p>
      <div>{description}</div>
      <div className="actions">
        <p className="price">${price}</p> 
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button  onClick={() => dispatch(add(product))}>Add to Cart</button>
        )}
    </div>
      </div>
     
  );
};

export default ProductDetail;

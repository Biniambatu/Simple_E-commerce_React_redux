import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css"

export const CartCard = ({product}:any) => {
  const dispatch =  useDispatch();
  const { image, price, name } = product;
  return (
         <div className="cartCard">
            <img src={image} alt="" />
            <p className="productName">{name}</p>
            <p className="productPrice">${price}</p>
            <button onClick={() => dispatch(remove(product))}>Remove</button>
         </div>
  )
}

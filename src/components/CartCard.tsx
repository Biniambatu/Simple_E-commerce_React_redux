import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./CartCard.css"
import { useNavigate } from "react-router-dom";

export const CartCard = ({product}:any) => {
  const dispatch =  useDispatch();
  const navigate = useNavigate()
  const { image, price, name, id } = product;
  return (
         <div className="cartCard">
            <img src={image} alt="" className="productCard_image" onClick={() => navigate(`/productDetail/${id}`)}/>
            <p className="productName">{name}</p>
            <p className="productPrice">${price}</p>
            <button onClick={() => dispatch(remove(product))}>Remove</button>
         </div>
  )
}

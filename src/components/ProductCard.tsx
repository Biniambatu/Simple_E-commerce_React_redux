import "./ProductCard.css"
import {add, remove} from "../store/cartSlice"
import { useDispatch } from "react-redux";

export const ProductCard = ({product}:any) => {
  const {name, price, image} = product;
  const dispatch = useDispatch()
  return (
    <div className="productCard">
       <img src={image} alt={name} />
       <p className="name">{name}</p>
       <div className="action">
        <p>${price}</p>
        <button onClick={() => dispatch(add(product))}>Add to Cart</button>
       </div>
    </div>
  )
}

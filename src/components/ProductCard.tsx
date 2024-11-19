import "./ProductCard.css"
import {add, remove} from "../store/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ProductCard = ({product}:any) => {
  const {id, name, price, image} = product;
  const dispatch = useDispatch()
  const cartList = useSelector( state => state.cartState.cartList );
  const [ isInCart, setIsInCart ] = useState(false)
  
  useEffect(() => {
    const productIsInCart = cartList.find(item => item.id === id)
    if(productIsInCart){
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [id, cartList])

    return (
    <div className="productCard">
       <img src={image} alt={name} />
       <p className="name">{name}</p>
       <div className="action">
        <p>${price}</p>
        { isInCart ? (<button className="remove" onClick={() => dispatch(remove(product))}>Remove</button> ):( <button onClick={() => dispatch(add(product))}>Add to Cart</button> )}
       
       </div>
    </div>
  )
}

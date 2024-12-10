import { useDispatch, useSelector } from "react-redux"
import { remove_from_cart } from "../store/PhotoCartSlice"
import '../components/ProductCard.css'


const PhotoCart = () => {
  
  const cartList = useSelector((state) => state.PhotoCartState.PhotoCartList )
  const dispatch = useDispatch()
  return (
    <div>
    {cartList.map((list:any) => (
            <div className="cartCard">
              <img src={list.url} alt="" />
              <p className="productName">{list.title}</p>
              <p className="productPrice">$ price </p>
              <button onClick={() => dispatch(remove_from_cart(list))}>Remove</button>
            </div>
      ) )}
       </div> 
  )
}

export default PhotoCart
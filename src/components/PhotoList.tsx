
import { add_to_cart,remove_from_cart } from '../store/PhotoCartSlice';
import { useDispatch } from 'react-redux';
import '../components/ProductCard.css'

const PhotoList = ({user}:any) => {
  const {url,  title} = user;
  const dispatch = useDispatch()
  return (
    <div>
      <div className="productCard">
        <img className="productCard_image" src={url} alt='name' />
        <p className="name">{title}</p>
        <div className="action">
        <button  onClick={() => dispatch(add_to_cart(user))}>Add to Cart</button>
      </div>        
    </div>   
    </div>
  )
}
export default  PhotoList;


import { useParams } from "react-router-dom";
import { products } from "../pages/Home";
import '../components/productDetail.css'
const ProductDetail = () => {
  const params = useParams();
  const product_id = params.id;
  const product = products.find((product) => product.id.toString() === product_id?.toString());
  const {  name, price, image, description }:any = product;
  
  return (
    <div className="productdetail">
      <img src={`/${image}`} alt={name} />
      <p className="name">{name}</p>
      <div className="actions">
        <p>${price}</p>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default ProductDetail;

import "./CartCard.css"

export const CartCard = ({product}) => {
  const { image, price, name } = product;
  return (
         <div className="cartCard">
            <img src={image} alt="" />
            <p className="productName">{name}</p>
            <p className="productPrice">${price}</p>
            <button>Remove</button>
         </div>
  )
}

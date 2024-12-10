import React from 'react'
import '../ProductCard.css'
const MenuProduct = ({data}:any) => {
    const { title,price,description, category, image, rating , rate} =  data;

  return (
    <>
     <div className="productCard">
     <img className="productCard_image" src={image} alt='name' />
     <p className="name">{title}</p>
   
     <div className="action">
      {/* <p>{rating.rate}</p> */}
      <p>${price}</p>
        <button>Add to Cart</button>
     </div>        
     </div>      
    </>
  )
}

export default MenuProduct
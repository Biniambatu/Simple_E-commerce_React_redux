import React from 'react'

const PhotoList = ({user}:any) => {
  const {url,  title} = user;
  return (
    <div>
        {/* <li><img src={url}/></li>
        <li>{title}</li> */}
        <div className="cartCard">
            <img src={url} alt="" />
            <p className="productName">{title}</p>
            <button >Remove</button>
         </div>
    </div>
  )
}
export default  PhotoList;


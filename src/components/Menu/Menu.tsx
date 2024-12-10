import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MenuProduct from './MenuProduct'
import '../ProductCard.css'
const Menu = () => {
    
    const [datas, setDatas] = useState([])
  
  useEffect(() => {
    async function prodFetch() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setDatas(response.data); // Replace with your desired operation (e.g., setState)
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    prodFetch();
  }, []);

  return (
    <div>
        <section className="products">       
             {datas.map((data) => (<MenuProduct key={data.id} data={data}/>))}
        </section>
    </div>
  )
}

export default Menu
import { Link, NavLink, useNavigate } from "react-router-dom"
import "./Header.css"
import logo from "../assets/google-play-games.png"
import { useSelector } from "react-redux"
import { useState } from "react"

export const Header = () => {
  const navigate = useNavigate()
  const cartList = useSelector(state => state.cartState.cartList)
  const [search, setsearch] = useState("")
  // const handleSearch = () => {
  //   navigate("/search", { state: { query: search } });
  // }
  return (
    <header>
      <Link to='/' className="logo">
        <img src={logo} alt="logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
         <NavLink to='/' className='link' >Home</NavLink>
         <NavLink to='/cart' className='link' >Cart</NavLink>
         {/* <NavLink to='/photo' className='link' >Photo</NavLink> */}
         <NavLink to='/photoCart' className='link' >PhotoCart</NavLink>
        
         {/* <NavLink to='/menu' className='link' >Menu</NavLink> */}
         <NavLink to='/menuCart' className='link' >ClothingCart </NavLink>
         
      </nav>
      <form className="search">
        <input className="input" type="text" placeholder="Search"  onChange={(e)=> setsearch(e.target.value)} />
        {/* <button className="buttonsearch" onClick={handleSearch}>Search</button> */}
      </form>
      
      <Link to='/cart' className="items">
         <span>Cart: {cartList.length}  </span>
      </Link>
    </header>
  )
}

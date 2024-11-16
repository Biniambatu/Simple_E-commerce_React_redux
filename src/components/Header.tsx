import { Link, NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../assets/google-play-games.png"

export const Header = () => {
  return (
    <header>
      <Link to='/' className="logo">
        <img src={logo} alt="logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
         <NavLink to='/' className='link' >Home</NavLink>
         <NavLink to='/cart' className='link' >Cart</NavLink>
      </nav>
      <Link to='/cart' className="items">
         <span>Cart:  </span>
      </Link>
    </header>
  )
}

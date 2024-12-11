import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/Header2.css'
const Header2 = () => {
  return (
    <div>
        <header>
         <nav className="navigation2">
         <NavLink to='/' className='link2' >Electronics</NavLink>
         {/* <NavLink to='/cart' className='link' >ElectronicsCart</NavLink> */}
         
         <NavLink to='/photo' className='link2' >Photo</NavLink>
         {/* <NavLink to='/photoCart' className='link' >PhotoCart</NavLink> */}
        
         <NavLink to='/menu' className='link2' >Clothing </NavLink>
         {/* <NavLink to='/menuCart' className='link' >MenuCart</NavLink> */}
        </nav> 
      </header>
    </div>
  )
}

export default Header2
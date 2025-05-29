import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu,setMenu]= useState("shop");
  const {getTotalCartItems}= useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Maxel</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("anniversaire")}}><Link style={{ textDecoration: 'none'}} to='/anniversaire'>Birthday</Link>{menu==="anniversaire"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mariage")}}><Link style={{ textDecoration: 'none'}} to='/mariage'>Wedding</Link> {menu==="mariage"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("cake")}}><Link style={{ textDecoration: 'none'}} to='/cake'>Cake</Link>{menu==="cake"?<hr/>:<></>}</li>
       
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu]= useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("anniversaire")}}><Link style={{ textDecoration: 'none'}} to='/anniversaire'>Birthday</Link>{menu==="anniversaire"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mariage")}}><Link style={{ textDecoration: 'none'}} to='/mariage'>Wedding</Link> {menu==="mariage"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("cacke")}}><Link style={{ textDecoration: 'none'}} to='/cacke'>Cake </Link>{menu==="cacke"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("traditionell")}}><Link style={{ textDecoration: 'none'}} to='/traditionnel'>Traditionell</Link> {menu==="traditionell"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar

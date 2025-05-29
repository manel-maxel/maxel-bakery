import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instgram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintrest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
      <img src={footer_logo} alt=""/>
      <p> Maxel</p>
    </div>
    <ul className="footer-links">
      <li>Company</li>
      <li>Cacks</li>
      <li>Office</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
       <div className="footer-social-icon-container">
        <a href="https://www.instagram.com/m._.n3l?igsh=cGU1eDhlOTJwbm9v" class="social-btn" target="_blank"><img src={instgram_icon} alt="" /></a>
         </div>
        <div className="footer-social-icon-container">
          <a href="https://pin.it/2RRkbxLIR" class="social-btn" target="_blank"><img src={pintrest_icon} alt=""/></a>
        </div>
          <div className="footer-social-icon-container">
          <img src={whatsapp_icon} alt=""/>
      </div>
    </div>
    <div className="footer-copyright">
      <hr />
      <p>Copyright @ 2025 -All right Reser </p>
    </div>
  </div>
  )
}
export default Footer

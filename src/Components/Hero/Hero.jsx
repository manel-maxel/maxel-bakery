import React from 'react'
import './Hero.css'
import neux_icon from '../Assets/neux_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
<h2> NEW CAKE</h2>
<div>
  <div className="hero-neux-icon">
    <p>new</p>
    <img src={neux_icon} alt=""/>
  </div>
  <p>Our Delights</p>
  <p>for everyone</p>
</div>
<div className="hero-new-btn">
  <div> New Delights</div>
  <img src={arrow_icon} alt=''/>
</div>
</div>
      <div className="hero-right">
        <img src={hero_image} alt=''/>

      </div>
    </div>
  )
}

export default Hero

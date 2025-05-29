import React, { useState } from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import CakePage from './CakePage' 

const Offers = () => {
  const [showCakePage, setShowCakePage] = useState(false)

  return (
    <>
      {showCakePage ? (
        <CakePage onBack={() => setShowCakePage(false)} />
      ) : (
        <div className='offers'>
          <div className="offers-left">
            <h1>Célébrez la fête des mères avec un gâteau rempli d'amour</h1>
            <button onClick={() => setShowCakePage(true)}>Check now</button>
          </div>
          <div className="offers-right">
            <img src={exclusive_image} alt=''/>
          </div>
        </div>
      )}
    </>
  )
}

export default Offers
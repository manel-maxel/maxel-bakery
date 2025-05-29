import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CakePage.css'
import new_cack from '../Assets/mom'
import Item from '../Item/Item1'

const CakePage = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="cake-page">
      <h1>Our Special Mother's Day Cake</h1>
      <div className="cake-image-container">
        <div className="cack">
          {new_cack.map((item) => (
            <Item 
              key={item.id}
              id={item.id} 
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              onClick={() => navigate(`/product/${item.id}`)} 
            />
          ))}
        </div>
      </div>
      <p>This delicious cake is made with love and the finest ingredients to celebrate Mother's Day.</p>
      <button onClick={onBack}>Back to Offers</button>
    </div>
  )
}

export default CakePage
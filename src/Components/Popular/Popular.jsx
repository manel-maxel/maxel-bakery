import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = ({ onBack }) => {
  const navigate = useNavigate();
  if (!data_product || !Array.isArray(data_product)) {
    return <div>No products available</div>;
  }

  return (
    <div className='popular'>
      <h1>Birthday Bliss</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item) => {
         
          if (!item || !item.image) {
            console.warn('Invalid item data:', item);
            return null; 
          }
          return (
            <Item 
              key={item.id} 
              id={item.id} 
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              onClick={() => navigate(`/product/${item.id}`)}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Popular
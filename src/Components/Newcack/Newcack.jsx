import React from 'react'
import './Newcack.css'
import new_cack from '../Assets/new_cack'
import Item from '../Item/Item1'
const Newcack = () => {
  return (
    <div className='new-cack'>
      <h1>New CACK</h1>
      <hr />
      <div className="cack">
         {new_cack.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            image={item.image} 
            new_price={item.new_price}
          />
          ))}
      </div>
    </div>
  )
}

export default Newcack

import React from 'react'
import './Item.css';

const Item1 = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_price}DA
        </div>

      </div>
    </div>

  );
}

export default Item1

import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item1 = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          src={props.image} 
          alt={props.name} 
          className="item-img" 
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_price}DA
        </div>
      </div>
    </div>
  );
};
export default Item1

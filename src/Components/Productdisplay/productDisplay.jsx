import React from 'react'
import './productDisplay.css'
const ProductDisplay = (props) => {
  const {product}=props;
  return (
    <div className="productdisplay">
         <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image}/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-price-new">
            {product.new_price}DA
          </div>
          <div className="productdisplay-right-descreption">
             idont know for now
          </div>
         <button> Add To Cart</button>

        </div>
   </div>
  
      </div>
  
  )
}


export default ProductDisplay

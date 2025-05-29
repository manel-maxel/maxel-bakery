import React, { useContext } from 'react'
import './productDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const {product}=props;
  const{addToCart}=useContext(ShopContext);
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
          <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-price-new">
            {product.new_price}DA
          </div>
          <div className="productdisplay-right-description">
             We create custom cakes tailored to your taste and style.<br/> Select any flavor, size, or decoration — the choice is all you
          </div>
          <div className="productdisplay-right-tasts">
             <h1>Select Tasts</h1>
             <div className="productdisplay-right-tasts-option">
               <div>Chocolate</div>
               <div>Vanilla</div>
               <div>Strawberry</div>
               <div>Pistachio</div>
               <div>Caramel</div>
               <div>Raspberry</div>
             </div>
          </div>
         <button onClick={()=>{addToCart(product.id)}}> Add To Cart</button>

        </div>
   </div>
  
      </div>
  
  )
}


export default ProductDisplay

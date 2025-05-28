import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item1 from '../Components/Item/Item1';
const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext);
  return (
    <div className='shop-category'>
   <img className='shopcategory_banner' src={props.banner} alt=' '/>
   <div className='shopcategory-indexSort'>
<p>
  <span>Showing 1-12</span>
out of 36 products</p>
<div className='shopcategory-sort'>
  sort by <img src={dropdown_icon} alt=''/>
</div>
   </div>
    <div className="shopcategory-products">
      {all_product.map((item)=>{
        if (props.category===item.category){
          return <Item1
          key={item.id}
          id={item.id}
            name={item.name}
            image={item.image} 
            new_price={item.new_price}
            />
        }
        else {
          return null;}
      })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
   
  )
}

export default ShopCategory

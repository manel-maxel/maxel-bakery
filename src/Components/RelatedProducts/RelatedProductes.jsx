import React from 'react'
import './RelatedProductes.css'
import data_product from '../Assets/data'
import Item1 from '../Item/Item1';


const RelatedProductes = () => {
  return (
    <div className='relatesproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
{data_product.map((item)=>{
return <Item1
          key={item.id}
          id={item.id}
            name={item.name}
            image={item.image} 
            new_price={item.new_price}
            />
})}
      </div>
    </div>
  )
}

export default RelatedProductes

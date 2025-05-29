import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from './Breadcrums/Breadcrum';
import ProductDisplay from '../Components/Productdisplay/productDisplay';
import Descreption from '../Components/DescreptionBox/Descreption';
import RelatedProductes from '../Components/RelatedProducts/RelatedProductes';
import mom from "../Components/Assets/mom"; 
import data from "../Components/Assets/data"; 
import './Product.css';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const allProducts = [...all_product, ...mom, ...data];
  
  const product = allProducts.find((e) => e.id === Number(productId));

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Return to Homepage</button>
      </div>
    );
  }

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Descreption/>
      <RelatedProductes currentProductId={product.id}/>
    </div>
  )
}

export default Product

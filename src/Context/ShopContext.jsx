import React, { createContext, useState } from 'react'
import all_product from "../Components/Assets/all_product"
import mom from "../Components/Assets/mom"
import data from "../Components/Assets/data"
import data_product from '../Components/Assets/mom';
export const ShopContext = createContext(null);

const allProducts = [...all_product, ...mom, data];

const getDefaultCart = () => {
  let cart = {};
  
  allProducts.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = {...prev};
      if (newCart[itemId] > 0) {
        newCart[itemId] -= 1;
      }
      return newCart;
    })
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item))
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product: allProducts, 
    mom_products: mom, 
    data_product: data,     
    cartItems, 
    addToCart,
    removeFromCart 
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
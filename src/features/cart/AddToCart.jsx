import React, { useState } from 'react'
import UpdateItemQuantity from './UpdateItemQuantity'
import { useCart } from './CartContext';

export default function AddToCart({product}) {
  const {cart , dispatch} = useCart();
  const isInCart = cart.filter((item) => item.id === product.id);
  return (
    <div className='flex items-center gap-2 mt-2'>  
      {isInCart.length === 0 ?  <button 
      onClick={() => dispatch(
        {
          type:"item/add" , 
          payload :{ 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            images: product.images,
            quantity : 1,
          }}
      )}
      className="mt-2 px-4 py-1 text-sm bg-primary text-white rounded-xl opacity-100 hover:bg-white hover:text-primary border-2 border-primary transition duration-300 ease-in-out">
        Add to Cart
      </button> :
        <UpdateItemQuantity item={isInCart[0]} />
      }
    </div>
  )
}

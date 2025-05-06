import React, { useState } from 'react'
import UpdateItemQuantity from './UpdateItemQuantity'
import { useCart } from './CartContext';
import Button from '../../components/Button';

export default function AddToCart({product}) {
  const {cart , dispatch} = useCart();
  const isInCart = cart.filter((item) => item.id === product.id);
  return (
    <div className='flex items-center gap-2 justify-center '>  
      {isInCart.length === 0 ?  <Button 
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
      variation="primary"
      >
      Add To Cart
      </Button> :
      <div className='border-2 rounded-xl border-textSecondary w-full py-1'>
        <UpdateItemQuantity item={isInCart[0]} />
      </div>
      }
    </div>
  )
}

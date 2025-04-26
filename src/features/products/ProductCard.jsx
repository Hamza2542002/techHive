import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

export default function ProductCard({product}) {
  const {dispatch, cart} = useCart();
  const isInCart = cart.filter((item) => item.id === product.id);
  return (
    <div className="bg-white border border-borderColor p-4 rounded-xl flex flex-col justify-between">
      <div>
        <Link to={`/products/${product.id}`} className="mb-2 h-52 max-h-52 flex items-center justify-center">
          <img src={product.images[0]} alt="" className="w-full h-52  object-cover rounded-lg mb-2" />
        </Link>
        <h3 className="font-bold text-textPrimary">{product.name}</h3>
        <h3 className="font-semibold text-textPrimary">{product.brand}</h3>
        <div className='flex flex-wrap items-center gap-2 my-2'>
          {
            product.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-textSecondary text-white px-2 py-1 rounded-full">{tag}</span>
            ))
          }
        </div>
      </div>
      <div>
        <p className="text-accent font-bold">${product.price}</p>
        <div className='flex items-center gap-2 mt-4'>  
          {/* <button className="mt-2 px-4 py-1 text-sm bg-red-500 text-white rounded-xl opacity-100 hover:bg-opacity-90 transition duration-300 ease-in-out">
            Add to Wishlist
          </button> */}
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
      </div>
    </div>
  )
}

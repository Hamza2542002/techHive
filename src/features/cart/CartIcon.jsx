import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

export default function CartIcon() {
  const {cart} = useCart();
  return (
    <Link to="/cart" className='relative'>
      <p className='absolute top-0 right-0 -translate-y-3 translate-x-2 bg-red-500 rounded-full w-4 h-4 text-sm text-white flex justify-center items-center'>{cart.length}</p>
      <FontAwesomeIcon icon={faCartShopping} className='block right-0 text-gray-500 dark:bg-gray-900 font-bold' />
    </Link>
  )
}

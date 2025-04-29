import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faMagnifyingGlass, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../features/cart/CartContext.jsx';
import SerachFrom from './SerachFrom.jsx';
import SearchResult from './SearchResult.jsx';
export default function NavBar() {
  const {cart} = useCart();

  return (
    
    <nav className="bg-white dark:bg-gray-900 dark:text-white duration-100 relative z-40 lg:z-40 shadow-md">
      <div className='p-4'>
        <div className="container flex justify-between items-center">
          <div className='flex gap-4 items-center justify-between'>
            <input type="checkbox" className='peer' name="" hidden id="toggle-navBar" />
            <label for='toggle-navBar' className='cursor-pointer inline-block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'><FontAwesomeIcon icon={faBars} /></label>
            <Link 
              to="/"
              className='text-xl sm:text-3xl text-primary uppercase font-semibold tracking-widest'
            >TeckHive</Link>
            <div className='opacity-0  w-0 lg:w-full peer-checked:w-full lg:opacity-100 peer-checked:opacity-100 peer-checked:block absolute top-96 left-1/2 z-10 lg:z-0 peer-checked:absolute peer-checked:top-[64px] peer-checked:z-0 peer-checked:left-0  lg:relative lg:top-auto lg:left-auto lg:inline-block duration-300'>
              <ul className='flex lg:flex-row items-start lg:items-center bg-white lg:bg-transparent gap-0 xl:gap-2 lg:gap-0 text-start flex-col'>
                <li className='w-full rounded-lg'>
                  <Link 
                  to="/" 
                  className='text-gray-500 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Home</Link>
                </li>
                <li className='w-full rounded-lg'><Link to="/products" className='text-gray-500 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Products</Link></li>
                <li className='w-full rounded-lg'><Link to="/categories" className='text-gray-500 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Categories</Link></li>
                <li className='w-full rounded-lg'><Link to="/contact" className='text-gray-500 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className='flex gap-3 items-center justify-end grow'>
            <SerachFrom />
            <Link to="/cart" className='relative'>
              <p className='absolute top-0 right-0 -translate-y-3 translate-x-2 bg-red-500 rounded-full w-4 h-4 text-sm text-white flex justify-center items-center'>{cart.length}</p>
              <FontAwesomeIcon icon={faCartShopping} className='block right-0 text-gray-500 dark:bg-gray-900 font-bold' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faMagnifyingGlass, faSortDown } from '@fortawesome/free-solid-svg-icons'
export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 dark:text-white duration-100 relative z-40 lg:z-40 shadow-md">
      <div className='p-4'>
        <div className="container flex justify-between items-center">
          <div className='flex gap-4 items-center'>
            <input type="checkbox" className='peer' name="" hidden id="toggle-navBar" />
            <label for='toggle-navBar' className='cursor-pointer inline-block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'><FontAwesomeIcon icon={faBars} /></label>
            <Link 
              to="/"
              className='text-2xl sm:text-3xl text-primary uppercase font-semibold tracking-widest'
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
                <li className='w-full rounded-lg'><Link to="/" className='text-gray-500 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'>Blogs</Link></li>
                <li className='text-gray-500 w-full py-2 relative group font-semibold px-4 duration-200'>
                  <p  className='flex items-center gap-1 w-24 hover:text-gray-900 group-hover:text-gray-900 dark:hover:text-white relative z-10 cursor-pointer'> Quik Links <FontAwesomeIcon icon={faSortDown} className='group-hover:-rotate-180 duration-200' />   </p>
                  <ul className='bg-white w-full dark:bg-gray-900 px-2 py-2 rounded-lg text-start opacity-0 absolute top-full -translate-y-12 lg:w-52 left-0 group-hover:block group-hover:opacity-100 hover:opacity-100 duration-200'>
                    <li className='text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1 opacity-0'>Trending Products</li>
                    <li className='text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1' ><Link to={`/products&tag=trending`} > Trending Products </Link></li>
                    <li className='text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1'><Link to={`/products&tag=bestSelling`} > Best Selling </Link></li>
                    <li className='text-gray-500 cursor-pointer hover:text-gray-900 hover:bg-[#f42c3733] font-semibold px-2 py-2 dark:hover:text-white duration-200 rounded-lg my-1'><Link to={`/products&tag=topRated`} > Top Rated  </Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <div className="search-section relative flex items-center gap-2">
              <input type="checkbox" className='peer' name="" hidden id="toggle-search" />
              <input type="text" className='peer-checked:inline-block hidden lg:inline-block rounded-full w-10 lg:w-32  px-4 py-1 ring-gray-500 ring-1' placeholder='Search'/>
              <label for='toggle-search' className='inline-block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
            </div>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className='block right-0 text-gray-500 dark:bg-gray-900 font-bold' /></Link>
            <button>
              <img onClick={()=> setTheme('light')} className='w-12 hidden dark:block duration-75' src="/assets/dark-mode-button-85jBkhOs.png" alt="" />
              <img onClick={()=> setTheme('dark')} className='w-12 block dark:hidden duration-75' src="/assets/light-mode-button-X4OXHFfW.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

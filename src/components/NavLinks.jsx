import React from 'react'
import NavLin from './NavLink'
import useOutClick from '../hooks/useOutClick.js';
import { NavLink } from 'react-router-dom';

export default function NavLinks({handleToggleNav}) {
  return (
    <div className='opacity-0 w-0 lg:w-full peer-checked:w-full lg:opacity-100 peer-checked:opacity-100 peer-checked:block absolute top-96 left-1/2 z-10 lg:z-0 peer-checked:absolute peer-checked:top-[60px] peer-checked:z-0 peer-checked:left-0  lg:relative lg:top-auto lg:left-auto lg:inline-block duration-300'>
      <ul className='flex lg:flex-row items-start lg:items-center bg-white lg:bg-transparent gap-0 xl:gap-2 lg:gap-0 text-start flex-col'>
        <li className='w-full rounded-lg'>
          <NavLin to={"/"}>Home</NavLin>
        </li>
        <li className='w-full rounded-lg'>
          <NavLin to={"/products"}>Products</NavLin>
        </li>
        <li className='w-full rounded-lg'>
          <NavLin to={"/categories"}>Categories</NavLin>
        </li>
        <li className='w-full rounded-lg'>
          <NavLin to={"/contact"}>Contact</NavLin>
        </li>
      </ul>
    </div>
  )
}

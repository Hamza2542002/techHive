import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import SerachFrom from './SerachFrom.jsx';
import NavLinks from './NavLinks.jsx';
import CartIcon from '../features/cart/CartIcon.jsx';
import ToggleNavLinks from './ToggleNavLinks.jsx';
import useOutClick from '../hooks/useOutClick.js';

export default function NavBar() {
  const toggleRef = useRef(null);
  function handleToggleNav(){
    if(toggleRef.current.checked) 
      toggleRef.current.checked = false;
  }
  const elementRef = useOutClick(handleToggleNav);
  return (
    <nav ref={elementRef}  className="bg-white dark:bg-gray-900 dark:text-white duration-100 relative z-40 lg:z-40 shadow-md">
      <div className='p-4'>
        <div className="container flex justify-between items-center">
          <div className='flex gap-4 items-center justify-between'>
            <ToggleNavLinks toggleRef={toggleRef} handleToggleNav={handleToggleNav} />
            <Link 
              to="/"
              className='text-xl sm:text-3xl text-primary uppercase font-semibold tracking-widest'
            >TeckHive</Link>
            <NavLinks handleToggleNav={handleToggleNav} />
          </div>
          <div className='flex gap-3 items-center justify-end grow'>
            <SerachFrom />
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  )
}

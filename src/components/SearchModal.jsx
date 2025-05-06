import {  faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import SearchResult from './SearchResult';

export default function SearchModal({setShowSearch}) {
  const [search, setSearch] = useState('');
  const ref = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowSearch(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    ref.current.focus();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowSearch]);
  return (
    <>
      <div className='fixed block sm:hidden top-0 left-0 px-5 w-full z-50 bg-white h-[-webkit-fill-available]'>
        <div className='bg-white search-modal rounded-lg relative mt-10 mx-auto  flex flex-col justify-start'>
          <div className='self-start w-full flex items-center justify-center gap-2 p-2 '>
            <input type="text" placeholder='Search' 
              className='border-[1px] w-full border-black px-4 py-1 duration-200 outline-none rounded-full '
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              ref={ref}
              />
            <FontAwesomeIcon icon={faXmark} className='cursor-pointer' onClick={()=> setShowSearch(false) } />
          </div>
          <div className='pt-10'>
          {search && <SearchResult search={search} />}
          </div>
        </div>
      </div>
    </>
  )
}

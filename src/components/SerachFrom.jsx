import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from './SearchResult';

export default function SerachFrom() {
  const [search, setSearch] = useState('');
  return (
    <div className="search-section relative flex items-center gap-2">
      <input type="checkbox" className='peer' name="" hidden id="toggle-search" />
      <input 
        type="text" 
        className='w-0 p-0 border-[1px] border-white lg:border-black lg:px-4 lg:py-1 peer-checked:border-black duration-200 outline-none  peer-checked:w-auto lg:inline-block rounded-full lg:w-auto peer-checked:px-4 peer-checked:py-1' placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
      <label 
        for='toggle-search' 
        className='inline-block lg:hidden peer-checked:hiddeen right-0 cursor-pointer text-gray-500 hover:text-gray-950 font-bold'
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      {search && <SearchResult search={search} />}
    </div>
  )
}

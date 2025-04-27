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
        className='peer-checked:inline-block hidden lg:inline-block rounded-full w-24 lg:w-auto  px-4 py-1 ring-gray-500 ring-1' placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
      <label 
        for='toggle-search' 
        className='inline-block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
      {search && <SearchResult search={search} />}
    </div>
  )
}

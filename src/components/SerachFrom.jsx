import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from './SearchResult';
import SearchModal from './SearchModal';

export default function SerachFrom() {
  const [search, setSearch] = useState('');
  const[showSearch, setShowSearch] = useState(false);
  return (
    <>
    <div className="search-section relative flex items-center gap-2">
      <input type="checkboox" name='toggle-search' id="toggle-search" className='hidden peer' />
      <label htmlFor="toggle-search" className='flex items-center justify-center sm:hidden font-bold text-gray-500'>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={()=> setShowSearch(true)} />
      </label>
      <input 
        type="text" 
        className='hidden sm:inline-block w-auto border-[1px] border-black px-4 py-1 duration-200 outline-none rounded-full' placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
      {search && <SearchResult search={search} />}
    </div>
    {showSearch && <SearchModal setShowSearch={setShowSearch} />}
    </>
  )
}

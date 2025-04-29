import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResult from './SearchResult';

export default function SerachFrom() {
  const [search, setSearch] = useState('');
  const[showSearch, setShowSearch] = useState(false);
  return (
    <div className="search-section relative flex items-center gap-2">
      <input 
        type="text" 
        className='w-32 lg:w-auto border-[1px] border-black px-4 py-1 peer-checked:border-black duration-200 outline-none  peer-checked:w-auto lg:inline-block rounded-full peer-checked:px-4 peer-checked:py-1' placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
      {search && <SearchResult search={search} />}
    </div>
  )
}

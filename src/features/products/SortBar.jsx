import React from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom';

export default function SortBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSortChange(value){
    console.log(value);
    setSearchParams(createSearchParams({sort: value}));
  }
  return (
    <select 
      className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
      onChange={(e) => handleSortChange(e.target.value)}
      >
      <option value="all">Sort by: Featured</option>
      <option value="priceAsc">Price: Low to High</option>
      <option value="priceDesc">Price: High to Low</option>
      <option value="rating">Rating</option>
      <option value="new">Newest</option>
    </select>
  )
}

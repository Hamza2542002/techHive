import React from 'react'
import ExpandableFilter from './ExpandableFilter'
import categories from '../../data/categories';
import brands from '../../data/brands';

export default function Filtration({ setFilters }) {
  return (
    <aside className="hidden md:block md:col-span-1 bg-white p-4 rounded-xl border border-borderColor h-fit sticky top-5">
      <h3 className="text-lg font-semibold mb-4">Filter By</h3>
      <ExpandableFilter setFilters={setFilters} data={categories} title={"Categories"} /> 
      <ExpandableFilter setFilters={setFilters} data={brands} title={"Brands"} />
    </aside>
  )
}

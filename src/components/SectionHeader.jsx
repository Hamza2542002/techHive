import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionHeader({title, to}) {
  return (
    <div className='flex justify-between items-center mb-6'>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Link to={to} className='hover:text-gray-900 duration-200'>Show All</Link>
    </div>
  )
}

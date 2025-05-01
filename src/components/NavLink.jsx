import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({children , to}) {
  return (
    <Link
      to={to}
      className='text-gray-500 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200'
    >
      {children}
    </Link>

  )
}

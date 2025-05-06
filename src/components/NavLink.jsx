import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavLin({children , to}) {
  return (
    <NavLink
      to={to}
      className={`text-gray-500 active:text-gray-900 lg:bg-transparent rounded-lg block py-2 lg:hover:bg-transparent hover:bg-gray-100 hover:text-gray-900 font-semibold px-4 dark:hover:text-white duration-200
        
        ${({ isActive }) => (isActive ? 'active' : 'inactive')}
        `}
    >
      {children}
    </NavLink>

  )
}

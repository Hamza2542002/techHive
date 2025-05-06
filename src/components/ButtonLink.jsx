import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonLink({children, to}) {
  return (
    <Link to={to}
      className="inline-block bg-primary text-white py-1 px-5 rounded-lg hover:text-primary hover:bg-transparent border-2 border-primary transition-colors duration-200"
    >
    {children}
    </Link>
  )
}

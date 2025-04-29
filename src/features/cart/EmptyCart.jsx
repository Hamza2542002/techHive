import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="text-center">
      <p className="text-center text-gray-900">Your cart is empty 🛒</p>
      <Link
        to={"/products"}
        className="mt-6 inline-block bg-primary text-white py-1 px-5 rounded-lg hover:text-primary hover:bg-transparent border-2 border-primary transition-colors duration-200"
      >
        Shop Now
      </Link>
    </div>
  )
}

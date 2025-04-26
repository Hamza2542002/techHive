import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="text-center">
      <p className="my-6 text-xl">Your cart is empty 🛒</p>
      <Link
        to="/products"
        className="px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-accent transition"
      >
        Shop Now
      </Link>
    </div>
  )
}

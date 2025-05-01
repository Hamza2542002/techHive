import React from 'react'
import ButtonLink from '../../components/ButtonLink'

export default function EmptyCart() {
  return (
    <div className="text-center">
      <p className="text-center text-gray-900">Your cart is empty 🛒</p>
      <ButtonLink
        to={"/products"}
      >
        Shop Now
      </ButtonLink>
    </div>
  )
}

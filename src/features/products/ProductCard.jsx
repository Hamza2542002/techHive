import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <div className="bg-white border border-borderColor p-4 rounded-xl flex flex-col justify-between">
      <div>
        <Link to={`/products/${product.id}`} className="block mb-2">
          <img src={product.img} alt="" className="w-full h-40 object-cover rounded-lg mb-2" />
        </Link>
        <h3 className="font-bold text-textPrimary">{product.name}</h3>
        <h3 className="font-semibold text-textPrimary">{product.brand}</h3>
        <div className='flex flex-wrap items-center gap-2 my-2'>
          {
            product.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-textSecondary text-white px-2 py-1 rounded-full">{tag}</span>
            ))
          }
        </div>
      </div>
      <div>
        <p className="text-accent font-bold">${product.price}</p>
        <div className='flex items-center gap-2'>  
          <button className="mt-2 px-4 py-1 text-sm bg-red-500 text-white rounded-xl opacity-100 hover:bg-opacity-90 transition duration-300 ease-in-out">
            Add to Wishlist
          </button>
          <button className="mt-2 px-4 py-1 text-sm bg-primary text-white rounded-xl opacity-100 hover:bg-opacity-90 transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

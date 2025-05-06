import React from 'react'
import { Link } from 'react-router-dom'
import AddToCart from '../cart/AddToCart';
import AddToComparison from '../Comparison/AddToComparison';
import { useComparison } from '../Comparison/CompareContext';

export default function ProductCard({product}) {
  return (
    <div className="bg-white border border-borderColor p-4 rounded-xl flex flex-col justify-between">
      <div>
        <Link to={`/products/${product.id}`} className="mb-2 h-52 max-h-52 flex items-center justify-center">
          <img src={product.images[0]} alt="" className="w-full h-52  object-cover rounded-lg mb-2" />
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
        <Link to={`/products/${product.id}`} className='text-sm hover:underline text-primary'>
          View Details
        </Link>
        <div className='flex flex-col justify-between mt-2 gap-2'>
        <AddToCart product={product} />
        <AddToComparison product={product} />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import ProductCard from './ProductCard';

export default function PeoductList({sortedProducts}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product, idx) => (
        <ProductCard product={product} key={idx} />
      ))}
    </div>
  )
}

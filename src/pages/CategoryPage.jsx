import React, { useState } from 'react'
import {products} from '../data/prodcuts.js'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import ProductCard from '../features/products/ProductCard.jsx';
import Footer from '../components/Footer.jsx';

export default function CategoryPage() {
  const {name} = useParams();
  const [categoryProducts, setCategoryProducts] = useState(products.filter((product) => product.category === name))

  return (
    <div className="min-h-screen bg-background text-textPrimary">

      <NavBar />

      <div className='container py-10 relative z-50 min-h-[679px]'>
        <header className="mb-10 text-center ">
          <h1 className="text-4xl font-bold text-primary capitalize">{name}</h1>
          <p className="text-textSecondary mt-2">
            {categoryProducts.length} products found
          </p>
        </header>
        {categoryProducts.length === 0 ? (
          <div className="text-center text-lg text-red-500">No products available in this category.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <footer className="bg-gray-900 text-white py-10">
        <Footer />
      </footer>
    </div>
  )
}

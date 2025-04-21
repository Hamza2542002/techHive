import React from 'react'
import { Link } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'
import NavBar from '../components/NavBar'

export default function HomePage() {
  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <NavBar />

      <section className="my-10">
        <ProductSlider />
      </section>

      <section className="container py-10 mt-10">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["Smartphones", "Laptops", "Smart Home", "Audio", "Gaming"].map((category) => (
            <Link
              key={category}
              to={`/categories/${category.toLowerCase().replace(/ /g, "-")}`}
              className="bg-white rounded-2xl shadow hover:shadow-md p-4 text-center border border-borderColor"
            >
              <p className="font-medium text-textPrimary">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mt-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <Link key={id} to={`/products/${id}`}>
              <div
                key={id}
                className="bg-white rounded-2xl shadow p-4 hover:shadow-lg border border-borderColor"
                >
                <img
                  src={`/images/product-${id}.jpg`}
                  alt="Featured product"
                  className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                <h3 className="font-semibold text-textPrimary">Product {id}</h3>
                <p className="text-accent font-bold">$99.99</p>
                <button className="mt-2 px-4 py-1 text-sm bg-primary text-white rounded-xl hover:bg-accent transition duration-200">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import ProductSlider from '../components/ProductSlider'
import NavBar from '../components/NavBar'
import ServiceSection from '../components/ServiceSection'
import CategorySection from '../components/CategorySection'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import { products } from '../data/prodcuts.js'
import ProductCard from '../features/products/ProductCard.jsx'
import ShowComparison from '../features/Comparison/ShowComparison.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import OfferSection from '../components/OfferSection.jsx'
import Testmonail from '../components/Testmonail.jsx'
const carouselContent = [
    {
      image: "/images/banner-1.jpg",
      title: "Explore the Latest Gadgets",
      subtitle: "From smartphones to smart homes"
    },
    {
      image: "/images/banner-2.jpg",
      title: "Unbeatable Deals",
      subtitle: "Discounts up to 50% on top tech"
    },
    {
      image: "/images/banner-3.jpg",
      title: "Smart Home Essentials",
      subtitle: "Make your home smarter with our picks"
    }
  ];
export default function HomePage() {
  return (
    <div className="bg-background text-textPrimary min-h-screen">
      {/* Nav bar */}
      <NavBar />

      {/* slider */}
      <section className="my-10">
        <ProductSlider content={carouselContent} />
      </section>

      {/* services section */}
      <section className="container py-10">
        <ServiceSection />
      </section>

      {/* categories */}
      <section className="container py-10 mt-10">
        <CategorySection />
      </section>

      {/* Products */}
      <section className="container mt-10 mb-20">
        <SectionHeader title = "Products" to="/products" />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0,4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Offer Section */}
      <section className='container'>
        <OfferSection />
      </section>

      {/* New Arrivals */}
      <section className="container py-10">
        <Featured />
      </section>
      
      {/* Testimonials */}
      <section className="container py-10">
        <div className='flex justify-between items-center mb-6'>
          <h2 className="text-2xl font-semibold">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <Testmonail key={id} />
          ))}
        </div>
      </section>

      <ShowComparison />
      {/* Sponsers */}
      <section className="bg-gray-200 py-10 mt-10 hidden md:block">
        <div className="container">
          <div className="hidden md:flex justify-evenly items-center ">
            {[1, 2, 3, 4, 5].map((id) => (
              <img src={`/images/sponser${id}.png`} alt={`Sponser ${id}`} className="opacity-50 w-[88px] dark:invert" />
            ))}
          </div>
        </div>
      </section>  

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <Footer />
      </footer>

    </div>
  )
}

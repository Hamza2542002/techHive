import React, { useMemo, useState } from 'react'
import NavBar from '../components/NavBar'
import ProductSlider from '../components/ProductSlider'
import categories from '../data/categories';
import brands from '../data/brands';
import ProductCard from '../features/products/ProductCard';
import { products } from '../data/prodcuts';
import ExpandableFilter from '../components/Filters/ExpandableFilter';
import useFilter from '../features/products/useFilter';
import useSort from '../features/products/useSort';
import SortBar from '../features/products/SortBar';
import Footer from '../components/Footer';
const carouselContent = [
  {
    image: "/images/banner-4.jpg",
    title: "Explore the Latest Gaming",
    subtitle: "Perfect Gaming Tools For Great Experience"
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
export default function Products() {
  const [filteredProducts, setfilteredProducts] = useState(products);
  const sortedProducts = useSort(filteredProducts);

  function setFilters(filters) {
    setfilteredProducts(useFilter(filters));
    console.log(filteredProducts);
  }
  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <NavBar />

      <section className='my-10'>
        <ProductSlider content={carouselContent} />
      </section>

      <section className='container '>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-gray-800 " >All Products</h1>
          <SortBar />
        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="hidden md:block md:col-span-1 bg-white p-4 rounded-xl border border-borderColor h-fit sticky top-5">
          <h3 className="text-lg font-semibold mb-4">Filter By</h3>
          <ExpandableFilter setFilters={setFilters} data={categories} title={"Categories"} /> 
          <ExpandableFilter setFilters={setFilters} data={brands} title={"Brands"} />
        </aside>

        <main className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        </main>
      </section>

      <footer className="bg-gray-900 text-white py-10 mt-10">
        <Footer />
      </footer>
    </div>
  )
}

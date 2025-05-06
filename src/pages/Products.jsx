import React, { useMemo, useState } from 'react'
import NavBar from '../components/NavBar'
import ProductSlider from '../components/ProductSlider'
import { products } from '../data/prodcuts';
import useFilter from '../features/products/useFilter';
import useSort from '../features/products/useSort';
import SortBar from '../features/products/SortBar';
import Footer from '../components/Footer';
import ShowComparison from '../features/Comparison/ShowComparison';
import ProductList from '../features/products/PeoductList.jsx';
import Filtration from '../components/Filters/Filtration.jsx';
import { useAuth } from '../components/Auth/AuthContext.jsx';
import Loader from '../components/Loader.jsx';

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
  const {isLoading} = useAuth();
  if(isLoading) return <Loader />;

  const [filteredProducts, setfilteredProducts] = useState(products);
  const sortedProducts = useSort(filteredProducts);

  function setFilters(filters) {
    setfilteredProducts(useFilter(filters));
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
        <Filtration setFilters={setFilters} />

        <main className="md:col-span-3">
          <ProductList sortedProducts={sortedProducts} />
        </main>
      </section>
      <ShowComparison />

      <footer className="bg-gray-900 text-white py-10 mt-10">
        <Footer />
      </footer>

    </div>
  )
}

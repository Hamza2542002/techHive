import React from 'react'
import { Link } from 'react-router-dom'
import ProductSlider from '../components/ProductSlider'
import NavBar from '../components/NavBar'
import { faGamepad, faHeadphones, faHeadset, faHouseSignal, faLaptop, faMobileButton, faMoneyCheck, faQuoteRight, faShieldHalved, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import ServiceSection from '../components/ServiceSection'
import CategorySection from '../components/CategorySection'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import { products } from '../data/prodcuts.js'
import ProductCard from '../features/products/ProductCard.jsx'
export default function HomePage() {
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
        <div className='flex justify-between items-center mb-6'>
          <h2 className="text-2xl font-semibold">Products</h2>
          <Link to={"/products"} className='hover:text-gray-900 duration-200'>Show All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0,4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      {/* Offer Section */}
      <section className='container'>
        <div className="">
          <div className='bg-green-600 rounded-3xl flex justify-between md:flex-row flex-col items-center my-20 px-10 py-5'>
          <div  className='text-white w-full md:w-[250px] text-start '>
            <h5 data-aos="slide-right" >30% OFF</h5>
            <h1 data-aos="zoom-out" className='text-4xl lg:text-7xl font-semibold'>FINE SMILE</h1>
            <h5 data-aos="fade-up" >10 Jan to 28 Jan</h5>
          </div>
          <div data-aos-once="true" data-aos="zoom-in" className='h-full flex justify-center items-center aos-animate'>
            <img src="/images/smart-watch.png"  className='scale-125 w-[200px] md:w-[300px] object-cover  drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' alt="" />
          </div>
          <div className='text-white md:w-1/3 flex flex-col items-start gap-4'>
            <h1 data-aos="slide-right" className='font-semibold text-lg'>Air Solo Bass</h1>
            <h1 data-aos="fade-up" className='text-3xl lg:text-5xl font-bold'>Winter Sale</h1>
            <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis</p>
            <button data-aos="fade-up" className='bg-white text-primary rounded-full px-4 py-2 mt-4'>Shop Now</button>
          </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container py-10">
        <Featured />
      </section>
      
      {/* What Client Says */}
      <section className="container py-10">
        <div className='flex justify-between items-center mb-6'>
          <h2 className="text-2xl font-semibold">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} class="testimonial-card bg-white p-8 rounded-lg relative overflow-hidden hover:shadow-lg hover:-translate-y-2 duration-300">
              <div class="flex items-center mb-4">
                <img class="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Michael T." />
                <div class="ml-4">
                    <h4 class="text-lg font-semibold">Michael T.</h4>
                    <p class="text-gray-600">Verified Buyer</p>
                </div>
              </div>
              <div class="mb-4 flex">
                <div class="rating-star">
                  <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                  <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                  <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                  <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                  <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                </div>
                  <span class="ml-2 text-gray-600">5.0</span>
              </div>
              <p class="text-gray-700 mb-6 relative">
                "I've ordered from multiple e-commerce sites, but the delivery speed and product quality here is unmatched. Will definitely shop again!"
                <FontAwesomeIcon icon={faQuoteRight} className='text-[5rem] opacity-15 absolute right-5 bottom-2' />
              </p>
              <div class="text-sm text-gray-500">
                Purchased: Wireless Headphones | Delivered: 2 days ago
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsers */}
      <section className="bg-gray-200 py-10 hidden md:block">
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

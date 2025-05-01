import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Testmonail() {
  return (
    <div class="testimonial-card bg-white p-8 rounded-lg relative overflow-hidden hover:shadow-lg hover:-translate-y-2 duration-300">
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
  )
}

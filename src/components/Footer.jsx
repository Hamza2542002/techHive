import { faFacebookF, faInstagram, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-between container text-gray-500 duration-300">
        <div className="flex flex-col w-fit gap-4 text-gray-300">
          <h3 className="text-xl font-bold text-gray-200">Exclusive</h3>
          <h4 className="text-lg font-meduim">Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="flex rounded-md">
            <input
              placeholder="Enter Your Email"
              className="p-2 ps-4 w-full border-none text-sm rounded-md focus:outline-none text-black"
            />
          </div>
        </div>
        <div className="flex flex-col w-fit gap-4">
          <h3 className="text-xl font-bold text-gray-200">Support</h3>
          <ul className="flex flex-col gap-2">
            <li className='text-gray-300'>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li className='text-gray-300'>exclusive@gmail.com</li>
            <li className='text-gray-300'>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="flex flex-col w-fit gap-4">
          <h3 className="text-xl font-bold text-gray-200">Account</h3>
          <ul className="flex flex-col gap-2">
            <li className='hover:text-background'>
              <a href="">My Account</a>
            </li>
            <li className='hover:text-background'>
              <a href="">Login / Register</a>
            </li>
            <li className='hover:text-background'>
              <a href="">Cart</a>
            </li>
            <li className='hover:text-background'>
              <a href="">Wishlist</a>
            </li>
            <li className='hover:text-background'>
              <a href="">Shop</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-fit gap-4">
          <h3 className="text-xl font-bold text-gray-200">Quick Link</h3>
          <ul className="flex flex-col gap-2">
            <li className='hover:text-background'>
              <a href="">Privacy Policy</a>
            </li>
            <li className='hover:text-background'>
              <a href="">Terms Of Use</a>
            </li>
            <li className='hover:text-background'>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-fit gap-4">
          <h3 className="text-xl font-bold text-gray-200">Download App</h3>
          <p className="text-sm text-zinc-500">
            Save $3 with App New User Only
          </p>
          <img src="/public/images/Frame 719.png" alt="" />
          <ul className="flex gap-4">
            <li className='hover:text-background'>
              <a href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className='hover:text-background'>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className='hover:text-background'>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className='hover:text-background'>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

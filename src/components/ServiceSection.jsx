import { faHeadset, faMoneyCheck, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'

export default function ServiceSection() {
  const services = [
    { name: "Free Shipping",description:"Free Shipping On All Order" , icon:faTruckFast },
    { name: "Safe Money",description:"30 Days Money Back" , icon:faShieldHalved },
    { name: "Secure Payment",description:"All Payment Secure" , icon:faMoneyCheck },
    { name: "Online Supoort 24/7",description:"Technical Support 24/7" , icon:faHeadset },
  ]
  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        
        <h2 className="text-2xl font-semibold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
            key={service.name}
            className="bg-white rounded-2xl shadow hover:shadow-md p-4 py-10 text-center border border-borderColor flex flex-col gap-4 duration-300  relative group"
            >
              <span className='block absolute top-0 left-0 w-0 h-full group-hover:w-full duration-300 bg-gray-300 opacity-10 rounded-2xl'></span>
              <FontAwesomeIcon icon={service.icon} />
              <p className="font-medium text-textPrimary">{service.name}</p>
            </div>
          ))}
      </div>
    </>
  )
}

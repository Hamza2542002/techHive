import { faHeadset, faMoneyCheck, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import ServiceCard from './ServiceCard'
import React from 'react'
const services = [
  { name: "Free Shipping",description:"Free Shipping On All Order" , icon:faTruckFast },
  { name: "Safe Money",description:"30 Days Money Back" , icon:faShieldHalved },
  { name: "Secure Payment",description:"All Payment Secure" , icon:faMoneyCheck },
  { name: "Online Supoort 24/7",description:"Technical Support 24/7" , icon:faHeadset },
]
export default function ServiceSection() {
  return (
    <>
      <div className='flex justify-between items-center mb-6'>
        <h2 className="text-2xl font-semibold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
      </div>
    </>
  )
}

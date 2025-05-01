import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SectionCard({service}) {
  return (
    <div
      className="bg-white rounded-2xl shadow hover:shadow-md p-4 py-10 text-center border border-borderColor flex flex-col items-center gap-4 duration-300  relative group"
    >
      <span className='block absolute top-0 left-0 w-0 h-full group-hover:w-full duration-300 bg-gray-300 opacity-10 rounded-2xl'></span>
      <FontAwesomeIcon icon={service.icon} className='p-2 border-black rounded-full w-fit bg-gray-900 text-white' />
      <p className="font-medium text-textPrimary">{service.name}</p>
    </div>
  )
}

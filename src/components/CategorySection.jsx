import { faGamepad, faHeadphones, faHouseSignal, faLaptop, faMobileButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'
import SectionHeader from './SectionHeader'

const categories = [
  { name: "Smartphones", icon:faMobileButton },
  { name: "Laptops", icon : faLaptop },
  { name: "Smart Home",  icon:faHouseSignal},
  { name: "Audio", icon:faHeadphones},
  { name: "Gaming", icon:faGamepad},
]
export default function CategorySection() {
  
  return (
    <>
      <SectionHeader  title="Categories" to="/categories" />
      <div className="grid grid-cols-1  xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
            className="bg-white rounded-2xl shadow hover:shadow-md p-4 py-10 text-center border border-borderColor flex flex-col gap-4 duration-300 group relative"
          >
            <span className='block absolute top-0 right-0 w-0 h-full group-hover:w-full duration-300 bg-gray-300 opacity-10 rounded-2xl'></span>
            <FontAwesomeIcon icon={category.icon} />
            <p className="font-medium text-textPrimary">{category.name}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

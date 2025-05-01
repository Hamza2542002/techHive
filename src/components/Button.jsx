import React from 'react'
const variations = {
  primary: 'bg-primary  hover:bg-white hover:text-primary border-primary',
  danger: 'bg-danger hover:bg-white hover:text-danger border-danger',
}
export default function Button({children, onClick, variation}) {
  return (
    <button
      className={`mt-2 px-4 py-1 text-sm rounded-xl text-white opacity-100 border-2 transition duration-300 ease-in-out ${variations[variation]}`}
      onClick={onClick}
    >{children}</button>
  )
}

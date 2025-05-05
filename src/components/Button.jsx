import React from 'react'
const variations = {
  primary: 'bg-primary hover:bg-white hover:text-primary border-primary',
  danger: 'bg-danger hover:bg-white hover:text-danger border-danger',
}
const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
}
const modes = {
  fill: "w-full"
}
export default function Button({children, onClick, variation = "primary" , type = "button" , size = "md" , mode = "fill", pending = false}) {
  return (
    <button
      className={`rounded-lg text-white  opacity-100 border-2 transition duration-300 ease-in-out 
        ${variations[variation]} ${sizes[size]} ${modes[mode]}`}
      onClick={onClick}
      type={type}
      disabled={pending}
    >{children}</button>
  )
}

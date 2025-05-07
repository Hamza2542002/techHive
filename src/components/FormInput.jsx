import React from 'react'

export default function FormInput({name , type , placeholder, required = false , disabled = false , vlaue , onChange}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{name}</label>
      <input
        type={type}
        className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
        required={required}
        // name={name}
        onChange={onChange}
        value={vlaue}
        disabled={disabled}
      />
    </div>
  )
}

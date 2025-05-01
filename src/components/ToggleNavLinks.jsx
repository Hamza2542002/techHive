import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ToggleNavLinks() {
  return (
    <>
      <input type="checkbox" className='peer' name="" hidden id="toggle-navBar" />
      <label 
        for='toggle-navBar' 
        className='cursor-pointer inline-block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'>
        <FontAwesomeIcon icon={faBars} />
      </label>
    </>
  )
}

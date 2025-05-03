import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import useOutClick from '../hooks/useOutClick';

export default function ToggleNavLinks({toggleRef}) {
  return (
    <>
      <input type="checkbox"  className='peer' hidden name="" id="toggle-navBar" ref={toggleRef} />
      <label 
        htmlFor='toggle-navBar' 
        className='cursor-pointer block lg:hidden peer-checked:hiddeen right-0 text-gray-500 dark:bg-gray-900 hover:text-primary font-bold'
        >
        <FontAwesomeIcon  icon={faBars} />
      </label>
    </>
  )
}

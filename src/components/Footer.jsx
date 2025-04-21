import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className="container text-center">
      <p>&copy; 2025 TeckHive. All rights reserved.</p>
      <p>Follow us on social media</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  )
}

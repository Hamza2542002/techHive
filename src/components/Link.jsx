import React from 'react'
import { Links } from 'react-router-dom'

export default function Link({children, to}) {
  return (
    <Links to= {to} className="text-md underline text-primary">
      {children}
    </Links>
  )
}

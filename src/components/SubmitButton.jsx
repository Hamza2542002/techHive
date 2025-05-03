import React from 'react'
import Button from './Button'

export default function SubmitButton({children}) {
  return (
    <Button
      size="md"
      variation="primary"
      mode="fill"
      type="submit"
    >
      {children}
    </Button>
  )
}

import React from 'react'
import Button from './Button'

export default function SubmitButton({children , pending}) {
  return (
    <Button
      size="md"
      variation="primary"
      mode="fill"
      type="submit"
      pending={pending}
    >
      {children}
    </Button>
  )
}

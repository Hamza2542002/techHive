import React from 'react'
import FormInput from '../FormInput'
import SubmitButton from '../SubmitButton'

export default function SignUpForm() {
  
  return (
    <form className="space-y-4">
      <FormInput name={"Full Name"} type={"text"} required={true} placeholder={"Enter Your Full Name"}  />
      <FormInput name={"Email"} type={"email"} required={true} placeholder={"Enter Your Email"}  />
      <FormInput name={"Password"} type={"password"} required={true} placeholder={"***************"}  />
      <FormInput name={"Confirm Password"} type={"password"} required={true} placeholder={"************"}  />
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Remember me</span>
        </label>
      </div>
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  )
}

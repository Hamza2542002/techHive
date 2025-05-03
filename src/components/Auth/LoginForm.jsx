import React from 'react'
import FormInput from '../FormInput'
// import Link from '../Link'
import SubmitButton from '../SubmitButton'

export default function LoginForm() {
  
  return (
    <form className="space-y-4">
      <FormInput name={"Email"} type="email" required={true} placeholder={"Enter Your Email"} />
      <FormInput name={"Password"} type="password" required={true} placeholder={"Enter Your Password"} />
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Remember me</span>
        </label>
        {/* <Link to="/forgot-password">Forgot Password?</Link> */}
      </div>
      <SubmitButton>Login</SubmitButton>
    </form>
  )
}

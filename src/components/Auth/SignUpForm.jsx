import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput'
import SubmitButton from '../SubmitButton'
import { useAuth } from './AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

export default function SignUpForm() {
  const navigate = useNavigate()
  const { register, error, isLoading , isAuthenticated , user } = useAuth()
  const[email , setEmail] = useState('')
  const[password , setPassword] = useState('')
  const[confirmPassword , setConfirmPassword] = useState('')
  const[name , setName] = useState('')
  const[errorMessgae , setErrorMessage] = useState("");
  useEffect(() => {
    if(isAuthenticated || user != null || localStorage.getItem("isAuthenticated") == "true") {
      navigate('/', {replace: true});
    }
  }
  , [isAuthenticated, user , navigate])
  async  function handleSubmit(event) {
    event.preventDefault()
    if(password !== confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }
    await register({
      email, 
      password,
      name, 
      Avatar : "https://i.pravatar.cc/100?u=zz"
    })
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormInput 
        name={"Full Name"} 
        type={"text"} 
        required={true} 
        placeholder={"Enter Your Full Name"}  
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      <FormInput 
        name={"Email"} 
        type={"email"} 
        required={true} 
        placeholder={"Enter Your Email"}  
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <FormInput 
        name={"Password"} 
        type={"password"} 
        required={true} 
        placeholder={"***************"}  
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <FormInput 
        name={"Confirm Password"} 
        type={"password"} 
        required={true} 
        placeholder={"************"}  
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={isLoading}
      />
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Remember me</span>
        </label>
      </div>
      <SubmitButton pending={isLoading}>Sign Up</SubmitButton>
    </form>
  )
}

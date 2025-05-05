import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput'
import SubmitButton from '../SubmitButton'
import { useAuth } from './AuthContext'
import { replace, useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const navigate = useNavigate()
  const {login , isLoading , error, isAuthenticated , user} = useAuth();
  const [email , setEmail] = useState("jack@example.com")
  const [password , setPassword] = useState("0000")
  useEffect(() => {
    if(localStorage.getItem("userId") !== null){
      navigate("/",{ replace:true })
    }
    if(isAuthenticated){
      localStorage.setItem("userId" , user.id)
      navigate("/",{ replace:true })
    }
  }
  , [isAuthenticated,user])
  async function handleSubmit(event) {
    event.preventDefault()
    console.log('Form Data:', {email, password});
    await login(email, password);
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormInput 
        name={"Email"} 
        type="email" 
        required={true} 
        placeholder={"Enter Your Email"} 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      <FormInput 
        name={"Password"} 
        type="password" 
        required={true} 
        placeholder={"Enter Your Password"} 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>Remember me</span>
        </label>
        {/* <Link to="/forgot-password">Forgot Password?</Link> */}
      </div>
      <SubmitButton pending={isLoading}>Login</SubmitButton>
    </form>
  )
}

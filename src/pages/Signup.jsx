import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../components/ButtonLink'
import SignUpForm from '../components/Auth/SignUpForm'

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Create New Account</h2>
        <SignUpForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

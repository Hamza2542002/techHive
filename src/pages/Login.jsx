import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/Auth/LoginForm'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Login to TechHive</h2>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

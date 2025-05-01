import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <NavBar />
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-textSecondary mt-2">We'd love to hear from you</p>
      </header>
      
      <div className="container mb-10">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow border border-borderColor">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-borderColor rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-borderColor rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-borderColor rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-accent transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-10">
        <Footer />
      </footer>
    </div>
  )
}

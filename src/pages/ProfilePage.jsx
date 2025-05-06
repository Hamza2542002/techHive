import React from 'react'
import { useAuth } from '../components/Auth/AuthContext';
import NavBar from '../components/NavBar';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

export default function Profile() {
  const {user} = useAuth();
  if (!user) {
    return <Loader />;
  }
  return (
    <>
      <NavBar />
    <div className="container py-10">
      <Breadcrumb />
      <div className="flex items-center gap-6 bg-white shadow-md rounded-2xl p-6">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.userName}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600">{user.address}</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <form className="grid gap-4 bg-white p-6 rounded-2xl shadow">
          <input
            type="text"
            placeholder="Full Name"
            defaultValue={user.userName}
            className="p-3 border rounded-xl"
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={user.email}
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Phone"
            defaultValue={user.phone}
            className="p-3 border rounded-xl"
          />
          <input
            type="text"
            placeholder="Address"
            defaultValue={user.address}
            className="p-3 border rounded-xl"
          />
          <Button
            size="md"
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-xl hover:bg-accent"
          >
            Update Profile
          </Button>
        </form>
      </div>
    </div>
    <footer className="bg-gray-900 text-white py-10">
      <Footer />
    </footer>
    </>

  );
}

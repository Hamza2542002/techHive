import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/Auth/AuthContext';
import NavBar from '../components/NavBar';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

export default function Profile() {
  const navigate = useNavigate();
  const {user , updateUser , isLoading , isAuthenticated} = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if(isLoading){
      if (!isLoading && !isAuthenticated) {
        console.log("User not authenticated, redirecting to login..." , "isloading " , isLoading);
        navigate("/login", { replace: true });
      } 
    }
    if (isAuthenticated && user) {
      setName(user.name ?? "");
      setPhone(user.phone ?? "");
      setAddress(user.address ?? "");
      setEmail(user.email ?? "");
    }
    console.log("isLoading: ", user);
  }, [isLoading, isAuthenticated, user, navigate]);

  if (isLoading || !user) {
    console.log("Loading...");
    return <Loader />;
  }

  async function handleSubmit(e) {
    console.log(user.id)
    e.preventDefault();
    await updateUser(user.id, {
      name,
      email,
      phone,
      address,
    });
  }


  return (
    <>
      <NavBar />
    <div className="container py-10">
      <Breadcrumb />
      <div className="flex items-center gap-6 bg-white shadow-md rounded-2xl p-6">
        {user && (
          <>
            <img
              src={user.avatar ?? "/images/user.png"} 
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              <p className="text-gray-600">{user.address}</p>
            </div>
          </>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <form  onSubmit={(e)=>handleSubmit(e) }
          className="grid gap-4 bg-white p-6 rounded-2xl shadow">
          <FormInput
            name={"Full Name"} 
            type={"text"} 
            required={true} 
            placeholder={"Enter Your Name"}  
            vlaue={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
          />
          <FormInput
            name={"Email Address"} 
            type={"email"} 
            required={true} 
            placeholder={"Enter Your Email"}  
            vlaue={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <FormInput
            name={"Phone Number"} 
            type={"text"} 
            required={true} 
            placeholder={"Enter Your Phone Number"}  
            vlaue={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isLoading}
          />
          <FormInput
            name={"Address"} 
            type={"text"} 
            required={true} 
            placeholder={"Enter Your Address"}  
            vlaue={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={isLoading}
          />
          <Button
            size="md"
            type="submit"
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

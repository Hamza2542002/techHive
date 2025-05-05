import React from 'react'
import { useAuth } from './Auth/AuthContext'
import Button from './Button';

export default function User() {
  const { user , logout } = useAuth()
  // console.log(user);
  if(!user) return(
    <div><button onClick={logout}>Logout</button></div>
  );
  return (
    <div className='flex items-center justify-between gap-2 bg-white'>
      <div className='flex flex-col items-center justify-center rounded-full w-10 h-auto'>
        <img src={user.avatar} alt="/images/user.png" className='rounded-full max-w-full' />
      </div>
        <Button size='sm' className=''>
          Logout
        </Button>
    </div>
  )
}

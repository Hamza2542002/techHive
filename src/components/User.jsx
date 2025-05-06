import React from 'react'
import { useAuth } from './Auth/AuthContext'
import Button from './Button';
import { Link } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import useOutClick from '../hooks/useOutClick';
import Loader from './Loader';

export default function User() {
  const { user , logout , isLoading } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const elementRef = useOutClick(() => setIsMenuOpen(false));
  if(isLoading) return(
    <></>
  );
  if(!user) return(
    <div>
      <Link to={'/login'} className='py-2 px-4 text-sm bg-primary text-white rounded-lg hover:bg-white hover:text-primary border-2 border-primary duration-200' >login</Link>
    </div>
  );

  return (
    <div ref={elementRef} className='flex items-center justify-between gap-2 bg-white relative'>
      <div
        className='flex flex-col items-center justify-center rounded-full w-10 h-auto cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={user.avatar} alt="/images/user.png" className='rounded-full max-w-full' />
      </div>
      {isMenuOpen && (
        <ul className='absolute left-full top-full translate-y-4 -translate-x-full bg-white shadow-lg rounded-b-lg p-4 w-48 z-50'>
          <li>
            <Link to="/profile" className="text-gray-500 inline-block font-semibold py-1 hover:text-gray-700 w-full duration-200">Profile</Link>
          </li>
          <li>
            <Link to="/settings" className="text-gray-500 inline-block font-semibold py-1 hover:text-gray-700 w-full duration-200">Settings</Link>
          </li>
          <li className='mt-2'>
            <Button size='sm' mode='fill' variation='danger' className='' onClick={logout}>
              Logout
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}

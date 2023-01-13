import React from 'react';
import Drawer from '../Dashboard/Drawer';
import Navbar from '../Dashboard/Navbar';
import './user.scss';
import UserDetails from './UserDetails';
import { useLocation } from 'react-router-dom';

const User:React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = parseInt(searchParams.get('id') || '', 10);
  return (
    <div className='user'>
      <div className='user__container'>
        <Navbar />
        <div className='user__body'>
          <Drawer />
          <UserDetails userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default User
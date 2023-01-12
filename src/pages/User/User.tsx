import React from 'react';
import Drawer from '../Dashboard/Drawer';
import Navbar from '../Dashboard/Navbar';
import './user.scss';
import UserDetails from './UserDetails';

const User:React.FC = () => {
  return (
    <div className='user'>
      <div className='user__container'>
        <Navbar />
        <div className='user__body'>
          <Drawer />
          <UserDetails userId={1} />
        </div>
      </div>
    </div>
  )
}

export default User
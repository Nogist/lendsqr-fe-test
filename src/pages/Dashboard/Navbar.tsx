import React from 'react';
import group from '../../assets/Group.svg';
import avatar from '../../assets/avatars.png';
import { GoSearch } from 'react-icons/go'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import './dashboard.scss';

const Navbar = () => {
  return (
    <div className='dashboard__navbar'>
      <div className='dashboard__navbar__logo'>
        <img src={group} alt="logo" />
        <div className='dashboard__navbar__search'>
          <input type='text' placeholder='Search for anything' />
          <span><GoSearch id='microscope' /></span>
          
      </div>
      </div>
      <div className='dashboard__navbar__avatar'>
        <p id='docs'>Docs</p>
        <IoIosNotificationsOutline className='alert' />
        <img src={avatar} alt='avatar' />
        <p id='ads'>Adedeji</p>
        < MdArrowDropDown id='drop' />
      </div>
    </div>
  )
}

export default Navbar
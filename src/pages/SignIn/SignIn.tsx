import React from 'react';
import Form from './Form';
import './signin.scss';
import logo from '../../assets/logo.svg';
import group from '../../assets/Group.svg';

const Sign_In:React.FC = () => {
  return (
    <div className='signin'>
      <div className='signin__body'>
        <div className='signin__body__img'>
          <img id='logo' src={group} alt="logo" />
          <img id='group' src={logo} alt="brand" />
        </div>
        <Form />
      </div>
    </div>
  )
}

export default Sign_In
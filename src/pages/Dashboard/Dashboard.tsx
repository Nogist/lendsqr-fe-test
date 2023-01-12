import React from 'react';
import Content from './Content';
import Drawer from './Drawer';
import Navbar from './Navbar';
import './dashboard.scss';

const Dashboard:React.FC = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <Navbar />
        <div className='dashboard__body'>
          <Drawer />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
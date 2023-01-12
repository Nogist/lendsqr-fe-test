import React from 'react';
import Data from './components/Data';
import Database from './components/Database';
import './dashboard.scss';

const Content = () => {
  return (
    <div className='dashboard__content'>
      <div className='dashboard__content__body'>
        <p id='content__user'>Users</p>
        <Data />
        <Database />
      </div>
    </div>
  )
}

export default Content
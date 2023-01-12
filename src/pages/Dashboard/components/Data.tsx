import React from 'react';
import DataCount from './DataCount';
import dash from '../../../assets/dash.png';
import coinses from '../../../assets/coinses.png';
import icons from '../../../assets/icons.png';
import spread from '../../../assets/spreadcoin.png';

const Data = () => {
  return (
    <div className='content__data'>
      <DataCount img={dash} text='USERS' num='2,453' />
      <DataCount img={icons} text='ACTIVE USERS' num='2,453' />
      <DataCount img={spread} text='USERS WITH LOANS' num='12,453' />
      <DataCount img={coinses} text='USERS WITH SAVINGS' num='102,453' />
    </div>
  )
}

export default Data
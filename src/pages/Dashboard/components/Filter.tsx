import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi'
import './componentStyles.scss';

const Filter:React.FC = () => {
  return (
    <form className='filter__form'>
      <span>
        <label htmlFor="organization">Organization</label>
        <input className='filter__form__input' type="text" placeholder='Select' />
        <div className='form__icons'>
          <RiArrowDropDownLine className='form__down' />
        </div>
      </span>
      <span>
        <label htmlFor="User">User</label>
        <input className='filter__form__input' type="text" placeholder='User' />
      </span>
      <span>
        <label htmlFor="email">Email</label>
        <input className='filter__form__input' type="text" placeholder='Email' />
      </span>
      <span>
        <label htmlFor="date">Date</label>
        <input className='filter__form__input' type="date" placeholder='Date' />
        <div className='form__icons'>
          <BiCalendar className='form__down' />
        </div>
      </span>
      <span>
        <label htmlFor="phone_number">Phone Number</label>
        <input className='filter__form__input' type="number" placeholder='Phone Number' />
      </span>
      <span>
        <label htmlFor="status">Status</label>
        <input className='filter__form__input' type="text" placeholder='Status' />
        <div className='form__icons'>
          <RiArrowDropDownLine className='form__down' />
        </div>
      </span>
        <div className='filter__button'>
          <button id='filter__button__reset'>Reset</button>
          <button id='filter__button__filter'  type='submit' >Filter</button>
        </div>
      
    </form>
  )
}

export default Filter
import React, { useState, useEffect } from 'react';
import DatabaseHead from './DatabaseHead';
import { RiArrowDropDownLine, RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './componentStyles.scss';
import DatabaseDetail from './DatabaseDetail';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import UserDetails from '../../User/UserDetails';
import { useNavigate } from 'react-router-dom';
import Filter from '../../Dashboard/components/Filter';



interface Props {}

const Database:React.FC<Props> = (props) => {

  const [detail, setDetail] = useState(false);
  const selectDetail = () => {
    setDetail(!detail);
  }

  
  const [data, setData] = useState<any[]>([]);

  useEffect (() => {
    axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users').then(response => {
      setData(response.data.slice(0, 9));
    });
  }, []);


  //For filter component ,handling behaviour

  const [filter, setFilter] = useState(false);
  const [outsideClick, setOutsideClick] = useState(false);

  const toggleFilter = () => {
    setFilter(!filter);
  }
  const handleClickOutside = () => { 
    setOutsideClick(!outsideClick)
  };

  useEffect(() => {
    if (outsideClick) {
      setFilter(false);
    }
  }, [outsideClick])

  
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectItem, setSelectItem] = useState<any | null>(null);

  let navigate = useNavigate();
  const handleClickuser = (user: any) => {
    setSelectedUser(user);
    navigate({
      pathname: '/user',
      search: `?id=${user.id}`,
    });
  };

  const handleSelect = (item: any) => {
    setSelectItem(item);
    selectDetail();
  }
  

  return (
    <div className='content__database' >
      <div className='content__database__container'>
        <div className='content__database__body'>
          <span onClick={toggleFilter}>
            <DatabaseHead text='ORGANIZATION' />
          </span>
          <span onClick={toggleFilter}>
            <DatabaseHead text='USERNAME' />
          </span>
          <span onClick={toggleFilter}>
            <DatabaseHead text='EMAIL' />
          </span>
          <span onClick={toggleFilter}>
            <DatabaseHead text='PHONE NUMBER' />
          </span>
          <span onClick={toggleFilter}>
            <DatabaseHead text='DATE JOINED' />
          </span>
          <span onClick={toggleFilter}>
            <DatabaseHead text='STATUS' />
          </span>
          {/* <span onClick={toggleFilter}>
            <DatabaseHead text='ORGANIZATION' />
          </span> */}
        </div>
        {filter && (
      <div onClick={handleClickOutside}>
        <Filter />
      </div>
    )}

        <div className='content__database__content'>
          {detail ? (
            <div>
              <DatabaseDetail handleClickuser={handleClickuser} item={selectItem} />
            </div>):('')}
            {selectedUser && (
              <UserDetails userId={selectedUser.id}/>
          )}
            {data.map((item, index) => (
              <div  className='api__map'key={uuidv4()}>
                <span><p>Lendsqr</p></span>
                <span className='api__map__profile'><p>{item.profile.firstName}  {item.profile.lastName}</p></span>
                <span className='api__map__profile'><p>{item.email}</p></span>
                <span className='api__map__profile'> <p>{item.profile.phoneNumber}</p></span>
                <span className='api__map__profile'><p>May15, 2020 10:00 AM</p></span>
                <span className='api__map__profile' id='api__map__active'><p>Active</p></span>
                <span id='api__map__dots'> <BsThreeDotsVertical onClick={() => handleSelect(item)} /></span>
              </div>
            ))}
        </div>
      </div>
      <div className='content__database__flow'>
        <div className='content__database__flow__left'>
          <p>Showing</p>
          <span>
            <p>100</p>
            <RiArrowDropDownLine id='arrowup' />
          </span>
          <p>Out of 100</p>
        </div>
        <div className='content__database__flow__right'>
          <RiArrowDropLeftLine className='dropicon' />
          <p id='one'>1</p>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>15</p>
          <p>16</p>
          <RiArrowDropRightLine className='dropicon' id='line' />
        </div>
      </div>
    </div>
  )
}

export default Database
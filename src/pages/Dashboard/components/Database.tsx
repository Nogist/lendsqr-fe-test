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

  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  let navigate = useNavigate();
  const handleClickuser = (user: any) => {
    setSelectedUser(user);
    navigate({
      pathname: '/user',
      search: `?id=${user.id}`,
    });
};
  

  return (
    <div className='content__database' >
      <div className='content__database__container'>
        <div className='content__database__body'>
          <DatabaseHead text='ORGANIZATION' />
          <DatabaseHead text='USERNAME' />
          <DatabaseHead text='EMAIL' />
          <DatabaseHead text='PHONE NUMBER' />
          <DatabaseHead text='DATE JOINED' />
          <DatabaseHead text='STATUS' />
        </div>
        <div className='content__database__content'>
            {data.map((item, index) => (
              <div  className='api__map'key={uuidv4()}>
                <span><p>Lendsqr</p></span>
                <span><p>{item.profile.firstName}  {item.profile.lastName}</p></span>
                <span><p>{item.email}</p></span>
                <span> <p>{item.profile.phoneNumber}</p></span>
                <span><p>May15, 2020 10:00 AM</p></span>
                <span><p>Active</p></span>
                <span id='api__map__dots'> <BsThreeDotsVertical onClick={handleClickuser.bind(this, item)} /></span>
               
                {/* onClick={selectDetail} */}
              </div>
            ))}
          
            {detail ? (
            <div>
              < DatabaseDetail /> 
            </div>):('')}
            {selectedUser && (
              <UserDetails userId={selectedUser.id}/>
          )}
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
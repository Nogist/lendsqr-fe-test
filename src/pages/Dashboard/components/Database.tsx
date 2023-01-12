import React, {useState} from 'react';
import DatabaseHead from './DatabaseHead';
import { RiArrowDropDownLine, RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './componentStyles.scss';
import DatabaseDetail from './DatabaseDetail';

interface Props {}

const Database:React.FC<Props> = (props) => {

  const [detail, setDetail] = useState(false);
  const selectDetail = () => {
    setDetail(!detail);
  }

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
            hello
            <BsThreeDotsVertical onClick={selectDetail} />
            {detail ? (< DatabaseDetail />):('')}
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
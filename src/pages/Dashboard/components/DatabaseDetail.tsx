import React from 'react';
import './componentStyles.scss';
// import { AiOutlineEye } from 'react-icons/ai';
import oris from '../../../assets/oris.png';
import activate from '../../../assets/activate.png';
import person from '../../../assets/delete.png';
import { Link } from 'react-router-dom';


const DatabaseDetail:React.FC = () => {
  return (
    <div className='database__detail'>
      <span className=''>
        <img src={oris} alt="/" />
        <p> 
          <Link to='/user'>View Details</Link>
        </p>
      </span>
      <span>
        <img src={person} alt="/" />
        <p>Backlist User</p>
      </span>
      <span>
        <img src={activate} alt="/" />
        <p>Activate User</p>
      </span>
    </div>
  )
}

export default DatabaseDetail
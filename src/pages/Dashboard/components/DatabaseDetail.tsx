import React from 'react';
import './componentStyles.scss';
// import { AiOutlineEye } from 'react-icons/ai';
import oris from '../../../assets/oris.png';
import activate from '../../../assets/activate.png';
import person from '../../../assets/delete.png'



interface Props {
  handleClickuser: (user: any) => void;
  item: any;
}

const DatabaseDetail: React.FC<Props> = (props) => {
  return (
    <div className='database__container' >
      <div className='database__detail'>
        <span className=''>
          <img src={oris} alt="/" />
          <p onClick={() => props.handleClickuser(props.item)}> 
            View Details
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
    </div>
  )
}

export default DatabaseDetail
import React from 'react';
import filt from '../../../assets/filter.png';



interface Props {
  text: string;
}

const DatabaseHead:React.FC <Props> = ({text}) => {


  return (
    <div className='databasehead'>
      <p>{text}</p>
      <img src={filt} 
        alt="icon" 
      />
     
    </div>
  )
}

export default DatabaseHead
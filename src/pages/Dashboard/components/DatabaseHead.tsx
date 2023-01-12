import React, { useState } from 'react';
import filt from '../../../assets/filter.png';
import Filter from './Filter';


interface Props {
  text: string;
}

const DatabaseHead:React.FC <Props> = ({text}) => {

  const [filter, setFilter] = useState(false);
  const toggleFilter = () => {
    setFilter(!filter);
  }

  return (
    <div className='databasehead'>
      <p>{text}</p>
      <img src={filt} 
        onClick={toggleFilter}
        alt="icon" 
      />
      {filter ? (<Filter />) : ('')}
    </div>
  )
}

export default DatabaseHead
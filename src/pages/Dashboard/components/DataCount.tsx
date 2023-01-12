import React from 'react';

interface Props {
  img: string;
  text: string;
  num : string;
}

const DataCount:React.FC <Props> = ({img, text, num}) => {
  return (
    <div className='datacount'>
      <img src={img} alt="icons" />
      <p id='text'>{text}</p>
      <p>{num}</p>
    </div>
  )
}

export default DataCount
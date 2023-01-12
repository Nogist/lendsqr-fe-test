import React from 'react';
import './componentStyles.scss'

interface Props {
  img: string;
  text: string;
}

const InnerDrawer:React.FC <Props> = ({img, text}) => {
  return (
    <div className='innerdrawer'>
      <img src={img} alt="icon" />
      <p>{text}</p>
    </div>
  )
}

export default InnerDrawer
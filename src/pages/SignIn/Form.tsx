import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.scss';

interface Props {}

const Form:React.FC<Props> = (props) => {

  const [password, setPassword] = useState(false);  
  const togglePasswordVisibility = () => {
    setPassword(!password);
  }
 
  //navigating to next page
  let navigate = useNavigate();
  const handleSignup = () => {
    navigate('/dashboard')
  }
  return (
    <form onSubmit={handleSignup} >
      <div className='form__body'>
        <div className='form__body__heading'>
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
        </div>
        <div className='form__body__input'>
          <input 
            type="email" 
            placeholder='Email'
            required
          />
          <span>
            <input 
              type={password ? 'text' : 'password'}
              placeholder='Password'
              required
            />
            <label id='secret' 
              onClick= {togglePasswordVisibility}
              htmlFor="password">
              {password? 'HIDE':'SHOW'}
            </label>
          </span>
          <p>FORGOT PASSWORD</p>
          <button>LOG IN </button>
        </div>
      </div>
    </form>
  )
}

export default Form
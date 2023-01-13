import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './user.scss';
import { BsArrowLeft } from 'react-icons/bs';
import avatar from '../../assets/avatar.png';
import star from '../../assets/star.png';
import stars from '../../assets/stars.png';
import ImageFetcher from './components/ImageFetcher';
import { Link } from 'react-router-dom';

interface Profile {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
}

interface User {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: Profile;
    guarantor: Profile;
    accountBalance: string;
    accountNumber: string;
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
    };
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string;
    };
    id: string;
}

const UserDetails: React.FC<{userId: number}> = ({userId}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<User>(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [userId]);

  return (
    <div className='userdetails'>
      <div className='userdetails__container'>
        <div className='userdetails__container__model'>
          <Link to ='/dashboard'
            className='userdetails__container__model__header'>
            <BsArrowLeft id='arrow__left' />
            <p>Back to Users</p>
          </Link>
          <span className='userdetails__container__model__user'>
            <p>User Details</p>
            <div>
              <p>BLACKLIST USER</p>
              <p id='activate'>ACTIVATE USER</p>
            </div>
          </span>
        </div>
        <div className='userdetails__container__headers'>
          <div>
            <span>
            {user ? 
              (<ImageFetcher avatar={user.profile.avatar} /> ): 
              ( <img id='user__avatar' src={avatar} alt="/" />
            )}
              <span className='user__avatar__details'>
              {user ? (<h2>{user.profile.firstName}  {user.profile.lastName}</h2>): (<p>Loading....</p>)}
                {user ? (<p>{user.accountNumber } </p>): (<p>Loading....</p>)}
              </span>
            </span>
            <span className='userdetails__usertier'>
              <p>User's Tier</p>
              <span id='userdetails__stars'>
                <img src={stars} alt="/" />
                <img src={star} alt="/" />
                <img src={star} alt="/" />
              </span>
            </span>
            <span className='userdetails__bank'>
              {user ? (<p><span id='user__naira'>N</span>{user.accountBalance } </p>): (<p>Loading....</p>)}
              {user ? (<p id='user__details__bank'>{user.profile.bvn }/Providus Bank </p>): (<p>Loading....</p>)}
            </span>
          </div>
          <div className='userdetails__container__section'>
            <p id='userdetails__general'>General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
          </div>
        </div>
        <div className='userdetails__container__models'>
          <div className='userdetails__data'>
            <h3>Personal Information</h3>
            <div className='userdetails__data__profile'>
              <span>
                <p>Full Name</p>
                {user ? (<h4 className='userdetails__text'>{user.profile.firstName}  {user.profile.lastName}</h4>): (<h4>Loading....</h4>)}
                <span>
                  <p>MARITAL STATUS</p>
                  <h4 >Single</h4>
              </span>
              </span>
              <span>
                <p>PHONE NUMBER</p>
                {user ? (<h4 className='userdetails__text'>{user.phoneNumber} </h4>): (<h4>Loading....</h4>)}
                <span>
                  <p>CHILDREN</p>
                  <h4>None</h4>
              </span>
              </span>
              <span>
                <p>EMAIL ADDRESS</p>
                {user ? (<h4 className='userdetails__text'>{user.email} </h4>): (<h4>Loading....</h4>)}
                <span>
                  <p>TYPE OF RESIDENCE</p>
                  <h4>Parent's Apartment</h4>
              </span>
              </span>
              <span>
                <p>BVN</p>
                {user ? (<h4>{user.profile.bvn} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>GENDER</p>
                {user ? (<h4>{user.profile.gender} </h4>): (<h4>Loading....</h4>)}
              </span>
            </div>
            <div className='userdetails__data__profile'>
              
             
             
            </div>
          </div>
          <div className='userdetails__data'>
            <h3>Education and Employment</h3>
            <div className='userdetails__data__profile'>
              <span>
                <p>LEVEL OF EDUCATION</p>
                {user ? (<h4 className='userdetails__text'>{user.education.level} </h4>): (<h4>Loading....</h4>)}
                <span>
                  <p>OFFICE EMAIL</p>
                  {user ? (<h4>{user.education.officeEmail} </h4>): (<h4>Loading....</h4>)}
              </span>
              </span>

              <span>
                <p>EMPLOYMENT STATUS</p>
                {user ? (<h4 className='userdetails__text'>{user.education.employmentStatus} </h4>): (<h4>Loading....</h4>)}
                <span>
                  <p>MONTHLY INCOME</p>
                  {user ? (<h4>{user.education.monthlyIncome} </h4>): (<h4>Loading....</h4>)}
              </span>
              </span>
              <span>
                <p>SECTOR OF EMPLOYMENT</p>
                {user ? (<h4 className='userdetails__text'>{user.education.sector} </h4>): (<h4>Loading....</h4>)}
                <span>
                  <p>LOAN REPAYMENT</p>
                  {user ? (<h4>{user.education.loanRepayment} </h4>): (<h4>Loading....</h4>)}
              </span>
              </span>
              <span>
                <p>DURATION OF EMPLOYMENT</p>
                {user ? (<h4>{user.education.duration} </h4>): (<h4>Loading....</h4>)}
              </span>
            </div>
            <div className='userdetails__data__profile'>
              
              
             
            </div>
          </div>
          <div className='userdetails__data'>
            <h3>Socials</h3>
            <div className='userdetails__data__profile'>
              <span>
                <p>TWITTER</p>
                {user ? (<h4>{user.socials.twitter} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>FACEBOOK</p>
                {user ? (<h4>{user.socials.facebook} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>INSTAGRAM</p>
                {user ? (<h4>{user.socials.instagram} </h4>): (<h4>Loading....</h4>)}
              </span>
            </div>
          </div>
          <div className='userdetails__data'>
            <h3>Guarantor</h3>
            <div className='userdetails__data__profile'>
              <span>
                <p>Full Name</p>
                {user ? (<h4>{user.guarantor.firstName} {user.guarantor.lastName} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>PHONE NUMBER</p>
                {user ? (<h4>{user.guarantor.phoneNumber} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>EMAIL ADDRESS</p>
                {user ? (<h4>{user.guarantor.address} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>RELATIONSHIP</p>
                <h4>Sister</h4>
              </span>
            </div>
          </div>
          <div className='userdetails__data'>
            <div className='userdetails__data__profile'>
            <span>
                <p>Full Name</p>
                {user ? (<h4>{user.guarantor.firstName} {user.guarantor.lastName} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>PHONE NUMBER</p>
                {user ? (<h4>{user.guarantor.phoneNumber} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>EMAIL ADDRESS</p>
                {user ? (<h4>{user.guarantor.address} </h4>): (<h4>Loading....</h4>)}
              </span>
              <span>
                <p>RELATIONSHIP</p>
                <h4>Sister</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
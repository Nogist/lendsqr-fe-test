import React from 'react';
import InnerDrawer from './components/InnerDrawer';
import briefcase from '../../assets/briefcase.png';
import home from '../../assets/home.png';
import guarantor from '../../assets/guarantor.png';
import friend from '../../assets/friends.png';
import group from '../../assets/group.png';
import user from '../../assets/user.png';
import sack from '../../assets/sack.png';
import hand from '../../assets/handshake.png';
import bank from '../../assets/bank.png';
import icon from '../../assets/icon.png';
import coins from '../../assets/coins.png';
import product from '../../assets/product.png';
import kunai from '../../assets/kunai.png';
import karma from '../../assets/userT.png';
import users from '../../assets/users.png';
import scroll from '../../assets/scroll.png';
import report from '../../assets/report.png';
import slider from '../../assets/slider.png';
import clipboard from '../../assets/clipboard.png';
import badge from '../../assets/badge.png';
import stripe from '../../assets/stripe.png';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Drawer = () => {
  return (
    <div className='dashboard__drawer'>
      <div className='dashboard__drawer__body'>
        <span id='span'>
          <img src={briefcase} alt="icon" />
          <p>Switch Organizations</p>
          <RiArrowDropDownLine id='drop'/>
        </span>
        <InnerDrawer img={home} text='Dashoard' />
        <p id='customers'>CUSTOMERS</p>
        <div className='dashboard__drawer__body__inn'>
          <span>
            <img id='stripe' src={stripe} alt="/" />
            <InnerDrawer img={friend} text='Users' />
          </span>
          <InnerDrawer img={guarantor} text='Guarantors' />
          <InnerDrawer img={sack} text='Loans' />
          <InnerDrawer img={hand} text='Decision Models' />
          <InnerDrawer img={bank} text='Savings' />
          <InnerDrawer img={group} text='Loan Requests' />
          <InnerDrawer img={user} text='Whitelist' />
          <InnerDrawer img={karma} text='Karma' />
        </div>
        <p className='inn__draws'>BUSINESS</p>
        <div className='dashboard__drawer__body__inn'>
          <InnerDrawer img={briefcase} text='Organization' />
          <InnerDrawer img={guarantor} text='Guarantors' />
          <InnerDrawer img={sack} text='Loans Products' />
          <InnerDrawer img={product} text='Savings Products' />
          <InnerDrawer img={coins} text='Fees and Charges' />
          <InnerDrawer img={icon} text='Transactions' />
          <InnerDrawer img={kunai} text='Services' />
          <InnerDrawer img={users} text='Service Account' />
          <InnerDrawer img={scroll} text='Settlements' />
          <InnerDrawer img={report} text='Report' />
        </div>
        <p className='inn__draws'>SETTINGS</p>
        <div className='dashboard__drawer__body__inn'>
          <InnerDrawer img={slider} text='Preferences' />
          <InnerDrawer img={badge} text='Fees and Pricing' />
          <InnerDrawer img={clipboard} text='Audit Logs' />
        </div>
      </div>
    </div>
  )
}

export default Drawer
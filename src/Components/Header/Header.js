import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.scss';
// import logo from '../../assets/images/logo.png';

function Header() {

  return (
    <header>
      <div className='header__logo'>
        {/* <Link to ='/'><img alt='Connex Logo' src={logo}></img></Link> */}
      </div>
      <div className='header__links'>
        <Link to ="/seller-signup"><div>SIGN UP</div></Link>
        <Link to ="/login"><div>LOGIN</div></Link>
    </div>
    </header>
    
  )
  
}

export default Header;
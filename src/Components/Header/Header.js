import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../assets/images/logo.png';

function Header() {

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to="/"><h1>Connex</h1></Link>
      </div>
      <div className='header__links--container'>
        <div><Link to ="/seller-signup" className='header__link'><div>SIGN UP</div></Link></div>
        <div><Link to ="/login" className='header__link'><div>LOGIN</div></Link></div>
    </div>
    </header>
    
  )
  
}

export default Header;
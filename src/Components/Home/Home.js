import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.scss';

function Home() {

  return (
    <div>
      <div className='header__container'>
        <div className='header__title--1'><h4>Cleaning out your closet?</h4></div>
        <div className='header__title--2'><h4>Looking to complete your collection?</h4></div>
        <div className='header__title--3'><h5>But most importantly...</h5></div>
        <div className='header__title--4'><h4>Tired of playing email tag with sellers and buyers?</h4></div>
        <div className='header__title--5'><h1>Let's CONNEX!</h1></div>
      </div>
      
      <Link to="/listings">
        <div className='divlink'>
          <h1>Buy Something</h1>
        </div>
      </Link>
      <Link to="/seller-signup">
        <div className='divlink'>
          <h1>Sell Something</h1>
        </div>
      </Link>
    
    </div>
  )
  
  
}

export default Home;
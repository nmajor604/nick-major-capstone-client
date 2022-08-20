import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.scss';

function Home() {

  return 
  <div>
    <h1>Cleaning out your closet? Trying to complete your collection? Let's Connex!</h1>
    <Link to="/listings">
      <div>
        <h1>Buy</h1>
      </div>
    </Link>
    <Link to="/seller-signup">
      <div>
        <h1>Start Selling</h1>
      </div>
    </Link>
    
  </div>
  
}

export default Home;
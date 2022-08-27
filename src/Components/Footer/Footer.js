import React from 'react';
import { Link } from 'react-router-dom';

// import './Footer.scss';

function Footer() {

  return (
    <footer>
        <div className='footer__links'>
            <Link to ="/contact"><div>CONTACT INFO</div></Link>
            <Link to ="/firsttime"><div>FIRST TIME?</div></Link>
            <Link to ="/ourstory"><div>OUR STORY</div></Link>
        </div>
    </footer>
)
  
}

export default Footer;
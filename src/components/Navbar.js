import React from 'react';
import './Navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return(
  <div className='Navbar'>
    <img src={Logo} alt='LOGO' className='logo'/>
    <ul className='nav-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
        
    </ul>

  </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import './nav.css';
import logo from './images/LOGO.svg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav_logo">
          <img className='nav__img' src={logo} alt="logo bor edi" />
        </div>
        <div className="nav__center">
          <a href="#" className="nav__link"><h2 className="nav__title">Home</h2></a>
          <a href="#" className="nav__link"><h2 className="nav__title">About</h2></a>
          <a href="#" className="nav__link"><h2 className="nav__title">Services</h2></a>
          <a href="#" className="nav__link"><h2 className="nav__title">Reviews</h2></a>
        </div>
        <div className="nav__right">
          <button className="nav__btn">Get Started</button>
        </div>
        <div className="hum_menu" onClick={toggleMenu}>☰</div>

        {isMenuOpen && (
          <div className="mobile_menu">
            <a href="#" className="header_link"><p className="mobile__text">Home</p></a>
            <a href="#" className="header_link"><p className="mobile__text">About</p></a>
            <a href="#" className="header_link"><p className="mobile__text">Services</p></a>
            <a href="#" className="header_link"><p className="mobile__text">Reviews</p></a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react'
import './nav.css'
import logo from './images/LOGO.svg'

const Nav = () => {
  return (
    <nav>
        <div className="container nav__container">
            <div className="nav__logo">
                <img className='nav__img' src={logo} alt="logo bor edi"/>
            </div>
            <div className="nav__center">
                <a href="#" className="nav__link"><h2 className="nav__title">Home</h2></a>
                <a href="#" className="nav__link"><h2 className="nav__title">About</h2></a>
                <a href="#" className="nav__link"><h2 className="nav__title">Services</h2></a>
                <a href="#" className="nav__link"><h2 className="nav__title">Reviews</h2></a>
            </div>
            <div className="nav__right"><button className="nav__btn">Get Started</button></div>
            <div className="hum__menu">☰</div>
        </div>
    </nav>
    
  )
}

export default Nav
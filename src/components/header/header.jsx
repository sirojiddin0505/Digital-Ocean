import React from 'react'
import './header.css'
import image from "./images/Image.svg"

const header = () => {
  return (
    <header>
        <div className="container header__container">
            <div className="header__left">
                <p className="header__text">SMART BUSINESS</p>
                <h1 className="header__title">Connecting people is our <span className='header__span'>business</span></h1>
                <p className="header__info">As a rule the organization settles on the inventive and media choices. Regularly it supplies supporting statistical.</p>
                <span>
                    <button className="header__btn">Get Started</button>
                </span>
            </div>
            <div className="header__right">
                <img src={image} alt="" className='header__img'/>
            </div>
        </div>
    </header>
  )
}

export default header
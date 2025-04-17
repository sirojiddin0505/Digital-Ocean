import React from 'react'
import "./hero.css"
// import heroimg from'./images/Image (1).svg'

const hero = () => {
  return (
    <div className='hero'>
        <div className="container hero__container">
            <div className="hero__left">
                {/* <img src={heroimg} alt="" className='hero__img'/> */}
                <iframe className='hero__video' src="https://www.youtube.com/embed/3T9RaXgwf3c?si=LFkh5o1PijBWZIge" allowFullScreen></iframe>
            </div>
            <div className="hero__right">
                <p className="hero__info">COMMMUNITY</p>
                <h2 className="hero__title">Platform Dedicated To Promoting </h2>
                <p className="hero__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis ultrices  consectetur adipiscing elit. fringilla quisque pulvinar..</p>
                <button className="hero__btn">What we do?</button>
            </div>
        </div>
    </div>
  )
}

export default hero;
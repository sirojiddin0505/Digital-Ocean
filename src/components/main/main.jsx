import React from 'react'
import './main.css'
import main1 from './images/main1.svg'
import main2 from './images/main2.svg'
import main3 from './images/main3.svg'

const main = () => {
  return (
    <main>
        <div className="container main__container">
            <h1 className="main__title">How We Work</h1>
            <div className="main__box">
            <div className="main__boxs">
                <img src={main1} alt="" className='main__img'/>
                <h3 className="main__subtitle">Start Design</h3>
                <p className="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.</p>
            </div>
            <div className="main__boxs">
                <img src={main2} alt="" className='main__img'/>
                <h3 className="main__subtitle">Go To Code</h3>
                <p className="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.</p>
            </div>
            <div className="main__boxs">
                <img src={main3} alt="" className='main__img'/>
                <h3 className="main__subtitle">Final Deliverd</h3>
                <p className="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.</p>
            </div>
            </div>
        </div>
    </main>
  )
}

export default main
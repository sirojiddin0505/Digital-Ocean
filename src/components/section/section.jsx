import React from 'react'
import './section.css'
import section1 from '../section/images/section.svg'
import section2 from '../section/images/section2.svg'

const section = () => {
  return (
    <section>
      <div className="container section__container">
        <h1 className="section__title">What Our Customers are Saying.</h1>
        <div className="section__box">
          <div className="section__boxs">
            <p className="section__text">I recently concluded a complete messaging revamp for an exciting com</p>
            <div className='section__div'>
              <img src={section1} alt=""/>
              <hr/>
              <span>
                <h3 className="section__name">Leo Amirov</h3>
                <p className="section__info">Product Designer</p>
              </span>
              </div>
          </div>
          <div className="section__boxs">
            <p className="section__text">I recently concluded a complete messaging revamp for an exciting com</p>
            <div className='section__div'>
              <img src={section2} alt=""/>
              <hr/>
              <span>
                <h3 className="section__name">Carla Dias</h3>
                <p className="section__info">Product Designer</p>
              </span>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default section
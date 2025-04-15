import React from 'react'
import './footer.css'
import logo1 from '../footer/images/Logo (1).svg'

const footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <div className="footer__box">
            <div className="footer__logo">
                <a href="#" className="footer__link"><img src={logo1} alt="" className='footer__img' /></a>
                <a href="#" className="footer__link"><p className="footer__text">Smart business</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Community</p></a>
            </div>
            <div className="footer__left">
                <a href="#" className="footer__link"><h3 className="footer__title">Resources</h3></a>
                <a href="#" className="footer__link"><p className="footer__text">Start Business</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Digital Marketing</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Course Creation</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Business Accelerator</p></a>
            </div>
            <div className="footer__center">
                <a href="#" className="footer__link"><h3 className="footer__title">Missions</h3></a>
                <a href="#" className="footer__link"><p className="footer__text">About Digital Analyst</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Team</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Become a Partner</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Privacy Policy</p></a>
            </div>
            <div className="footer__right">
                <a href="#" className="footer__link"><h3 className="footer__title">Contact</h3></a>
                <a href="#" className="footer__link"><p className="footer__text">041-774073</p></a>
                <a href="#" className="footer__link"><p className="footer__text">hello@digitalanalyst.org</p></a>
                <a href="#" className="footer__link"><p className="footer__text">Contact Form</p></a>
            </div>
            </div>
            <div className="footer__end">
                <p className="footer__info">© 2025 DigitalAnalyst.org. A 50 non-profit organization. EIN: -3410655</p>
                <button className='footer__btn'>Sign Up</button>
            </div>
        </div>
    </footer>
  )
}

export default footer
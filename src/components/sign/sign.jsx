import React from 'react'
import './sign.css'

const sign = () => {
  return (
    <div className="sign">
        <div className="container sign__container">
            <h2 className="sign__title">Sign Up to Our Newsletter</h2>
            <p className="sign__text">Yours could be one of them.</p>
            <form action="">
                <input type="email" className='sign__inp' placeholder=' enter email' />
                <button type='submit' className="sign__btn">Send</button>
            </form>
        </div>
    </div>
)
}

export default sign
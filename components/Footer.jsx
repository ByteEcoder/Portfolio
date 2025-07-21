import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h2 className="footer__title">Sumit</h2>

            <ul className="footer__list">
                <li className="footer__element">
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li className="footer__element">
                    <a href="https://github.com/ByteEcoder" className="footer__link">Projects</a>
                </li>
            </ul>
            <span className="footer__copy">
                <i class="uil uil-lightbulb footer__icon"></i>
                  Curious? Let's create something.</span>
        </div>
    </footer>
  )
}

export default Footer
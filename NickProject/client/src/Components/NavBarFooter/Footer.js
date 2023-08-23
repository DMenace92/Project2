import React from 'react'
// import image from '../../Images/MyLogo1.jpg'
import facebook from '../Images/facebook.png'
import instagram from '../Images/instagram.png'
import twitter from '../Images/twitter.png'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        {/* Your logo here */}
                        {/* <img src={image} alt="Logo" /> */}
                    </div>
                    <div className="footer__links">
                        {/* <ul className="footer__list">
                            <li className="footer__list-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="/about">About</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="/services">Services</a>
                            </li>
                            <li className="footer__list-item">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul> */}
                    </div>

                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Eight Ten Markets. All rights reserved.</p>
                </div>
                <div className="footer__social-media">
                    {/* Add your social media icons or links here */}
                    <a href="https://www.facebook.com">
                        <i className="fab fa-facebook"></i>
                        <img className="footerIcons" src={facebook}></img>
                    </a>
                    <a href="https://www.twitter.com">
                        <i className="fab fa-twitter"></i>
                        <img className="footerIcons" src={twitter}></img>
                    </a>
                    <a href="https://www.instagram.com">
                        <i className="fab fa-instagram"></i>
                        <img className="footerIcons" src={instagram}></img>
                    </a>
                    {/* <a href="https://www.linkedin.com/in/dennisenwiya">
                        <i className="fab fa-instagram"></i>
                        <img className="footerIcons" src={linkedin}></img>
                    </a>
                    <a href="https://github.com/DMenace92">
                        <i className="fab fa-twitter"></i>
                        <img className="footerIcons" src={github}></img>
                    </a> */}
                </div>
            </div>
        </footer>
    );
}
export default Footer;
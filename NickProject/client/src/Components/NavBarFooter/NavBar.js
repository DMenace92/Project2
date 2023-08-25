import React, { useState, useEffect } from 'react'
// import styled, { createGlobalStyle } from "styled-components";

// import { Link } from 'react-router-dom';
import logoImage from "../Images/logo.png"
import './NavBar.css'

function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
            {/* Navbar content */}

            <div className="navbar-container">
                <div className="testDesign">
                    <a href="/" className="navbar-logo">
                       
                       <div className="quoteContainer"> <img className="logoDesign" src={logoImage} alt="this is my logo"></img>
                        <p className="bibleQuoteNav">“Above all, keep fervent in your love for one another, because love covers a multitude of sins. Be hospitable to one another without complaint. As each one has received a special gift, employ it in serving one another as good stewards of the multifaceted grace of God.” — 1 Peter 4: 8-10 NASB</p>
                        </div>
                    </a>
                </div>

                {/* <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
          
                    <li className="navbar-item">
                        <a href="/Projects" className="navbar-link">News</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/contact" className="navbar-link">Contact</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/events" className="navbar-link">Events</a>
                        
                    </li>
                    <li className="navbar-item">
                        <a href="/certifications" className="navbar-link">Contact</a>
                    </li>
                </ul> */}
            </div>
        </nav>
    );
    // return (
    // <nav className="navbar">
    //     <div className="navbar-container">
    //         <a href="/" className="navbar-logo">Logo</a>
    //         <ul className="navbar-menu">
    //             <li className="navbar-item">
    //                 <a href="/" className="navbar-link">Home</a>
    //             </li>
    //             <li className="navbar-item">
    //                 <a href="/about" className="navbar-link">About</a>
    //             </li>
    //             <li className="navbar-item">
    //                 <a href="/services" className="navbar-link">Services</a>
    //             </li>
    //             <li className="navbar-item">
    //                 <a href="/contact" className="navbar-link">Contact</a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
    // )
}
export default (NavBar)
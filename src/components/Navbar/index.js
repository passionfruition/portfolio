import React from 'react';
import './style.css'
import logo from '../../assets/logo-blue.png'
import resume from '../../Resume.pdf'

function Navbar() {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="#home">
                    {/* <img id="logo" src={logo}></img>  */}
                    <h1 id="name-tag" className="title">MADELEINE PRAK</h1>
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    {/* <a className="navbar-item" href="https://bulma.io/">
                        Home
      </a> */}
                </div>

                <div className="navbar-end">
                    {/* <a className="navbar-item nav-link" href="#about-section">
                        ABOUT
                    </a> */}
                    <a className="navbar-item nav-link" href="#portfolio">
                        PROJECTS
                    </a>
                    {/* <a className="navbar-item nav-link" href="#contact">
                        CONTACT
                    </a> */}
                    <div className="buttons">
                    <a className="navbar-item button resume" target="_blank" href={resume}>
                        RESUME
                    </a>
                    </div>
                    
                </div>
            </div>
            </div>
            
        </nav>
    )
}

export default Navbar;
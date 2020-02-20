import React from 'react';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="/home">
                    MP
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
                    <a className="navbar-item">
                        Portfolio
      </a>
      <a className="navbar-item">
                        Resume
      </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
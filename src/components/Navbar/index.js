import React from 'react';
import './style.css'

function Navbar() {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="/home">
                    Madeleine
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
      </a>
                    <div className="navbar-item is-hoverable">
                        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                            Docs
        </a>
                    </div>
                </div>

                <div className="navbar-end">
                    <a className="navbar-item">
                        Portfolio
      </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
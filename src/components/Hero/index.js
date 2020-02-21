import React from 'react'
import './style.css'

function Hero() {
    return (
        <section id="home" className="hero is-large">
            <div id="header" className="hero-body has-text-centered">
                <div className="columns is-centered">
                    <div className="">
                        <figure id="header-icon" className="image is-128x128">
                            <img className="is-rounded" src={require('../../assets/profile2.jpg')}></img>
                        </figure>
                    </div>
                    <div id="header-words" className="">
                        <p className="title">
                            GIS Full-stack Developer
                        </p>
                        <p className="subtitle">
                            I design and build beautiful web applications, and I love what I do.
                        </p>
                    </div>
                    
                   
                </div>
                </div>

        </section>
            )
        }
        
export default Hero;
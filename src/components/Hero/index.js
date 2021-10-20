import React, { useCallback } from 'react'
import './style.css'
import { useSpring, animated as a, interpolate } from 'react-spring'

function Hero() {
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
    const icon = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 25}deg) rotateX(${-y / 25}deg)`)
    const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

    return (
        <section id="home" className="hero is-large" onMouseMove={onMove} onScroll={onScroll}>
            <div id="header" className="hero-body has-text-centered">
                <div className="columns is-centered">
                    <div className="">
                        <figure id="header-icon"className="image is-128x128">
                            <a.img alt="icon" style={{ transform: icon }} transform={icon} className="is-rounded" src={require('../../assets/memojiprofile.png')}/>
                        </figure>
                    </div>
                    <div id="header-words" className="">
                        <h1 className="title">
                            Hi there, I'm Madeleine. I'm a UW Alum pursuing a job as a Geospatial Developer.
                        </h1>
                        {/* <h1 className="subtitle">
                            I'm a UW Alum pursuring Web Development with a background in Geographic Information Systems.
                        </h1> */}
                        {/* <p className="subtitle">
                            I design and build beautiful web applications, and I love what I do.
                        </p> */}
                    </div>
                    
                   
                </div>
                </div>

        </section>
            )
        }
        
export default Hero;
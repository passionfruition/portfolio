import React from 'react'
import './style.css'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x-window.innerWidth/2, y - window.innerHeight/2]
const trans1 = (x, y) => `translate3d(${x / 75}px,${y / 75}px,0)`

function ProjectGrid() {
    const [props, set] = useSpring(() => ({ xy: [0,0], config: {mass: 10, tension: 550, friction: 140}}))
    return (
        <div id="portfolio" className="project-wrapper container" onMouseMove={({ clientX: x, clientY: y}) => set({ xy: calc(x,y)})}>
            <div id="project-one" className="project">
            <animated.img src={require('../../assets/icons/king.png')} className="" style={{ transform: props.xy.interpolate(trans1) }} />
                <div className="project-title title">
                    Meme King
                </div>
                <div className="project-desc">
                    Create, view, and share memes all in one spot
                </div>
            </div>
            <div id="project-two" className="project">
            <animated.img src={require('../../assets/icons/maps-and-location.png')} className="" style={{ transform: props.xy.interpolate(trans1) }} />
                <div className="project-title title">
                    Mom 'N Pop
                </div>
                <div className="project-desc">
                    Discover the local gems of Seattle restaurants
                </div>
            </div>
            <div id="project-three" className="project">
            <animated.img src={require('../../assets/icons/mountain.png')} className="" style={{ transform: props.xy.interpolate(trans1) }} />
                <div className="project-title title">
                    Find My Hike
                </div>
                <div className="project-desc">
                    Find a hike with all the necessary details for your trip
                </div>
            </div>
            <div id="project-four" className="project">
            <animated.img src={require('../../assets/icons/ice-cream.png')} className="" style={{ transform: props.xy.interpolate(trans1) }} />
                <div className="project-title title">
                    Get The Scoop
                </div>
                <div className="project-desc">
                    Read daily HackerNews articles and add your own notes
                </div>
            </div>
            <div id="project-five" className="project">
            <animated.img src={require('../../assets/icons/photography.png')} className="" style={{ transform: props.xy.interpolate(trans1) }} />
                <div className="project-title title">
                    Memory Twist
                </div>
                <div className="project-desc">
                    Play my version of the popular memory game
                </div>
            </div>
            <div id="project-six" className="project">
            <animated.img src={require('../../assets/icons/tree.png')} className="" style={{ transform: props.xy.interpolate(trans1) }} />
                <div className="project-title title">
                    Hey Bud
                </div>
                <div className="project-desc">
                    Take a survey to find your most compatible bud
                </div>
            </div>
        </div>
    )
}

export default ProjectGrid;
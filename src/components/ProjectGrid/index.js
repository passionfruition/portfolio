import React from 'react'
import './style.css'

function ProjectGrid() {
    return (
        <div id="portfolio" className="project-wrapper container">
            <div id="project-one" className="project">
                <img src={require('../../assets/icons/king.png')}></img>
                <div className="project-title title">
                    Meme King
                </div>
                <div className="project-desc">
                    Create, view, and share memes all in one spot
                </div>
            </div>
            <div id="project-two" className="project">
                <img src={require('../../assets/icons/maps-and-location.png')}></img>
                <div className="project-title title">
                    Mom 'N Pop
                </div>
                <div className="project-desc">
                    Discover the local gems of Seattle restaurants
                </div>
            </div>
            <div id="project-three" className="project">
                <img src={require('../../assets/icons/mountain.png')}></img>
                <div className="project-title title">
                    Find My Hike
                </div>
                <div className="project-desc">
                    Find a hike with all the necessary details for your trip
                </div>
            </div>
            <div id="project-four" className="project">
                <img src={require('../../assets/icons/ice-cream.png')}></img>
                <div className="project-title title">
                    Get The Scoop
                </div>
                <div className="project-desc">
                    Read daily HackerNews articles and add your own notes
                </div>
            </div>
            <div id="project-five" className="project">
                <img src={require('../../assets/icons/photography.png')}></img>
                <div className="project-title title">
                    Memory Twist
                </div>
                <div className="project-desc">
                    Play my version of the popular memory game
                </div>
            </div>
            <div id="project-six" className="project">
                <img src={require('../../assets/icons/tree.png')}></img>
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
import React from 'react'
import './style.css'

function ProjectGrid() {
    return (
        <div className="project-wrapper is-centered">
            <div id="project-one" className="project">
                <img src={require('../../assets/icons/king.png')}></img>
                <div className="project-title">
                    MEME KING
                </div>
                <div className="project-desc">
                    A crowd-sourced interactive map app to find local restaurants.
                </div>
            </div>
            <div id="project-two" className="project">
                <img src={require('../../assets/icons/maps-and-location.png')}></img>
                <div className="project-title">
                    MOM N POP
                </div>
                <div className="project-desc">
                </div>
            </div>
            <div id="project-three" className="project">
                <img src={require('../../assets/icons/mountain.png')}></img>
                <div className="project-title">
                    FIND MY HIKE
                </div>
                <div className="project-desc">
                </div>
            </div>
            <div id="project-four" className="project">
                <img src={require('../../assets/icons/ice-cream.png')}></img>
                <div className="project-title">
                    GET THE SCOOP
                </div>
                <div className="project-desc">
                </div>
            </div>
            <div id="project-five" className="project">
                <img src={require('../../assets/icons/photography.png')}></img>
                <div className="project-title">
                    MEMORY
                </div>
                <div className="project-desc">
                </div>
            </div>
            <div id="project-six" className="project">
                <img src={require('../../assets/icons/tree.png')}></img>
                <div className="project-title">
                    HEY BUD
                </div>
                <div className="project-desc">
                </div>
            </div>
        </div>
    )
}

export default ProjectGrid;
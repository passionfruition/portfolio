import React from 'react'
import './style.css'

function ProjectGrid() {
    return (
        <div className="project-wrapper is-centered">
            <div id="project-one" className="project">
                <img src={require('../../assets/icons/king.png')}></img>
            </div>
            <div id="project-two" className="project">
                <img src={require('../../assets/icons/maps-and-location.png')}></img>
            </div>
            <div id="project-three" className="project">
                <img src={require('../../assets/icons/mountain.png')}></img>

            </div>
            <div id="project-four" className="project">
                <img src={require('../../assets/icons/ice-cream.png')}></img>
            </div>
            <div id="project-five" className="project">
                <img src={require('../../assets/icons/photography.png')}></img>
            </div>
            <div id="project-six" className="project">
                <img src={require('../../assets/icons/tree.png')}></img>
            </div>
        </div>
    )
}

export default ProjectGrid;
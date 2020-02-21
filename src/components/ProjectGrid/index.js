import React from 'react'
import './style.css'
import { useSpring, animated as a } from 'react-spring'
import projects from '../../data'
import meme from '../../assets/icons/king.png'
import food from '../../assets/icons/maps-and-location.png'
import hike from '../../assets/icons/mountain.png'
import icecream from '../../assets/icons/ice-cream.png'
import memory from '../../assets/icons/photography.png'
import bud from '../../assets/icons/tree.png'

const calc = (x, y) => [x-window.innerWidth/2, y - window.innerHeight/2]
const trans1 = (x, y) => `translate3d(${x / 75}px,${y / 75}px,0)`

const icons = [meme, food, hike, icecream, memory, bud]

function ProjectGrid() {
    const [props, set] = useSpring(() => ({ xy: [0,0], config: {mass: 10, tension: 550, friction: 140}}))

    return (
        <div id="portfolio" className="project-wrapper container" onMouseMove={({ clientX: x, clientY: y}) => set({ xy: calc(x,y)})}>
            {projects.map(project => (
                <div id={"project" + project.id} className="project">
                <a.img src={icons[project.id-1]} id={"icon" + project.id} className="project-icon" style={{ transform: props.xy.interpolate(trans1) }}/>
                {/* <img src={require('../../assets/icons/king.png')}></img> */}
                <div className="project-title title">
                    {project.name}
                </div>
                <div className="project-desc">
                    {project.short}
                </div>
                </div>    
            ))}
        </div>
    )
}

export default ProjectGrid;
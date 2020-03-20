import React from 'react'
import './style.css'
import { useSpring, animated as a } from 'react-spring'
import projects from '../../data'
import meme from '../../assets/icons/king.png'
import food from '../../assets/icons/maps-and-location.png'
import hike from '../../assets/icons/mountain.png'
import icecream from '../../assets/icons/ice-cream.png'
import memory from '../../assets/icons/photography.png'
import virus from '../../assets/icons/virus.png'
// import bud from '../../assets/icons/tree.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 75}px,${y / 75}px,0)`

const icons = [virus, memory, food, hike, icecream, meme]
// const icons = [food, hike, icecream, memory, bud, meme]

function ProjectGrid(props) {
    const [prop, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <div className="container project-section">
            <div className="columns is-centered project-words">
                <div className="column is-10">
                    <div className="title">
                        Here are some recent projects I've worked on.
            </div>
                    <div className="subtitle">
                        Click on each for more details or ask me about my others.
            </div>
                </div>
            </div>
            <div className="columns is-centered">
                <div id="portfolio" className="project-wrapper" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    {projects.map(project => (
                        <div id={"project" + project.id} key={project.id} className="project" data-id={project.id - 1} onClick={(event) => props.displayProjectDetails(event)}>
                            <a.img src={icons[project.id - 1]} data-id={project.id - 1} className="project-icon" style={{ transform: prop.xy.interpolate(trans1) }} />
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
            </div>


        </div>
    )
}

export default ProjectGrid;
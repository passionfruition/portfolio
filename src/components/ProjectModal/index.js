import React from "react";
import './style.css';
import memeGif from '../../assets/project-files/MemeHouse.gif'
import foodGif from '../../assets/project-files/MomandPop.gif'
import hikeGif from '../../assets/project-files/FindMyHike.gif'
import icecreamGif from '../../assets/project-files/GetTheScoop.gif'
// import memoryGif from '../../assets/project-files/MemoryGame.gif'
// import budGif from '../../assets/project-files/HeyBud.gif'
import covid from '../../assets/project-files/COVIDMap.gif'
import blog from '../../assets/project-files/PhotoBlog.gif'
// import development from '../../assets/project-files/development.png'

const gifs = [foodGif, hikeGif, icecreamGif, memeGif]
// const gifs = [covid, blog, foodGif, hikeGif, icecreamGif, memeGif]
// const gifs = [foodGif, hikeGif, icecreamGif, memoryGif, budGif, memeGif]

function ProjectModal(props) {
    return (
        <div id="test" className="modal">
            <div className="modal-background" onClick={() => props.toggleModal()}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.name}</p>
                    <button className="delete" onClick={() => props.toggleModal()} aria-label="close"></button>
                </header>
                <section className="modal-card-body">
                    {props.description}
                    <div className="project-tools">
                        {props.tools.map(tool=> (
                            <span class="tag is-medium is-rounded">{"#" + tool}</span>                    
                        ))}
                    </div>  
                    <div className="project-gif">
                        <img src={gifs[props.id - 1]}></img>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    {/* <a className="button is-dark" target="_blank" href={props.github}>
                        <span className="icon is-big">
                            <i className="fab fa-github-square"></i>
                        </span>
                        <span>
                            Github
            </span>
                    </a> */}
                    {/* {props.website !== "" ? <a className="button is-dark" target="_blank" href={props.website}> */}
                    {/* {props.website !== "" ? <a className="button is-dark" disabled>
                        <span className="icon is-big">
                            <i className="fas fa-external-link-square-alt"></i>
                        </span>
                        <span>
                            Demo
                        </span>
                    </a> : <span></span>} */}
                    {/* <button className="button is-success">Save changes</button>
                    <button className="button" onClick={() => props.toggleModal()} aria-label="close">Cancel</button> */}
                </footer>
            </div>
        </div>
    )
}

export default ProjectModal;
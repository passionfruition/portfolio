import React from "react";
import './style.css';

function ProjectModal(props) {
    return(
        <div id="test" className="modal">
  <div className="modal-background" onClick={() => props.toggleModal()}></div>
  <div className="modal-card">
    <header className="modal-card-head">
    <p className="modal-card-title">{props.name}</p>
      <button className="delete" onClick={() => props.toggleModal()} aria-label="close"></button>
    </header>
    <section className="modal-card-body">
    {props.short}
    </section>
    <footer className="modal-card-foot">
        <a className="button is-dark" target="_blank">
            <span className="icon is-big">
        <i className="fab fa-github-square"></i>
            </span>
            <span>
                Github
            </span>
        </a>
        <a className="button is-dark" target="_blank">
            <span className="icon is-big">
        <i className="fas fa-external-link-square-alt"></i>
            </span>
            <span>
                Demo
            </span>
        </a>
      <button className="button is-success">Save changes</button>
      <button className="button" onClick={() => props.toggleModal()} aria-label="close">Cancel</button>
    </footer>
  </div>
</div>
    )
}

export default ProjectModal;
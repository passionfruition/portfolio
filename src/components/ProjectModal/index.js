import React from "react";
import './style.css';

function ProjectModal(props) {
    return(
        <div id="test" className="modal">
  <div className="modal-background" onClick={() => props.toggleModal()}></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Modal title</p>
      <button className="delete" onClick={() => props.toggleModal()} aria-label="close"></button>
    </header>
    <section className="modal-card-body">
      hi
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success">Save changes</button>
      <button className="button" onClick={() => props.toggleModal()} aria-label="close">Cancel</button>
    </footer>
  </div>
</div>
    )
}

export default ProjectModal;
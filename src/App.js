import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import ProjectGrid from './components/ProjectGrid/index';
import Footer from './components/Footer/index';
import About from './components/About/index';
import Hero from './components/Hero/index';
import ProjectModal from './components/ProjectModal/index';
import projects from '../src/data'

class App extends React.Component {
  state = {
    name: "",
    short: ""
  }

  componentDidMount() {
    // Bulma mobile toggle
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }
  toggleModal = () => {
    const element = document.getElementById("test");
    if (element !== null && element !== 'undefined') {
      element.classList.toggle("is-active");
    } else {
      element.setAttribute('disabled', true);
    }
}

displayProjectDetails = (event) => {
  event.preventDefault();
  let clickedProject = projects[parseInt(event.target.dataset.id)]
  this.setState({ name: clickedProject.name, short: clickedProject.short}, function() {
 console.log(this.state.name)
    this.toggleModal("test")
  })
  // this.setState({ clickedProject : projects[parseInt(event.target.dataset.id)], name: 'hi'})
  // this.toggleModal("test")
  // console.log(this.state.clickedProject)
  // console.log(projects[parseInt(event.target.dataset.id)])
 
}

render() {
  return (
    <div className="App">
      <ProjectModal toggleModal={this.toggleModal} name={this.state.name} short={this.state.short}/>
      <button id="test-button" className="button" onClick={() => this.toggleModal()}>click me</button>
      <Navbar/>
      <Hero/>
      <hr></hr>
      <About/>
      <hr></hr>
      <ProjectGrid displayProjectDetails={this.displayProjectDetails}/>
      <Footer />
    </div>
  );
}
  
}

export default App;

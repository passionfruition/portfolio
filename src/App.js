import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import ProjectGrid from './components/ProjectGrid/index';
import Footer from './components/Footer/index';
import About from './components/About/index';
import Hero from './components/Hero/index';
import ProjectModal from './components/ProjectModal/index';

class App extends React.Component {

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

render() {
  return (
    <div className="App">
      <ProjectModal toggleModal={this.toggleModal}/>
      <button id="test-button" className="button" onClick={() => this.toggleModal()}>click me</button>
      <Navbar/>
      <Hero/>
      <hr></hr>
      <About/>
      <hr></hr>
      <ProjectGrid/>
      <Footer />
    </div>
  );
}
  
}

export default App;

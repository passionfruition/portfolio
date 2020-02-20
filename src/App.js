import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import ProjectGrid from './components/ProjectGrid/index';
import Footer from './components/Footer/index';
import About from './components/About/index';
import Hero from './components/Hero/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <ProjectGrid/>
      <hr></hr>
      <About/>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;

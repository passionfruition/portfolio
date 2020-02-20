import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import ProjectGrid from './components/ProjectGrid/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id="profile">
        {/* <img src={require('./assets/me.png')}></img> */}
      </div>
      <ProjectGrid/>
      <Footer />
    </div>
  );
}

export default App;

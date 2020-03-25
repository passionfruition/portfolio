import React from 'react';
import './style.css'
import arcgis from '../../assets/skill-icons/arcgis.png'
// import bootstrap from '../../assets/skill-icons/bootstrap.png'
// import bulma from '../../assets/skill-icons/bulma.png'
import gitbash from '../../assets/skill-icons/gitbash.png'
import htmlcssjs from '../../assets/skill-icons/htmlcssjs.png'
import jquery from '../../assets/skill-icons/jquery.png'
import mongodb from '../../assets/skill-icons/mongodb.png'
import nodjs from '../../assets/skill-icons/nodjs.png'
import react from '../../assets/skill-icons/react.png'
import sql from '../../assets/skill-icons/sql.png'
// import vuejs from '../../assets/skill-icons/vuejs.png'
import gitgui from '../../assets/skill-icons/gitgui.png'
import python from '../../assets/skill-icons/python.png'

const skills = [htmlcssjs, jquery, sql, mongodb, nodjs, react, gitbash, gitgui, python, arcgis]


function About() {
    return (
        <div id="about-section" className="container">
            <div className="columns is-centered">
                <div className="column is-10">
                <div className="title">
                        Hi there. I'm Madeleine.
                    </div>
                    <div className="subtitle">
                        Let me tell you a little bit about myself...
                    </div>
                </div>
            </div>
            <div className="columns is-centered">
                <div id="about-words" className="column is-6">
                    <div className="mine messages">
                        <div className="message">
                            I am a developer who gets excited about building impactful apps
                            with complex code to solve real-world problems. I specialize in HTML, CSS, JavaScript, React, MERN (MongoDB, Express, React, Node), and geospatial technologies.
                            When it comes to work, I want to be involved in projects that I find challenging
                            alongside people that inspire me.
                        </div>
                        <br></br>
                        <div className="message">
                            I received a Bachelors in Geographic Information Systems and minor in Informatics
                            from the University of Washington, Seattle, and most recently a certificate in Full Stack Web
                            Development from the UW Full Stack Web Development Bootcamp. My
                            background is in customer-based work ranging from restaurant service to
                            a GIS Data Analyst at a transportation planning consultant company.
                        </div>
                        <br></br>
                        <div className="message last">
                            When I’m not working I enjoy exploring beautiful PNW hikes, visiting Canada,
                            and finding new songs to add to my coding playlist.
                        </div>
                    </div>

                    <br></br>
                    
                </div>

                <div id="about-etc" className="column is-4">
                    <img id="about-photo" alt="profile" src={require('../../assets/me.png')}></img>
                </div>
                
            </div>
            <div className="columns is-centered">
            <div class="skills">
                        {skills.map(skill => (
                            <img class="skill-icon" src={skill}></img>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default About;
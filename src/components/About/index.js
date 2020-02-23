import React from 'react';
import './style.css'
import arcgis from '../../assets/skill-icons/arcgis.png'
import bootstrap from '../../assets/skill-icons/bootstrap.png'
import bulma from '../../assets/skill-icons/bulma.png'
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

const skills = [htmlcssjs, jquery, sql, mongodb, nodjs, react, gitbash, gitgui, python, arcgis, bootstrap, bulma]


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

                <div id="about-words" className="column is-7">
                    
                    <p>
                        I am a Full Stack Developer who gets excited about building impactful apps
                        with complex code to solve real-world problems. I am skilled in HTML/CSS,
                        JavaScript, modern JavaScript libraries and frameworks, UX/UI Design, RESTful API and specialize in the MERN Stack.
                        When it comes to work, I want to be involved in projects that I find challenging
                        alongside people that inspire me.
                    </p>
                    <br></br>
                    <p>
                        I received a Bachelors in Geographic Information Systems and minor in Informatics
                        from the University of Washington, Seattle, and most recently a certificate in Full Stack Web
                        Development from the UW Full Stack Web Development Bootcamp. My
                        background is in customer based experience ranging from restaurant service to
                        working at a transportation planning consultant company.
                    </p>
                    <br></br>
                    <p>
                        When I’m not working I enjoy exploring beautiful PNW hikes, visiting Canada,
                        and finding new songs to add to my coding playlist.
                    </p>
                    <br></br>
                    <div class="skills is-centered">
                        {skills.map(skill => (
                            <img class="skill-icon" src={skill}></img>
                        ))}
                    </div>
                </div>

                <div id="about-etc" className="column is-3">
                    <img id="about-photo" alt="profile" src={require('../../assets/me.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default About;
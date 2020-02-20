import React from 'react';
import './style.css'

function About() {
    return (
        <div className="about-section container">
            <div className="title">
                Hi there. I'm Madeleine.
            </div>
            <div className="columns">
                <div id="about-words" className="column">
                    <p>
                        I am a GIS Full Stack Developer who gets excited about building impactful apps 
                        with complex code to solve real-world problems. I am skilled in HTML/CSS, 
                        JavaScript, modern JS libraries, UX/UI Design, MERN Stack and RESTful API. 
                        When it comes to work, I want to be involved in projects that I find challenging 
                        alongside people that inspire me.
                    </p>
                    <br></br>
                    <p>
                        I received a Bachelors in Geographic Information Systems and minor in Informatics 
                        from the University of Washington, Seattle, and most recently a Full Stack Web 
                        Development Certificate from the UW Full Stack Web Development Bootcamp. My 
                        background is in customer based experience ranging from restaurant service to 
                        working as a GIS Technician at a transportation planning consultant company.
                    </p>
                    <br></br>
                    <p>
                        When I’m not working I enjoy exploring beautiful PNW hikes, visiting Canada, 
                        and finding new songs to add to my coding playlist.
                    </p>
                </div>

                <div id="about-etc" className="column">
                    <img src={require('../../assets/me.png')}></img>
                    <br></br>
                    <p className="buttons is-centered">
                        <a href="https://www.linkedin.com/in/madeleine-prak/" target="_blank"
                            className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-linkedin-in social-icon"></i>
                            </span>
                        </a>
                        <a href="https://github.com/madeleineprak" target="_blank" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-github-alt social-icon"></i>
                            </span>
                        </a>
                        <a href="https://twitter.com/devmadeleine" target="_blank" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-twitter social-icon"></i>
                            </span>
                        </a>

                    </p>
                    <a id="email-link" href="mailto:madeleineprak@gmail.com" target="_blank">madeleineprak@gmail.com</a>
                    <br></br>
                    <a href="tel:425-737-8950" target="_blank">425-737-8950</a>
                </div>
            </div>
        </div>
    )
}

export default About;
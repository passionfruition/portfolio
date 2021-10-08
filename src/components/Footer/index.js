import React from "react";
import './style.css'

function Footer() {
    return (
        <div id="contact" className="footer">
            <p className="buttons is-centered">
                        <a href="https://www.linkedin.com/in/madeleine-prak/" target="_blank" rel="noopener noreferrer"
                            className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-linkedin-in"></i>
                            </span>
                        </a>
                        <a href="https://github.com/passionfruition" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-github-alt"></i>
                            </span>
                        </a>
                        <a href="https://twitter.com/devmadeleine" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fab fa-twitter"></i>
                            </span>
                        </a>
                        <a href="mailto:madeleineprak@gmail.com" target="_blank" rel="noopener noreferrer" className="button is-black is-outlined">
                            <span className="icon is-small">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </a>
                    </p>
            {/* <div className="has-text-centered">
                <p>
                All project icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </p>
            </div> */}
        </div>
    )
}

export default Footer;
import React from "react";
import './style.css'

function Footer() {
    return (
        <div className="">
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
            <div className="has-text-centered">
                <p>
                Project icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;
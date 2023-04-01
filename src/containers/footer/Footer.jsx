import { Link } from 'react-router-dom';
import logo from '../../assets//icons/lukexroi-high-resolution-logo-color-on-transparent-background.png';
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faMedium, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div className="site__footer section__padding">
            <div className="site__footer_container-row">
                <div className="site__footer_container-logo">
                    <img src={logo} alt="logo" />
                    <h3>MADE BY LUKE POH</h3 >
                </div>
                <div className="site__footer_container-row-column">
                    <h3>FIND OUT MORE</h3>

                    <hr class="col1_linebelow"></hr>

                    <h4 class="site__footer-link">
                        <Link to="/">HOME</Link>
                    </h4>

                    <h4 class="site__footer-link">
                        <Link to="/education">EDUCATION</Link>
                    </h4>

                    <h4 class="site__footer-link">
                        <Link to="/projects">PROJECTS</Link>
                    </h4>

                    <h4 class="site__footer-link">
                        <Link to="/resume">RESUME</Link>
                    </h4>
                    <h4 class="site__footer-link">
                        <Link to="/more">MORE</Link>
                    </h4>
                </div>
                <div className="site__footer_container-row-column">

                    <h3>REACH OUT</h3>

                    <hr class="col2_linebelow"></hr>

                    <h4 class="site__footer-link">
                        <FontAwesomeIcon icon={faEnvelope} /> lukexroi@gmail.com
                    </h4>

                    <h4 class="site__footer-sm-link">
                        <a href="https://www.linkedin.com/in/lukepoh/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                    </h4>

                    <h4 class="site__footer-sm-link">
                        <a href="https://medium.com/@lukexroi"><FontAwesomeIcon icon={faMedium} /> Medium</a>
                    </h4>

                    <h4 class="site__footer-sm-link">
                        <a href="https://github.com/lukexroi"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                    </h4>

                    <h4 class="site__footer-sm-link">
                        <a href="https://www.instagram.com/lukeroi/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                    </h4>

                </div>
            </div>
            <hr />
            <div className="site__footer_container_copyright">
                <p className="site__footer_copyright_text">
                    &copy;{new Date().getFullYear()} lukexroi.github.io | All rights reserved | Terms of Service | Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Footer
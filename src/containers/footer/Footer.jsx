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
                    <h4>MADE BY LUKE POH</h4>
                </div>
                <div className="site__footer_container-row-column">
                    <h3>FIND OUT MORE</h3>
                    <h4><Link to="/">HOME</Link></h4>
                    <h4><Link to="/education">EDUCATION</Link></h4>
                    <h4><Link to="/projects">PROJECTS</Link></h4>
                    <h4><Link to="/resume">RESUME</Link></h4>
                    <h4><Link to="/more">MORE</Link></h4>
                </div>
                <div className="site__footer_container-row-column">
                    <h3>REACH OUT</h3>
                    <h4>
                        <FontAwesomeIcon icon={faEnvelope} /> lukexroi@gmail.com
                    </h4>
                    <h4>
                        <a href="https://www.linkedin.com/in/lukepoh/"><FontAwesomeIcon icon={faLinkedin} /></a> LinkedIn
                    </h4>
                    <h4>
                        <a href="https://medium.com/@lukexroi"><FontAwesomeIcon icon={faMedium} /></a> Medium
                    </h4>
                    <h4>
                        <a href="https://github.com/lukexroi"><FontAwesomeIcon icon={faGithub} /></a> GitHub
                    </h4>
                    <h4>
                        <a href="https://www.instagram.com/lukeroi/"><FontAwesomeIcon icon={faInstagram} /></a> Instagram
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
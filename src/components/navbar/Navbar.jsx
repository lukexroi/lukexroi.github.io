import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets//icons/lukexroi-high-resolution-logo-color-on-transparent-background.png';
import './navbar.css';

// BEM -> Block Element Modifier


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setToggleMenu(false)
    }, [location])
    const currentRoute = location.pathname
    const Menu = () => (
        <>
            <Link
                className={currentRoute.length === 1 ? "tab_active" : ""}
                to="/">HOME
            </Link>

            <Link
                className={currentRoute.includes("education") ? "tab_active" : ""}
                to="/education">EDUCATION
            </Link>

            <Link
                className={currentRoute.includes("projects") ? "tab_active" : ""}
                to="/projects">PROJECTS
            </Link>
            <Link
                className={currentRoute.includes("resume") ? "tab_active" : ""}
                to="/resume">RESUME
            </Link>
            <Link
                className={currentRoute.includes("more") ? "tab_active" : ""}
                to="/more">MORE
            </Link>
        </>
    )

    return (
        <div className="site__navbar">
            <div className="site__navbar-links">
                <div className="site__navbar-links_logo">
                    <a href="https://lukeroy17.github.io/" />
                    <img src={logo} alt="logo" />
                </div>
                <div className="site__navbar-links_container">
                    <Menu />
                </div>
                <div className="site__navbar-menu">
                    {toggleMenu
                        ? <RiCloseLine color="#E71370" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#E71370" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="site__navbar-menu_container scale-up-center">
                            <div className="site__navbar-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
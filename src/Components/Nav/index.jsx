import React, { useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import BookIcon from '@mui/icons-material/Book';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <div>
            <header>
                <h3>BigjoConcierge</h3>
                <nav ref={navRef}>
                    <NavLink to="/" exact onClick={showNavbar} className="linkUnderline active" id='links'><HomeIcon className='navIcon' /></NavLink>
                    <NavLink to="/why" onClick={showNavbar} className="linkUnderline active" id='links'><VolunteerActivismIcon className='navIcon' />Why</NavLink>
                    <NavLink to="/about" onClick={showNavbar} className="linkUnderline active" id='links'><EventRepeatIcon className='navIcon' />About Us</NavLink>
                    <NavLink to="/contact" onClick={showNavbar} className="linkUnderline active" id='links'><BookIcon className='navIcon' />Contact Us</NavLink>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                    <a href="/links" className='bookSection bigScreen'>Book free section</a>
                </nav>
                    <a href="/links" className='bookSection smallScreen'>Book free section</a>
                <button className="nav-btn" onClick={showNavbar}>
                    <MenuIcon />
                </button>
            </header>
        </div>
    );
}

export default Navbar;
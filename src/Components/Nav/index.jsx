import React, { useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import BookIcon from '@mui/icons-material/Book';
import {Link} from 'react-scroll';

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <div>
            <header>
                <h3>Wecruitme</h3>
                <nav ref={navRef}>
                    <Link to="/" exact onClick={showNavbar} className="linkUnderline active" id='links'><HomeIcon className='navIcon' /></Link>
                    <Link to="whyUs" onClick={showNavbar} className="linkUnderline active" id='links'><VolunteerActivismIcon className='navIcon' />Why</Link>
                    <Link to="AboutUs" onClick={showNavbar} className="linkUnderline active" id='links'><EventRepeatIcon className='navIcon' />About Us</Link>
                    <Link to="ContactUs" onClick={showNavbar} className="linkUnderline active" id='links'><BookIcon className='navIcon' />Contact Us</Link>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                    <a href="https://calendly.com/bigjoconcierge" className='bookSection bigScreen'>Find a Talent</a>
                </nav>
                    <a href="https://calendly.com/bigjoconcierge" className='bookSection smallScreen'>Find a Talent</a>
                <button className="nav-btn" onClick={showNavbar}>
                    <MenuIcon />
                </button>
            </header>
        </div>
    );
}

export default Navbar;
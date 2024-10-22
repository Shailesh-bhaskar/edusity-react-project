import React, { useEffect, useState } from "react"
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu-icon.png'


const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        return menu ? setMenu(false) : setMenu(true);
    }

    return (
        <nav className={` ${sticky ? 'dark-nav' : ''}`}>
            <img className="logo" src={logo} alt="logo" />
            <ul className={menu ? "":"hideMenu"}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="programs" smooth={true} offset={-280} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-200} duration={500}>About us</Link></li>
                <li><Link to="campus" smooth={true} offset={-265} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-320} duration={500}>Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-270} duration={500}><button className="lightBtn">Contact us</button></Link></li>
            </ul>
            <img className="menuIcon" src={menuIcon} alt="menuIcon" onClick={toggleMenu}/>
        </nav>
    );
}

export default Navbar
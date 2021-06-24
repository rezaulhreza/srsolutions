import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as ReactLink } from "react-router-dom"
import '../Styles/Navbar.css'

class Navbar extends Component {
    navbar = () => {
        var x = document.getElementById('mynav');
        if (x.className === 'navbar'){
            x.className += ' responsive';
        }else{
            x.className = 'navbar';
        }
    }
    render() {
        var y = this.props.contactIsActive;
        const a = <><li><Link to='home' isDynamic={true} spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>Home</Link></li><li><Link to='about' isDynamic={true} spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>About</Link></li><li><Link to='clients' isDynamic={true} spy={true} hashSpy={true} smooth={true} offset={-70} duration={600}>Clients</Link></li></>
        const b = <><li><ReactLink to='/#home'>Home</ReactLink></li><li><ReactLink to='/#about'>About</ReactLink></li><li><ReactLink to='/#clients'>Clients</ReactLink></li></>
        return (
            <div className="navbar" id='mynav'>
                <div className="navbar-logo">   
                    <a href='/'><img alt="Hr Parlour Logo" src='assets/img/logo.png' /></a>
                </div>
                <div className="navbar-toggle">
                    <a href="javascript:void(0);" className='icon' onClick={this.navbar}><img className='navbar-toggle-svg' alt="dropdown" src='assets/svg/down-arrow.svg' /></a>
                </div>
                <div className="navbar-list">
                    <ul>
                        { y ? a : b }
                        <li><ReactLink to='/contact' className={ y || 'active'}>Contact</ReactLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar
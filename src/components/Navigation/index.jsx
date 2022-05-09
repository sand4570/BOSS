import React from 'react';
import { useState } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import './style.scss';
import logo from '../../../public/boss_logo.png'
import NavLink from './NavLink';




const Navbar = () => {

    const [ active, setActive ] = useState(false)
    const [color, setColor] = useState('transparent')
    const [activeLink, setActiveLink] = useState('FORSIDE')
    const [login, setLogin] = useState(true)
    

    //Open and close the burger menu on mobile
    const handleClick = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    };

    //Change manu color on scroll
    const listenScrollEvent = e => {
        if (window.scrollY > 5) {
            setColor('white')
        } else {
            setColor('transparent')
        }  
    }

    window.addEventListener('scroll', listenScrollEvent)

        return (
            <div className='nav-wrapper' style={{backgroundColor: color, transition: '0.5s ease-in', }}>
                <nav className="Navbar" >
                    <div className='logoContainer'>
                        <img src={logo}></img>
                    </div>

                    

                    <div className='rightWrapper'>
                        <div className='menu-icon' onClick={handleClick}>
                            <span className={active ? 'close' : 'menu'}></span>
                        </div>

                        <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                            {NavLink(login).map((item, index) => {
                                return (
                                    <li key={index}><Link to={item.url} className={activeLink === item.title ? `${item.cName} activeLink` : item.cName} onClick={() => setActiveLink(item.title)}>
                                    {item.title}   
                                    </Link></li>
                                )
                            })}
                            
                        </ul>
                        
                        <div className={login ? 'profilePic' : ''}></div>
                    </div>
                </nav>
            </div>
        )
    
}


export default Navbar;
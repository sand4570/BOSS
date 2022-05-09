import React, {Component} from 'react';
import { useState } from 'react';

import './style.scss';
import logo from '../../../public/boss_logo.png'
import NavLink from './NavLink';




const Navbar = () => {

    const [ active, setActive ] = useState(false)
    const [color, setColor] = useState('transparent')
    const [activeLink, setActiveLink] = useState('FORSIDE')
    const [login, setLogin] = useState(false)
    

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
            console.log('color is white');
            setColor('white')
            console.log('color', color)
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
                                    <li key={index}><a className={activeLink === item.title ? `${item.cName} activeLink` : item.cName} onClick={() => setActiveLink(item.title)} href={item.url}>
                                    {item.title}   
                                    </a></li>
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
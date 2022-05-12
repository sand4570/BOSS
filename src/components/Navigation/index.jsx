import React, { useEffect } from 'react';
import { useState } from 'react';
import {useLocation, Link} from 'react-router-dom';

import './style.scss';
import logo from '../../../public/boss_logo.png'
import NavLink from './NavLink';




const Navbar = () => {

    const pathname = window.location.pathname

    const [ active, setActive ] = useState(false)
    const [color, setColor] = useState('transparent')
    const [activeLink, setActiveLink] = useState('/')
    const [login, setLogin] = useState(false)

    useEffect(() => {
        setActiveLink(pathname)
    })

    const { search } = useLocation()

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
                                    <li key={index}><Link to={item.url + search} className={activeLink === item.url ? `${item.cName} activeLink` : item.cName}>
                                    {item.title}   
                                    </Link></li>
                                )
                            })}
                            <hr/>
                        </ul>
                        
                        <div className={login ? 'profilePic' : ''}></div>
                    </div>
                </nav>
            </div>
        )
    
}


export default Navbar;
import React, { useEffect } from 'react';
import { useState } from 'react';
import {useLocation, Link} from 'react-router-dom';

import './style.scss';
import './menu.scss'
import logo from '../../../public/boss_logo.png'
import NavLink from './NavLink';
//import BurgerMenu from '../burgermenu/index'




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

    const handleClick = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    };

    const closeMenu = () =>{
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    useEffect(() => {
        if (search) {
            setLogin(true);
        } else (
            setLogin(false)
        )
    })

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

                    <div onClick={handleClick} id="btn" className={active ? 'active' : 'not-active'}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={active ? 'nav-menu active' : 'nav-menu not-active'}>
                        {NavLink(login).map((item, index) => {
                            const path = item.url === "/logout" ? "/" : item.url + search
                                return (
                                    <li key={index}><Link onClick={closeMenu} to={path} className={activeLink === item.url ? `${item.cName} activeLink` : item.cName}>
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
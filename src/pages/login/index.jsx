import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import SliderText from './Slider';
import LoginSection from './LoginSection'
import SignupSection from './SignupSection';
import './style.scss'


const Login = () => {
    const [toLogin, setToLogin] = useState(true)


    return (
        <>
        <div className='content-wrapper'>
            <button id='back-button' className='secondaryButton'><Link to={"/"}>TILBAGE</Link></button>
            <section className={toLogin ? 'login-section' : 'blue-section'}>
                <h2>LOG IND</h2>
                <LoginSection state={toLogin}></LoginSection>
                
            </section>
            <section className={!toLogin ? 'signup-section' : 'blue-section'}>
            <h2>OPRET BRUGER</h2>
                <SignupSection state={toLogin}></SignupSection>
            </section>
        </div>
        </>
    )
}

export default Login
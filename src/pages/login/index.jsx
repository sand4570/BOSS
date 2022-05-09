import React from 'react';
import { useState } from 'react';

import './style.scss'
import Section from '../../components/Section'

const Login = () => {
    return (
        <>
        <div className='content-wrapper'>
            <button className='back-button'>TILBAGE</button>
            <section className='login-section'>
                <h1>LOG IND</h1>
                <form>
                    <div className='input-wrapper'>
                        <label for='email' className='login-label'> EMAIL</label>
                        <input id='email' className='login-input' type='email'></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label for='password' className='login-label'>ADGANGSKODE</label>
                        <input id='password' className='login-input' type='password'></input>
                    </div>
                    
                    <div className='submit-wrapper'>
                        <button type='submit'>LOG IND</button>
                    </div>
                    
                </form>
                
                
                
            </section>
            <section className='signup-section'>
            <h1>OPRET BRUGER</h1>
                <form>
                    <div className='input-wrapper'>
                        <label for='email' className='login-label'> EMAIL</label>
                        <input id='email' className='login-input' type='email'></input>
                    </div>
                    
                    <div className='input-wrapper'>
                        <label for='password' className='login-label'>ADGANGSKODE</label>
                        <input id='password' className='login-input' type='password'></input>
                    </div>

                    <div className='submit-wrapper'>
                        <button type='submit'>LOG IND</button>
                    </div>
                    
                </form>
            </section>
        </div>
        <div className='slide-wrapper'></div>
        </>
    )
}

export default Login
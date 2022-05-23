import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LoginSection from './LoginSection'
import SignupSection from './SignupSection';
import { accountsFetch } from '../../services/accountsService'
import './style.scss'


const Login = () => {
    const [toLogin, setToLogin] = useState(true)
    const [accountData, setAccountData] = useState(null)

    useEffect(() => {
        fetch('https://boss-info.herokuapp.com/api/accounts', {
        headers: {
            'api-key': 'nSY1oe7pw05ViSEapg09D4gHG87yJCTX67uDa1OO',
        }})
        .then((response) => response.json() )
        .then((data) => setAccountData(data))
      },[])

    return (
        <>
        <button id='back-button' onClick={() => history.back()}></button>
        <div className='content-wrapper'>
            <section className={toLogin ? 'login-section' : 'blue-section'}>
                <h3>LOG IND</h3>
                <LoginSection state={toLogin} data={accountData} onButtonClick={setToLogin}></LoginSection>
                
            </section>
            <section className={!toLogin ? 'signup-section' : 'blue-section'}>
            <h3>OPRET BRUGER</h3>
                <SignupSection state={toLogin} onButtonClick={setToLogin}></SignupSection>
            </section>
        </div>
        </>
    )
}

export default Login
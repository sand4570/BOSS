import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SliderText from './Slider';
import LoginSection from './LoginSection'
import SignupSection from './SignupSection';
import { accountsFetch } from '../../services/accountsService'
import './style.scss'


const Login = () => {
    const [toLogin, setToLogin] = useState(true)
    const [accountData, setAccountData] = useState(null)

    useEffect(() => {
        fetch('https://bossinfo-f45f.restdb.io/rest/accounts', {
        headers: {
            'x-api-key': '627a9d53e8128861fcf3d1d7',
        }})
        .then((response) => response.json() )
        .then((data) => setAccountData(data))
      },[])

      console.log('account effect', accountData)

    return (
        <>
        <div className='content-wrapper'>
            <button id='back-button' className='secondaryButton' onClick={() => history.back()}>TILBAGE</button>
            <section className={toLogin ? 'login-section' : 'blue-section'}>
                <h2>LOG IND</h2>
                <LoginSection state={toLogin} data={accountData}></LoginSection>
                
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
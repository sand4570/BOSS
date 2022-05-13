import React from 'react';
import { useState, useEffect } from 'react';

import Question from '../../components/Question'
import './style.scss'

const Forum = () => {

    

    

      
    return (
        <>
        <div id='top-section'>
            <button className='primaryButton'>Nyt spørgsmål</button>
        </div>
        <div id='bottom-section'>
            <div id='side-menu'></div>
            <div id='content'>
                <Question></Question>
            </div>
        </div>
        </>
    )
}

export default Forum